import { animationHitbox, beaver, langButtonEn, langButtonNl } from './constants.js';
import toggleAnimation from './util/toggleAnimation.js';
import dropImage from './util/dropImage.js';
import switchLanguage from './util/switchLanguage.js';
import initiateCarousel from './util/initiateCarousel.js';

beaver.onclick = dropImage;
animationHitbox.onclick = toggleAnimation;

document.addEventListener("DOMContentLoaded", () => {
    const enterFullscreenButton = document.getElementById("enterFullscreen");
    const content = document.getElementById("functionfs");

    // Function to enter fullscreen mode
    function enterFullscreen() {
        if (content.requestFullscreen) {
            content.requestFullscreen();
        } else if (content.mozRequestFullScreen) { // Firefox
            content.mozRequestFullScreen();
        } else if (content.webkitRequestFullscreen) { // Chrome, Safari and Opera
            content.webkitRequestFullscreen();
        } else if (content.msRequestFullscreen) { // IE/Edge
            content.msRequestFullscreen();
        }
    }

    // Function to exit fullscreen mode
    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }

    // Monitor fullscreen change events
    function onFullscreenChange() {
        if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
            enterFullscreen();
        }
    }

    // Event listener for the enter fullscreen button
    enterFullscreenButton.addEventListener("click", () => {
        enterFullscreen();
        enterFullscreenButton.style.display = "none"; // Hide the button after entering fullscreen
    });

    // Event listeners for fullscreen change
    document.addEventListener("fullscreenchange", onFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onFullscreenChange);
    document.addEventListener("mozfullscreenchange", onFullscreenChange);
    document.addEventListener("MSFullscreenChange", onFullscreenChange);
});


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

switchLanguage('nl');

initiateCarousel();

