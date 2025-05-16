/**
 * Updated projects.js with scroll animations and opening effects
 * This replaces your existing projects.js file
 */

// Enhanced project data with detailed information
const enhancedProjectsData = [
    {
        id: 'project1',
        title: 'Personal Portfolio',
        description: 'A modern portfolio website with dark/light theme toggle, interactive elements, and responsive design.',
        detailedDescription: `
            <p>This portfolio showcases modern web development practices with a focus on user experience and visual appeal.</p>
            <h4>Key Features:</h4>
            <ul>
                <li>🌓 Dynamic dark/light theme toggle with smooth transitions</li>
                <li>✨ Interactive animations using CSS and JavaScript</li>
                <li>📱 Fully responsive design for all device types</li>
                <li>⚡ Performance optimized with lazy loading</li>
                <li>🎨 Custom CSS animations and microinteractions</li>
            </ul>
            <h4>Technical Implementation:</h4>
            <p>Built with vanilla JavaScript for optimal performance, utilizing modern CSS features like CSS Grid and Flexbox. The theme system uses CSS custom properties for seamless color transitions.</p>
        `,
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express'],
        tags: ['Web', 'Frontend', 'UI/UX'],
        image: 'src/images/project1.jpg',
        demoUrl: 'https://portfolio-gray-xi-10.vercel.app',
        codeUrl: 'https://github.com/AjayMaan13/Portfolio',
        categories: ['web', 'frontend'],
        stats: {
            'Lines of Code': '2,500+',
            'Components': '12',
            'Load Time': '< 1s'
        }
    },
    {
        id: 'project2',
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce application with user authentication, payment processing, and admin dashboard.',
        detailedDescription: `
            <p>A comprehensive e-commerce solution built with modern web technologies.</p>
            <h4>Key Features:</h4>
            <ul>
                <li>🛒 Shopping cart and checkout system</li>
                <li>💳 Secure payment processing</li>
                <li>👤 User authentication and profiles</li>
                <li>📊 Admin dashboard for inventory management</li>
                <li>📱 Mobile-first responsive design</li>
            </ul>
            <h4>Technical Stack:</h4>
            <p>Built using React for the frontend, Node.js/Express for the backend, and MongoDB for data storage. Integrated with Stripe for payment processing.</p>
        `,
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
        tags: ['Web', 'Fullstack', 'Node.js'],
        image: 'src/images/project2.jpg',
        demoUrl: '#',
        codeUrl: '#',
        categories: ['web', 'frontend', 'backend'],
        stats: {
            'Pages': '15+',
            'API Endpoints': '25+',
            'Users': '100+'
        }
    },
    {
        id: 'project3',
        title: 'Weather App',
        description: 'Real-time weather application using weather API with location search and forecast visualization.',
        detailedDescription: `
            <p>A sleek weather application providing real-time weather data and forecasts.</p>
            <h4>Key Features:</h4>
            <ul>
                <li>🌤️ Real-time weather data</li>
                <li>📍 Location-based weather detection</li>
                <li>📈 5-day weather forecast</li>
                <li>🔍 City search functionality</li>
                <li>📊 Interactive weather charts</li>
            </ul>
            <h4>API Integration:</h4>
            <p>Integrated with OpenWeatherMap API for real-time data. Features geolocation support for automatic weather detection based on user location.</p>
        `,
        technologies: ['JavaScript', 'Weather API', 'Chart.js', 'HTML5', 'CSS3'],
        tags: ['Web', 'API', 'JavaScript'],
        image: 'src/images/project3.jpg',
        demoUrl: '#',
        codeUrl: '#',
        categories: ['web', 'frontend'],
        stats: {
            'API Calls': '1000+/day',
            'Cities': '200k+',
            'Accuracy': '99.9%'
        }
    },
    {
        id: 'project4',
        title: 'Task Management API',
        description: 'RESTful API for task management built with Node.js, Express, and MongoDB with full CRUD operations.',
        detailedDescription: `
            <p>A robust REST API for task and project management applications.</p>
            <h4>Key Features:</h4>
            <ul>
                <li>📝 Full CRUD operations for tasks</li>
                <li>👥 User authentication and authorization</li>
                <li>📅 Project and deadline management</li>
                <li>🔒 JWT-based security</li>
                <li>📚 Comprehensive API documentation</li>
            </ul>
            <h4>Architecture:</h4>
            <p>Built with Node.js and Express, following RESTful principles. Uses MongoDB for data persistence and JWT for secure authentication.</p>
        `,
        technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
        tags: ['API', 'Node.js', 'MongoDB'],
        image: 'src/images/project4.jpg',
        demoUrl: '#',
        codeUrl: '#',
        categories: ['backend'],
        stats: {
            'Endpoints': '15',
            'Response Time': '< 200ms',
            'Uptime': '99.9%'
        }
    }
];

