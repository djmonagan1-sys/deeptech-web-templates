/* =========================================================================
   LATTICE QUANTUM — renderer + interactions
   Reads window.SITE (from content.js) and builds the page. To change
   words/specs/links, edit content.js — not this file.
   ========================================================================= */
(function () {
  "use strict";

  var S = window.SITE || {};
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- tiny helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  // Resolve "hero.kicker" against the SITE object
  function get(path) {
    return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, S);
  }
  // Escape user content before injecting as HTML
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---------- text bindings: [data-bind="path"] ---------- */
  document.querySelectorAll("[data-bind]").forEach(function (node) {
    var val = get(node.getAttribute("data-bind"));
    if (node.getAttribute("data-bind") === "brand" && S.brand) {
      node.innerHTML = esc(S.brand.name) + '<span class="accent">' + esc(S.brand.accent) + "</span>";
    } else if (val != null) {
      node.textContent = val;
    }
  });

  /* ---------- section headers: <header data-head="technology"> ---------- */
  document.querySelectorAll("[data-head]").forEach(function (node) {
    var d = get(node.getAttribute("data-head"));
    if (!d) return;
    node.innerHTML =
      '<p class="kicker"><span class="kicker__idx">[ ' + esc(d.index || "•") + " ]</span>" +
        esc(d.kicker) + "</p>" +
      "<h2>" + esc(d.title) + "</h2>" +
      (d.sub ? '<p class="shead__sub">' + esc(d.sub) + "</p>" : "");
  });

  /* ---------- nav ---------- */
  var navLinks = $("#nav-links");
  if (navLinks && S.nav) {
    S.nav.forEach(function (l) {
      navLinks.appendChild(el('<a href="' + esc(l.href) + '">' + esc(l.label) + "</a>"));
    });
    if (S.navCta) {
      navLinks.appendChild(
        el('<a class="btn btn--ghost" href="' + esc(S.navCta.href) + '">' + esc(S.navCta.label) + "</a>")
      );
    }
  }

  /* ---------- hero actions + stats ---------- */
  var heroActions = $("#hero-actions");
  if (heroActions && S.hero) {
    S.hero.actions.forEach(function (a) {
      heroActions.appendChild(
        el('<a class="btn btn--' + (a.style || "ghost") + '" href="' + esc(a.href) + '">' + esc(a.label) + "</a>")
      );
    });
  }
  var heroStats = $("#hero-stats");
  if (heroStats && S.hero) {
    S.hero.stats.forEach(function (s) {
      heroStats.appendChild(
        el(
          "<div><dd>" + esc(s.value) + "</dd><dt>" + esc(s.unit) + "</dt>" +
          '<span class="stat-label">' + esc(s.label) + "</span></div>"
        )
      );
    });
  }

  /* ---------- trust logos ---------- */
  var trustLogos = $("#trust-logos");
  if (trustLogos && S.trust) {
    S.trust.logos.forEach(function (t) {
      trustLogos.appendChild(el("<li>" + esc(t) + "</li>"));
    });
  }

  /* ---------- technology cards + steps ---------- */
  // A few inline icons, picked by card position.
  var ICONS = [
    '<svg viewBox="0 0 24 24"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/></svg>',
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  ];
  var techCards = $("#tech-cards");
  if (techCards && S.technology) {
    S.technology.cards.forEach(function (c, i) {
      techCards.appendChild(
        el(
          '<article class="panel card reveal">' +
            '<div class="card__icon" aria-hidden="true">' + (ICONS[i % ICONS.length]) + "</div>" +
            "<h3>" + esc(c.title) + "</h3><p>" + esc(c.body) + "</p>" +
          "</article>"
        )
      );
    });
  }
  var techSteps = $("#tech-steps");
  if (techSteps && S.technology) {
    techSteps.classList.add("reveal");
    S.technology.steps.forEach(function (s, i) {
      var n = String(i + 1).padStart(2, "0");
      techSteps.appendChild(
        el(
          '<li><span class="howit__num">' + n + " / " + esc(s.title.toUpperCase()) + "</span>" +
          "<h4>" + esc(s.title) + "</h4><p>" + esc(s.body) + "</p></li>"
        )
      );
    });
  }

  /* ---------- products ---------- */
  var productsGrid = $("#products-grid");
  if (productsGrid && S.products) {
    S.products.items.forEach(function (p) {
      var specs = p.specs.map(function (s) {
        return "<li><span>" + esc(s.k) + "</span><strong>" + esc(s.v) + "</strong></li>";
      }).join("");
      productsGrid.appendChild(
        el(
          '<article class="panel product reveal' + (p.featured ? " product--featured" : "") + '">' +
            '<div class="product__tag">' + esc(p.tag) + "</div>" +
            "<h3>" + esc(p.name) + "</h3>" +
            '<p class="product__desc">' + esc(p.desc) + "</p>" +
            '<ul class="spec">' + specs + "</ul>" +
            '<a class="product__link" href="' + esc(p.link.href) + '">' + esc(p.link.label) + "</a>" +
          "</article>"
        )
      );
    });
  }

  /* ---------- applications ---------- */
  var appsGrid = $("#apps-grid");
  if (appsGrid && S.applications) {
    S.applications.items.forEach(function (a, i) {
      var idx = "A" + String(i + 1).padStart(2, "0");
      appsGrid.appendChild(
        el(
          '<article class="panel app reveal">' +
            '<span class="app__idx">' + idx + "</span>" +
            "<h3>" + esc(a.title) + "</h3><p>" + esc(a.body) + "</p>" +
          "</article>"
        )
      );
    });
  }

  /* ---------- banner cta ---------- */
  var bannerCta = $("#banner-cta");
  if (bannerCta && S.banner && S.banner.cta) {
    bannerCta.appendChild(
      el('<a class="btn btn--primary" href="' + esc(S.banner.cta.href) + '">' + esc(S.banner.cta.label) + "</a>")
    );
  }

  /* ---------- company ---------- */
  var companyParas = $("#company-paragraphs");
  if (companyParas && S.company) {
    S.company.paragraphs.forEach(function (p) {
      companyParas.appendChild(el("<p>" + esc(p) + "</p>"));
    });
  }
  var companyValues = $("#company-values");
  if (companyValues && S.company) {
    S.company.values.forEach(function (v) {
      companyValues.appendChild(
        el("<div><strong>" + esc(v.title) + "</strong><span>" + esc(v.body) + "</span></div>")
      );
    });
  }
  var companyStats = $("#company-stats");
  if (companyStats && S.company) {
    S.company.stats.forEach(function (s) {
      companyStats.appendChild(
        el('<div class="stat"><strong>' + esc(s.value) + "</strong><span>" + esc(s.label) + "</span></div>")
      );
    });
  }

  /* ---------- contact interests ---------- */
  var interests = $("#contact-interests");
  if (interests && S.contact) {
    interests.appendChild(el('<option value="">Select one…</option>'));
    S.contact.interests.forEach(function (o) {
      interests.appendChild(el("<option>" + esc(o) + "</option>"));
    });
  }

  /* ---------- footer columns ---------- */
  var footerCols = $("#footer-cols");
  if (footerCols && S.footer) {
    S.footer.columns.forEach(function (col) {
      var links = col.links.map(function (l) {
        return '<a href="' + esc(l.href) + '">' + esc(l.label) + "</a>";
      }).join("");
      footerCols.appendChild(el("<div><h4>" + esc(col.title) + "</h4>" + links + "</div>"));
    });
  }

  /* =======================================================================
     INTERACTIONS
     ===================================================================== */

  var yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* sticky nav */
  var nav = $("#nav");
  var onScroll = function () { nav.classList.toggle("is-scrolled", window.scrollY > 12); };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* mobile menu */
  var toggle = $(".nav__toggle");
  var links = $("#nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* reveal on scroll */
  var revealEls = document.querySelectorAll(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (e) { e.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            setTimeout(function () { entry.target.classList.add("is-visible"); }, i * 60);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (e) { io.observe(e); });
  }

  /* contact form (demo handler) */
  var form = $(".form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = $(".form__note", form);
      var email = form.querySelector('input[name="email"]');
      var name = form.querySelector('input[name="name"]');
      if (!name.value.trim() || !email.value.trim() || !email.checkValidity()) {
        if (note) { note.style.color = "#ff8a8a"; note.textContent = "Enter your name and a valid work email."; }
        return;
      }
      if (note) {
        note.style.color = "";
        note.textContent = "Thanks — message queued. (Demo template: wire this form to your backend.)";
      }
      form.reset();
    });
  }

  /* hero particle field — a "quantum lattice" of square nodes */
  var canvas = $(".hero__canvas");
  if (canvas && !prefersReducedMotion) {
    var ctx = canvas.getContext("2d");
    var width, height, dpr, nodes, raf, running = true;
    var NODE_BASE = 56, LINK_DIST = 130;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth; height = canvas.offsetHeight;
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }
    function seed() {
      var count = Math.round(NODE_BASE * Math.min(1, (width * height) / (1280 * 720)));
      nodes = [];
      for (var i = 0; i < Math.max(26, count); i++) {
        nodes.push({
          x: Math.random() * width, y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.32, vy: (Math.random() - 0.5) * 0.32,
          s: Math.random() * 2 + 1.4,
        });
      }
    }
    function step() {
      ctx.clearRect(0, 0, width, height);
      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        // square node — reads as a lattice point, not a generic dot
        ctx.fillStyle = "rgba(84, 104, 255, 0.85)";
        ctx.fillRect(n.x - n.s / 2, n.y - n.s / 2, n.s, n.s);
        for (var j = i + 1; j < nodes.length; j++) {
          var m = nodes[j];
          var dx = n.x - m.x, dy = n.y - m.y, dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            ctx.strokeStyle = "rgba(84, 104, 255, " + (1 - dist / LINK_DIST) * 0.26 + ")";
            ctx.lineWidth = 0.6;
            ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(m.x, m.y); ctx.stroke();
          }
        }
      }
      if (running) raf = requestAnimationFrame(step);
    }
    var heroObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        running = entry.isIntersecting;
        if (running) { raf = requestAnimationFrame(step); }
        else { cancelAnimationFrame(raf); }
      });
    }, { threshold: 0 });

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 150);
    });
    resize();
    heroObs.observe(canvas);
    raf = requestAnimationFrame(step);
  }
})();
