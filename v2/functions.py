from typing import Callable
import sqlalchemy
import pandas as pd
import re
import sqlglot

# +---------------------------------------------------------------------------------------------------------------+ #

def cached(f : Callable[[any,], any]):
	storedValues : dict[tuple[str], any] = {}
	def cf(*args, **kwargs):
		hashableKey : str = str(tuple(sorted([*map(lambda x: str(x), list(tuple(args) + tuple(kwargs.keys()) + tuple(kwargs.values())))])))
		if hashableKey in storedValues:
			return storedValues.get(hashableKey)		
		storedValues[hashableKey] = f(*args, **kwargs)
		return storedValues[hashableKey]
	return cf

# +---------------------------------------------------------------------------------------------------------------+ #

def dbConnection(server : str, db : str, query : str, eng : str = 'mssql+pyodbc') -> pd.DataFrame:
	driver : str = 'ODBC+DRIVER+17+for+SQL+Server'
	engine_stmt : str = "%s://@%s/%s?driver=%s&trusted_connection=yes" % (eng, server, db , driver )
	engine : sqlalchemy.Engine = sqlalchemy.create_engine(engine_stmt)
	return pd.read_sql(query, con=engine)

dbConnection = cached(dbConnection)

# +---------------------------------------------------------------------------------------------------------------+ #

def getSchema(server : str, db : str, allowed: list[str] = []) -> dict[str, list[dict[str, str]]] :
	query : str = 'SELECT * FROM INFORMATION_SCHEMA.COLUMNS ORDER BY TABLE_NAME, ORDINAL_POSITION'
	df : pd.DataFrame = dbConnection(query=query, server=server, db=db)
	tables : dict[str, list[str]] = {}
	df['path'] = df['TABLE_SCHEMA'] + '.' + df['TABLE_NAME'] 
	names : list[str] = [*set([ x for x in df['path'] ])]
	for name in names: 
		if len(allowed) > 0 and name not in allowed:
			continue
		tables[name] = [ { r['COLUMN_NAME'] : r['DATA_TYPE'] } for r in df[['COLUMN_NAME', 'DATA_TYPE']][df['path'] == name].to_dict(orient='records')]
	return tables

# +---------------------------------------------------------------------------------------------------------------+ #

def sql2dict(sql) -> dict[str, dict[str, str]] :
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

sql2dict = cached(sql2dict)

# +---------------------------------------------------------------------------------------------------------------+ #

def dict2sql(d : dict[str, list[dict[str, str]]], includeOnly : list[str] = []) -> str:
	sqlFile : str = ''
	for name in d.keys():
		if len(includeOnly) > 0 and name not in includeOnly:
			continue
		columns : list[dict[str, str]] = d[name]
		sql : str = f'CREATE TABLE [{name.split(".")[-1]}] (\n'
		for c in columns:
			k : str = [*c.keys()][0]
			v : str = [*c.values()][0]
			sql += f'\t{k} {v.upper()}'
			if columns.index(c) != len(columns)-1:
				sql += ','
			sql += '\n'
		sql += ');'
		if [*d.keys()].index(name) != len([*d.keys()]) - 1:
			sql += '\n\n'
		sqlFile += sql
	return sqlFile


dict2sql = cached(dict2sql)

# +---------------------------------------------------------------------------------------------------------------+ #

def addTableSchema(query : str, server : str, db : str) -> str:
	schemaQuery : str = 'SELECT TABLE_SCHEMA, TABLE_NAME FROM INFORMATION_SCHEMA.COLUMNS GROUP BY TABLE_SCHEMA, TABLE_NAME'
	df : pd.DataFrame = dbConnection(query=schemaQuery, server=server, db=db)
	df['JOINED'] = '[' + df['TABLE_SCHEMA'] + ']' + '.' + '[' + df['TABLE_NAME'] + ']'
	for v in df['JOINED']:
		query = query.replace(v.split('.')[1], v)
	return query

addTableSchema = cached(addTableSchema)

# +---------------------------------------------------------------------------------------------------------------+ #

def addAliases(query : str) -> str:
	for column in sqlglot.parse_one(query, dialect='tsql'):
		cname = str(column)
		pattern = r'[a-zA-Z0-9\(\)\[\]]+ (as|AS|aS|As) [a-zA-Z0-9\(\)\[\]]+'
		m = re.match(pattern=pattern, string=cname)
		if m is None:
			query = query.replace(cname, f'{cname} AS \'{cname}\'', 1)
	return query

addAliases = cached(addAliases)

# +---------------------------------------------------------------------------------------------------------------+ #
