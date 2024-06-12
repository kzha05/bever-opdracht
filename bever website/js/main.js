import { animationHitbox, beaver } from './constants.js';
import toggleAnimation from './util/toggleAnimation.js';
import dropImage from './util/dropImage.js';

beaver.onclick = dropImage;
animationHitbox.onclick = toggleAnimation;
