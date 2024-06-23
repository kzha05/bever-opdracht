document.addEventListener('DOMContentLoaded', function () {
	const fireAnimationButton = document.getElementById('fire-animation-button');
	const gif = document.getElementById('untitled-animation');

	fireAnimationButton.addEventListener('click', function () {
		// Set timeout to show the GIF after 3 seconds
		setTimeout(function () {
			gif.style.display = 'block'; // Make the GIF visible
		}, 3000); // 3000 milliseconds = 3 seconds
	});
});
