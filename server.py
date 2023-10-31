from sanic import Sanic, json, Blueprint, Request, response
from sanic_cors import CORS
from typing import Final
import pandas as pd
from time import time
import sqlite3
from ttsql import Model_V1 as Model

staticDir1 : Final = './dist'
staticDir2 : Final = './images'

model = Model()
conn = sqlite3.connect("model/.sqlite3")

site = Blueprint('website', url_prefix='/website')
api = Blueprint('api', url_prefix='/api')
images = Blueprint('images', url_prefix='/img')

app = Sanic(__name__)
CORS(app)


site.static('/', staticDir1, name='dist')
images.static('/', staticDir2, name='images')

@app.route('/', methods=['GET'])
def homepage(req : Request):
	return response.redirect('/website/index.html')


@api.route("ask", methods=["POST"])
async def ask(request):
	response = None
	start = time()

	try:
		assert "question" in request.json

		sql_query = model.gen_sql(request.json.get("question"))

		data = pd.read_sql(sql_query, conn).map(
			lambda x: x if not pd.isna(x) else "Valore mancante"
		)

		response = {
			"data": data.to_dict(
				orient="records",
			),
			"metadata": [type(j).__name__ for j in data.iloc[0]],
			"query": sql_query,
		}

	except Exception as e:
		response = {"error": str(e)}

	end = time()

	return json({"perf": f"{(end-start)*1000:.3f} ms", **response})


@api.route("table", methods=["GET"])
async def table(request):
	return json({"tables": model.tables})


app.blueprint([site, api, images])