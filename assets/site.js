'use strict';
// Pacta website — language toggle (EN/ES), persisted across pages.
(function () {
  var KEY = 'pacta-lang';
  var saved = 'en';
  try { saved = localStorage.getItem(KEY) || 'en'; } catch (e) { /* private mode */ }
  if (saved !== 'en' && saved !== 'es') saved = 'en';

  function apply(lang) {
    document.body.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-set-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-set-lang') === lang ? 'true' : 'false');
    });
    try { localStorage.setItem(KEY, lang); } catch (e) { /* private mode */ }
  }

  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest('[data-set-lang]');
    if (btn) apply(btn.getAttribute('data-set-lang'));
  });

  apply(saved);

  // Rewrite app links to the deployed marketplace URL (site/assets/config.js).
  var appUrl = window.PACTA_APP_URL;
  if (appUrl && appUrl !== 'http://localhost:3220') {
    document.querySelectorAll('a[href^="http://localhost:3220"]').forEach(function (a) {
      a.href = appUrl + a.getAttribute('href').slice('http://localhost:3220'.length);
    });
  }
})();
