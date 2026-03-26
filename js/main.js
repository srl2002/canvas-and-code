/* ================================================================
   main.js  —  SURABHI LAMBE PORTFOLIO
   All interactions: navbar, gallery filter, lightbox,
   blog engine, contact form, scroll animations.
   DO NOT EDIT unless you know what you're doing.
   Blog content lives in js/blog-data.js — edit that instead.
   ================================================================ */

/* ── SHARED STATE ────────────────────────────────────────── */
let fadeObs; // shared IntersectionObserver for fade-in animations

/* ══════════════════════════════════════════════════════════
   BLOG ENGINE
   Reads BLOGS array from blog-data.js and renders everything.
   ══════════════════════════════════════════════════════════ */

function buildBlogFilters() {
  const allTags = ['All', ...new Set(BLOGS.flatMap(b => b.tag.split(' · ')))];
  const row = document.getElementById('blog-filter-row');
  if (!row) return;
  row.innerHTML = allTags.map(t =>
    `<button class="blog-filter-btn${t === 'All' ? ' active' : ''}" data-tag="${t}">${t}</button>`
  ).join('');
  row.querySelectorAll('.blog-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      row.querySelectorAll('.blog-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderBlogCards(btn.dataset.tag);
    });
  });
}

function renderBlogCards(filter) {
  const grid = document.getElementById('blogs-grid');
  if (!grid) return;

  const filtered = filter === 'All'
    ? BLOGS
    : BLOGS.filter(b => b.tag.includes(filter));

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="blog-empty">
        <h3>No posts yet in this category</h3>
        <p>Check back soon — posts on this topic are on the way!</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map((b, i) => {
    const globalIndex = BLOGS.indexOf(b);
    return `
      <div class="blog-card fade-in" data-index="${globalIndex}" style="transition-delay:${i * 0.08}s">
        <div class="blog-card-banner" style="background:${b.bannerColor}">${b.emoji}</div>
        <div class="blog-card-body">
          <div class="blog-card-tag">${b.tag}</div>
          <div class="blog-card-title">${b.title}</div>
          <div class="blog-card-excerpt">${b.excerpt}</div>
          <div class="blog-card-footer">
            <span class="blog-card-date">${b.date} &middot; ${b.readTime}</span>
            <span class="blog-card-read">Read &rarr;</span>
          </div>
        </div>
      </div>`;
  }).join('');

  // Observe new cards for fade-in
  grid.querySelectorAll('.fade-in').forEach(el => fadeObs && fadeObs.observe(el));

  // Attach click → open reader
  grid.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', () => openBlogReader(parseInt(card.dataset.index)));
  });
}

function openBlogReader(index) {
  const b = BLOGS[index];
  if (!b) return;

  document.getElementById('blog-modal-header').innerHTML = `
    <div class="blog-modal-tag">${b.tag}</div>
    <div class="blog-modal-title">${b.title}</div>
    <div class="blog-modal-meta">
      <span>📅 ${b.date}</span>
      <span>⏱ ${b.readTime}</span>
    </div>`;

  document.getElementById('blog-modal-body').innerHTML = b.content;
  document.getElementById('blog-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.querySelector('.blog-modal-inner').scrollTop = 0;
}

function closeBlogReader() {
  document.getElementById('blog-modal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════════════════════
   ART GALLERY LIGHTBOX
   ══════════════════════════════════════════════════════════ */

function openLightbox(card) {
  const title  = card.dataset.title  || 'Untitled';
  const medium = card.dataset.medium || '';
  const desc   = card.dataset.desc   || '';

  document.getElementById('lightbox-title').textContent  = title;
  document.getElementById('lightbox-medium').textContent = medium;
  document.getElementById('lightbox-desc').textContent   = desc;

  // Clone the art image/placeholder into the lightbox
  const artImgEl = card.querySelector('.art-img');
  const lbImg    = document.getElementById('lightbox-img');
  lbImg.innerHTML = '';
  if (artImgEl) {
    const clone = artImgEl.cloneNode(true);
    clone.style.cssText = 'width:100%;height:100%;aspect-ratio:16/10;';
    lbImg.appendChild(clone);
  }

  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════════════════════
   MAIN INIT
   ══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Navbar scroll shadow ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  });

  /* ── Mobile hamburger menu ── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mobileMenu.classList.remove('open'))
  );

  /* ── Active nav link on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a[href^="#"]');
  sections.forEach(section => {
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(l =>
            l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id)
          );
        }
      });
    }, { threshold: 0.35 }).observe(section);
  });

  /* ── Fade-in on scroll ── */
  fadeObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        fadeObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.fade-in').forEach(el => fadeObs.observe(el));

  /* ── Gallery filter ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const artCards   = document.querySelectorAll('.art-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      artCards.forEach(card => {
        const show = f === 'all' || card.dataset.medium === f;
        card.style.opacity       = show ? '1' : '0.2';
        card.style.transform     = show ? '' : 'scale(0.97)';
        card.style.pointerEvents = show ? '' : 'none';
      });
    });
  });

  /* ── Art card lightbox ── */
  artCards.forEach(card => card.addEventListener('click', () => openLightbox(card)));
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target === document.getElementById('lightbox')) closeLightbox();
  });

  /* ── Blog engine ── */
  buildBlogFilters();
  renderBlogCards('All');

  /* ── Blog modal close ── */
  document.getElementById('blog-modal-close').addEventListener('click', closeBlogReader);
  document.getElementById('blog-modal').addEventListener('click', e => {
    if (e.target === document.getElementById('blog-modal')) closeBlogReader();
  });

  /* ── Global Escape key ── */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeLightbox(); closeBlogReader(); }
  });

  /* ── Smooth scroll for all anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 72,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ── Contact form feedback ── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function () {
      const btn = form.querySelector('.form-submit');
      btn.textContent = 'Sending…';
      btn.disabled = true;
    });
  }

});
