# Ajaypartap Singh Maan: Portfolio

Source for [ajaymaan13.vercel.app](https://ajaymaan13.vercel.app): a fast, accessible, no-framework portfolio aimed at SDET/QA automation, software engineering and AI/ML roles.

## Stack

- **Front end:** plain HTML, CSS and JavaScript. No framework and no build step.
- **Content:** JavaScript data files in `src/data/`, rendered by small scripts in `src/js/`.
- **Contact form:** `api/send-email.js`, a Vercel serverless function that sends mail with Nodemailer (Gmail).
- **Local dev server:** `server.js` (Express) serves the site and mounts the same contact handler.
- **Hosting:** Vercel.
- **Extras:** Three.js particle background (lazy-loaded; skipped on small screens and for `prefers-reduced-motion`).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000 (nodemon)
```

To test the contact form locally, create a `.env` file (never committed):

```bash
EMAIL_USER=you@gmail.com        # sending account
EMAIL_PASS=your-app-password    # Gmail app password, not your login password
RECIPIENT_EMAIL=you@gmail.com   # where messages are delivered
```

## Project layout

```
index.html            single page: hero, about, experience, projects, leadership, skills, contact
api/send-email.js     contact form handler (Vercel function; also used by server.js)
server.js             local dev server
src/data/             all page content (edit these to change what the site says)
  experience.js         work experience
  projects.js           featured + more projects
  leadership.js         leadership cards and the hackathon strip
src/js/               renderers and behaviour (experience.js, bc-projects.js, leadership.js, ...)
src/css/              theme.css holds design tokens for both themes
src/images/           screenshots (WebP, under 250 KB each) and logos
```

## Editing content

**Add a project:** add an object to `window.PORTFOLIO_PROJECTS` in `src/data/projects.js`; the schema is documented at the top of that file.

- `featured: true` plus a `featuredRank` puts it in the Featured block (ranks 1-2 render as full-width "Latest" cards).
- Without `featured` it appears in "More projects", sorted by `date` (newest first) and filterable by `tracks`.
- The "New" ribbon is computed from `date`, so there is nothing to remove later.
- Screenshots go in `src/images/` as WebP (about 1600 px wide, under 250 KB). Without an image a gradient placeholder is shown.

**Change experience or leadership:** edit `src/data/experience.js` or `src/data/leadership.js`.

**The accuracy rule:** every number on the site must be reproducible from the project's own repo (README, results files, CI output). If you cannot reproduce it, leave it out.

## Deployment

Vercel deploys on every push; pull requests get preview URLs. Set these environment variables in the Vercel project (Settings, Environment Variables) so the contact form works: `EMAIL_USER`, `EMAIL_PASS`, `RECIPIENT_EMAIL`.

## Quality notes

- Targets: Lighthouse Performance 90+, Accessibility 100, WCAG 2.1 AA (focus rings, contrast in both themes, skip link, keyboard-operable filters, reduced-motion support).
- Contact handler: validates and length-limits input, HTML-escapes it before it reaches the email body, blocks header injection, has a honeypot field and a best-effort per-IP rate limit, and never logs request headers or bodies.
