function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;

  const themeName = document.querySelector('.theme-name');
  themeName.textContent = newTheme;
}

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', setTheme);
