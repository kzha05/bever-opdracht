import { animationHitbox, beaver, langButtonEn, langButtonNl } from './constants.js';
import toggleAnimation from './util/toggleAnimation.js';
import dropImage from './util/dropImage.js';
import switchLanguage from './util/switchLanguage.js';
import initiateCarousel from './util/initiateCarousel.js';

beaver.onclick = dropImage;
animationHitbox.onclick = toggleAnimation;


document.addEventListener('DOMContentLoaded', function () {
	const fireAnimationButton = document.getElementById('fire-animation-button');
	const gif = document.getElementById('beaver-walking');

	fireAnimationButton.addEventListener('click', function () {
		// Set timeout to show the GIF after 3 seconds
		setTimeout(function () {
			gif.style.display = 'block'; // Make the GIF visible
		}, 3000); // 3000 milliseconds = 3 seconds
	});
});


langButtonNl.addEventListener('click', () => switchLanguage('nl'));
langButtonEn.addEventListener('click', () => switchLanguage('en'));

initiateCarousel();
