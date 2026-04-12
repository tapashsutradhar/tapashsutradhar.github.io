/* ═══════════════════════════════════════════════════════
   TAPASH SUTRADHAR — SHARED JS
   File: js/shared.js  — loaded on every page
═══════════════════════════════════════════════════════ */

/* ── Portfolio Data ─────────────────────────────────── */
const DATA = {
  personal: {
    name: "Tapash Sutradhar",
    email: "sutradhartapashapd@gmail.com",
    phone: "+91 9749177979",
    location: "Alipurduar, West Bengal, India",
    currentCity: "Kolkata, India",
    linkedin: "https://www.linkedin.com/in/tapashsutradhar",
    github: "https://github.com/tapashsutradhar",
    availability: "Open to opportunities"
  },
  socials: [
    { label:"LinkedIn", href:"https://www.linkedin.com/in/tapashsutradhar",   svg:'<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>' },
    { label:"GitHub",   href:"https://github.com/tapashsutradhar",            svg:'<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>' },
    { label:"X",        href:"https://x.com/im_Tapash",                 svg:'<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',  w:15 },
    { label:"Facebook", href:"https://facebook.com/itapashsutradhar",          svg:'<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>' },
    { label: "Instagram", href: "https://instagram.com/itapashsutradhar",    svg: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z""")/>>' },
    { label:"YouTube",  href:"https://youtube.com/@imtapashsutradhar",          svg:'<path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>',  w:18 },
    { label:"Bluesky",  href:"https://bsky.app/profile/tapashsutradhar.bsky.social", svg:'<path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 01-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.204-.659-.3-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/>' }
  ],
  navPages: ['about','skills','experience','projects','services','education','research','articles','contact']
};

/* ── Helpers ────────────────────────────────────────── */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const chip = t => `<span class="chip">${t}</span>`;
const chips = arr => arr.map(chip).join(' ');
const svgIcon = (path, w=16) => `<svg width="${w}" height="${w}" viewBox="0 0 24 24" fill="currentColor">${path}</svg>`;

function toast(msg, type = 'ok') {
  const d = document.createElement('div');
  d.className = `toast-msg ${type}`;
  d.textContent = msg;
  const container = document.getElementById('toast');
  if (container) { container.appendChild(d); setTimeout(() => d.remove(), 3500); }
}

function fmtDate(d) {
  return new Date(d).toLocaleDateString('en-GB', { year:'numeric', month:'short', day:'numeric' });
}

/* ── Theme ──────────────────────────────────────────── */
let dark = localStorage.getItem('ts_theme') !== 'light';

function applyTheme() {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  localStorage.setItem('ts_theme', dark ? 'dark' : 'light');
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  icon.innerHTML = dark
    ? '<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m8-9h1M3 12H2m15.07-6.07l-.707.707M6.343 17.657l-.707.707M17.657 17.657l.707.707M6.343 6.343l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>'
    : '<path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>';
}

/* ── Scroll Progress ────────────────────────────────── */
function initProgress() {
  const bar = document.getElementById('progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const d = document.documentElement;
    const pct = (d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100 || 0;
    bar.style.width = pct + '%';
  }, { passive: true });
}

/* ── Navbar scroll ──────────────────────────────────── */
function initNavScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ── Desktop nav breakpoint ─────────────────────────── */
const DESKTOP_BP = 1100;
function updateNavLayout() {
  const desktop = window.innerWidth >= DESKTOP_BP;
  const links = document.getElementById('nav-links');
  const ham   = document.getElementById('hamburger');
  if (!links || !ham) return;
  if (desktop) {
    links.classList.add('show');
    ham.style.display = 'none';
    closeMobileMenu();
  } else {
    links.classList.remove('show');
    ham.style.display = 'flex';
  }
}

/* ── Mobile menu ────────────────────────────────────── */
let menuOpen = false;

function closeMobileMenu() {
  menuOpen = false;
  const menu = document.getElementById('mobile-menu');
  const nav  = document.getElementById('navbar');
  const icon = document.getElementById('menu-icon');
  if (menu) menu.classList.remove('open');
  if (nav)  nav.classList.remove('menu-open');
  document.body.style.overflow = '';
  if (icon) icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>';
}

function initMobileMenu() {
  const ham  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  const nav  = document.getElementById('navbar');
  const icon = document.getElementById('menu-icon');
  if (!ham || !menu) return;

  ham.addEventListener('click', () => {
    menuOpen = !menuOpen;
    menu.classList.toggle('open', menuOpen);
    if (nav) nav.classList.toggle('menu-open', menuOpen);
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (icon) icon.innerHTML = menuOpen
      ? '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>'
      : '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>';
  });
}

/* ── Set active nav link ────────────────────────────── */
function setActiveNav(page) {
  $$('.nav-link, .mobile-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page || l.getAttribute('href') === page + '.html' || l.getAttribute('href') === 'pages/' + page + '.html');
  });
}

/* ── Reveal observer ────────────────────────────────── */
function initReveals() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  $$('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

/* ── Footer HTML ────────────────────────────────────── */
function renderFooter(containerId = 'footer-container') {
  const el = document.getElementById(containerId);
  if (!el) return;
  const root = el.dataset.root || '';
  el.innerHTML = `<footer><div class="wrap">
  <div class="footer-grid">
    <div>
      <p class="serif" style="font-size:clamp(1rem,2vw,1.125rem);font-weight:500;color:var(--t1);margin-bottom:10px;letter-spacing:-.02em">Tapash Sutradhar</p>
      <p class="t-small" style="max-width:260px;line-height:1.75">SDE · SDET · Data Analyst · QA Engineer based in Kolkata, India.</p>
      <div class="social-row">
        ${DATA.socials.map(s => `<a class="social-btn" href="${s.href}" target="_blank" rel="noopener" title="${s.label}">${svgIcon(s.svg, s.w||16)}</a>`).join('')}
      </div>
    </div>
    <div>
      <p class="t-label mb-md">Pages</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 16px">
        ${DATA.navPages.map(p => `<a class="footer-link" href="${root}pages/${p}.html" style="text-transform:capitalize">${p}</a>`).join('')}
      </div>
    </div>
    <div>
      <p class="t-label mb-md">Contact</p>
      <a href="mailto:${DATA.personal.email}" class="footer-link" style="word-break:break-word">${DATA.personal.email}</a>
      <a href="tel:${DATA.personal.phone}" class="footer-link">${DATA.personal.phone}</a>
      <p class="t-small mt-sm">Kolkata, India</p>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="t-small">© ${new Date().getFullYear()} Tapash Sutradhar. All rights reserved.</p>
    <p class="t-small" style="color:var(--t4)">SDE · SDET · Data Analyst · QA Engineer</p>
  </div>
  </div></footer>`;
}

/* ── Navbar HTML ────────────────────────────────────── */
function renderNav(containerId = 'nav-container', currentPage = '', rootPath = '') {
  const el = document.getElementById(containerId);
  if (!el) return;
  const href = p => p === 'home' ? `${rootPath}index.html` : `${rootPath}pages/${p}.html`;
  el.innerHTML = `
  <div id="progress"></div>
  <div id="toast"></div>
  <nav id="navbar">
    <div class="wrap nav-inner">
      <a href="${rootPath}index.html" class="nav-logo">Tapash Sutradhar</a>
      <div class="nav-links" id="nav-links">
        ${DATA.navPages.map(p => `<a class="nav-link${currentPage===p?' active':''}" href="${href(p)}" data-page="${p}" style="text-transform:capitalize">${p}</a>`).join('')}
      </div>
      <div class="nav-actions">
        <button class="icon-btn" id="theme-btn" aria-label="Toggle theme">
          <svg id="theme-icon" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"></svg>
        </button>
        <a class="btn btn-dark" href="${rootPath}pages/contact.html" style="padding:7px 16px;font-size:.75rem">Hire Me</a>
        <button class="icon-btn" id="hamburger" aria-label="Menu" style="display:none">
          <svg id="menu-icon" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>
  </nav>
  <div id="mobile-menu">
    <nav>
      ${DATA.navPages.map(p => `<a class="mobile-link${currentPage===p?' active':''}" href="${href(p)}" style="text-transform:capitalize">${p}</a>`).join('')}
    </nav>
    <div class="flex gap-lg mt-xl">
      <a class="btn btn-dark" href="${rootPath}pages/contact.html">Hire Me</a>
      <a class="btn btn-outline" href="${rootPath}resume/Tapash_Sutradhar_Resume.pdf" download>Download CV</a>
    </div>
  </div>`;
}

/* ── Init all shared functionality ──────────────────── */
function initShared(currentPage, rootPath = '') {
  applyTheme();
  renderNav('nav-container', currentPage, rootPath);
  renderFooter('footer-container');
  applyTheme(); // re-apply after nav render

  // Theme toggle
  const btn = document.getElementById('theme-btn');
  if (btn) btn.addEventListener('click', () => { dark = !dark; applyTheme(); });

  initProgress();
  initNavScroll();
  updateNavLayout();
  window.addEventListener('resize', updateNavLayout, { passive: true });
  initMobileMenu();
  setTimeout(initReveals, 100);
}
