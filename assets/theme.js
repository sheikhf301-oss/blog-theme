(function () {
  'use strict';

  // Mobile nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  var navBar = document.querySelector('.site-header__nav-bar');
  if (navToggle && navBar) {
    navToggle.addEventListener('click', function () {
      var open = navBar.classList.toggle('nav--open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Tag filter on blog page
  var tagLinks = document.querySelectorAll('.tag-filter__link');
  tagLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      tagLinks.forEach(function (l) { l.classList.remove('tag-filter__link--active'); });
      link.classList.add('tag-filter__link--active');
    });
  });

  // Newsletter form — prevent double submit
  var newsletterForm = document.querySelector('.newsletter__form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function () {
      var btn = newsletterForm.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Subscribing…';
      }
    });
  }
})();
