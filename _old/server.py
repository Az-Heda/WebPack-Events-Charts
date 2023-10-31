from sanic import Sanic, Request, response
from sanic.log import logger
from sanic_cors import CORS
from typing import Final
import pandas as pd
import warnings
import pyodbc
import json
import datetime


warnings.simplefilter("ignore", category=UserWarning)

conn : pyodbc.Connection = pyodbc.connect(
	"Driver={ODBC Driver 17 for SQL Server};"
	"Server=srvdb04.seac.local;"
	"Trusted_Connection=yes;"
)

app : Sanic = Sanic(__name__)
CORS(app)


staticDir : Final = './dist'
app.static('/website', staticDir, name='dist')

@app.route('/', methods=['GET'])
def homepage(req : Request):
	return response.redirect('/website/index.html')

@app.route('/ask', methods=['POST'])
def ask(req : Request):
	df = pd.read_sql(open('query.sql', 'r').read(), conn)
	df = df.map(lambda x: x if type(x) in [datetime.date, datetime.datetime] else x.strftime('%a %d %b %Y, %I:%M'))
	return response.json(df.to_dict(orient='records'))
