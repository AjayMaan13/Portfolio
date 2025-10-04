// Featured projects data
const bcFeaturedProjects = [
    {
        id: 1,
        title: 'ArtVault - Art Collection Manager',
        label: 'Featured Project',
        description: 'A modern web application for discovering and organizing artworks from the Metropolitan Museum of Art. Features secure JWT authentication, personal collections, search history, and optimized Server-Side Rendering with Next.js serving 100+ daily users.',
        image: './src/images/artvault.png',
        tech: ['Next.js', 'React', 'MongoDB', 'JWT', 'Bootstrap', 'Vercel'],
        github: 'https://github.com/AjayMaan13/artvault',
        external: 'https://artvault-delta.vercel.app'
    },
    {
        id: 2,
        title: 'AI Receipt Analyzer',
        label: 'Featured Project',
        description: 'AI-powered receipt analysis application using GPT-4 Vision API for automated item and price extraction. Built with Streamlit featuring image quality assessment, user validation, and real-time spending insights achieving 90%+ accuracy on clear images.',
        image: './src/images/receipt.png',
        tech: ['Python', 'Streamlit', 'GPT-4 Vision', 'Computer Vision', 'PIL'],
        github: 'https://github.com/AjayMaan13/smart-script-analyzer',
        external: 'https://smart-script-analyzer-pxnezltk8wdw775z5ehkwg.streamlit.app'
    },
    {
        id: 3,
        title: 'FinSight - Personal Finance Tracker',
        label: 'Featured Project',
        description: 'Comprehensive full-stack personal finance application with microservices architecture. Features transaction management, goal tracking, budget visualization, and AI-powered balance forecasting using Python Flask ML service with 25+ API endpoints.',
        image: './src/images/finsight.png',
        tech: ['React 19', 'Node.js', 'PostgreSQL', 'Express', 'JWT', 'Python Flask'],
        github: 'https://github.com/AjayMaan13/FinSight',
        external: '#'
    },
    {
        id: 4,
        title: 'AirAware - AI Data Processing Pipeline',
        label: 'Featured Project',
        description: 'Real-time ETL pipeline for air quality monitoring with automated health risk alerts. Implements AI-driven data quality management, predictive analytics, and processes 1000+ data points daily with comprehensive visualization system.',
        image: './src/images/airaware.png',
        tech: ['Python', 'PostgreSQL', 'Pandas', 'NumPy', 'Machine Learning', 'ETL'],
        github: 'https://github.com/AjayMaan13/AirAware',
        external: '#'
    },
    {
        id: 5,
        title: 'Accessibility Testing Framework',
        label: 'Featured Project',
        description: 'Comprehensive automated web accessibility testing framework following WCAG 2.0 standards. Features Page Object Model architecture, cross-browser support, visual reporting with screenshots, and CI/CD integration through GitHub Actions.',
        image: './src/images/a11y.png',
        tech: ['Python', 'Selenium', 'TestNG', 'axe-core', 'GitHub Actions', 'PyTest'],
        github: 'https://github.com/AjayMaan13/A11ySeleniumFramework',
        external: '#'
    }
];

const bcOtherProjects = [
    {
        id: 6,
        title: 'Tic-Tac-Toe AI',
        description: 'Unbeatable AI using Minimax algorithm with Alpha-Beta pruning optimization. Features beautiful Pygame GUI, 50x performance improvement, and comprehensive testing achieving instant move calculations.',
        tech: ['Python', 'Pygame', 'AI', 'Minimax', 'Alpha-Beta Pruning'],
        github: 'https://github.com/AjayMaan13/tic-tac-toe-ai',
        external: '#'
    },
    {
        id: 7,
        title: 'SmartLib - Library Management',
        description: 'Professional-grade library system built with C++17 featuring advanced OOP concepts, design patterns, RAII memory management, and zero memory leaks.',
        tech: ['C++17', 'OOP', 'STL', 'Design Patterns'],
        github: 'https://github.com/AjayMaan13/SmartLib',
        external: '#'
    },
    {
        id: 8,
        title: 'Seneca Polytechnic Deliveries',
        description: 'Delivery logistics system implementing A* and Dijkstra pathfinding algorithms for optimized route planning. Developed using Agile methodology with user stories, acceptance testing, and comprehensive test coverage achieving 100% validation across 32+ test cases.',
        tech: ['C', 'C++', 'A* Algorithm', 'Dijkstra', 'Agile', 'Testing'],
        github: 'https://github.com/AjayMaan13/SenecaPolytechnicDeliveries',
        external: '#'
    },
    {
        id: 9,
        title: 'TeachMe Education Database',
        description: 'Sophisticated Oracle database with business intelligence, advanced SQL features including window functions and CTEs, and Docker containerization for deployment.',
        tech: ['Oracle', 'SQL', 'PL/SQL', 'Docker'],
        github: 'https://github.com/AjayMaan13/TeachMe',
        external: '#'
    },
    {
        id: 10,
        title: 'Credit Card Validator Upgraded',
        description: 'Production-ready card management system with AES-256-CBC encryption, real-time BIN API integration using cURL, and JSON structured logging for compliance.',
        tech: ['C', 'OpenSSL', 'cURL', 'cJSON', 'Security'],
        github: 'https://github.com/AjayMaan13/Credit-Card-Validator-Upgraded',
        external: '#'
    },
    {
        id: 11,
        title: 'Digital Dine-In',
        description: 'Console-based restaurant ordering system featuring OOP design with abstract classes, dynamic pricing, memory-safe RAII implementation, and automated billing with CSV integration.',
        tech: ['C++11/14', 'OOP', 'File I/O', 'Memory Management'],
        github: 'https://github.com/AjayMaan13/Digital-Dine-In',
        external: '#'
    },
    {
        id: 12,
        title: 'ArtVault Test Automation',
        description: 'Selenium + TestNG automation suite featuring Page Object Model structure, data-driven tests with DataProvider, and parallel execution for comprehensive test coverage.',
        tech: ['Java', 'Selenium', 'TestNG', 'POM'],
        github: 'https://github.com/AjayMaan13/ArtVault-TestAutomation',
        external: '#'
    },
    {
        id: 13,
        title: 'GitTrack',
        description: 'Simple Java CLI tool that fetches and displays recent GitHub user activity directly in your terminal with formatted output and error handling.',
        tech: ['Java', 'CLI', 'GitHub API'],
        github: 'https://github.com/AjayMaan13/GitTrack',
        external: '#'
    },
    {
        id: 14,
        title: 'PyDB-Core',
        description: 'Lightweight key-value database implementation featuring immutable data structures, MVCC, and ACID compliance built from scratch to demonstrate database internals.',
        tech: ['Python', 'Database', 'ACID'],
        github: 'https://github.com/AjayMaan13/pydb-core',
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