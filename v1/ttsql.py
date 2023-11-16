import torch
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from typing import List, Dict, Final
import json

modelDir : Final = 'model'

class Model_V1:
	def __init__(self) -> None:
		self.tables = open(f'{modelDir}/create.sql').read().replace(';', '')
		self.device : torch.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
		self.model = AutoModelForSeq2SeqLM.from_pretrained('cssupport/t5-small-awesome-text-to-sql')
		self.model = self.model.to(self.device)
		self.tokenizer : AutoTokenizer.PreTrainedTokenizer | AutoTokenizer.PreTrainedTokenizerFast = AutoTokenizer.from_pretrained('t5-small')

	def gen_sql(self, query: str):
		prompt : str = ''
		prompt += 'tables:\n' + self.tables
		prompt += 'query for:\n' + query
		inputs = self.tokenizer(prompt, padding=True, truncation=True, return_tensors='pt').to(self.device)
		with torch.no_grad():
			outputs = self.model.generate(**inputs, max_length=512)
			return self.tokenizer.decode(outputs[0], skip_special_tokens=True)
		
	def get_tables(self):
		return json.loads(open(f'{modelDir}/tables.json').read())


class Model_V2:
	def __init__(self) -> None:
		self.tables : dict = json.loads(open(f'{modelDir}/tables.json', 'r').read())
		self.device : torch.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
		self.model = AutoModelForSeq2SeqLM.from_pretrained('juierror/flan-t5-text2sql-with-schema-v2')
		self.tokenizer = AutoTokenizer.from_pretrained('juierror/flan-t5-text2sql-with-schema-v2')

	def gen_sql(self, question: str):
		tables = [ f'''{table_name}({','.join(self.tables[table_name])})''' for table_name in self.tables ]
		tables = ', '.join(tables)
		prompt = f'''convert question and table into SQL query. tables: {tables}. question: {question}'''
		inputs = self.tokenizer(prompt, max_length=512, return_tensors='pt').input_ids
		input_data = inputs.to(self.device)
		outputs = self.model.generate(inputs=input_data, num_beams=10, top_k=10, max_length=512)
		return self.tokenizer.decode(token_ids=outputs[0], skip_special_tokens=True)