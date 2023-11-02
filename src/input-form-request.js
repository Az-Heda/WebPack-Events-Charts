import { checkData } from "./bar-chart";
import ApexCharts from "apexcharts";
import { clearOnceEvents } from "./_";

let lastTextSent = '';
const chartData = {
	_data: [],
	_time: new Date(),
	get data() { return this._data; },
	set data(v) {
		this._time = new Date();
		this._data = v;
	},
}

export function sendRequest(evt) {
	const inputTag = document.getElementById('searchbar');
	const param = { question: inputTag.value };
	clearOnceEvents();
	if (param.question !== lastTextSent) {
		if (!document.getElementById('tabs').classList.contains('hidden')) {
			document.getElementById('tabs').classList.add('hidden');
		}
		sendFetch(param, true)
		lastTextSent = param.question;
	}
}



function SR_Result(event) {
	const result = {
		text: event.result[0].transcript,
		confidence: event.result[0].confidence
	}
	console.log(result);
}



function get_SR_Html() {
	let container = document.createElement('div');
	let txt = document.createElement('div');
	container.classList.add('recordingAudio')
	txt.innerHTML = 'Parla pure, ti ascolto';
	container.appendChild(txt)
	return container;
}

async function sendFetch(data, isLocal) {
	const url = (!isLocal) ? 'http://10.160.6.11:7890/api/ask' : `${document.location.protocol}//${document.location.host}/api/ask`
	let inputBox = document.getElementById('searchbar');
	if (inputBox.classList.contains('error')) {
		inputBox.classList.remove('error');
	}

	return new Promise(async (resolve) => {
		let options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data),
		};
		const res = await fetch(url, options).catch(console.error);
		const resJSON = await res.json().catch(console.error);
		console.log('RES_JSON', resJSON)
		document.getElementById('query').innerText = `[${resJSON.perf}]\n${resJSON?.query || resJSON?.error}`
		if (resJSON?.error) {
			if (!inputBox.classList.contains('error')) {
				inputBox.classList.add('error');
			}
			console.error('SERVER ERROR', resJSON.error)
			swal({ icon: 'error', text: resJSON.error, title: 'Server error'})
			return null;
		}

		MyEvent.emit('get-chart-preview', resJSON.data);
		// let labels = Object.entries(resJSON.data[0]).map((i) => { return i[0] });
		// let values = resJSON.data.map((i) => { return Object.entries(i).map((e) => { return e[1] }) })
		MyEvent.emit('save-data', resJSON.data);
		clearOnceEvents();
		if (document.getElementById('tabs').classList.contains('hidden')) {
			document.getElementById('tabs').classList.remove('hidden');
		}
		// MyEvent.emit((MyEvent.emit('get-current-active-chart') || ['bar-chart'])[0], MyEvent.emit('get-data')[0]);
		MyEvent.emit('get-charts', resJSON.data);
		resolve(resJSON);
	})
}

function showTable(result) {
	let { data, error } = result;
	console.log({ data, result, searched: document.getElementById('searchbar').value });
	document.getElementById('query').innerText = `[${result.perf}] - ${result.query}`
	if (error) {
		console.error('SERVER ERROR', error)
		swal({ icon: 'error', text: error, title: 'Server error'})
		return null;
	}
	// data = data.filter((itme))
	let labels = Object.entries(data[0]).map((i) => { return i[0] });
	let values = data.map((i) => { return Object.entries(i).map((e) => { return e[1] }) })
	console.log({ labels, values })
	const container = document.getElementById('output');
	container.innerHTML = '';

	const options = {
		columns: [ ...labels ],
		data: [ ...values ],
		search: true,
		resizable: true,
		pagination: true,
		fixedHeader: true,
	}

	let table = new gridjs.Grid(options);
	table.render(container);

	MyEvent.bind('table', 'ONCE_clear-table', () => { table.destroy(); });
	MyEvent.emit('draw-bar-chart', { labels, values });
}

//-----------------------------------------------------\\

const sr = new MySpeechRecognition('italiano');
sr.addCallback(SR_Result);

const form = document.getElementById('input-form');
const btns = {
	'voice': document.getElementById('speechRecognition'),
	'send': document.getElementById('confirm-form'),
};

form.addEventListener('submit', function(event) {
	event.preventDefault();
	sendRequest(event);
});

btns.voice.addEventListener('click', function(event) {
	console.log(event);
	event.preventDefault();
	swal({ closeOnEsc: true, closeOnClickOutside: true, buttons: false, content: get_SR_Html() }).then(() => { sr.sr.stop(); });
	sr.start();
	console.warn('CONSOLE.WARN', 'Funziona!');
});

btns.send.addEventListener('click', function(event) {
	event.preventDefault();
	sendRequest(event);
});


MyEvent.bind('table', 'table-from-fetch', showTable);

MyEvent.bind('tabs', 'save-data', (d) => { chartData.data = d; });
MyEvent.bind('tabs', 'get-data', () => { return chartData.data });