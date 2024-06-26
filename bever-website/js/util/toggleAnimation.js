import { animationContainer } from '../constants.js';

let myTimeout;

export default function ToggleAnimation() {
	const on = animationContainer.classList.contains('animation-container');

	if (on) {
		animationContainer.classList.remove('animation-container');
		if (myTimeout) {
			clearTimeout(myTimeout);
		}
		return;
	}

	animationContainer.classList.add('animation-container');
	myTimeout = setTimeout(() => {
		animationContainer.classList.remove('animation-container');
	}, 8500);
}
