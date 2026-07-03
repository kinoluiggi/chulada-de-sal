// Nav burger
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav__links');
burger?.addEventListener('click', () => navLinks.classList.toggle('open'));

// Nav scroll shadow
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  nav.style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(44,44,44,.08)' : 'none';
});

// Smooth close on link click
document.querySelectorAll('.nav__links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Animate on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.producto-card, .beneficio, .values__item, .colima__dato').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
