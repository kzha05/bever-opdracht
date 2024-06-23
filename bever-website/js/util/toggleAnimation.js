import { animationContainer } from '../constants.js';

export default function ToggleAnimation() {
	const on = animationContainer.classList.contains('animation-container');

	if (on) {
		animationContainer.classList.remove('animation-container');
		return;
	}

	animationContainer.classList.add('animation-container');
}
