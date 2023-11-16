

export function drawCard() {
	let cardTemplate = `
	<div class="my-card">
		<div class="card-header"> $% header %$ </div>
		<div class="card-body"> $% body %$ </div>
		<div class="card-footer"> $% footer %$ </div>
	</div>
	`;
	
	let data = [
		{ header: 'Header card #1', body: 'Body card #1', footer: 'Footer card #1' },
		{ header: 'Header card #2', body: 'Body card #2', footer: 'Footer card #2' },
		{ header: 'Header card #3', body: 'Body card #3', footer: 'Footer card #3' },
	];

	let container = new Tag('div')
	.addClass('row')
	.appendTo(document.body);	
	
	data.forEach((d) => {
		let template = new Templating(cardTemplate, d);
		const t = new Tag('div')
		.addClass('col-lg-4', 'col-md-4', 'col-sm-4')
		.html(template.parse())
		.appendTo(container.node);
	});
}

drawCard();