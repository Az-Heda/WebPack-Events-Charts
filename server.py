from sanic import Sanic, Blueprint, Request, response
from sanic_cors import CORS
from typing import Final
import pandas as pd
from time import time
import sqlite3
from ttsql import Model_V1 as Model, modelDir
import json


staticDir1 : Final = './dist'
staticDir2 : Final = './images'

# model = Model()
# conn = sqlite3.connect(f'{modelDir}/database.sqlite3')

site : Blueprint = Blueprint('website', url_prefix='/website')
api : Blueprint = Blueprint('api', url_prefix='/api')
images : Blueprint = Blueprint('images', url_prefix='/img')

app = Sanic(__name__)
CORS(app)

site.static('/', staticDir1, name='dist')
images.static('/', staticDir2, name='images')

@app.route('/', methods=['GET'])
def homepage(req : Request):
	return response.redirect('/website/index.html')


@api.route('tables', methods=['GET'])
async def tables(req : Request):
	return response.json(json.loads(open(f'{modelDir}/tables.json', 'r').read()), status=200)
	# return json(model.get_tables())


app.blueprint([site, api, images])

if __name__ == '__main__':
	app.run(host='127.0.0.1', port=7788, auto_reload=True)