import { AI_ENDPOINT } from "../config";
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


userInput.addEventListener('keyup', (event) => {
	event.preventDefault();
	if (event.keyCode === 13) { // Enter
		fetchData().then(console.warn).catch(console.error)
	}
})