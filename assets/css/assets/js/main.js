// ============================================
// ANOUSHKA ANTONY — PORTFOLIO
// main.js — Shared JS across all pages
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Nav scroll shadow ---
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  // --- Mobile menu ---
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');
  const mobileClose = document.querySelector('.nav__mobile-close');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav__mobile a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // --- Active nav link ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // --- Scroll to top button ---
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    window.addEventListener('scroll', () => {
      scrollTop.classList.toggle('visible', window.scrollY > 400);
    });
    scrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Intersection observer for scroll animations ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Pause all animations initially, let observer trigger them
  document.querySelectorAll('.scroll-animate').forEach(el => {
    el.style.opacity = '0';
    el.style.animation = 'fadeUp 0.7s ease forwards paused';
    observer.observe(el);
  });

});
