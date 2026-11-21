/**
 * Experience section renderer.
 * Content lives in src/data/experience.js (window.PORTFOLIO_EXPERIENCE).
 */
(function () {
  'use strict';

  const ICON_CALENDAR =
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>';
  const ICON_PIN =
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>';

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  // "Lead-in: rest of the sentence" -> bold lead-in
  function formatHighlight(text) {
    const idx = text.indexOf(': ');
    if (idx > 0 && idx <= 40) {
      return `<strong>${escapeHtml(text.slice(0, idx))}:</strong> ${escapeHtml(text.slice(idx + 2))}`;
    }
    return escapeHtml(text);
  }

  function renderTech(exp) {
    if (exp.techGroups && exp.techGroups.length) {
      return `<div class="exp-tech-groups">${exp.techGroups
        .map(
          (g) => `<div class="exp-tech-row"><span class="exp-tech-label">${escapeHtml(g.label)}</span>
            <div class="exp-tags">${g.items.map((t) => `<span class="exp-tag">${escapeHtml(t)}</span>`).join('')}</div></div>`
        )
        .join('')}</div>`;
    }
    if (exp.technologies && exp.technologies.length) {
      return `<div class="exp-tags">${exp.technologies.map((t) => `<span class="exp-tag">${escapeHtml(t)}</span>`).join('')}</div>`;
    }
    return '';
  }

  function createExperienceCard(exp, index) {
    const card = document.createElement('article');
    card.className = 'exp-card';
    card.id = exp.id;
    card.dataset.type = exp.type || '';
    card.dataset.current = String(Boolean(exp.current));
    card.style.transitionDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <div class="exp-card-header">
        <div class="exp-company-logo">
          <img src="${escapeHtml(exp.logo)}" alt="${escapeHtml(exp.company)} logo" width="60" height="60" loading="lazy">
        </div>
        <div class="exp-header-content">
          <h3 class="exp-role">${escapeHtml(exp.role)}</h3>
          <h4 class="exp-company">${escapeHtml(exp.company)}</h4>
          <div class="exp-meta">
            <span class="exp-date">${ICON_CALENDAR}${escapeHtml(exp.date)}</span>
            ${exp.duration ? `<span class="exp-pill">${escapeHtml(exp.duration)}</span>` : ''}
            <span class="exp-location">${ICON_PIN}${escapeHtml(exp.location)}</span>
            ${exp.current ? '<span class="exp-pill exp-pill-current">Current</span>' : ''}
          </div>
        </div>
      </div>
      <div class="exp-card-body">
        ${exp.description ? `<p class="exp-description">${escapeHtml(exp.description)}</p>` : ''}
        <ul class="exp-highlights">
          ${exp.highlights.map((h) => `<li class="exp-highlight-item">${formatHighlight(h)}</li>`).join('')}
        </ul>
        ${renderTech(exp)}
      </div>`;
    return card;
  }

  function observeCards(container) {
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
  }

  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.exp-container');
    const data = window.PORTFOLIO_EXPERIENCE;
    if (!container || !Array.isArray(data)) return;
    data.forEach((exp, i) => container.appendChild(createExperienceCard(exp, i)));
    observeCards(container);
  });
})();
