import { animationHitbox, beaver } from './constants.js';
import toggleAnimation from './util/toggleAnimation.js';
import dropImage from './util/dropImage.js';


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
  