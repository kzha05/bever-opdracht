export default function animateImageDrop(image) {
	image.animate([

		{ transform: 'rotate(45deg)'},
		{ transform: 'translateY(0)' },
		{ transform: 'translateY(100vh)' }
	], {
		duration: 2000,
		easing: 'ease-in-out',
		fill: 'forwards'
	});
}
