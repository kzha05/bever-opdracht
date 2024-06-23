import animateImageDrop from './animateImage.js';

export default function dropImage() {
	const image = document.getElementById('beaver');
	image.classList.add('drop');

	animateImageDrop(image);
}
