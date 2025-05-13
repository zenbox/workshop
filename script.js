
const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-menu');
const backdrop = document.querySelector('.backdrop');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('open');
});

backdrop.addEventListener('click', () => {
  menu.classList.remove('open');
});

// ---------

let index = 0;
const slides = document.querySelector('.slides');
const total = slides.children.length;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % total;
  updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + total) % total;
  updateSlider();
});

function updateSlider() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// ----------

function setTheme(mode) {
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem('theme', mode);
  highlightActiveThemeButton(mode);
}

function highlightActiveThemeButton(mode) {
  const buttons = document.querySelectorAll('[data-theme-button]');
  buttons.forEach(btn => {
    const isActive = btn.getAttribute('data-theme-button') === mode;
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  highlightActiveThemeButton(savedTheme);
});

document.addEventListener('keydown', (e) => {
  if (e.altKey) {
    if (e.key === '1') setTheme('light');
    if (e.key === '2') setTheme('dark');
    if (e.key === '3') setTheme('high-contrast');
  }
});