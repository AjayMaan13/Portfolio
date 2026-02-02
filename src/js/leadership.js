/**
 * Leadership & Mentorship Section
 * Creates leadership cards from data array
 */

// Leadership data array
const leadershipData = [
  {
    id: "lead1",
    role: "Open Source Mentor",
    company: "Social Winter of Code (SWOC)",
    logo: "https://www.socialwinterofcode.com/SWOC_W_Black.png",
    date: "December 2025 – Present",
    location: "Remote",
    type: "mentorship",
    description:
      "Selected as a Mentor for Social Winter of Code (SWOC), guiding contributors through open-source projects, codebases, and best practices while ensuring high-quality, impactful contributions.",
    highlights: [
      "Mentored 20+ contributors across multiple open-source projects, providing technical guidance on issue understanding, code structure, debugging, and implementation strategies",
      "Reviewed 50+ pull requests, suggesting improvements and collaborating with project admins to maintain code quality, originality, and alignment with project goals",
      "Fostered collaborative learning environment via GitHub and Discord, unblocking technical challenges and promoting inclusive open-source practices",
      "Guided contributors through Git workflows, version control best practices, and collaborative development methodologies",
    ],
    technologies: [
      "Open Source",
      "GitHub",
      "Pull Request Reviews",
      "Mentorship",
      "Community Building",
      "Code Review",
      "Documentation",
      "Git",
      "Technical Writing",
    ],
    current: true,
  },
  {
    id: "lead2",
    role: "Peer Mentor",
    company: "Seneca Polytechnic",
    logo: "https://biotalent-ca.s3.us-east-2.amazonaws.com/media/public/uploads/2024/01/25/Seneca-Works-s.png",
    date: "May 2024 – September 2024",
    location: "Toronto, ON",
    type: "mentorship",
    description:
      "Guided and supported new students through their transition to postsecondary education by fostering leadership, communication, and mentorship within the Seneca community.",
    highlights: [
      "Mentored 15+ first-year students, providing guidance on academic expectations, time management strategies, and study skills during critical first semester transition",
      "Facilitated peer support groups and one-on-one mentoring sessions, connecting students to Seneca's academic resources, wellness services, and career development programs",
      "Delivered orientation and training sessions on program requirements, available services, and community standards, ensuring smooth integration into college life",
      "Promoted diversity and inclusion by helping students build professional networks, connect with faculty, and adapt to collaborative learning environments",
    ],
    technologies: [
      "Leadership",
      "Mentorship",
      "Communication",
      "Training Delivery",
      "Student Engagement",
      "Conflict Resolution",
      "Workshop Facilitation",
      "Resource Coordination",
    ],
    current: false,
  },
];

// DOM Elements
const leadershipContainer = document.querySelector(".leadership-container");

// Initialize leadership section
document.addEventListener("DOMContentLoaded", () => {
  // Generate leadership cards
  generateLeadershipCards();

  // Set up scroll animations
  setupLeadershipAnimations();

  // Add interaction effects
  addLeadershipInteractions();
});

// Generate leadership cards from data
function generateLeadershipCards() {
  if (!leadershipContainer) return;

  // Sort by current status (current first, then by date)
  const sortedData = [...leadershipData].sort((a, b) => {
    if (a.current && !b.current) return -1;
    if (!a.current && b.current) return 1;
    return 0;
  });

  // Generate cards
  sortedData.forEach((leader, index) => {
    const card = createLeadershipCard(leader, index);
    leadershipContainer.appendChild(card);
  });
}

// Create single leadership card
function createLeadershipCard(leader, index) {
  const card = document.createElement("div");
  card.className = "exp-card";
  card.setAttribute("data-type", leader.type);
  card.setAttribute("data-current", leader.current);
  card.style.transitionDelay = `${index * 0.1}s`;

  card.innerHTML = `
        <div class="exp-card-header">
            <div class="exp-company-logo">
                <img src="${leader.logo}" alt="${leader.company} Logo">
            </div>
            <div class="exp-header-content">
                <h3 class="exp-role">${leader.role}</h3>
                <h4 class="exp-company">${leader.company}</h4>
                <div class="exp-meta">
                    <span class="exp-date">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        ${leader.date}
                    </span>
                    <span class="exp-location">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        ${leader.location}
                    </span>
                </div>
            </div>
        </div>
        
        <div class="exp-card-body">
            <p class="exp-description">${leader.description}</p>
            
            <div class="exp-highlights">
                ${leader.highlights
                  .map(
                    (highlight) => `
                    <div class="exp-highlight-item">
                        <div class="exp-highlight-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <p>${highlight}</p>
                    </div>
                `
                  )
                  .join("")}
            </div>
            
            <div class="exp-tags">
                ${leader.technologies
                  .map((tech) => `<span class="exp-tag">${tech}</span>`)
                  .join("")}
            </div>
        </div>
    `;

  return card;
}

// Setup scroll animations
function setupLeadershipAnimations() {
  const cards = document.querySelectorAll(".leadership-container .exp-card");

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
function addLeadershipInteractions() {
  const cards = document.querySelectorAll(".leadership-container .exp-card");

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
}

// Export for global access
window.leadershipData = leadershipData;
window.generateLeadershipCards = generateLeadershipCards;