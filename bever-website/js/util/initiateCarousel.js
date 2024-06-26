import { carouselButtonGroup, carouselTrack } from '../constants.js';

export default function initiateCarousel() {
	const slides = carouselTrack.querySelectorAll('.carousel-slide');
	const buttons = carouselButtonGroup.querySelectorAll('.carousel-button');

	const totalSlides = slides.length;
	const totalButtons = buttons.length;

	if (totalSlides === 0 || totalButtons === 0) {
		throw new Error('No slides or buttons found.');
	}

	if (totalSlides !== totalButtons) {
		throw new Error('The number of slides and buttons must match.');
	}

	let currentSlide = 1;
	let animating = true;
	let activeTimeout = false;

	function goToSlide(slideNumber) {
		if (activeTimeout) {
			return;
		}
		if (slideNumber === currentSlide && animating) {
			slides[currentSlide].style.boxShadow = '0 0 3rem #602607';
			buttons[currentSlide].style.boxShadow = '0 0 3rem #602607';
			animating = false;
		}
		else {
			slides[currentSlide].style.boxShadow = 'none';
			buttons[currentSlide].style.boxShadow = 'none';
			animating = true;
		}

		slides[currentSlide].animate([{ transform: 'translate(-50%, -50%)' }, { transform: 'translate(-250%, -50%)' }], {
			duration: 500, easing: 'ease-in-out', fill: 'forwards',
		});

		buttons[currentSlide].style.background = '#D1BB9E';

		slides[slideNumber].animate([{ transform: 'translate(150%, -50%)' }, { transform: 'translate(-50%, -50%)' }], {
			duration: 500, easing: 'ease-in-out', fill: 'forwards',
		});

		buttons[slideNumber].style.background = '#A79277';


		activeTimeout = true;
		setTimeout(() => {
			slides[currentSlide].style.transform = 'translate(150%, -50%)';
			currentSlide = slideNumber;
			activeTimeout = false;
		}, 500);
	}

	buttons.forEach((button, index) => {
		button.addEventListener('click', function () {
			goToSlide(index);
		});
	});

	goToSlide(0);

	setInterval(() => {
		if (!animating) {
			return;
		}
		const nextSlide = currentSlide + 1 === totalSlides ? 0 : currentSlide + 1;
		goToSlide(nextSlide);
	}, 4000);
}
