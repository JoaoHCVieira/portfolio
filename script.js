const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggleBtn.textContent = '☀️ Modo Claro';
}

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  let theme = 'light';
  
  if (document.body.classList.contains('dark-mode')) {
    theme = 'dark';
    themeToggleBtn.textContent = '☀️ Modo Claro';
  } else {
    themeToggleBtn.textContent = '🌙 Modo Escuro';
  }

  localStorage.setItem('theme', theme);
});
