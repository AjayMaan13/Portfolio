/**
 * Projects section renderer.
 * Content lives in src/data/projects.js (window.PORTFOLIO_PROJECTS, window.PORTFOLIO_TRACKS).
 *
 *   Featured (sorted by featuredRank): one compact card each; the first two get a full-width row
 *   (CSS), the rest sit in a 2-column grid.
 *   More projects: newest first, filterable by track, 9 shown by default.
 */
(function () {
  'use strict';

  const LATEST_COUNT = 0; // every featured project uses the same compact card
  const MORE_INITIAL = 9;

  const ICONS = {
    github:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
    live:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
    devpost:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"></rect><path d="M8 12h8M8 9h5M8 15h5"></path></svg>',
    related:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>'
  };

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function parseDate(ym) {
    const [y, m] = String(ym).split('-').map(Number);
    return new Date(y, (m || 1) - 1, 1);
  }

  function formatDate(ym) {
    return parseDate(ym).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }

  const trackLabel = (t) => (window.PORTFOLIO_TRACKS[t] ? window.PORTFOLIO_TRACKS[t].label : t);

  function trackBadges(project) {
    return project.tracks
      .slice(0, 2)
      .map((t) => `<span class="bc-track bc-track-${esc(t)}">${esc(trackLabel(t))}</span>`)
      .join('');
  }

  function linkIcons(project) {
    const l = project.links || {};
    const out = [];
    if (l.github) {
      out.push(
        `<a href="${esc(l.github)}" class="bc-icon-link" target="_blank" rel="noopener noreferrer" aria-label="${esc(project.title)} on GitHub${l.githubLabel ? ' (' + esc(l.githubLabel) + ')' : ''}">${ICONS.github}${l.githubLabel ? `<span class="bc-icon-label">${esc(l.githubLabel)}</span>` : ''}</a>`
      );
    }
    if (l.live) {
      out.push(`<a href="${esc(l.live)}" class="bc-icon-link" target="_blank" rel="noopener noreferrer" aria-label="${esc(project.title)} live demo">${ICONS.live}</a>`);
    }
    if (l.devpost) {
      out.push(`<a href="${esc(l.devpost)}" class="bc-icon-link" target="_blank" rel="noopener noreferrer" aria-label="${esc(project.title)} on Devpost">${ICONS.devpost}</a>`);
    }
    (l.extra || []).forEach((x) => {
      out.push(
        `<a href="${esc(x.url)}" class="bc-icon-link" target="_blank" rel="noopener noreferrer" aria-label="${esc(x.label)}">${ICONS.related}<span class="bc-icon-label">${esc(x.label)}</span></a>`
      );
    });
    return out.length ? `<div class="bc-links">${out.join('')}</div>` : '';
  }

  function techChips(project, limit) {
    return (project.tech || [])
      .slice(0, limit)
      .map((t) => `<li>${esc(t)}</li>`)
      .join('');
  }

  function proofChips(project) {
    if (!project.proof || !project.proof.length) return '';
    return `<ul class="bc-proof" aria-label="Verified results">${project.proof.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>`;
  }

  function pointsList(project) {
    if (!project.points || !project.points.length) return '';
    return `<ul class="bc-points">${project.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>`;
  }

  function imageBlock(project, now, large) {
    const primary = (project.links && (project.links.live || project.links.github)) || '#';
    const fit = project.imageFit === 'contain' ? ' bc-fit-contain' : '';
    const media = project.image
      ? `<img src="${esc(project.image)}" alt="${esc(project.imageAlt || project.title)}" class="bc-image${fit}" width="1600" height="900" loading="lazy" decoding="async">`
      : `<div class="bc-image-placeholder bc-ph-${esc(project.tracks[0])}" aria-hidden="true">${esc(project.title.charAt(0))}</div>`;
    return `
      <div class="bc-image-wrapper">
        <a href="${esc(primary)}" class="bc-image-link" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true">${media}</a>
        ${project.hackathon ? `<span class="bc-hackathon-badge"><span aria-hidden="true">🏆 </span>${esc(project.hackathon.name)}${project.hackathon.award ? ' · ' + esc(project.hackathon.award) : project.hackathon.duration ? ' · ' + esc(project.hackathon.duration) : ''}</span>` : ''}
      </div>`;
  }

  function metaRow(project) {
    return `<div class="bc-meta">
        ${trackBadges(project)}
        <span class="bc-date">${esc(formatDate(project.date))}</span>
        ${project.team ? `<span class="bc-team">${esc(project.team)}</span>` : ''}
      </div>`;
  }

  function titleLink(project) {
    const primary = (project.links && (project.links.live || project.links.github)) || '';
    return primary
      ? `<a href="${esc(primary)}" class="bc-title-link" target="_blank" rel="noopener noreferrer">${esc(project.title)}</a>`
      : esc(project.title);
  }

  function hackathonLine(project) {
    const h = project.hackathon;
    if (!h) return '';
    const ctx = [h.context, h.duration].filter(Boolean).join(' · ');
    return `<p class="bc-hackathon-callout"><span aria-hidden="true">🏆</span> <span>Built for <a href="${esc(h.url)}" target="_blank" rel="noopener noreferrer"><strong>${esc(h.name)}</strong></a>${ctx ? ' · ' + esc(ctx) : ''}</span></p>`;
  }

  function latestCard(project, index, now) {
    return `
      <article class="bc-latest" id="project-${esc(project.id)}" style="transition-delay:${index * 0.1}s">
        ${imageBlock(project, now, true)}
        <div class="bc-content">
          ${metaRow(project)}
          <h3 class="bc-title">${titleLink(project)}</h3>
          ${hackathonLine(project)}
          <div class="bc-description-box"><p class="bc-description">${esc(project.description)}</p></div>
          ${proofChips(project)}
          <ul class="bc-tech">${techChips(project, 8)}</ul>
          ${linkIcons(project)}
        </div>
      </article>`;
  }

  function compactCard(project, index, now) {
    return `
      <article class="bc-card" id="project-${esc(project.id)}" style="transition-delay:${(index % 2) * 0.1}s">
        ${imageBlock(project, now, false)}
        <div class="bc-card-body">
          ${metaRow(project)}
          <h3 class="bc-card-title">${titleLink(project)}</h3>
          <p class="bc-card-summary">${esc(project.tagline)}</p>
          ${pointsList(project)}
          ${proofChips(project)}
          <ul class="bc-tech">${techChips(project, 6)}${project.tech.length > 6 ? `<li class="bc-tech-more">+${project.tech.length - 6}</li>` : ''}</ul>
          ${linkIcons(project)}
        </div>
      </article>`;
  }

  function gridCard(project, now) {
    return `
      <article class="bc-mini" id="project-${esc(project.id)}">
        <div class="bc-mini-top">
          ${metaRow(project)}
        </div>
        <h3 class="bc-mini-title">${esc(project.title)}</h3>
        ${project.hackathon ? `<a href="${esc(project.hackathon.url)}" class="bc-mini-hackathon" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">🏆 </span>${esc(project.hackathon.name)}${project.hackathon.duration ? ' · ' + esc(project.hackathon.duration) : ''}</a>` : ''}
        <p class="bc-mini-summary">${esc(project.tagline)}</p>
        <ul class="bc-tech">${techChips(project, 6)}</ul>
        ${linkIcons(project)}
      </article>`;
  }

  // ───────── Render ─────────
  const state = { filter: 'all', expanded: false };

  function observe(selector) {
    const els = document.querySelectorAll(selector);
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('bc-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('bc-visible');
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((e) => io.observe(e));
  }

  function renderFeatured(projects, now) {
    const featured = projects.filter((p) => p.featured).sort((a, b) => a.featuredRank - b.featuredRank);
    const latestEl = document.querySelector('.bc-latest-container');
    const gridEl = document.querySelector('.bc-featured-grid');
    if (latestEl) latestEl.innerHTML = featured.slice(0, LATEST_COUNT).map((p, i) => latestCard(p, i, now)).join('');
    if (gridEl) gridEl.innerHTML = featured.slice(LATEST_COUNT).map((p, i) => compactCard(p, i, now)).join('');
  }

  function moreProjects(projects) {
    return projects
      .filter((p) => !p.featured)
      .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.title.localeCompare(b.title)));
  }

  function renderFilters(more) {
    const el = document.querySelector('.bc-filters');
    if (!el) return;
    const present = Object.keys(window.PORTFOLIO_TRACKS).filter((t) => more.some((p) => p.tracks.includes(t)));
    const chips = ['all'].concat(present);
    el.innerHTML = chips
      .map((t) => {
        const label = t === 'all' ? 'All' : trackLabel(t);
        return `<button type="button" class="bc-filter" data-filter="${esc(t)}" aria-pressed="${state.filter === t}">${esc(label)}</button>`;
      })
      .join('');
  }

  function renderMore(more, now, animate) {
    const grid = document.querySelector('.bc-other-grid');
    const btn = document.querySelector('.bc-show-more-btn');
    const status = document.querySelector('.bc-filter-status');
    if (!grid) return;

    const filtered = state.filter === 'all' ? more : more.filter((p) => p.tracks.includes(state.filter));
    const visible = state.expanded ? filtered : filtered.slice(0, MORE_INITIAL);
    grid.innerHTML = visible.map((p) => gridCard(p, now)).join('');
    if (animate) {
      grid.classList.remove('bc-animate');
      void grid.offsetWidth; // restart animation
      grid.classList.add('bc-animate');
    }

    if (btn) {
      const hasMore = filtered.length > MORE_INITIAL;
      btn.hidden = !hasMore;
      btn.textContent = state.expanded ? 'Show less' : `Show more (${filtered.length - MORE_INITIAL})`;
      btn.setAttribute('aria-expanded', String(state.expanded));
    }
    if (status) {
      status.textContent = `Showing ${visible.length} of ${filtered.length} projects${state.filter === 'all' ? '' : ' in ' + trackLabel(state.filter)}`;
    }
  }

  function init() {
    const projects = window.PORTFOLIO_PROJECTS;
    if (!Array.isArray(projects) || !window.PORTFOLIO_TRACKS) return;
    const now = new Date();
    const more = moreProjects(projects);

    renderFeatured(projects, now);
    renderFilters(more);
    renderMore(more, now, false);
    observe('.bc-latest, .bc-card');

    const filters = document.querySelector('.bc-filters');
    if (filters) {
      filters.addEventListener('click', (e) => {
        const btn = e.target.closest('.bc-filter');
        if (!btn) return;
        state.filter = btn.dataset.filter;
        state.expanded = false;
        filters.querySelectorAll('.bc-filter').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        renderMore(more, now, true);
      });
    }

    const showMore = document.querySelector('.bc-show-more-btn');
    if (showMore) {
      showMore.addEventListener('click', () => {
        state.expanded = !state.expanded;
        renderMore(more, now, true);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
