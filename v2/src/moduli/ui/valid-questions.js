import { SHOW_VALID_QUESTIONS, VALID_QUESTIONS } from "../config";


const htmlAlert = document.getElementById('warning-alert');
const validQuestionsLNK = document.getElementById('valid-questions-lnk');

if (SHOW_VALID_QUESTIONS) {
	if (htmlAlert.classList.contains('dhidden')) {
		htmlAlert.classList.remove('dhidden')
	}

	validQuestionsLNK.onclick = () => {
		let html = new Tag('ul')
			.addAttr('class', 'question-zone')
			.addAttr('id', 'question-zone');

		setTimeout(() => {
			for (let v of VALID_QUESTIONS) {
				let q = new Tag('li')
					.text(v)
					.addClass('valid-question')
					.event('click', () => {
						let input = document.getElementById('user-question');
						console.log(q.node.textContent);
						input.value = q.node.textContent;
						if (swal.getState().isOpen) swal.close();
						input.focus();
					})
				q.appendTo(html.node)
			}
		}, 100)

		swal({ content: html.node, buttons: false })
	}
}

