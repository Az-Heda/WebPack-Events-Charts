

export async function tableRequest() {
	const url = 'http://127.0.0.1:7788/api/tables';
	let res = await fetch(url, { method: 'GET'});
	let data = await res.json();
	console.log(data);
}


tableRequest();