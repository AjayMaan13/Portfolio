/**
 * Featured Projects Section - Vertical Layout
 */

const featuredProjectsData = [
    {
        id: 'project1',
        title: 'FinSight - Personal Finance Tracker',
        label: 'Featured Project',
        description: 'A comprehensive personal finance application built with modern full-stack technologies to help users manage their finances effectively. Features include transaction management, goal tracking, budget management, financial insights with visual analytics, secure JWT-based authentication, CSV import functionality, real-time updates, and responsive mobile-first design.',
        technologies: ['React 19', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Python', 'Flask', 'Tailwind CSS'],
        image: './src/images/artvault.png',
        demoUrl: '#',
        codeUrl: 'https://github.com/AjayMaan13/FinSight'
    },
    {
        id: 'project2',
        title: 'Seneca Polytechnic Deliveries',
        label: 'Featured Project',
        description: 'A sophisticated delivery management system implementing optimal routing algorithms, capacity constraints, and distance calculations for logistics operations. Built in C/C++ with modular design, custom pathfinding algorithms, and sophisticated data structures. Features multi-route support, package validation, route optimization, capacity management, smart assignment logic, and comprehensive testing with 100% coverage.',
        technologies: ['C', 'C++', 'Algorithms', 'Data Structures', 'Visual Studio', 'Git'],
        image: 'images/seneca-deliveries.png',
        demoUrl: '#',
        codeUrl: 'https://github.com/AjayMaan13/SenecaPolytechnicDeliveries'
    },
    {
        id: 'project3',
        title: 'SmartLib - Library Management System',
        label: 'Featured Project',
        description: 'A professional-grade library management system built in C++ that simulates real-world library operations with enterprise-level software engineering practices. Implements advanced OOP concepts including inheritance, polymorphism, virtual functions, and custom operator overloading. Features complete publication management, automated checkout/return system, penalty calculation, persistent data storage, and a professional CLI interface.',
        technologies: ['C++17', 'OOP', 'STL', 'Design Patterns', 'File I/O', 'Memory Management'],
        image: 'images/smartlib.png',
        demoUrl: '#',
        codeUrl: 'https://github.com/AjayMaan13/SmartLib'
    },
    {
        id: 'project4',
        title: 'Credit Card Validator Upgraded',
        label: 'Featured Project',
        description: 'A comprehensive C application that evolved from a simple validator into a production-ready card management system with advanced security and network programming. Features AES-256-CBC encryption, real-time API integration with BIN database lookups using cURL, JSON structured logging, secure card storage, Luhn algorithm validation, activity monitoring, and secure memory management practices.',
        technologies: ['C', 'OpenSSL', 'cURL', 'cJSON', 'Security', 'Cryptography', 'API'],
        image: 'images/credit-card.png',
        demoUrl: '#',
        codeUrl: 'https://github.com/AjayMaan13/Credit-Card-Validator-Upgraded'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initFeaturedProjects();
});

function initFeaturedProjects() {
    addFeaturedProjectsCSS();
    generateFeaturedProjects();
    setupScrollAnimations();
}

function addFeaturedProjectsCSS() {
    const style = document.createElement('style');
    style.textContent = `
/* Featured Projects Section */
.projects-section {
  padding: var(--space-16) 0;
  background: var(--color-bg-primary);
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

/* Featured Project Layout - Vertical */
.featured-project {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.featured-project.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Project Image - Full Width on Top */
.project-image {
  position: relative;
  width: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  background: var(--color-bg-secondary);
  aspect-ratio: 16/9;
  margin-bottom: var(--space-6);
  transition: all 0.3s ease;
}

.project-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-image:hover img {
  transform: scale(1.05);
}

/* Placeholder if no image */
.project-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
  color: white;
  font-size: var(--text-4xl);
  font-weight: var(--weight-bold);
}

/* Project Content - Below Image */
.project-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
}

.project-label {
  color: var(--color-accent-primary);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: var(--font-secondary);
}

.project-title {
  font-size: var(--text-3xl);
  font-weight: var(--weight-bold);
  color: var(--color-text-primary);
  line-height: 1.2;
  margin: 0;
}

.project-description {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.7;
  padding: 0;
  margin: var(--space-2) 0;
}

.project-tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  font-family: var(--font-secondary);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-top: var(--space-2);
}

.project-links {
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-2);
}

.project-link {
  color: var(--color-text-primary);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.project-link:hover {
  color: var(--color-accent-primary);
  transform: translateY(-2px);
}

.project-link svg {
  width: 24px;
  height: 24px;
}

/* Responsive */
@media (max-width: 1024px) {
  .featured-project {
    margin-bottom: 80px;
  }

  .project-title {
    font-size: var(--text-2xl);
  }

  .project-description {
    font-size: var(--text-sm);
  }
}

@media (max-width: 640px) {
  .projects-container {
    padding: 0 var(--space-3);
  }

  .featured-project {
    margin-bottom: 60px;
  }

  .project-title {
    font-size: var(--text-xl);
  }

  .project-description {
    font-size: var(--text-sm);
  }

  .project-tech-list {
    font-size: var(--text-xs);
    gap: var(--space-2);
  }

  .project-image {
    aspect-ratio: 4/3;
  }
}
    `;
    document.head.appendChild(style);
}

function generateFeaturedProjects() {
    const container = document.querySelector('.projects-container');
    if (!container) {
        console.error('Projects container not found');
        return;
    }
    
    container.innerHTML = '';
    
    featuredProjectsData.forEach((project, index) => {
        const projectElement = createFeaturedProject(project, index);
        container.appendChild(projectElement);
    });
}

function createFeaturedProject(project, index) {
    const article = document.createElement('article');
    article.className = 'featured-project';
    article.style.transitionDelay = `${index * 0.2}s`;
    
    article.innerHTML = `
        <div class="project-image">
            ${project.image ? 
                `<img src="${project.image}" alt="${project.title}" />` :
                `<div class="project-image-placeholder">${project.title.charAt(0)}</div>`
            }
        </div>
        
        <div class="project-content">
            <p class="project-label">${project.label}</p>
            <h3 class="project-title">${project.title}</h3>
            <div class="project-description">
                ${project.description}
            </div>
            <div class="project-tech-list">
                ${project.technologies.join('    ')}
            </div>
            <div class="project-links">
                <a href="${project.codeUrl}" class="project-link" target="_blank" rel="noopener" aria-label="GitHub Repository">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>
                <a href="${project.demoUrl}" class="project-link" target="_blank" rel="noopener" aria-label="External Link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </div>
        </div>
    `;
    
    return article;
}

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('.featured-project').forEach(project => {
        observer.observe(project);
    });
}

window.featuredProjectsData = featuredProjectsData;