/* ============================================================
   PORTFÓLIO — LÍVIA LUCENA DE SOUZA
   main.js
   ============================================================ */

// ── NAV SCROLL ──
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  nav.style.borderBottom = 'none';
});
nav.style.borderBottom = 'none';

// ── ACTIVE NAV LINK ──
const navLinks = document.querySelectorAll('.nav-link');
document.querySelectorAll('section[id]').forEach(s =>
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const a = document.querySelector('.nav-link[href="#' + e.target.id + '"]');
        if (a) a.classList.add('active');
      }
    });
  }, { threshold: 0.4 }).observe(s)
);

// ── FADE UP ON SCROLL ──
document.querySelectorAll('.fade-up').forEach(el =>
  new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 }).observe(el)
);

// ── PROJECT FILTER ──
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-item').forEach(item => {
      const match = filter === 'all' || item.dataset.category === filter;
      item.style.transition = 'opacity 0.3s, transform 0.3s';
      item.style.opacity    = match ? '1'    : '0.15';
      item.style.transform  = match ? 'scale(1)' : 'scale(0.97)';
      item.style.pointerEvents = match ? 'auto' : 'none';
    });
  });
});

// ── CURSOR GLOW ──
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
});

// ── REVELAÇÃO DA HERO (entrada suave) ──
(function () {
  gsap.to('#hero-text',  { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' });
  gsap.to('#hero-photo', { opacity: 1, y: 0, duration: 1.5, delay: 0.3, ease: 'power2.out' });
})();
