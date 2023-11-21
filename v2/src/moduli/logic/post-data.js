import { AI_ENDPOINT, CONVERT_TO_DANFO } from "../config";
import { MyCard } from "../ui/cardClass";
const userInput = document.getElementById('user-question');

export async function fetchData() {
	const question = userInput.value;
	const data = {
		question,
		...(BetterDom.archive?.connection || {})
	};
	const checkValues = ['question', 'server', 'database']
		.map((i) => { return +Object.keys(data).includes(i)})
		.reduce((a, v) => { return v += a }, 0);
	if (checkValues == 3) {
		return new Promise(async (resolve, reject) => {
				const options = {
					method: 'POST',
					headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}
			let responseRAW = await fetch(AI_ENDPOINT, options).catch(reject);
			let response = await responseRAW.json().catch(reject);
			resolve(response);
		});
	}
	else {
		return Promise.reject('Missing data')
	}
}

function parsedData(inputData) {
	const { perf, data, metadata, query, question, error } = inputData;
	// if (error) throw new Error(error);
	BetterDom.archive.result = {
		perf,
		query,
		question,
		metadata,
		data: (CONVERT_TO_DANFO) ? new dfd.DataFrame(data) : data,
	}
	BetterDom.archive.currentCard = new MyCard(BetterDom.archive.result)
	const ct = document.querySelector('div.tab-content div.active').getAttribute('chartType');
	MyEvent.emit('init-charts', BetterDom.archive.result, ct);
}


userInput.addEventListener('keyup', (event) => {
	event.preventDefault();
	if (event.keyCode === 13) { // Enter
		fetchData().then(parsedData);
	}
})