export function autoComplete(event, tag) {
	const keyEvent = { key: event.key, keyCode: event.keyCode, ctrl: event.ctrlKey, alt: event.altKey, shift: event.shiftKey };

	let p = document.getElementById('autoCompletePlaceholder');
	let metadata = Object.assign({}, ...[ 'metadata-chart', 'metadata-table' ].map((id) => { return {[id.split('-')[1]] : document.getElementById(id) }}));

	const charts = ['TORTA', 'BARRE', 'AREA'];
	const tables = ['CGN032', 'SERVERFARM', 'HELPDESK', 'CONTABILITA'];
	const listAll = (tables.join('|')+'|'+charts.join('|')).split('|')
	let currentOptionChart;
	let currentOptionTable;

	let words = tag.value.split(' ');
	if (words.length == 0) { return; }
	let lastWord = words[words.length - 1];
	const completeFromStart = (item) => { return (lastWord.length < 1) ? false : item.toLowerCase().substr(0, lastWord.length) == lastWord }
	const isAlreadyInside = (list) => { for (let x = 0; x < list.length; x ++) { if (tag.value.toLowerCase().includes(list[x].toLowerCase())) { return true; } } return false; };

	p.setAttribute('data-placeholder', tag.value);
	
	if (!isAlreadyInside(charts)) {
		currentOptionChart = charts.filter(completeFromStart);
		if (currentOptionChart[0]) {
			p.setAttribute('data-placeholder', p.getAttribute('data-placeholder')+currentOptionChart[0].substr(lastWord.length));
			metadata.chart.value = currentOptionChart[0];
		}
	}

	if (!isAlreadyInside(tables)) {
		currentOptionTable = tables.filter(completeFromStart);
		if (currentOptionTable[0]) {
			p.setAttribute('data-placeholder', p.getAttribute('data-placeholder')+currentOptionTable[0].substr(lastWord.length));
			metadata.table.value = currentOptionTable[0];
		}
	}

	if (keyEvent.key == 'Tab') {
		event.preventDefault();
		if (p.getAttribute('data-placeholder').length > tag.value.length) {
			// console.log({ placeholder: p.getAttribute('data-placeholder') })
			tag.value = p.getAttribute('data-placeholder').replace(
				p.getAttribute('data-placeholder').split(' ').splice(-1)[0],
				listAll[
					listAll.map((i) => { return i.toLowerCase()})
					.indexOf(p.getAttribute('data-placeholder').split(' ').splice(-1)[0].toLowerCase())
				]);
			
			// console.log(tag.value)
			p.setAttribute('data-placeholder', tag.value);
		}
	}
	
}

let p = document.getElementById('autoCompletePlaceholder');
let c = document.getElementById('searchbar');

c.addEventListener('keypress', function(event) { autoComplete(event, c); });
c.addEventListener('keydown', function(event) { autoComplete(event, c); });

setInterval(() => {
	if (p.getAttribute('data-placeholder') == c.value || c.value.length == 0) {
		p.style.color = 'transparent';
	}
	else {
		p.style.color = '#00000066'
	}
}, 5);