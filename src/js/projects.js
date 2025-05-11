/**
 * Projects Management
 * Handles project filtering, 3D effects, and dynamic content
 */

// Project data - can be moved to a separate JSON file
const projectsData = [
    {
        id: 'project1',
        title: 'Personal Portfolio',
        description: 'A modern portfolio website with dark/light theme toggle, interactive elements, and responsive design.',
        tags: ['Web', 'Frontend', 'UI/UX'],
        image: 'assets/images/project1.jpg',
        demoUrl: 'https://portfolio-gray-xi-10.vercel.app',
        codeUrl: 'https://github.com/AjayMaan13/Portfolio',
        categories: ['web', 'frontend']
    },
    {
        id: 'project2',
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce application with user authentication, payment processing, and admin dashboard.',
        tags: ['Web', 'Fullstack', 'Node.js'],
        image: 'assets/images/project2.jpg',
        demoUrl: '#',
        codeUrl: '#',
        categories: ['web', 'frontend', 'backend']
    },
    {
        id: 'project3',
        title: 'Weather App',
        description: 'Real-time weather application using weather API with location search and forecast visualization.',
        tags: ['Web', 'API', 'JavaScript'],
        image: 'assets/images/project3.jpg',
        demoUrl: '#',
        codeUrl: '#',
        categories: ['web', 'frontend']
    },
    {
        id: 'project4',
        title: 'Task Management API',
        description: 'RESTful API for task management built with Node.js, Express, and MongoDB with full CRUD operations.',
        tags: ['API', 'Node.js', 'MongoDB'],
        image: 'assets/images/project4.jpg',
        demoUrl: '#',
        codeUrl: '#',
        categories: ['backend']
    }
];

// DOM Elements
const projectsGrid = document.querySelector('.projects-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize projects
document.addEventListener('DOMContentLoaded', () => {
    // Generate project cards
    generateProjectCards();
    
    // Set up filter functionality
    setupProjectFilters();
    
    // Add 3D effect to cards
    setup3DCardEffect();
});

// Generate project cards from data
function generateProjectCards() {
    // Clear existing content
    if (projectsGrid) {
        projectsGrid.innerHTML = '';
        
        // Generate cards
        projectsData.forEach(project => {
            const card = createProjectCard(project);
            projectsGrid.appendChild(card);
        });
    }
}

// Create a single project card
function createProjectCard(project) {
    // Create card element
    const card = document.createElement('div');
    card.className = 'project-card animate-on-scroll';
    card.setAttribute('data-animation', 'fade-in-up');
    card.setAttribute('data-categories', project.categories.join(','));
    
    // Create HTML structure
    card.innerHTML = `
        <div class="project-card-inner">
            <!-- Front of card -->
            <div class="project-card-front">
                <img src="${project.image}" alt="${project.title}" class="project-image">
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
                    <a href="${project.demoUrl}" class="project-link" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                        Demo
                    </a>
                    <a href="${project.codeUrl}" class="project-link" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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

// Set up project filters
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
            
            // Filter projects
            filterProjects(filterValue);
        });
    });
}

// Filter projects based on category
// Enhanced Filter Projects with Animation
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    
    // First hide all cards with animation
    projectCards.forEach(card => {
        card.classList.add('filtering');
    });
    
    // After animation completes, filter and show relevant cards
    setTimeout(() => {
        projectCards.forEach(card => {
            // Get card categories
            const categories = card.getAttribute('data-categories').split(',');
            
            // Check if card should be shown
            const shouldShow = category === 'all' || categories.includes(category);
            
            // Apply appropriate classes
            card.classList.remove('filtering');
            card.classList.toggle('hidden', !shouldShow);
            
            // Stagger the animations
            if (shouldShow) {
                setTimeout(() => {
                    card.classList.add('show-card');
                }, Math.random() * 300); // Random delay for natural feeling
            }
        });
    }, 300); // Match this with CSS transition time
}
// Set up 3D hover effect for project cards
function setup3DCardEffect() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        const cardInner = card.querySelector('.project-card-inner');
        
        // Variables for card tilt effect
        let cardRect, centerX, centerY;
        
        // Update card dimensions on window resize
        function updateCardDimensions() {
            cardRect = card.getBoundingClientRect();
            centerX = cardRect.left + cardRect.width / 2;
            centerY = cardRect.top + cardRect.height / 2;
        }
        
        // Initial update
        updateCardDimensions();
        
        // Update on window resize
        window.addEventListener('resize', updateCardDimensions);
        
        // Mouse move handler
        card.addEventListener('mousemove', (e) => {
            // Check if we should update dimensions (in case of scroll)
            if (e.clientY < cardRect.top || e.clientY > cardRect.bottom ||
                e.clientX < cardRect.left || e.clientX > cardRect.right) {
                updateCardDimensions();
            }
            
            // Calculate mouse position relative to card center
            const xRotation = ((e.clientY - centerY) / cardRect.height) * 10;
            const yRotation = ((centerX - e.clientX) / cardRect.width) * 10;
            
            // Apply transformations
            cardInner.style.transform = `
                perspective(1000px)
                rotateX(${xRotation}deg)
                rotateY(${yRotation}deg)
                scale3d(1.05, 1.05, 1.05)
            `;
        });
        
        // Mouse leave handler
        card.addEventListener('mouseleave', () => {
            // Reset transformations
            cardInner.style.transform = `
                perspective(1000px)
                rotateX(0)
                rotateY(0)
                scale3d(1, 1, 1)
            `;
        });
    });
}