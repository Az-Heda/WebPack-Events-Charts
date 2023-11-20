export class MyCard {
	tabs = [
		'Table',
		'Line chart',
		// 'Area chart',
		'Bar chart',
		'Pie chart',
		'Treemap'
	];
	template1 = `
	<ul class="nav nav-tabs" role="tablist">
		${this.tabs.map((t, i) => {
			return `<li class="nav-item"><a class="${(i == 0) ? 'nav-link active' : 'nav-link'}" data-toggle="tab" href="#tab_index_${i}">${t}</a></li>`
		}).join('\n\t\t')}
	</ul>
	<div class="tab-content">
		${this.tabs.map((t, i) => {
			return `<div id="tab_index_${i}" chartType="${t.toLowerCase().replaceAll(' ', '')}" class="${(i == 0) ? 'container-fluid tab-pane active' : 'container-fluid tab-pane '}">${t}</div>`;
		}).join('\n\t\t')}
	</div>
	`;
	template2 = ``;
	
	parent1 = document.querySelector('#main-content');
	// parent2 = document.getElementById('');
	constructor(options={}) {
		this._config = {
			...options,
		};
		this.tag1 = new Tag('div')
			.html(this.template1).appendTo(this.parent1);
		// this.tag2 = new Tag('div').html(this.template2);
	}

	export() {
		return this._config;
	}

	static import(data) {
		return new MyCard(data)
	}
}

BetterDom.archive.x = new MyCard({});