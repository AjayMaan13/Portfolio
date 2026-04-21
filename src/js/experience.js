/**
 * Modern Experience Section with Dynamic Generation
 * Creates experience cards from data array
 */

// Experience data array
const experienceData = [
  {
    id: "exp0",
    role: "Service Hub Ambassador",
    company: "Seneca Polytechnic",
    companyKey: "seneca",
    logo: "src/images/seneca.png",
    date: "April 2026 – Present",
    location: "North York, ON · On-site",
    type: "part-time",
    description: "",
    highlights: [
      "Delivered front-line support to students, helping them navigate college services and available resources.",
      "Responded to student inquiries and assisted with campus services to create a positive and engaging experience.",
      "Operated in a fast-paced, dynamic environment, using an agile approach to adapt to changing needs.",
      "Managed and prioritized tasks to ensure efficient and timely service delivery.",
      "Developed strong communication, problem-solving, adaptability, and teamwork skills through regular interaction with students and staff.",
    ],
    technologies: ["Communication", "Time Management", "Problem Solving", "Adaptability", "Teamwork"],
    current: true,
  },
  {
    id: "exp1",
    role: "Software Developer - AI Automations",
    company: "Government of Ontario, Ministry of Children, Community and Social Services",
    companyKey: "ontario-gov",
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM19mN0idFegTWMKEwN-2auLSfz21bowUDdQ&s',
    date: "January 2026 – Present",
    location: "Toronto, ON · Hybrid",
    type: "co-op",
    description: "",
    highlights: [
      "Built innovative AI/ML-powered agents using Python, LLM APIs, Microsoft Azure, REST APIs for log analysis, troubleshooting, and debugging support, accelerating incident resolution by 30%",
    ],
    technologies: ["Python", "Microsoft Azure", "LLM APIs", "RAGs", "REST APIs"],
    current: true,
  },
  {
    id: "exp2",
    role: "Software Developer & Tester",
    company: "Government of Ontario, Ministry of Children, Community and Social Services",
    companyKey: "ontario-gov",
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM19mN0idFegTWMKEwN-2auLSfz21bowUDdQ&s',
    date: "September 2025 – January 2026",
    location: "Toronto, ON",
    type: "co-op",
    description: "Designed and executed automated test suites and full-stack solutions for critical Ontario government social service systems, ensuring high quality, accessibility, and reliability across platforms.",
    highlights: [
      "Designed and automated 4,000+ end-to-end test cases for SAMS (Social Assistance Management System), the case management platform for Ontario Disability Support Program (ODSP) and Ontario Child with Severe Disabilities (OCSD) benefit delivery across Ontario, using Selenium, TestNG, JUnit, Jenkins CI/CD, and Azure DevOps, increasing regression coverage by 60%",
      "Built a custom test reporting web application using the MERN stack (MongoDB, Express, React, Node.js) with REST APIs to streamline QA workflows for SAMS release cycles, reducing release cycle time by 35%",
      "Enhanced IBM Cúram system quality for SAMS through applied software development best practices, contributing to stability of a platform serving hundreds of thousands of ODSP and OCSD recipients across Ontario",
      "Developed and shipped features for an Angular dashboard supporting internal tooling within the SAMS/MyBenefits ecosystem",
      "Worked within Agile 2-week sprint cycles using Jira, participating in standups and sprint planning alongside cross-functional OPS development and QA teams",
    ],
    technologies: [
      "Java", "Selenium", "TestNG", "JUnit", "Jenkins CI/CD", "Azure DevOps",
      "MongoDB", "Express", "React.js", "Node.js", "Angular",
      "IBM Cúram", "Jira", "REST APIs", "Agile",
    ],
    current: false,
  },
];

// DOM Elements
const experienceContainer = document.querySelector(".exp-container");

// Initialize experience section
document.addEventListener("DOMContentLoaded", () => {
  // Add experience CSS dynamically
  addExperienceCSS();

  // Generate experience cards
  generateExperienceCards();

  // Set up scroll animations
  setupExperienceAnimations();

  // Add interaction effects
  addExperienceInteractions();
});

