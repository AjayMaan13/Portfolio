/**
 * Brittany Chiang Style Projects Layout
 * Handles featured and other projects with alternating layouts
 */

// Featured projects data
const bcFeaturedProjects = [
    {
        id: 1,
        title: 'FinSight - Personal Finance Tracker',
        label: 'Featured Project',
        description: 'A comprehensive personal finance application built with modern full-stack technologies to help users manage their finances effectively. Features include transaction management, goal tracking, budget management, financial insights with visual analytics, and secure JWT-based authentication.',
        image: './src/images/artvault.png',
        tech: ['React 19', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Tailwind CSS'],
        github: 'https://github.com/AjayMaan13/FinSight',
        external: '#'
    },
    {
        id: 2,
        title: 'Seneca Polytechnic Deliveries',
        label: 'Featured Project',
        description: 'A sophisticated delivery management system implementing optimal routing algorithms, capacity constraints, and distance calculations for logistics operations. Built in C/C++ with modular design, custom pathfinding algorithms, and sophisticated data structures.',
        image: './src/images/senecaWorks.png',
        tech: ['C', 'C++', 'Algorithms', 'Data Structures', 'Visual Studio'],
        github: 'https://github.com/AjayMaan13/SenecaPolytechnicDeliveries',
        external: '#'
    },
    {
        id: 3,
        title: 'Credit Card Validator Upgraded',
        label: 'Featured Project',
        description: 'A comprehensive C application that evolved from a simple validator into a production-ready card management system with advanced security and network programming. Features AES-256-CBC encryption, real-time API integration with BIN database lookups using cURL, and secure card storage.',
        image: './src/images/govON.png',
        tech: ['C', 'OpenSSL', 'cURL', 'cJSON', 'Security', 'Cryptography'],
        github: 'https://github.com/AjayMaan13/Credit-Card-Validator-Upgraded',
        external: '#'
    }
];

// Other projects data
// Other projects data - ADD MORE PROJECTS HERE (total should be more than 6)
const bcOtherProjects = [
    {
        id: 4,
        title: 'SmartLib - Library Management',
        description: 'A professional-grade library management system built in C++ with advanced OOP concepts including inheritance, polymorphism, and virtual functions.',
        tech: ['C++17', 'OOP', 'STL'],
        github: 'https://github.com/AjayMaan13/SmartLib',
        external: '#'
    },
    {
        id: 5,
        title: 'Portfolio Website',
        description: 'Personal portfolio website built with vanilla JavaScript, featuring smooth animations, dark mode, and responsive design.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/AjayMaan13',
        external: '#'
    },
    {
        id: 6,
        title: 'Algorithm Visualizer',
        description: 'Interactive visualization tool for sorting and pathfinding algorithms with step-by-step execution and speed controls.',
        tech: ['React', 'D3.js', 'Algorithms'],
        github: 'https://github.com/AjayMaan13',
        external: '#'
    },
    {
        id: 7,
        title: 'Weather Dashboard',
        description: 'Real-time weather application with geolocation support, 5-day forecasts, and interactive weather maps.',
        tech: ['JavaScript', 'API', 'Leaflet.js'],
        github: 'https://github.com/AjayMaan13',
        external: '#'
    },
    {
        id: 8,
        title: 'Task Manager Pro',
        description: 'Full-featured task management app with drag-and-drop, categories, priorities, and local storage persistence.',
        tech: ['TypeScript', 'React', 'LocalStorage'],
        github: 'https://github.com/AjayMaan13',
        external: '#'
    },
    {
        id: 9,
        title: 'Code Snippet Manager',
        description: 'Developer tool for organizing and searching code snippets with syntax highlighting and tags.',
        tech: ['Vue.js', 'Prism.js', 'IndexedDB'],
        github: 'https://github.com/AjayMaan13',
        external: '#'
    },
    {
        id: 10,
        title: 'Markdown Editor',
        description: 'Live markdown editor with preview, export to PDF, and customizable themes.',
        tech: ['React', 'Marked.js', 'jsPDF'],
        github: 'https://github.com/AjayMaan13',
        external: '#'
    },
    {
        id: 11,
        title: 'Chat Application',
        description: 'Real-time chat app with rooms, private messaging, and emoji support.',
        tech: ['Socket.io', 'Node.js', 'MongoDB'],
        github: 'https://github.com/AjayMaan13',
        external: '#'
    }
];

const INITIAL_PROJECTS_SHOWN = 6;
let showingAllProjects = false;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initBCProjects();
});

function initBCProjects() {
    renderFeaturedProjects();
    renderOtherProjects();
    setupScrollAnimations();
    setupShowMoreButton();
}

function setupShowMoreButton() {
    const button = document.querySelector('.bc-show-more-btn');
    if (button) {
        button.addEventListener('click', toggleShowMore);
    }
}

