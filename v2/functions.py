from typing import Callable
import sqlalchemy
import pandas as pd
import re

# +---------------------------------------------------------------------------------------------------------------+ #

def dbConnection(server : str, db : str, query : str) -> pd.DataFrame:
	driver : str = 'ODBC+DRIVER+17+for+SQL+Server'
	engine_stmt : str = "mssql+pyodbc://@%s/%s?driver=%s&trusted_connection=yes" % (server, db , driver )
	engine : sqlalchemy.Engine = sqlalchemy.create_engine(engine_stmt)
	return pd.read_sql(query, con=engine)

# +---------------------------------------------------------------------------------------------------------------+ #

def getSchema(server : str, db : str, allowed: list[str] = []) -> dict[str, list[str]]:
	query : str = 'SELECT * FROM INFORMATION_SCHEMA.COLUMNS ORDER BY TABLE_NAME, ORDINAL_POSITION'
	df : pd.DataFrame = dbConnection(query=query, server=server, db=db)
	tables : dict[str, list[str]] = {}
	names : list[str] = [*set([ x for x in df['TABLE_NAME'] ])]
	for name in names: 
		if len(allowed) > 0 and name not in allowed:
			continue
		tables[name] = [ { r['COLUMN_NAME'] : r['DATA_TYPE'] } for r in df[['COLUMN_NAME', 'DATA_TYPE']][df['TABLE_NAME'] == name].to_dict(orient='records')]
	return tables

# +---------------------------------------------------------------------------------------------------------------+ #

def sql2dict(sql) -> dict[str, dict[str, str]]:
	rows : list[list[str]] = [ x.split('\n') for x in sql.split(';') ]
	data : dict[str, dict[str, str]] = {}
	lastAdded : str = ''
	for row in rows:
		lastAdded = ''
		try:
			for p in range(len(row)):
				if lastAdded == '' and len(row[p].strip()) > 1:
					lastAdded = row[p].strip().split(' ')[2]
					data[lastAdded] = {}
				else:
					rowData = row[p].strip().split(' ')
					if len(rowData) > 1:
						columnName = re.search(string=rowData[0], pattern=r'[a-zA-Z]{1,}[a-zA-Z0-9]{0,}')[0]
						data[lastAdded][columnName] = rowData[1]
		except:
			continue
	return data

# +---------------------------------------------------------------------------------------------------------------+ #

def dict2sql(d : dict[str, list[dict[str, str]]], includeOnly : list[str] = []) -> str:
	sqlFile : str = ''
	for name in d.keys():
		if len(includeOnly) > 0 and name not in includeOnly:
			continue
		columns : list[dict[str, str]] = d[name]
		sql : str = f'CREATE TABLE [{name}] (\n'
		for c in columns:
			k : str = [*c.keys()][0]
			v : str = [*c.values()][0]
			sql += f'\t[{k}] {v.upper()},\n'
		sql += ');'
		if [*d.keys()].index(name) != len([*d.keys()]) - 1:
			sql += '\n\n'
		sqlFile += sql
	return sqlFile

# +---------------------------------------------------------------------------------------------------------------+ #

def cached(f : Callable[[any,], any]):
	storedValues : dict[tuple[str], any] = {}
	def cf(*args, **kwargs):
		hashableKey : tuple[str] = tuple(sorted([*map(lambda x: str(x), list(tuple(args) + tuple(kwargs.keys()) + tuple(kwargs.values())))]))
		if hashableKey in storedValues:
			return storedValues.get(hashableKey)
		storedValues[hashableKey] = f(*args, **kwargs)
		return storedValues[hashableKey]
	return cf

# +---------------------------------------------------------------------------------------------------------------+ #

