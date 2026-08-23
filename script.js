const menuBtn = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const rail = document.querySelector('[data-card-rail]');
if (rail) {
  const amount = () => Math.min(rail.clientWidth * .82, 520);
  document.querySelector('[data-slide="prev"]')?.addEventListener('click', () => rail.scrollBy({ left: -amount(), behavior: 'smooth' }));
  document.querySelector('[data-slide="next"]')?.addEventListener('click', () => rail.scrollBy({ left: amount(), behavior: 'smooth' }));

  let down = false;
  let startX = 0;
  let startScroll = 0;
  rail.addEventListener('pointerdown', e => {
    down = true;
    startX = e.clientX;
    startScroll = rail.scrollLeft;
    rail.classList.add('dragging');
    rail.setPointerCapture(e.pointerId);
  });
  rail.addEventListener('pointermove', e => {
    if (!down) return;
    rail.scrollLeft = startScroll - (e.clientX - startX);
  });
  const stop = () => { down = false; rail.classList.remove('dragging'); };
  rail.addEventListener('pointerup', stop);
  rail.addEventListener('pointercancel', stop);
}

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const email = String(data.get('email') || '');
    const subject = String(data.get('subject') || '');
    const message = String(data.get('message') || '');
    const body = `Absender: ${email}\n\n${message}`;
    window.location.href = `mailto:booking@philipe-music.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
