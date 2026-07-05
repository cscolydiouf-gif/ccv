/* =========================================================
   script.js — Interactivité du CV (version simplifiée)
   1. Mode sombre / clair
   2. Menu hamburger + smooth scroll
   3. Animation des barres de compétences
   4. Apparition des sections au scroll
   5. Formulaire de contact
   6. Bouton retour en haut
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* 1. THEME */
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('i');
  const root = document.documentElement;

  const applyTheme = (theme) => {
    const isDark = theme === 'dark';
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    themeIcon.classList.toggle('fa-sun', isDark);
    themeIcon.classList.toggle('fa-moon', !isDark);
  };

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(localStorage.getItem('cv-theme') || (prefersDark ? 'dark' : 'light'));

  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('cv-theme', next);
  });

  /* 2. MENU HAMBURGER + SMOOTH SCROLL */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  const closeMenu = () => {
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  document.querySelectorAll('.nav-link').forEach(link =>
    link.addEventListener('click', closeMenu)
  );

  /* Utilitaire commun pour les deux IntersectionObserver */
  const observeOnce = (selector, threshold, callback) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold });
    document.querySelectorAll(selector).forEach(el => observer.observe(el));
  };

  /* 3. BARRES DE COMPÉTENCES */
  observeOnce('.skill', 0.4, (skill) => {
    skill.querySelector('.skill-fill').style.width = skill.dataset.level + '%';
  });

  /* 4. APPARITION DES SECTIONS */
  observeOnce('.section, .hero-inner', 0.15, (el) => {
    el.classList.add('in-view');
  });

  /* 5. FORMULAIRE DE CONTACT */
  const form = document.getElementById('contact-form');
  const fields = {
    name: { el: document.getElementById('name'), errorId: 'name-error',
      test: v => v.trim() !== '', msg: 'Le nom est requis.' },
    email: { el: document.getElementById('email'), errorId: 'email-error',
      test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), msg: 'Veuillez saisir un e-mail valide.' },
    message: { el: document.getElementById('message'), errorId: 'message-error',
      test: v => v.trim() !== '', msg: 'Le message ne peut pas être vide.' },
  };
  const successMsg = document.getElementById('form-success');

  const validateField = ({ el, errorId, test, msg }) => {
    const errorEl = document.getElementById(errorId);
    const ok = test(el.value);
    errorEl.textContent = ok ? '' : msg;
    el.closest('.form-group').classList.toggle('invalid', !ok);
    return ok;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMsg.textContent = '';

    const isValid = Object.values(fields)
      .map(validateField)
      .every(Boolean);

    if (isValid) {
      successMsg.textContent = 'Merci ! Votre message a bien été envoyé.';
      form.reset();
      setTimeout(() => { successMsg.textContent = ''; }, 5000);
    }
  });

  /* 6. RETOUR EN HAUT */
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});
