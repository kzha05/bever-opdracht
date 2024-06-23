import { beaver, carouselNavButtons, carouselSlides, langButtonEn, langButtonNl } from '../constants.js';

export default async function switchLanguage(language) {
	const data = await fetch('../../src/lang/' + language + '.json').then((response) => response.json());

	beaver.alt = data.header.imgAlt;
	langButtonNl.setAttribute('aria-label', data.header.ariaLabelSwitchToDutch);
	langButtonEn.setAttribute('aria-label', data.header.ariaLabelSwitchToEnglish);

	data.slides.forEach((slideData, index) => {
		if (carouselSlides[index]) {
			const slide = carouselSlides[index];
			const title = slide.querySelector('h2');
			const content = slide.querySelector('p');
			const button = slide.querySelector('button');
			const note = slide.querySelector('small');

			if (title) {
				title.textContent = slideData.title || '';
			}
			if (content) {
				content.textContent = slideData.content || '';
			}
			if (button) {
				button.textContent = slideData.content || '';
			}

			if (note) {
				note.textContent = slideData.note || '';
			}
		}
	});

	data.carouselNavigation.forEach((navData, index) => {
		if (carouselNavButtons[index]) {
			carouselNavButtons[index].setAttribute('aria-label', navData.ariaLabel);
		}
	});
}