// Add CSS dynamically
function addExperienceCSS() {
  const style = document.createElement("style");
  style.textContent = `
        /* Experience Section Styles */
        .exp-section {
            padding: var(--space-16) 0;
            background: var(--color-bg-primary);
            position: relative;
        }

        .exp-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 var(--space-4);
        }

        /* Experience Card */
        .exp-card {
            background: var(--color-surface);
            border-radius: var(--radius-xl);
            padding: var(--space-6);
            margin-bottom: var(--space-6);
            box-shadow: var(--shadow-md);
            border: 1px solid var(--color-divider);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
            transform: translateY(30px);
            position: relative;
            overflow: hidden;
        }

        .exp-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: linear-gradient(180deg, var(--color-accent-primary), var(--color-accent-secondary));
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .exp-card:hover::before {
            opacity: 1;
        }

        .exp-card.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .exp-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-xl);
            border-color: var(--color-accent-primary);
        }

        /* Current badge — only for non-grouped cards */
        .exp-card:not(.exp-card-grouped)[data-current="true"]::after {
            content: 'CURRENT';
            position: absolute;
            top: var(--space-4);
            right: var(--space-4);
            background: var(--color-success);
            color: white;
            padding: var(--space-1) var(--space-3);
            border-radius: var(--radius-full);
            font-size: var(--text-xs);
            font-weight: var(--weight-bold);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            box-shadow: 0 2px 8px rgba(46, 204, 113, 0.3);
            animation: pulseGlow 2s ease-in-out infinite;
        }

        @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 2px 8px rgba(46, 204, 113, 0.3); }
            50% { box-shadow: 0 2px 16px rgba(46, 204, 113, 0.5); }
        }

        /* Grouped card — roles list */
        .exp-roles-list {
            display: flex;
            flex-direction: column;
            padding-top: var(--space-4);
            border-top: 1px solid var(--color-divider);
        }

        .exp-sub-role {
            display: flex;
            gap: var(--space-3);
        }

        /* Timeline: dot + vertical line */
        .exp-timeline {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-shrink: 0;
            width: 16px;
        }

        .exp-timeline-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: var(--color-accent-primary);
            flex-shrink: 0;
            margin-top: 5px;
        }

        .exp-timeline-line {
            flex: 1;
            width: 2px;
            background: var(--color-divider);
            min-height: 16px;
            margin-top: 4px;
        }

        .exp-sub-role:last-child .exp-timeline-line {
            display: none;
        }

        .exp-sub-role-content {
            flex: 1;
            padding-bottom: var(--space-8);
        }

        .exp-sub-role:last-child .exp-sub-role-content {
            padding-bottom: 0;
        }

        .exp-sub-role-header {
            display: flex;
            align-items: center;
            gap: var(--space-3);
            margin-bottom: var(--space-2);
        }

        .exp-sub-role-header .exp-role {
            font-size: var(--text-base);
            margin-bottom: 0;
        }

        .exp-current-badge {
            background: var(--color-success);
            color: white;
            padding: 2px 10px;
            border-radius: var(--radius-full);
            font-size: var(--text-xs);
            font-weight: var(--weight-bold);
            letter-spacing: 0.5px;
            white-space: nowrap;
            box-shadow: 0 2px 8px rgba(46, 204, 113, 0.3);
            animation: pulseGlow 2s ease-in-out infinite;
        }

        /* Card Header */
        .exp-card-header {
            display: flex;
            gap: var(--space-4);
            margin-bottom: var(--space-4);
            align-items: flex-start;
        }

        .exp-company-logo {
            flex-shrink: 0;
            width: 60px;
            height: 60px;
            border-radius: var(--radius-md);
            overflow: hidden;
            box-shadow: var(--shadow-sm);
            border: 2px solid var(--color-divider);
            transition: all 0.3s ease;
        }

        .exp-card:hover .exp-company-logo {
            transform: scale(1.05);
            box-shadow: var(--shadow-lg);
            border-color: var(--color-accent-primary);
        }

        .exp-company-logo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .exp-header-content {
            flex: 1;
        }

        .exp-role {
            font-size: var(--text-xl);
            font-weight: var(--weight-bold);
            color: var(--color-text-primary);
            margin-bottom: var(--space-2);
            line-height: 1.2;
        }

        .exp-company {
            font-size: var(--text-base);
            font-weight: var(--weight-semibold);
            color: var(--color-accent-primary);
            margin-bottom: var(--space-2);
        }

        .exp-meta {
            display: flex;
            gap: var(--space-4);
            flex-wrap: wrap;
        }

        .exp-date,
        .exp-location {
            display: flex;
            align-items: center;
            gap: var(--space-1);
            font-size: var(--text-xs);
            color: var(--color-text-secondary);
            font-weight: var(--weight-medium);
        }

        .exp-date svg,
        .exp-location svg {
            color: var(--color-accent-primary);
            flex-shrink: 0;
            width: 14px;
            height: 14px;
        }

        /* Card Body */
        .exp-card-body {
            padding-top: var(--space-3);
            border-top: 1px solid var(--color-divider);
        }

        .exp-description {
            display: none; /* Hide description */
        }

        /* Highlights */
        .exp-highlights {
            display: flex;
            flex-direction: column;
            gap: var(--space-2);
            margin-bottom: var(--space-4);
        }

        .exp-highlight-item {
            display: flex;
            gap: var(--space-2);
            align-items: flex-start;
            padding: var(--space-2);
            background: transparent;
            border-radius: var(--radius-md);
            transition: all 0.3s ease;
            padding-left: var(--space-3);
        }

        .exp-highlight-item:hover {
            background: rgba(var(--color-accent-primary-rgb), 0.03);
            transform: translateX(4px);
        }

        .exp-highlight-icon {
            display: none; /* Remove checkmark icon */
        }

        .exp-highlight-item p {
            flex: 1;
            font-size: var(--text-sm);
            color: var(--color-text-secondary);
            line-height: 1.6;
            margin: 0;
        }

        /* Tags */
        .exp-tags {
            display: flex;
            flex-wrap: wrap;
            gap: var(--space-2);
        }

        .exp-tag {
            display: inline-block;
            padding: var(--space-1) var(--space-3);
            background: rgba(var(--color-accent-primary-rgb), 0.1);
            color: var(--color-accent-primary);
            border-radius: var(--radius-full);
            font-size: var(--text-xs);
            font-weight: var(--weight-semibold);
            transition: all 0.2s ease;
            border: 1px solid transparent;
        }

        .exp-tag:hover {
            background: var(--color-accent-primary);
            color: white;
            transform: translateY(-2px);
            box-shadow: var(--shadow-sm);
        }

        /* Dark Theme */
        .dark-theme .exp-card {
            background: var(--color-bg-secondary);
            border-color: var(--color-divider);
        }

        .dark-theme .exp-company-logo {
            border-color: var(--color-divider);
        }

        .dark-theme .exp-highlight-item {
            background: var(--color-bg-primary);
        }

        .dark-theme .exp-highlight-item:hover {
            background: rgba(var(--color-accent-primary-rgb), 0.1);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .exp-card {
                padding: var(--space-6);
            }
            
            .exp-card-header {
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            
            .exp-company-logo {
                width: 60px;
                height: 60px;
            }
            
            .exp-role {
                font-size: var(--text-xl);
            }
            
            .exp-company {
                font-size: var(--text-base);
            }
            
            .exp-meta {
                flex-direction: column;
                gap: var(--space-2);
                align-items: center;
            }
            
            .exp-highlight-item {
                padding: var(--space-2);
            }
            
            .exp-tags {
                justify-content: center;
            }
        }
    `;
  document.head.appendChild(style);
}