function renderFeaturedProjects() {
    const container = document.querySelector('.bc-featured-container');
    if (!container) return;

    container.innerHTML = bcFeaturedProjects.map((project, index) => `
        <article class="bc-featured-project" style="transition-delay: ${index * 0.1}s">
            <!-- Project Image -->
            <div class="bc-project-image-wrapper">
                <a href="${project.external}" class="bc-project-image-link" target="_blank" rel="noopener noreferrer">
                    <div class="bc-project-image-overlay"></div>
                    <img src="${project.image}" alt="${project.title}" class="bc-project-image" />
                </a>
            </div>

            <!-- Project Content -->
            <div class="bc-project-content">
                <p class="bc-project-label">${project.label}</p>
                <h3>
                    <a href="${project.external}" class="bc-project-title-link" target="_blank" rel="noopener noreferrer">
                        <span class="bc-project-title">${project.title}</span>
                    </a>
                </h3>
                <div class="bc-project-description-box">
                    <p class="bc-project-description">${project.description}</p>
                </div>
                <div class="bc-project-tech-list">
                    ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="bc-project-links">
                    <a href="${project.github}" class="bc-project-icon-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a href="${project.external}" class="bc-project-icon-link" target="_blank" rel="noopener noreferrer" aria-label="External Link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

function renderOtherProjects() {
    const container = document.querySelector('.bc-other-grid');
    if (!container) return;

    const projectsToShow = showingAllProjects ? bcOtherProjects : bcOtherProjects.slice(0, INITIAL_PROJECTS_SHOWN);

    container.innerHTML = projectsToShow.map((project, index) => `
        <article class="bc-other-project bc-visible" style="transition-delay: ${index * 0.05}s">
            <div class="bc-other-header">
                <div class="bc-folder-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                </div>
                <div class="bc-other-links">
                    <a href="${project.github}" class="bc-other-icon-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a href="${project.external}" class="bc-other-icon-link" target="_blank" rel="noopener noreferrer" aria-label="External Link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
            <h3 class="bc-other-project-title">${project.title}</h3>
            <p class="bc-other-description">${project.description}</p>
            <div class="bc-other-tech-list">
                ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
            </div>
        </article>
    `).join('');
}

function toggleShowMore() {
    const container = document.querySelector('.bc-other-grid');
    const button = document.querySelector('.bc-show-more-btn');
    
    if (!container || !button) return;
    
    // Get current scroll position relative to the button
    const buttonRect = button.getBoundingClientRect();
    const scrollY = window.scrollY;
    
    if (!showingAllProjects) {
        // SHOWING MORE - Add new projects smoothly
        showingAllProjects = true;
        button.textContent = 'Show Less';
        
        // Get additional projects to add
        const additionalProjects = bcOtherProjects.slice(INITIAL_PROJECTS_SHOWN);
        
        // Create and append new projects with fade-in animation
        additionalProjects.forEach((project, index) => {
            const article = document.createElement('article');
            article.className = 'bc-other-project';
            article.style.opacity = '0';
            article.style.transform = 'translateY(20px)';
            article.innerHTML = `
                <div class="bc-other-header">
                    <div class="bc-folder-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                    </div>
                    <div class="bc-other-links">
                        <a href="${project.github}" class="bc-other-icon-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                        <a href="${project.external}" class="bc-other-icon-link" target="_blank" rel="noopener noreferrer" aria-label="External Link">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
                <h3 class="bc-other-project-title">${project.title}</h3>
                <p class="bc-other-description">${project.description}</p>
                <div class="bc-other-tech-list">
                    ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            `;
            
            container.appendChild(article);
            
            // Trigger animation after a brief delay
            setTimeout(() => {
                article.style.transition = 'all 0.4s ease';
                article.style.opacity = '1';
                article.style.transform = 'translateY(0)';
            }, index * 50);
        });
        
    } else {
        // SHOWING LESS - Remove extra projects smoothly
        showingAllProjects = false;
        button.textContent = 'Show More';
        
        const allProjects = container.querySelectorAll('.bc-other-project');
        const projectsToRemove = Array.from(allProjects).slice(INITIAL_PROJECTS_SHOWN);
        
        // Fade out projects that will be removed
        projectsToRemove.forEach((project, index) => {
            setTimeout(() => {
                project.style.transition = 'all 0.3s ease';
                project.style.opacity = '0';
                project.style.transform = 'translateY(-20px)';
            }, index * 30);
        });
        
        // Remove them from DOM after animation
        setTimeout(() => {
            projectsToRemove.forEach(project => project.remove());
        }, projectsToRemove.length * 30 + 300);
    }
}


function setupOtherProjectsAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('bc-visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.bc-other-project').forEach(project => {
        observer.observe(project);
    });
}

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('bc-visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe featured projects
    document.querySelectorAll('.bc-featured-project').forEach(project => {
        observer.observe(project);
    });

    // Observe other projects
    document.querySelectorAll('.bc-other-project').forEach(project => {
        observer.observe(project);
    });
}

// Export for use in other files if needed
window.bcFeaturedProjects = bcFeaturedProjects;
window.bcOtherProjects = bcOtherProjects;