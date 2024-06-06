const body = document.querySelector('body');
const burn = document.getElementById('burn');
const highlight = document.getElementById('highlight');
const content = document.getElementById('content');

let on = false;

function ToggleAnimation () {
	if (on) {
		highlight.classList.remove('highlight');
		burn.classList.remove('burn');
		content.classList.remove('content');
		on = false;
		return;
	}

	highlight.classList.add('highlight');
	burn.classList.add('burn');
	content.classList.add('content');
	on = true;
};