// Generate experience cards from data
function generateExperienceCards() {
  if (!experienceContainer) return;

  // Group entries by companyKey (fallback to id if no companyKey)
  const groups = [];
  const seen = {};

  experienceData.forEach((exp) => {
    const key = exp.companyKey || exp.id;
    if (!seen[key]) {
      seen[key] = { key, exps: [] };
      groups.push(seen[key]);
    }
    seen[key].exps.push(exp);
  });

  groups.forEach((group, index) => {
    if (group.exps.length > 1) {
      const card = createGroupedCard(group.exps, index);
      experienceContainer.appendChild(card);
    } else {
      const card = createExperienceCard(group.exps[0], index);
      experienceContainer.appendChild(card);
    }
  });
}

// Create a grouped card for same-company roles
function createGroupedCard(exps, index) {
  const first = exps[0];
  const last = exps[exps.length - 1];
  const isCurrentGroup = exps.some((e) => e.current);

  // Overall date span: oldest start → newest end
  const overallDate = `${last.date.split("–")[0].trim()} – ${first.date.split("–")[1].trim()}`;

  const card = document.createElement("div");
  card.className = "exp-card exp-card-grouped";
  card.setAttribute("data-current", isCurrentGroup);
  card.style.transitionDelay = `${index * 0.1}s`;

  const rolesHTML = exps.map((exp) => `
    <div class="exp-sub-role">
      <div class="exp-timeline">
        <div class="exp-timeline-dot"></div>
        <div class="exp-timeline-line"></div>
      </div>
      <div class="exp-sub-role-content">
        <div class="exp-sub-role-header">
          <h3 class="exp-role">${exp.role}</h3>
          ${exp.current ? '<span class="exp-current-badge">CURRENT</span>' : ''}
        </div>
        <div class="exp-meta">
          <span class="exp-date">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            ${exp.date}
          </span>
          <span class="exp-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${exp.location}
          </span>
        </div>
        ${exp.highlights.length ? `
        <div class="exp-highlights">
          ${exp.highlights.map((h) => `
            <div class="exp-highlight-item">
              <div class="exp-highlight-icon"></div>
              <p>${h}</p>
            </div>
          `).join('')}
        </div>` : ''}
        ${exp.technologies.length ? `
        <div class="exp-tags">
          ${exp.technologies.map((t) => `<span class="exp-tag">${t}</span>`).join('')}
        </div>` : ''}
      </div>
    </div>
  `).join('');

  card.innerHTML = `
    <div class="exp-card-header">
      <div class="exp-company-logo">
        <img src="${first.logo}" alt="${first.company} Logo">
      </div>
      <div class="exp-header-content">
        <h4 class="exp-company">${first.company}</h4>
        <div class="exp-meta">
          <span class="exp-date">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            ${overallDate}
          </span>
        </div>
      </div>
    </div>
    <div class="exp-card-body exp-roles-list">
      ${rolesHTML}
    </div>
  `;

  return card;
}