// DOM Elements
const projectsGrid = document.querySelector('.projects-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Intersection Observer for scroll animations
let scrollObserver = null;

// Initialize projects when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('Projects.js loaded');
    
    // Check if elements exist
    if (!projectsGrid) {
        console.error('Projects grid not found!');
        return;
    }
    
    // Add required CSS for animations
    addScrollAnimationCSS();
    
    // Set up intersection observer for scroll animations
    setupScrollObserver();
    
    // Generate project cards
    generateProjectCards();
    
    // Set up filter functionality
    setupProjectFilters();
    
    // Set up click handlers for modals
    setupModalHandlers();
});

// Add CSS for scroll animations
function addScrollAnimationCSS() {
    const style = document.createElement('style');
    style.textContent = `
        /* Initial state - cards start hidden */
        .project-card {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                        transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Animation when cards come into view */
        .project-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Filter animation states */
        .project-card.filtering {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
            transition: all 0.3s ease;
        }
        
        .project-card.hidden {
            display: none;
        }
        
        .project-card.show-card {
            opacity: 1;
            transform: translateY(0) scale(1);
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        /* Enhanced card hover effects */
        .project-card:hover {
            transform: translateY(-5px);
        }
        
        .project-card.animate-in:hover {
            transform: translateY(-5px);
        }
        
        /* Respect users' motion preferences */
        @media (prefers-reduced-motion: reduce) {
            .project-card {
                transition: opacity 0.3s ease;
                transform: none;
            }
            
            .project-card.animate-in {
                transform: none;
            }
        }
    `;
    document.head.appendChild(style);
}

// Set up intersection observer for scroll animations
function setupScrollObserver() {
    // Configuration for the observer
    const observerConfig = {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation 50px before the element enters viewport
    };
    
    // Create the intersection observer
    scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a staggered delay based on the card's position
                const card = entry.target;
                const delay = Array.from(projectsGrid.children).indexOf(card) * 150; // 150ms delay between cards
                
                setTimeout(() => {
                    card.classList.add('animate-in');
                }, delay);
                
                // Stop observing this card once it's animated
                scrollObserver.unobserve(card);
            }
        });
    }, observerConfig);
}

// Generate project cards from data
function generateProjectCards() {
    console.log('Generating project cards...');
    
    // Clear existing content
    projectsGrid.innerHTML = '';
    
    // Generate cards
    enhancedProjectsData.forEach((project, index) => {
        const card = createProjectCard(project, index);
        projectsGrid.appendChild(card);
        
        // Start observing the card for scroll animations
        if (scrollObserver) {
            scrollObserver.observe(card);
        }
    });
    
    console.log(`Created ${enhancedProjectsData.length} project cards`);
}

