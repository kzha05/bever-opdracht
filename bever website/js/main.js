function dropImage() {
  const beaver = document.getElementById('beaver');
  beaver.classList.add('drop');

  beaver.addEventListener('animationend', () => {
    beaver.classList.add('hidden');
    setTimeout(() => {
      beaver.classList.remove('drop', 'hidden');
    }, 1000); // Wacht 1 seconde voordat de bever weer verschijnt
  });
}