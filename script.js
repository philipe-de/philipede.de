const menuBtn = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const playBtn = document.querySelector('[data-audio-demo]');
playBtn.addEventListener('click', () => {
  const icon = playBtn.querySelector('.play-icon');
  const label = playBtn.querySelector('span:last-child');
  const active = playBtn.classList.toggle('active');
  icon.textContent = active ? 'Ⅱ' : '▶';
  label.textContent = active ? 'PREVIEW PAUSED' : 'PLAY PREVIEW';
});
