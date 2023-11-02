export async function tableRequest() {
	const url = 'http://127.0.0.1:7788/api/tables';
	let res = await fetch(url, { method: 'GET'});
	let data = await res.json();
	createMenu(data);
}

function createMenu(tables, id='table-menu') {
	const container = document.getElementById(id);
	container.innerHTML = '';
	let nav = document.createElement('nav');
	let closebtn = document.createElement('div');
	let closeIcon = document.createElement('i');
	let titleContainer = document.createElement('div');
	let title = document.createElement('h3');
	let outerList = document.createElement('ul');
	
	title.innerHTML = 'Tabelle';
	nav.setAttribute('id', 'sidebar');
	closebtn.setAttribute('id', 'dismiss');
	outerList.classList.add('list-unstyled');
	closeIcon.classList.add('fas', 'fa-arrow-left');

	for (let [k, v] of Object.entries(tables)) {
		let item = document.createElement('li');
		let link = document.createElement('a');
		let innerList = document.createElement('ul');

		innerList.classList.add('collapse', 'list-unstyled');
		link.classList.add('dropdown-toggle');

		innerList.setAttribute('id', `menu-info-table-${k}`);
		link.setAttribute('href', `#${innerList.getAttribute('id')}`);
		link.setAttribute('data-toggle', 'collapse');
		link.setAttribute('aria-expanded', 'false');

		link.classList.add('dropdown-toggle');

		link.innerHTML = k;
		for (let li of v) {
			let innerItem = document.createElement('li');
			let innerLink = document.createElement('a');
			
			innerLink.innerHTML = li;
			innerLink.onclick = function(event) { event.preventDefault() };

			innerItem.appendChild(innerLink);
			innerList.appendChild(innerItem);
		}

		item.appendChild(link);
		outerList.appendChild(item);
		outerList.appendChild(innerList)
	}

	container.appendChild(nav);
	nav.appendChild(closebtn);
	nav.appendChild(titleContainer);
	nav.appendChild(outerList);
	titleContainer.appendChild(title);
	closebtn.appendChild(closeIcon);

	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
		});
	});
	$(document).ready(function () {
		$('#dismiss, .overlay').on('click', function () {
			$('#sidebar').removeClass('active');
			$('.overlay').removeClass('active');
		});
		
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').addClass('active');
			$('.overlay').addClass('active');
			$('.collapse.in').toggleClass('in');
			$('a[aria-expanded=true]').attr('aria-expanded', 'false');
		});
	});
}

tableRequest();