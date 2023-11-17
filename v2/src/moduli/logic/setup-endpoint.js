import { SHOW_LOGIN_FORM } from "../config";

function loginForm(params={}) {
	const container = `
	<form id="setup-form">
		<div class="mygrid-row form-group">
			<div class="inputForm mygrid-120" >
				<input class="mainInput input-alt" type="text" id="get-host" name="get-host" placeholder="Host" value="${params?.host || ''}" autocomplete="off">
				<span class="input-border input-border-alt"></span>
			</div>
		</div>
		<div class="mygrid-row form-group">
			<div class="inputForm mygrid-120" >
				<input class="mainInput input-alt" type="text" id="get-db" name="get-db" placeholder="Database" values="${params?.db || ''}" autocomplete="off">
				<span class="input-border input-border-alt"></span>
			</div>
		</div>
		<div class="mygrid-row form-group" style="margin-top: 10px">
			<button class="btn btn-info mygrid-120" name="validate-form" id="form-validator">Conferma</button>
		</div>
	</form>
	`

	const config = {
		title: 'Collegamento con il database',
		content: new Tag('div').html(container).node,
		button: false
	}
	setTimeout(() => {
		let host = document.getElementById('get-host');
		let db = document.getElementById('get-db');
		let btn = document.getElementById('form-validator');
		let form = document.getElementById('setup-form');
		
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			if (db.value.length == 0) return db.focus();
			if (host.value.length == 0) return host.focus();

			const values = { server: host.value, database: db.value }
			if (swal.getState().isOpen) swal.close();
			BetterDom.archive.connection = values;
		})
	}, 100)
	return config;
}


function parseLoginForm() {
	

	if (host.values && db.values) {
		console.log('Both')
	} else {
		console.log('One or none')
		if (host.value || db.value) {
			console.log('One')
			let item = [host, db][+!!host];
			swal.close()
		}
		else {
			console.warn('idk')
		}
	}
	BetterDom.archive.database = { host, db };
}

if (SHOW_LOGIN_FORM) {
	swal({ ...loginForm() })
}