// Create a single project card
function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card'; // Remove animate-on-scroll, we handle it differently now
    card.setAttribute('data-categories', project.categories.join(','));
    card.setAttribute('data-project-index', index);
    
    // Create HTML structure
    card.innerHTML = `
        <div class="project-card-inner">
            <!-- Front of card -->
            <div class="project-card-front">
                <img src="${project.image}" alt="${project.title}" class="project-image" 
                     onerror="this.src='https://via.placeholder.com/300x200?text=Project+Image'">
                <div class="project-overlay">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </p>
                </div>
            </div>
            
            <!-- Back of card -->
            <div class="project-card-back">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <button class="project-link project-details-btn" data-project-index="${index}">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M12 1v6m0 6v6"></path>
                            <path d="M1 12h6m6 0h6"></path>
                        </svg>
                        View Details
                    </button>
                    <a href="${project.codeUrl}" class="project-link" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        Code
                    </a>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Set up modal click handlers
function setupModalHandlers() {
    // Handle clicks on project cards (both front and the details button)
    document.addEventListener('click', (e) => {
        // Check if click is on a project card or details button
        const card = e.target.closest('.project-card');
        const detailsBtn = e.target.closest('.project-details-btn');
        
        if (detailsBtn || (card && !e.target.closest('.project-link'))) {
            e.preventDefault();
            const projectIndex = card.getAttribute('data-project-index');
            const project = enhancedProjectsData[projectIndex];
            
            if (project) {
                console.log('Opening modal for:', project.title);
                createProjectModal(project);
            }
        }
    });
}

// Create and show project modal
function createProjectModal(project) {
    console.log('Creating modal for project:', project.title);
    
    // Remove existing modal if any
    const existingModal = document.querySelector('.project-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create modal structure
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-overlay" data-close-modal></div>
        <div class="modal-container">
            <button class="modal-close" data-close-modal>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            
            <div class="modal-content">
                <!-- Header Section -->
                <div class="modal-header">
                    <div class="modal-image-container">
                        <img src="${project.image}" alt="${project.title}" class="modal-image"
                             onerror="this.src='https://via.placeholder.com/800x300?text=Project+Image'">
                        <div class="modal-overlay-gradient"></div>
                        <div class="modal-title-overlay">
                            <h1 class="modal-title">${project.title}</h1>
                            <div class="modal-tech-stack">
                                ${project.technologies.map(tech => 
                                    `<span class="tech-badge">${tech}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Content Section -->
                <div class="modal-body">
                    <div class="modal-description">
                        ${project.detailedDescription}
                    </div>

                    <!-- Project Stats -->
                    <div class="modal-stats">
                        <h3>Project Stats</h3>
                        <div class="stats-grid">
                            ${Object.entries(project.stats || {}).map(([key, value]) => `
                                <div class="stat-item">
                                    <div class="stat-value">${value}</div>
                                    <div class="stat-label">${key}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Footer with Actions -->
                <div class="modal-footer">
                    <div class="modal-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="modal-actions">
                        <a href="${project.demoUrl}" target="_blank" rel="noopener" class="btn-modal btn-demo">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                            Live Demo
                        </a>
                        <a href="${project.codeUrl}" target="_blank" rel="noopener" class="btn-modal btn-code">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            View Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add modal to body
    document.body.appendChild(modal);

    // Animate modal in
    setTimeout(() => {
        modal.classList.add('modal-active');
    }, 10);

    // Close modal handlers
    const closeElements = modal.querySelectorAll('[data-close-modal]');
    closeElements.forEach(element => {
        element.addEventListener('click', () => closeProjectModal(modal));
    });

    // Prevent modal close when clicking inside content
    modal.querySelector('.modal-container').addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // ESC key to close
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeProjectModal(modal);
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close modal with animation
function closeProjectModal(modal) {
    modal.classList.remove('modal-active');
    modal.classList.add('modal-closing');
    
    setTimeout(() => {
        modal.remove();
        document.body.style.overflow = '';
    }, 300);
}

// Set up project filters with enhanced animations
function setupProjectFilters() {
    if (!filterButtons.length) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Filter projects with animation
            filterProjects(filterValue);
        });
    });
}

// Enhanced filter projects with smooth animations
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    
    // First hide all cards with staggered animation
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('filtering');
        }, index * 50);
    });
    
    // After hiding animation completes, filter and show relevant cards
    setTimeout(() => {
        let visibleIndex = 0;
        
        projectCards.forEach(card => {
            // Get card categories
            const categories = card.getAttribute('data-categories').split(',');
            
            // Check if card should be shown
            const shouldShow = category === 'all' || categories.includes(category);
            
            // Apply appropriate classes
            card.classList.remove('filtering');
            
            if (shouldShow) {
                card.classList.remove('hidden');
                
                // Stagger the show animations
                setTimeout(() => {
                    card.classList.add('show-card');
                    card.classList.add('animate-in'); // Ensure it's marked as animated
                }, visibleIndex * 100);
                
                visibleIndex++;
            } else {
                card.classList.add('hidden');
                card.classList.remove('show-card', 'animate-in');
            }
        });
    }, 400); // Wait for hiding animation to complete
}

// Enhanced setup function that replaces the old 3D effect
function setup3DCardEffect() {
    // This function now handles both the scroll animations and any additional effects
    console.log('✨ Enhanced project animations initialized');
    
    // If cards are already visible, trigger animations immediately
    if (projectsGrid && projectsGrid.children.length > 0) {
        const cards = projectsGrid.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            if (isElementInViewport(card)) {
                setTimeout(() => {
                    card.classList.add('animate-in');
                }, index * 150);
            }
        });
    }
}

// Helper function to check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Cleanup function for when the page is being unloaded
window.addEventListener('beforeunload', () => {
    if (scrollObserver) {
        scrollObserver.disconnect();
    }
});