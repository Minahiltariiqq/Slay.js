// improved menu toggle with ARIA and .open
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menu.setAttribute('aria-hidden', String(!isOpen));
  });
}

// intersection observer for fade-in elements (staggered logo reveal uses CSS delays)
const fadeEls = document.querySelectorAll('.fade-in');

if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // keep observed once shown
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.18,
    rootMargin: '0px 0px -80px 0px'
  });

  fadeEls.forEach(el => obs.observe(el));
} else {
  // fallback: reveal all
  fadeEls.forEach(el => el.classList.add('show'));
}
