export function sendRequest(evt) {
	const inputTag = document.getElementById('searchbar');
	const param = { value: inputTag.value };
	console.log(param);
	sendFetch(param)
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



async function sendFetch(data) {
	const url = `${document.location.protocol}//${document.location.host}/ask`;
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
		console.log({ resJSON })
		resolve(resJSON);
	})
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
	event.preventDefault();
	swal({ closeOnEsc: true, closeOnClickOutside: true, buttons: false, content: get_SR_Html() })
	.then(() => { sr.sr.stop(); });
	sr.start();
	console.warn('CONSOLE.WARN', 'Funziona!');
});

btns.send.addEventListener('click', function(event) {
	event.preventDefault();
	sendRequest(event);
});