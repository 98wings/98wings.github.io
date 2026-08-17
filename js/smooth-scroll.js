/* ============================================================================
   SMOOTH-SCROLL.JS — Navigation douce vers les ancres
   ----------------------------------------------------------------------------
   `scroll-behavior: smooth` couvre la plupart des navigateurs modernes ; ce
   script ajoute :
     • une compensation exacte de la hauteur de la nav sticky
     • une animation de repli (easing personnalisé) pour Safari ancien
     • la mise à jour de l'URL sans saut brutal
     • le respect de prefers-reduced-motion
   ========================================================================== */
(function () {
  'use strict';

  var reduced = window.matchMedia &&
                window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function navHeight() {
    var nav = document.getElementById('nav');
    return nav ? nav.offsetHeight + 12 : 80;
  }

  // Easing easeInOutCubic
  function ease(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animateTo(targetY, duration) {
    var startY = window.pageYOffset;
    var delta  = targetY - startY;
    var start  = null;

    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      window.scrollTo(0, startY + delta * ease(p));
      if (p < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  function scrollToTarget(el) {
    var y = el.getBoundingClientRect().top + window.pageYOffset - navHeight();
    y = Math.max(0, y);

    if (reduced) { window.scrollTo(0, y); return; }

    // Durée proportionnelle à la distance, bornée entre 380 et 900 ms
    var dist = Math.abs(y - window.pageYOffset);
    var dur  = Math.min(900, Math.max(380, dist * 0.45));
    animateTo(y, dur);
  }

  function init() {
    var links = document.querySelectorAll('a[href^="#"]');

    Array.prototype.forEach.call(links, function (link) {
      link.addEventListener('click', function (e) {
        var hash = link.getAttribute('href');
        if (!hash || hash === '#' || hash.length < 2) return;

        var target = document.querySelector(hash);
        if (!target) return;

        e.preventDefault();
        scrollToTarget(target);

        // Met à jour l'URL sans provoquer de saut
        if (history.pushState) history.pushState(null, '', hash);

        // Referme le menu mobile si ouvert
        var menu = document.getElementById('navLinks');
        var burger = document.getElementById('hamburger');
        if (menu && menu.classList.contains('is-open')) {
          menu.classList.remove('is-open');
          if (burger) {
            burger.classList.remove('is-open');
            burger.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });

    // Si la page est ouverte avec une ancre, on recale après le rendu
    if (window.location.hash) {
      var initial = document.querySelector(window.location.hash);
      if (initial) {
        window.setTimeout(function () { scrollToTarget(initial); }, 120);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
