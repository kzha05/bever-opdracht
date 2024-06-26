import { animationHitbox, beaver, langButtonEn, langButtonNl } from './constants.js';
import toggleAnimation from './util/toggleAnimation.js';
import dropImage from './util/dropImage.js';
import switchLanguage from './util/switchLanguage.js';
import initiateCarousel from './util/initiateCarousel.js';

beaver.onclick = dropImage;
animationHitbox.onclick = toggleAnimation;


document.addEventListener('DOMContentLoaded', function () {
	const fireAnimationButton = document.getElementById('fire-animation-button');
	const gif = document.getElementById('bever-animation');

	fireAnimationButton.addEventListener('click', function () {
		// Set timeout to show the GIF after 3 seconds
		setTimeout(function(){
			gif.style.display = "flex";
		},2500);
		console.log("clicked");
		setTimeout(function(){
			gif.style.display = "none";
		},8000);
	});
});


langButtonNl.addEventListener('click', () => switchLanguage('nl'));
langButtonEn.addEventListener('click', () => switchLanguage('en'));

switchLanguage('nl');

initiateCarousel();
