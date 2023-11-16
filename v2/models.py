import torch
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from typing import List, Dict, Final
import functions
import json

modelDir : Final = 'models/first'
allowedTables : Final = [
	'dw.DIM_CRM_AnagraficaClienti',
	'dw.DIM_HD_Chiamate',
	# 'dw.DIM_EDI_ArticoliMaster',
	# 'dw.FAT_EDI_EditoriaPluriennale',
	# 'dw.FAT_EDI_Movimenti'
]




class ModelV1:
	def __init__(self) -> None:
		self.device : torch.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
		self.model = AutoModelForSeq2SeqLM.from_pretrained('cssupport/t5-small-awesome-text-to-sql')
		self.model = self.model.to(self.device)
		self.tokenizer : AutoTokenizer.PreTrainedTokenizer | AutoTokenizer.PreTrainedTokenizerFast = AutoTokenizer.from_pretrained('t5-small')
		self.tables : str | None = None
		# self.tables = open(f'{modelDir}/create.sql').read()

	def generateSQL(self, query : str) -> str:
		if self.tables == None:
			raise ValueError('Cannot find the values for tables')
		prompt : str = ''
		prompt += 'tables:\n'+self.tables.replace(';', '')
		prompt += 'query for:\n' + query
		inputs = self.tokenizer(prompt, padding=True, truncation=True, return_tensors='pt').to(self.device)
		with torch.no_grad():
			outputs = self.model.generate(**inputs, max_length=512)
			return self.tokenizer.decode(outputs[0], skip_special_tokens=True)
		
	def setTables(self, server: str, db: str) -> None:
		schema : dict[str, list[dict[str, str]]] = functions.getSchema(server=server, db=db, allowed=allowedTables)
		sql : str = functions.dict2sql(schema)
		self.tables = sql
		with open('output-table-schema.sql', 'w') as file:
			file.write(sql)
		return sql

	def getTables(self) -> dict[str, dict[str, str]]:
		return functions.sql2dict(self.tables) if self.tables != None else {}

	