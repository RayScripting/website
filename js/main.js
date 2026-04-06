/* ── HAMBURGER ── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

function closeMenu() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── LANGUAGE ── */
const navLabels = {
  de: { about: 'Über mich',   services: 'Womit ich helfe', contact: 'Kontakt'   },
  ro: { about: 'Despre mine', services: 'Cum ajut',        contact: 'Contact'   },
  en: { about: 'About me',    services: 'How I help',      contact: 'Contact'   },
  hu: { about: 'Rólam',       services: 'Miben segítek',   contact: 'Kapcsolat' },
};

function setLang(lang) {
  document.querySelectorAll('[data-t]').forEach(el => {
    el.classList.toggle('active', el.dataset.t === lang);
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.textContent = navLabels[lang][el.dataset.nav];
  });
  document.documentElement.lang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

/* ── CARD ANIMATION ── */
const cards = document.querySelectorAll('.service-card');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const idx = [...cards].indexOf(e.target);
      e.target.style.animation = `fadeUp 0.5s ease ${idx * 0.08}s both`;
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
cards.forEach(c => io.observe(c));
