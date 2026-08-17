/* ============================================================================
   MAIN.JS — Interactions principales
   ----------------------------------------------------------------------------
   1.  Révélation des sections au scroll (IntersectionObserver + stagger)
   2.  Lien de navigation actif (scroll spy)
   3.  Menu hamburger mobile
   4.  Nav sticky : ombre au scroll + barre de progression
   5.  Compteurs animés
   6.  Filtrage des publications et des projets
   7.  News « Show more / Show less »
   8.  Bouton retour en haut
   9.  Formulaire de contact (Formspree + repli mailto)
   10. Année et date de mise à jour automatiques
   11. Photo de profil : repli si l'image est absente
   ========================================================================== */
(function () {
  'use strict';

  var reduced = window.matchMedia &&
                window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------------
     1. RÉVÉLATION AU SCROLL
     ----------------------------------------------------------------------*/
  function initReveal() {
    var items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;

    if (!('IntersectionObserver' in window) || reduced) {
      Array.prototype.forEach.call(items, function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        // Cascade : les éléments frères apparaissent l'un après l'autre
        var el = entry.target;
        var siblings = el.parentElement
          ? Array.prototype.filter.call(el.parentElement.children, function (c) {
              return c.hasAttribute && c.hasAttribute('data-reveal');
            })
          : [];
        var index = siblings.indexOf(el);
        el.style.setProperty('--d', (index > -1 ? Math.min(index, 6) * 90 : 0) + 'ms');

        el.classList.add('is-visible');
        observer.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    Array.prototype.forEach.call(items, function (el) { observer.observe(el); });
  }

  /* ------------------------------------------------------------------------
     2. SCROLL SPY — lien de nav actif
     ----------------------------------------------------------------------*/
  function initScrollSpy() {
    var links = document.querySelectorAll('.nav__links a[href^="#"]');
    if (!links.length) return;

    var map = {};
    var sections = [];
    Array.prototype.forEach.call(links, function (link) {
      var id = link.getAttribute('href').slice(1);
      var sec = document.getElementById(id);
      if (sec) { map[id] = link; sections.push(sec); }
    });

    function update() {
      var pos = window.pageYOffset + (window.innerHeight * 0.28);
      var currentId = null;

      sections.forEach(function (sec) {
        if (sec.offsetTop <= pos) currentId = sec.id;
      });

      // En bas de page, on force la dernière section
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 60) {
        currentId = sections[sections.length - 1].id;
      }

      Array.prototype.forEach.call(links, function (l) { l.classList.remove('is-active'); });
      if (currentId && map[currentId]) map[currentId].classList.add('is-active');
    }

    window.addEventListener('scroll', throttle(update, 120), { passive: true });
    update();
  }

  /* ------------------------------------------------------------------------
     3. MENU HAMBURGER
     ----------------------------------------------------------------------*/
  function initMenu() {
    var burger = document.getElementById('hamburger');
    var menu   = document.getElementById('navLinks');
    if (!burger || !menu) return;

    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    // Fermeture au clic extérieur
    document.addEventListener('click', function (e) {
      if (!menu.classList.contains('is-open')) return;
      if (menu.contains(e.target) || burger.contains(e.target)) return;
      menu.classList.remove('is-open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });

    // Fermeture avec Échap
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.focus();
      }
    });
  }

  /* ------------------------------------------------------------------------
     4. NAV STICKY + BARRE DE PROGRESSION
     ----------------------------------------------------------------------*/
  function initScrollChrome() {
    var nav  = document.getElementById('nav');
    var bar  = document.getElementById('scrollProgress');
    var top  = document.getElementById('toTop');

    function onScroll() {
      var y = window.pageYOffset;

      if (nav) nav.classList.toggle('is-scrolled', y > 8);
      if (top) top.classList.toggle('is-visible', y > 500);

      if (bar) {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', throttle(onScroll, 200));
    onScroll();

    if (top) {
      top.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
      });
    }
  }

  /* ------------------------------------------------------------------------
     5. COMPTEURS ANIMÉS
     ----------------------------------------------------------------------*/
  function initCounters() {
    var nums = document.querySelectorAll('[data-count]');
    if (!nums.length) return;

    function run(el) {
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;
      if (reduced) { el.textContent = target; return; }

      var duration = 1400;
      var start = null;

      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        // easeOutExpo
        var eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
        el.textContent = Math.round(target * eased);
        if (p < 1) window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }

    if (!('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(nums, run);
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { run(entry.target); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.5 });

    Array.prototype.forEach.call(nums, function (n) { obs.observe(n); });
  }

  /* ------------------------------------------------------------------------
     6. FILTRES (publications & projets)
     ----------------------------------------------------------------------*/
  function initFilters() {
    // --- Publications : filtre par année ou par type ---
    bindFilter('[data-filter]', '.pub', function (pub, value) {
      return value === 'all' ||
             pub.getAttribute('data-year') === value ||
             pub.getAttribute('data-type') === value;
    });

    // --- Projets : filtre par catégorie ---
    bindFilter('[data-pfilter]', '.project', function (proj, value) {
      return value === 'all' || proj.getAttribute('data-cat') === value;
    });
  }

  function bindFilter(btnSelector, itemSelector, matcher) {
    var buttons = document.querySelectorAll(btnSelector);
    var items   = document.querySelectorAll(itemSelector);
    if (!buttons.length || !items.length) return;

    Array.prototype.forEach.call(buttons, function (btn) {
      btn.addEventListener('click', function () {
        var value = btn.getAttribute('data-filter') || btn.getAttribute('data-pfilter');

        Array.prototype.forEach.call(buttons, function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');

        Array.prototype.forEach.call(items, function (item) {
          item.classList.toggle('is-filtered', !matcher(item, value));
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     7. NEWS — Show more / Show less
     ----------------------------------------------------------------------*/
  function initNews() {
    var btn = document.getElementById('newsToggle');
    var list = document.getElementById('newsList');
    if (!btn || !list) return;

    var hidden = list.querySelectorAll('.news__item.is-hidden');
    if (!hidden.length) { btn.style.display = 'none'; return; }

    var expanded = false;
    function updateLabel() {
      var lang = document.documentElement.getAttribute('data-lang') || 'en';
      btn.textContent = expanded
        ? (lang === 'fr' ? 'Afficher moins' : lang === 'zh' ? '显示更少' : 'Show less')
        : (lang === 'fr' ? 'Afficher plus' : lang === 'zh' ? '显示更多' : 'Show more');
    }

    btn.addEventListener('click', function () {
      expanded = !expanded;
      Array.prototype.forEach.call(list.querySelectorAll('.news__item'), function (item, i) {
        if (i >= 3) item.classList.toggle('is-hidden', !expanded);
      });
      updateLabel();
    });

    updateLabel();
  }

  /* ------------------------------------------------------------------------
     8. FORMULAIRE DE CONTACT
     ----------------------------------------------------------------------*/
  function initForm() {
    var form   = document.getElementById('contactForm');
    var status = document.getElementById('formStatus');
    if (!form) return;

    var EMAIL = 'aggeebagmbaye@mail.dlut.edu.cn'; // ▼ votre adresse ▼

    var STATUS_MSG = {
      en: { opening: 'Opening your email app…', sending: 'Sending…', thanks: 'Thank you — your message was sent.', error: 'Something went wrong. Please email me directly.', network: 'Network error. Please email me directly.' },
      fr: { opening: 'Ouverture de votre client mail…', sending: 'Envoi en cours…', thanks: 'Merci — votre message a bien été envoyé.', error: 'Une erreur est survenue. Merci de m\'écrire directement par email.', network: 'Erreur réseau. Merci de m\'écrire directement par email.' },
      zh: { opening: '正在打开您的邮件客户端…', sending: '发送中…', thanks: '谢谢 — 您的消息已发送。', error: '出现问题,请直接给我发邮件。', network: '网络错误,请直接给我发邮件。' }
    };
    function msg(key) {
      var lang = document.documentElement.getAttribute('data-lang') || 'en';
      return (STATUS_MSG[lang] || STATUS_MSG.en)[key];
    }

    form.addEventListener('submit', function (e) {
      var action = form.getAttribute('action') || '';

      if (status) status.classList.remove('is-success', 'is-error');

      // Formspree non configuré → repli sur le client mail
      if (action.indexOf('YOUR_ID') !== -1 || action === '') {
        e.preventDefault();
        var name = (form.name && form.name.value) || '';
        var mail = (form.email && form.email.value) || '';
        var msg2  = (form.message && form.message.value) || '';
        var body = encodeURIComponent(msg2 + '\n\n— ' + name + ' (' + mail + ')');
        window.location.href = 'mailto:' + EMAIL +
          '?subject=' + encodeURIComponent('Website contact — ' + name) +
          '&body=' + body;
        if (status) status.textContent = msg('opening');
        return;
      }

      // Envoi AJAX vers Formspree — la confirmation ne s'affiche
      // qu'après une vraie réponse HTTP 200 du serveur Formspree.
      e.preventDefault();
      if (status) status.textContent = msg('sending');

      fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            if (status) { status.textContent = msg('thanks'); status.classList.add('is-success'); }
          } else {
            if (status) { status.textContent = msg('error'); status.classList.add('is-error'); }
          }
        })
        .catch(function () {
          if (status) { status.textContent = msg('network'); status.classList.add('is-error'); }
        });
    });
  }

  /* ------------------------------------------------------------------------
     9. DATES AUTOMATIQUES
     ----------------------------------------------------------------------*/
  function initDates() {
    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    var updated = document.getElementById('updated');
    if (updated && document.lastModified) {
      var d = new Date(document.lastModified);
      if (!isNaN(d.getTime())) {
        updated.textContent = d.toLocaleDateString('en-GB', {
          day: 'numeric', month: 'short', year: 'numeric'
        });
        updated.setAttribute('datetime', d.toISOString().slice(0, 10));
      }
    }
  }

  /* ------------------------------------------------------------------------     LANGUAGE SELECTOR
     ----------------------------------------------------------------------*/
  function initLanguageSelector() {
    var langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        if (switchLanguage && typeof switchLanguage === 'function') {
          switchLanguage(lang);
        }
      });
    });
  }

  /* ------------------------------------------------------------------------     10. IMAGES — repli si un fichier est absent
     ----------------------------------------------------------------------*/
  function initImageFallbacks() {
    Array.prototype.forEach.call(document.images, function (img) {
      img.addEventListener('error', function () {
        if (img.dataset.fallbackDone) return;
        img.dataset.fallbackDone = '1';
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260">' +
          '<rect width="400" height="260" fill="#1e232c"/>' +
          '<text x="200" y="140" text-anchor="middle" fill="#6f7783" ' +
          'font-family="sans-serif" font-size="16">image</text></svg>'
        );
      });
    });
  }

  /* ------------------------------------------------------------------------
     UTILITAIRE — throttle basé sur requestAnimationFrame
     ----------------------------------------------------------------------*/
  function throttle(fn, wait) {
    var last = 0, timer = null;
    return function () {
      var now = Date.now();
      var args = arguments, ctx = this;
      if (now - last >= wait) {
        last = now;
        fn.apply(ctx, args);
      } else if (!timer) {
        timer = setTimeout(function () {
          last = Date.now();
          timer = null;
          fn.apply(ctx, args);
        }, wait - (now - last));
      }
    };
  }

  /* ------------------------------------------------------------------------
     DÉMARRAGE
     ----------------------------------------------------------------------*/
  function init() {
    initLanguageSelector();
    initReveal();
    initScrollSpy();
    initMenu();
    initScrollChrome();
    initCounters();
    initFilters();
    initNews();
    initForm();
    initDates();
    initImageFallbacks();
    console.log('%c Aggée Bagmbaye — 98wings.github.io ', 'background:#2563eb;color:#fff;padding:3px 8px;border-radius:4px');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
