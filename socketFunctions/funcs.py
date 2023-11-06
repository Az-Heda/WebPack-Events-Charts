from json import dumps as stringify, loads as parse
import sqlite3
import pandas as pd
from ttsql import Model_V1 as Model, modelDir
from time import time

model = Model()
conn = sqlite3.connect(f'{modelDir}/database.sqlite3')


def askSocket(**k):
	print(k)
	start = time()
	try:
		assert 'question' in k
		sql_query = model.gen_sql(k.get('question'))
		data = pd.read_sql(sql_query, conn).map((lambda x: x if not pd.isna(x) else 'Valore mancante' ))
		response = { 'data': data.to_dict(orient='records'), 'metadata': [ type(j).__name__ for j in data.iloc[0] ], 'query': sql_query, 'question': k.get('question') }
	except Exception as e:
		response = { 'error': str(e) }
	end = time()
	response = { 'perf': f'{(end - start) * 1000:.3f} ms', **response }

	maxItemPerChunk = 500
	return stringify(response)

# try:
# 		assert 'question' in req.json
# 		sql_query : str = model.gen_sql(req.json.get('question'))
# 		data : pd.DataFrame = pd.read_sql(sql_query, conn).map(lambda x: x if not pd.isna(x) else 'Valore mancante')
# 		response = {
# 			'data': data.to_dict(orient='records'),
# 			'metadata': [type(j).__name__ for j in data.iloc[0]],
# 			'query': sql_query,
# 		}
# 	except Exception as e:
# 		response = {'error': str(e)}
# 	end = time()
# 	return json({'perf': f'{(end-start)*1000:.3f} ms', **response})