const btn = document.getElementById('toggle-dark');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
  updateButtonText();
});

function updateButtonText() {
  if (document.body.classList.contains('dark-mode')) {
    btn.textContent = 'Modo Claro';
  } else {
    btn.textContent = 'Modo Noturno';
  }
}

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}
updateButtonText();