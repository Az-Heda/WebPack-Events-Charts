import { SHOW_LOGIN_FORM, ASK_EVEN_IF_SAVED_TO_CONFIG} from "../config";

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
		button: false,
		closeOnEsc: true,
		closeOnClickOutside: true
	}
	setTimeout(() => {
		let host = document.getElementById('get-host');
		let db = document.getElementById('get-db');
		let btn = document.getElementById('form-validator');
		let form = document.getElementById('setup-form');

		const locstorKey = 'query-headers';
		const locstorDur = 1000 * 60 * 60 * 24 * 7 * 4; // 4 Settimane
		let currentValue = MyStorage.getCookie(locstorKey);
		if (currentValue) {
			host.value = currentValue.server;
			db.value = currentValue.database;
		}
		host.focus();
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			if (db.value.length == 0) return db.focus();
			if (host.value.length == 0) return host.focus();

			const values = { server: host.value, database: db.value }
			if (swal.getState().isOpen) swal.close();
			MyStorage.setCookie(locstorKey, values, locstorDur)
			BetterDom.archive.connection = values;
		})
	}, 100)
	return config;
}


if (SHOW_LOGIN_FORM) {
	if (MyStorage.getCookie('query-headers') && !ASK_EVEN_IF_SAVED_TO_CONFIG) { BetterDom.archive.connection = MyStorage.getCookie('query-headers');}
	else { swal({ ...loginForm() }) }
	// if (!(ASK_EVEN_IF_SAVED_TO_CONFIG && MyStorage.getCookie('query-headers'))) {
		
	// }
}