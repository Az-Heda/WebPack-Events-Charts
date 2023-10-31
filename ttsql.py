import torch
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from typing import List, Dict


class Model_V1:
    def __init__(self) -> None:
        self.tables = open("model/.create").read().replace(";", "")

        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

        self.model = AutoModelForSeq2SeqLM.from_pretrained("cssupport/t5-small-awesome-text-to-sql")
        self.model = self.model.to(self.device)

        self.tokenizer = AutoTokenizer.from_pretrained("t5-small")

    def gen_sql(self, query: str):
        prompt = ""
        prompt += "tables:\n" + self.tables
        prompt += "query for:\n" + query

        inputs = self.tokenizer(
            prompt,
            padding=True,
            truncation=True,
            return_tensors="pt",
        ).to(self.device)

        with torch.no_grad():
            outputs = self.model.generate(
                **inputs,
                max_length=512,
            )
            return self.tokenizer.decode(
                outputs[0],
                skip_special_tokens=True,
            )


class Model_V2:
    def __init__(self) -> None:
        self.tables = {
            "registry": [
                "id",
                "vat_number",
                "tax_id_code",
                "name",
                "surname",
            ],
            "callcenter": [
                "id",
                "year",
                "month",
                "day",
                "status",
                "duration",
                "call_group",
                "cause",
            ],
            "wages": [
                "id",
                "year",
                "month",
                "day",
                "payslip_current_year",
                "payslip_current_year",
            ],
        }

        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

        self.model = AutoModelForSeq2SeqLM.from_pretrained("juierror/flan-t5-text2sql-with-schema-v2")
        self.tokenizer = AutoTokenizer.from_pretrained("juierror/flan-t5-text2sql-with-schema-v2")

    def gen_sql(self, question: str):
        tables = [
            f"""{table_name}({",".join(self.tables[table_name])})"""
            for table_name in self.tables
        ]
        tables = ", ".join(tables)

        prompt = f"""convert question and table into SQL query. tables: {tables}. question: {question}"""

        inputs = self.tokenizer(prompt, max_length=512, return_tensors="pt").input_ids

        input_data = inputs.to(self.device)
        outputs = self.model.generate(inputs=input_data, num_beams=10, top_k=10, max_length=512)
        return self.tokenizer.decode(token_ids=outputs[0], skip_special_tokens=True)