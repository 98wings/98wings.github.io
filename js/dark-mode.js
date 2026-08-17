/* ============================================================================
   DARK-MODE.JS — Bascule de thème avec persistance (localStorage)
   ----------------------------------------------------------------------------
   Le thème initial est appliqué par le petit script inline dans <head>
   (évite le "flash" blanc au chargement). Ce fichier gère seulement le bouton.
   ========================================================================== */
(function () {
  'use strict';

  var root   = document.documentElement;
  var KEY    = 'theme';

  function current() {
    return root.getAttribute('data-theme') || 'light';
  }

  function apply(theme) {
    // Active une transition douce uniquement pendant le changement
    root.classList.add('theme-transition');
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(KEY, theme); } catch (e) { /* mode privé */ }

    // Met à jour la couleur de la barre système sur mobile
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#ffffff' : '#0f1115');

    window.setTimeout(function () {
      root.classList.remove('theme-transition');
    }, 360);
  }

  function init() {
    var btn = document.getElementById('themeToggle');
    if (btn) {
      btn.addEventListener('click', function () {
        apply(current() === 'dark' ? 'light' : 'dark');
      });
    }

    // Suit le réglage système tant que l'utilisateur n'a pas choisi manuellement
    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: light)');
      var listener = function (e) {
        var stored = null;
        try { stored = localStorage.getItem(KEY); } catch (err) { /* noop */ }
        if (!stored) apply(e.matches ? 'light' : 'dark');
      };
      if (mq.addEventListener) mq.addEventListener('change', listener);
      else if (mq.addListener) mq.addListener(listener);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
