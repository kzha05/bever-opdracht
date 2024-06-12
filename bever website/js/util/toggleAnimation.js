import { burn, content, highlight } from '../constants.js';

export default function ToggleAnimation() {
	const on = highlight.classList.contains('highlight');

	if (on) {
		highlight.classList.remove('highlight');
		burn.classList.remove('burn');
		content.classList.remove('content');
		return;
	}

	highlight.classList.add('highlight');
	burn.classList.add('burn');
	content.classList.add('content');
}
