export const LOGIN_SERVER = null;
export const LOGIN_DATABASE = null;

export async function fetchData() {
	const url = 'http://10.160.4.113:7788/api/ask'
	const question = document.getElementById('user-question').value;
	return new Promise(async (resolve, reject) => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				question,
				server: LOGIN_SERVER,
				database: LOGIN_DATABASE,
			})
		}
		let responseRAW = await fetch(url, options).catch(reject);
		let response = await responseRAW.json().catch(reject);
		resolve(response);
	});
}