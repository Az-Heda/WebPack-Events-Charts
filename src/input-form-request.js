export function sendRequest(evt) {
	const inputTag = document.getElementById('searchbar');
	const param = { question: inputTag.value };
	console.log(param);
	sendFetch(param, false)
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
	const url = (!isLocal) ? 'http://10.160.6.11:7890/ask' : `${document.location.protocol}//${document.location.host}/ask`

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
		MyEvent.emit('table-from-fetch', resJSON);
		resolve(resJSON);
	})
}

function showTable(result) {
	let { data, error } = result;
	if (error) {
		console.error('SERVER ERROR', error)
		return null;
	}
	console.log({
		data,
		result,
		searched: document.getElementById('searchbar').value
	})
	// data = data.filter((itme))
	let labels = Object.entries(data[0]).map((i) => { return i[0] });
	let values = data.map((i) => { return Object.entries(i).map((e) => { return e[1] }) })
	console.log({ labels, values })
	const container = document.getElementById('table');
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
// setTimeout(() => {
// 	document.getElementById('searchbar').value = 'how many different regions are there';
// }, 1000);