// Create single experience card
function createExperienceCard(exp, index) {
  const card = document.createElement("div");
  card.className = "exp-card";
  card.setAttribute("data-type", exp.type);
  card.setAttribute("data-current", exp.current);
  card.style.transitionDelay = `${index * 0.1}s`;

  card.innerHTML = `
        <div class="exp-card-header">
            <div class="exp-company-logo">
                <img src="${exp.logo}" alt="${exp.company} Logo">
            </div>
            <div class="exp-header-content">
                <h3 class="exp-role">${exp.role}</h3>
                <h4 class="exp-company">${exp.company}</h4>
                <div class="exp-meta">
                    <span class="exp-date">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        ${exp.date}
                    </span>
                    <span class="exp-location">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        ${exp.location}
                    </span>
                </div>
            </div>
        </div>

        <div class="exp-card-body">
            <p class="exp-description">${exp.description}</p>

            <div class="exp-highlights">
                ${exp.highlights
                  .map(
                    (highlight) => `
                    <div class="exp-highlight-item">
                        <div class="exp-highlight-icon"></div>
                        <p>${highlight}</p>
                    </div>
                `
                  )
                  .join("")}
            </div>

            <div class="exp-tags">
                ${exp.technologies
                  .map((tech) => `<span class="exp-tag">${tech}</span>`)
                  .join("")}
            </div>
        </div>
    `;

  return card;
}

// Setup scroll animations
function setupExperienceAnimations() {
  const cards = document.querySelectorAll(".exp-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  cards.forEach((card) => observer.observe(card));
}

// Add interaction effects
function addExperienceInteractions() {
  const cards = document.querySelectorAll(".exp-card");

  cards.forEach((card) => {
    // Add ripple effect on click
    card.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(var(--color-accent-primary-rgb), 0.3);
                width: 20px;
                height: 20px;
                pointer-events: none;
                animation: rippleEffect 0.6s ease-out;
            `;

      const rect = this.getBoundingClientRect();
      ripple.style.left = e.clientX - rect.left - 10 + "px";
      ripple.style.top = e.clientY - rect.top - 10 + "px";

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Add ripple animation
  const rippleStyle = document.createElement("style");
  rippleStyle.textContent = `
        @keyframes rippleEffect {
            to {
                width: 500px;
                height: 500px;
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(rippleStyle);
}

// Export for global access
window.experienceData = experienceData;
window.generateExperienceCards = generateExperienceCards;
