from sanic import Sanic, Blueprint, Request, response
from sanic_cors import CORS
from typing import Final, Dict
import pandas as pd
from time import time
from models import ModelV1 as Model, allowedTables
import functions
import json
import os

# https://www.patorjk.com/software/taag/#p=display&h=0&v=0&f=Big&t=Start
# +---------------------------------------------------------------------------------+
# |                                                                                 |
# |                        _____          _                                         |
# |                       / ____|        | |                                        |
# |                      | (___     ___  | |_   _   _   _ __                        |
# |                       \___ \   / _ \ | __| | | | | | '_ \                       |
# |                       ____) | |  __/ | |_  | |_| | | |_) |                      |
# |                      |_____/   \___|  \__|  \__,_| | .__/                       |
# |                                                    | |                          |
# |                                                    |_|                          |
# |                                                                                 |
# +---------------------------------------------------------------------------------|

IP : Final = '10.160.4.113'
PORT : Final = 7788
STATIC : Final = {
	'site': { 'name': 'dist', 'endpoint': './dist' },
	'img': { 'name': 'images', 'endpoint': './images' },
}

ActiveModel = Model()
conn = ''

site : Blueprint = Blueprint('website', url_prefix='/website')
api : Blueprint = Blueprint('api', url_prefix='/api')
images : Blueprint = Blueprint('images', url_prefix='/img')

app = Sanic(__name__)

CORS(app, resources={r"/*": {'origins': '*'}})


# +---------------------------------------------------------------------------------+
# |                                                                                 |
# |                 _____                    _     _                                |
# |                |  __ \                  | |   (_)                               |
# |                | |__) |   ___    _   _  | |_   _   _ __     __ _                |
# |                |  _  /   / _ \  | | | | | __| | | | '_ \   / _` |               |
# |                | | \ \  | (_) | | |_| | | |_  | | | | | | | (_| |               |
# |                |_|  \_\  \___/   \__,_|  \__| |_| |_| |_|  \__, |               |
# |                                                             __/ |               |
# |                                                            |___/                |
# |                                                                                 |
# +---------------------------------------------------------------------------------|

site.static('/', STATIC['site']['endpoint'], name=STATIC['site']['name'])
images.static('/', STATIC['img']['endpoint'], name=STATIC['img']['name'])


@app.route('/', methods=['GET'])
def routingHOMEPAGE_GET(req : Request) -> response.HTTPResponse:
	return response.redirect('/website/index.html')

@api.route('tables', methods=['GET'])
def routingTABLES_GET(req : Request) -> response.HTTPResponse:
	return response.json(ActiveModel.getTables(), status=200)

@api.route('/ask', methods=['POST'])
def routingASK_POST(req : Request):
	res = {}
	start : float = time()
	sql_query : str | None = None
	try:
		assert 'question' in req.json
		assert 'server' in req.json
		assert 'database' in req.json
		connData = {
			'server': req.json.get('server'),
			'db': req.json.get('database'),
		}
		ActiveModel.setTables(**connData)
		sql_query : str = ActiveModel.generateSQL(req.json.get('question'))
		sql_query = functions.addTableSchema(query=sql_query, **connData)
		sql_query = functions.addAliases(query=sql_query)
		data : pd.DataFrame = functions.dbConnection(query=sql_query, **connData).map(lambda x : x if not pd.isna(x) else 'Valore mancante')
		res = {
			'data': data.to_dict(orient='records'),
			'metadata': [ type(j).__name__ for j in data.iloc[0] ],
		}
	except Exception as e:
		res = { 'error': str(e), }
	end = time()
	
	return response.json({
		'perf': f'{(end - start) * 1000:.3f} ms',
		'query': sql_query,
		'question': req.json.get('question', None),
		**res
	})



                                   

# +---------------------------------------------------------------------------------+
# |                                                                                 |
# |                         _____   _                    _                          |
# |                        / ____| | |                  | |                         |
# |                       | (___   | |_    __ _   _ __  | |_                        |
# |                        \___ \  | __|  / _` | | '__| | __|                       |
# |                        ____) | | |_  | (_| | | |    | |_                        |
# |                       |_____/   \__|  \__,_| |_|     \__|                       |
# |                                                                                 |
# |                                                                                 |
# +---------------------------------------------------------------------------------|

app.blueprint([site, api, images])
if __name__ == '__main__':
	os.system('cls')
	app.run(host=IP, port=PORT, auto_reload=True, dev=False)