/* ==========================================================================
   PORTFOLIO — interactions et animations
   JavaScript natif, aucune dépendance.
   ========================================================================== */
(() => {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const data = window.PORTFOLIO || { PROJECTS: [], PROCEDURES: [], BLOC1: {} };

  const esc = (s = "") =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  /* ------------------------------------------------------------------
     1. Rendu du contenu depuis data.js
     ------------------------------------------------------------------ */
  function projectVisual(p) {
    if (p.cover) {
      return `
        <div class="mock">
          <div class="mock__bar"><i></i><i></i><i></i></div>
          <div class="mock__body">
            <img src="${esc(p.cover)}" alt="" loading="lazy" />
            <span class="mock__line"></span>
            <span class="mock__line mock__line--short"></span>
            <div class="mock__cards"><span></span><span></span><span></span></div>
          </div>
        </div>`;
    }
    return `
      <div class="mock mock--dark">
        <div class="mock__bar"><i></i><i></i><i></i></div>
        <div class="mock__body">
          <div class="mock__hero"><b>${esc(p.title)}</b><span class="mock__line"></span><span class="mock__line mock__line--short"></span></div>
          <div class="mock__cards"><span></span><span></span><span></span></div>
        </div>
      </div>`;
  }

  function renderProjects() {
    const list = $("[data-projects]");
    if (!list) return;

    const cards = data.PROJECTS.map((p, i) => `
      <button class="project" data-reveal data-spotlight data-project="${esc(p.id)}"
        style="--glow:${esc(p.accent || "#D9774B")}22" aria-haspopup="dialog">
        <div class="project__visual">
          <div class="project__visual-inner">${projectVisual(p)}</div>
          <span class="project__tagline">${String(i + 1).padStart(2, "0")} / ${String(data.PROJECTS.length).padStart(2, "0")}</span>
          ${p.status ? `<span class="status-pill"><span class="dot"></span>${esc(p.status)}</span>` : ""}
        </div>
        <div class="project__info">
          <div>
            <div class="project__meta mono"><span>${esc(p.kind)}</span><span>${esc(p.year)}</span></div>
            <h3 class="project__title">${esc(p.title)}</h3>
            <p class="project__summary">${esc(p.summary)}</p>
          </div>
          <div class="project__foot">
            <ul class="chips">${p.stack.slice(0, 5).map((s) => `<li>${esc(s)}</li>`).join("")}${
              p.stack.length > 5 ? `<li>+${p.stack.length - 5}</li>` : ""
            }</ul>
            <span class="project__open">Détails <i>${ARROW}</i></span>
          </div>
        </div>
      </button>`).join("");

    list.innerHTML = cards;
  }

  function renderProcedures() {
    const grid = $("[data-procedures]");
    if (!grid) return;
    // Le texte entre `accents graves` est affiché comme du code.
    const fmt = (s) => esc(s).replace(/`([^`]+)`/g, "<code>$1</code>");

    grid.innerHTML = data.PROCEDURES.map((p) => `
      <article class="proc" data-reveal>
        <div class="proc__img">
          <img src="${esc(p.image)}" alt="" loading="lazy" />
          <span class="proc__badge">${esc(p.tool)}</span>
        </div>
        <div class="proc__body">
          <div class="proc__meta mono"><span>${esc(p.project)}</span><span>${esc(p.date)}</span></div>
          <h3 class="proc__title">${esc(p.title)}</h3>
          <ol class="proc__steps">${p.steps.map((s) => `<li><span>${fmt(s)}</span></li>`).join("")}</ol>
          <div class="proc__foot"><a class="link-arrow" href="${esc(p.href)}" target="_blank" rel="noopener">Lire la procédure (PDF)</a></div>
        </div>
      </article>`).join("");
  }

  function renderMatrix() {
    const table = $("[data-matrix]");
    if (!table) return;
    const keys = Object.keys(data.BLOC1);
    let n = 0;
    table.innerHTML = `
      <thead><tr><th scope="col">Compétence</th>${data.PROJECTS.map((p) => `<th scope="col">${esc(p.title)}</th>`).join("")}</tr></thead>
      <tbody>${keys.map((k) => `
        <tr><td>${esc(data.BLOC1[k])}</td>${data.PROJECTS.map((p) =>
          p.bloc1.includes(k)
            ? `<td><span class="check" style="--i:${n++}" aria-label="Oui">✓</span></td>`
            : `<td><span class="empty" aria-label="Non">·</span></td>`
        ).join("")}</tr>`).join("")}
      </tbody>`;
  }

  // Documents (CV, lettre, rapport de stage) : seuls ceux qui ont un fichier sont affichés.
  const DOWNLOAD = true;
  function renderDocs() {
    const docs = (data.DOCUMENTS || []).filter((d) => d.href);
    const attrs = (d) => (DOWNLOAD ? `download="${esc(d.file)}"` : 'target="_blank" rel="noopener"');
    $$("[data-docs]").forEach((el) => {
      const mode = el.dataset.docs;
      el.innerHTML = docs.map((d) => {
        if (mode === "menu") return `<a href="${esc(d.href)}" ${attrs(d)}>${esc(d.label)} ↓</a>`;
        if (mode === "stage") return d.label.startsWith("Rapport") ? `<a href="${esc(d.href)}" class="link-arrow link-arrow--sm" ${attrs(d)}>Lire le rapport de stage</a>` : "";
        if (mode === "inline") return `<a href="${esc(d.href)}" ${attrs(d)}>${esc(d.label)}</a>`;
        return `<a href="${esc(d.href)}" class="link-arrow" ${attrs(d)}>${esc(d.label)}</a>`;
      }).join(mode === "inline" ? " · " : "");
    });
  }

  renderProjects();
  renderProcedures();
  renderMatrix();
  renderDocs();

  /* ------------------------------------------------------------------
     2. Découpage des titres en mots (effet masque)
     ------------------------------------------------------------------ */
  function splitWords(el) {
    let i = 0;
    const frag = document.createDocumentFragment();
    const wrap = (content) => {
      const outer = document.createElement("span");
      outer.className = "word";
      const inner = document.createElement("span");
      inner.style.setProperty("--i", i++);
      inner.appendChild(content);
      outer.appendChild(inner);
      return outer;
    };
    Array.from(el.childNodes).forEach((node) => {
      const text = node.textContent;
      const words = text.split(/(\s+)/);
      words.forEach((w) => {
        if (!w) return;
        if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(" ")); return; }
        if (node.nodeType === Node.ELEMENT_NODE) {
          const clone = node.cloneNode(false);
          clone.textContent = w;
          frag.appendChild(wrap(clone));
        } else {
          frag.appendChild(wrap(document.createTextNode(w)));
        }
      });
    });
    el.setAttribute("aria-label", el.textContent.trim());
    el.innerHTML = "";
    el.appendChild(frag);
    Array.from(el.children).forEach((c) => c.setAttribute("aria-hidden", "true"));
  }
  $$("[data-split]").forEach(splitWords);

  /* ------------------------------------------------------------------
     3. Apparition au défilement
     ------------------------------------------------------------------ */
  // Décalage en cascade pour les éléments frères
  const groups = new Map();
  $$("[data-reveal]").forEach((el) => {
    const parent = el.parentElement;
    const idx = groups.get(parent) || 0;
    el.style.setProperty("--delay", `${Math.min(idx, 6) * 90}ms`);
    groups.set(parent, idx + 1);
  });

  const revealTargets = $$("[data-reveal], [data-split], .tl-item, .matrix");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-inview");
          if (entry.target.hasAttribute("data-count")) countUp(entry.target);
          $$("[data-count]", entry.target).forEach(countUp);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-inview"));
    $$("[data-count]").forEach((el) => (el.textContent = el.dataset.count));
  }

  function countUp(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = "1";
    const target = parseInt(el.dataset.count, 10);
    const dur = 1600;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      el.textContent = Math.round(target * eased);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ------------------------------------------------------------------
     4. Loader d'introduction
     ------------------------------------------------------------------ */
  const loader = $(".loader");
  const countEl = $("[data-loader-count]");
  const loaderBar = $(".loader__bar span");

  function finishLoading() {
    loader.classList.add("is-done");
    document.body.classList.remove("is-loading");
    setTimeout(() => document.body.classList.add("is-ready"), 250);
    setTimeout(() => loader.remove(), 1200);
  }

  if (reduceMotion) {
    loader.remove();
    document.body.classList.remove("is-loading");
    document.body.classList.add("is-ready");
  } else {
    let pageLoaded = document.readyState === "complete";
    window.addEventListener("load", () => (pageLoaded = true));
    const minDur = 1300;
    const start = performance.now();
    const step = (now) => {
      const elapsed = now - start;
      // Progresse jusqu'à 90 % tant que la page charge, puis termine.
      let p = Math.min(elapsed / minDur, 1);
      if (!pageLoaded) p = Math.min(p, 0.9);
      const eased = 1 - Math.pow(1 - p, 3);
      countEl.textContent = Math.round(eased * 100);
      loaderBar.style.setProperty("--p", eased);
      if (p < 1) requestAnimationFrame(step);
      else setTimeout(finishLoading, 200);
    };
    requestAnimationFrame(step);
    // Sécurité : ne jamais bloquer plus de 4 s.
    setTimeout(() => { if (document.body.classList.contains("is-loading")) finishLoading(); }, 4000);
  }

  /* ------------------------------------------------------------------
     5. Navigation : état au scroll, masquage, section active
     ------------------------------------------------------------------ */
  const nav = $(".nav");
  const progress = $(".progress span");
  const rail = $(".timeline__rail span");
  const timeline = $(".timeline");
  let lastY = window.scrollY;
  let ticking = false;

  function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;

    nav.classList.toggle("is-scrolled", y > 20);
    const menuOpen = document.body.classList.contains("menu-open");
    if (!menuOpen) nav.classList.toggle("is-hidden", y > lastY && y > 400);
    lastY = y;

    if (timeline && rail) {
      const r = timeline.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.65 - r.top) / r.height;
      rail.style.transform = `scaleY(${Math.max(0, Math.min(1, p))})`;
    }
    ticking = false;
  }
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  // Indicateur de section active
  const navLinks = $$("[data-nav]");
  const indicator = $(".nav__indicator");
  function moveIndicator(link) {
    if (!link) { indicator.style.opacity = 0; return; }
    indicator.style.opacity = 1;
    indicator.style.width = `${link.offsetWidth}px`;
    indicator.style.transform = `translateX(${link.offsetLeft}px)`;
  }
  if ("IntersectionObserver" in window) {
    const sectionIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          let active = null;
          navLinks.forEach((a) => {
            const on = a.getAttribute("href") === `#${id}`;
            a.classList.toggle("is-active", on);
            if (on) active = a;
          });
          moveIndicator(active);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    $$("main section[id]").forEach((s) => sectionIO.observe(s));
  }
  window.addEventListener("resize", () => moveIndicator($(".nav__links a.is-active")));

  // Menu mobile
  const burger = $(".nav__burger");
  const menu = $("#mobile-menu");
  function toggleMenu(force) {
    const open = typeof force === "boolean" ? force : !menu.classList.contains("is-open");
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    document.body.classList.toggle("menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    if (open) nav.classList.remove("is-hidden");
  }
  burger.addEventListener("click", () => toggleMenu());
  $$("#mobile-menu a[href^='#']").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && menu.classList.contains("is-open")) toggleMenu(false); });

  /* ------------------------------------------------------------------
     6. Curseur, boutons magnétiques, halo lumineux
     ------------------------------------------------------------------ */
  if (finePointer && !reduceMotion) {
    const cursor = $(".cursor");
    let mx = -100, my = -100, cx = -100, cy = -100;
    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      cursor.classList.add("is-visible");
    }, { passive: true });
    document.addEventListener("mouseleave", () => cursor.classList.remove("is-visible"));
    const loop = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      requestAnimationFrame(loop);
    };
    loop();
    document.addEventListener("mouseover", (e) => {
      cursor.classList.toggle("is-hover", !!e.target.closest("a, button, [data-project], input, textarea"));
    });

    $$("[data-magnetic]").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        btn.style.setProperty("--bx", `${(e.clientX - r.left - r.width / 2) * 0.25}px`);
        btn.style.setProperty("--by", `${(e.clientY - r.top - r.height / 2) * 0.35}px`);
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.setProperty("--bx", "0px");
        btn.style.setProperty("--by", "0px");
      });
    });

    document.addEventListener("mousemove", (e) => {
      const card = e.target.closest("[data-spotlight]");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    }, { passive: true });
  }

  /* ------------------------------------------------------------------
     7. Fenêtre de détail d'un projet
     ------------------------------------------------------------------ */
  const modal = $("[data-modal]");
  const modalContent = $("[data-modal-content]");
  let lastFocus = null;

  function openProject(id) {
    const p = data.PROJECTS.find((x) => x.id === id);
    if (!p || !modal) return;
    lastFocus = document.activeElement;

    const blocks = [
      `<div class="m-top"><span class="m-kind mono">${esc(p.kind)} · ${esc(p.year)}</span>${
        p.status ? `<span class="status-pill status-pill--inline"><span class="dot"></span>${esc(p.status)}</span>` : ""}</div>`,
      `<h2 class="m-title" id="modal-title">${esc(p.title)}</h2>`,
      `<p class="m-lead">${esc(p.summary)}</p>`,
      `<div class="m-block"><h3>Contexte</h3><p>${esc(p.context)}</p></div>`,
      p.team && p.team.length
        ? `<div class="m-block"><h3>Équipe</h3><ul class="chips">${p.team.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>`
        : "",
      `<div class="m-block"><h3>Missions</h3><div class="m-missions">${p.missions.map((m) => `
          <div><h4>${esc(m.group)}</h4><ul>${m.items.map((it) => `<li>${esc(it)}</li>`).join("")}</ul></div>`).join("")}
        </div></div>`,
      `<div class="m-block"><h3>Technologies &amp; outils</h3><ul class="chips">${p.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>`,
      `<div class="m-block"><h3>Compétences BTS SIO mobilisées</h3><ul class="m-bloc">${p.bloc1.map((k) => `<li>${esc(data.BLOC1[k])}</li>`).join("")}</ul></div>`,
      p.links && p.links.length
        ? `<div class="m-block"><h3>Documents</h3><div class="m-links">${p.links.map((l) =>
            `<a class="link-arrow" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</div></div>`
        : "",
    ].filter(Boolean);

    modalContent.innerHTML = blocks.join("");
    Array.from(modalContent.children).forEach((c, i) => c.style.setProperty("--i", i));
    $(".modal__panel").scrollTop = 0;

    modal.showModal();
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add("is-open")));
  }

  function closeModal() {
    if (!modal.open) return;
    modal.classList.remove("is-open");
    const done = () => {
      modal.close();
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus({ preventScroll: true });
    };
    if (reduceMotion) done();
    else setTimeout(done, 550);
  }

  document.addEventListener("click", (e) => {
    const card = e.target.closest("[data-project]");
    if (card) openProject(card.dataset.project);
  });
  if (modal) {
    $("[data-modal-close]").addEventListener("click", closeModal);
    modal.addEventListener("cancel", (e) => { e.preventDefault(); closeModal(); });
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  }

  /* ------------------------------------------------------------------
     8. Contact : copie de l'e-mail et envoi du formulaire
     ------------------------------------------------------------------ */
  const copyBtn = $("[data-copy]");
  if (copyBtn) {
    const feedback = $(".contact__copied", copyBtn);
    copyBtn.addEventListener("click", async () => {
      const value = copyBtn.dataset.copy;
      try {
        await navigator.clipboard.writeText(value);
        feedback.textContent = "Copié ✓";
      } catch {
        window.location.href = `mailto:${value}`;
        return;
      }
      clearTimeout(copyBtn._t);
      copyBtn._t = setTimeout(() => (feedback.textContent = ""), 2200);
    });
  }

  const form = $("[data-form]");
  if (form) {
    const status = $("[data-form-status]", form);
    const label = $("[data-form-label]", form);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.classList.remove("is-error");
      status.textContent = "";
      label.textContent = "Envoi en cours…";
      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error();
        form.reset();
        status.textContent = "Merci ! Votre message a bien été envoyé, je vous réponds rapidement.";
      } catch {
        status.classList.add("is-error");
        status.textContent = "L'envoi a échoué. Vous pouvez m'écrire directement à akoijayden01@gmail.com.";
      } finally {
        label.textContent = "Envoyer le message";
      }
    });
  }

  /* ------------------------------------------------------------------
     9. Divers
     ------------------------------------------------------------------ */
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
