/* Speaking Model — reading aids for the dictionary layout.
   Progressive enhancement only: the contents list, every anchor, and the whole
   text work with this file absent. Adds three things:
     1. an ordinal line on each Part heading  ("PART IV" over "Epistemic Controls")
     2. a live guide word + marginal current-position marker, on scroll
     3. the contents drawer on narrow screens
   No dependencies. */
(function () {
  'use strict';

  var doc = document;
  var band = doc.querySelector('.runninghead');
  var guide = doc.getElementById('guideword');
  var rail = doc.getElementById('contents');
  var text = doc.getElementById('text');
  if (!band || !text) return;

  var GUIDE_DEFAULT = guide ? guide.textContent : '';

  /* ── Sections ────────────────────────────────────────────────────────────
     Every <h2> in the text is a section, except the edition line, which is a
     subtitle sitting directly after the <h1>. */
  var headings = Array.prototype.filter.call(
    text.querySelectorAll('h2'),
    function (h) {
      var prev = h.previousElementSibling;
      return !(prev && prev.tagName === 'H1');
    }
  );

  var sections = headings.map(function (h) {
    return {
      el: h,
      label: h.textContent.trim(),
      link: rail ? rail.querySelector('[data-spy-link="' + CSS.escape(h.id) + '"]') : null
    };
  });

  /* ── 1. Set each heading as a dictionary section head ───────────────────
     "Part IV — Epistemic Controls"                 → ordinal line + name
     "Preface (unchanged, because it's the point)"  → name + glossed aside
     Text content is unchanged; only its typographic role is split out. Each
     section also gets a short label for the guide word, which is a wayfinding
     cue and has no room for the parentheses. */
  sections.forEach(function (s) {
    var m = s.label.match(/^(Part\s+[IVXLCDM]+)\s*[—–-]\s*(.+)$/);
    var name = m ? m[2] : s.label;
    var gloss = '';

    var g = name.match(/^(.*\S)\s*(\([^()]*\))\s*$/);
    if (g) { name = g[1]; gloss = g[2]; }

    s.short = m ? m[1] + ' — ' + name : name;
    if (!m && !gloss) return;

    s.el.textContent = name;
    if (gloss) {
      var aside = doc.createElement('span');
      aside.className = 'h-aside';
      aside.textContent = ' ' + gloss;
      s.el.appendChild(aside);
    }
    if (m) {
      var ord = doc.createElement('span');
      ord.className = 'h-ord';
      ord.textContent = m[1];
      s.el.insertBefore(ord, s.el.firstChild);
    }
  });

  /* ── 2. Guide word + reading position ──────────────────────────────────── */
  var current = null;

  function update() {
    /* A heading counts as "current" once it reaches the band. The tolerance
       must clear .text h2's scroll-margin-top (band + 1.25rem), or an anchor
       jump lands on a section the guide word still calls the previous one. */
    var edge = band.offsetHeight + 28;
    var found = null;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].el.getBoundingClientRect().top <= edge) found = sections[i];
      else break;
    }
    if (found === current) return;

    if (current && current.link) current.link.removeAttribute('aria-current');
    current = found;
    if (current && current.link) current.link.setAttribute('aria-current', 'true');
    if (guide) guide.textContent = current ? (current.short || current.label) : GUIDE_DEFAULT;
  }

  var queued = false;
  function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () {
      queued = false;
      update();
    });
  }

  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  update();

  /* ── 3. Contents drawer, narrow screens only ───────────────────────────── */
  if (!rail) return;
  doc.body.setAttribute('data-enhanced', 'true');
  rail.setAttribute('tabindex', '-1');

  var toggle = doc.createElement('button');
  toggle.type = 'button';
  toggle.className = 'contents-toggle';
  toggle.textContent = 'Contents';
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'contents');
  band.querySelector('.runninghead__inner').appendChild(toggle);

  var narrow = matchMedia('(max-width: 61.99rem)');

  function setOpen(open) {
    rail.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
  }

  function sync() {
    if (narrow.matches) setOpen(false);
    else {
      rail.hidden = false;              // the rail is permanent furniture wide
      toggle.setAttribute('aria-expanded', 'false');
    }
  }

  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!open);
    if (!open) rail.focus();
  });

  rail.addEventListener('click', function (e) {
    if (narrow.matches && e.target.closest('a')) setOpen(false);
  });

  doc.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' || !narrow.matches) return;
    if (toggle.getAttribute('aria-expanded') !== 'true') return;
    setOpen(false);
    toggle.focus();
  });

  doc.addEventListener('click', function (e) {
    if (!narrow.matches) return;
    if (toggle.getAttribute('aria-expanded') !== 'true') return;
    if (rail.contains(e.target) || toggle.contains(e.target)) return;
    setOpen(false);
  });

  if (narrow.addEventListener) narrow.addEventListener('change', sync);
  else narrow.addListener(sync);
  sync();

  /* list-style:none strips list semantics in some screen readers; restore it. */
  Array.prototype.forEach.call(text.querySelectorAll('ul, ol'), function (l) {
    l.setAttribute('role', 'list');
  });
})();
