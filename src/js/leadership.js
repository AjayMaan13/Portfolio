/**
 * Leadership & hackathon strip renderer.
 * Content lives in src/data/leadership.js (window.PORTFOLIO_LEADERSHIP, window.PORTFOLIO_HACKATHONS).
 */
(function () {
  'use strict';

  const ICON_CALENDAR =
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>';

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function createCard(item, index) {
    const card = document.createElement('article');
    card.className = 'exp-card lead-card';
    card.id = `lead-${item.id}`;
    card.style.transitionDelay = `${index * 0.08}s`;
    card.innerHTML = `
      ${item.image ? `<img class="lead-photo" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt || '')}" width="1600" height="1000" loading="lazy" decoding="async">` : ''}
      <div class="exp-card-header">
        <div class="exp-company-logo">
          <img src="${escapeHtml(item.logo)}" alt="${escapeHtml(item.company)} logo" width="60" height="60" loading="lazy">
        </div>
        <div class="exp-header-content">
          <h3 class="exp-role">${escapeHtml(item.role)}</h3>
          <h4 class="exp-company">${escapeHtml(item.company)}</h4>
          <div class="exp-meta">
            <span class="exp-date">${ICON_CALENDAR}${escapeHtml(item.date)}</span>
            ${item.current ? '<span class="exp-pill exp-pill-current">Current</span>' : ''}
          </div>
        </div>
      </div>
      <div class="exp-card-body">
        <ul class="exp-highlights">
          ${item.highlights.map((h) => `<li class="exp-highlight-item">${escapeHtml(h)}</li>`).join('')}
        </ul>
      </div>`;
    return card;
  }

  function createHackathonStrip(hackathons) {
    const wrap = document.createElement('div');
    wrap.className = 'hackathon-strip';
    wrap.innerHTML = `
      <h3 class="hackathon-strip-title">Hackathons</h3>
      <ul class="hackathon-strip-list">
        ${hackathons
          .map((h) => {
            const inner = `<span class="hackathon-badge-name">${escapeHtml(h.name)}</span>
              <span class="hackathon-badge-detail">${escapeHtml(h.detail)}</span>`;
            if (!h.url) return `<li><span class="hackathon-badge hackathon-badge-static">${inner}</span></li>`;
            const external = /^https?:/.test(h.url);
            return `<li><a class="hackathon-badge" href="${escapeHtml(h.url)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${inner}</a></li>`;
          })
          .join('')}
      </ul>`;
    return wrap;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.leadership-container');
    const data = window.PORTFOLIO_LEADERSHIP;
    if (!container || !Array.isArray(data)) return;

    const grid = document.createElement('div');
    grid.className = 'lead-grid';
    data.forEach((item, i) => grid.appendChild(createCard(item, i)));
    container.appendChild(grid);

    if (Array.isArray(window.PORTFOLIO_HACKATHONS) && window.PORTFOLIO_HACKATHONS.length) {
      container.appendChild(createHackathonStrip(window.PORTFOLIO_HACKATHONS));
    }

    const cards = container.querySelectorAll('.exp-card');
    if (!('IntersectionObserver' in window)) {
      cards.forEach((c) => c.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    cards.forEach((card) => observer.observe(card));
  });
})();
