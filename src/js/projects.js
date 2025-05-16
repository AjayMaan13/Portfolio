/**
 * Updated projects.js with new projects and no image sections
 * This replaces your existing projects.js file
 */


const enhancedProjectsData = [
    {
        id: 'project1',
        title: 'FinSight - Personal Finance Tracker',
        description: 'A modern, full-stack personal finance application that helps users track transactions, set financial goals, manage budgets, and gain insights into their spending patterns.',
        detailedDescription: `
            <p>A comprehensive personal finance application built with modern full-stack technologies to help users manage their finances effectively.</p>
            <h4>Key Features:</h4>
            <ul>
                <li>💰 Transaction Management: Create, edit, delete, and import transactions from CSV</li>
                <li>🎯 Goal Tracking: Set and monitor financial goals with progress visualization</li>
                <li>💳 Budget Management: Create and track budgets by category</li>
                <li>📊 Financial Insights: Visual analytics with charts and spending patterns</li>
                <li>🔐 User Authentication: Secure JWT-based authentication with role management</li>
                <li>📤 Data Import: CSV import functionality for bulk transaction uploads</li>
                <li>⚡ Real-time Updates: Dynamic dashboard with live financial summaries</li>
                <li>📱 Responsive Design: Mobile-first design with dark theme</li>
            </ul>
            <h4>Technical Implementation:</h4>
            <p>Built with React 19, Node.js/Express backend, PostgreSQL database, and includes a Python Flask microservice for future ML features like balance forecasting and anomaly detection.</p>
            <h4>Architecture:</h4>
            <p>Microservices architecture with separate frontend, backend API, database, and ML service components. Implements RESTful API design with comprehensive authentication and data validation.</p>
        `,
        technologies: ['React 19', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'JWT', 'Python', 'Flask', 'Tailwind CSS', 'Recharts'],
        tags: ['Full-Stack', 'React', 'Node.js', 'PostgreSQL', 'ML'],
        demoUrl: '#',
        codeUrl: 'https://github.com/AjayMaan13/FinSight',
        categories: ['web', 'frontend', 'backend'],
        stats: {
            'Tech Stack': '10+ Technologies',
            'API Endpoints': '25+',
            'Features': '8 Core Features',
            'Architecture': 'Microservices'
        }
    },
    {
        id: 'project2',
        title: 'Seneca Polytechnic Deliveries',
        description: 'A comprehensive C/C++ delivery logistics system that optimizes package routing and truck assignments for efficient delivery operations.',
        detailedDescription: `
            <p>A sophisticated delivery management system implementing optimal routing algorithms, capacity constraints, and distance calculations for logistics operations.</p>
            <h4>Key Features:</h4>
            <ul>
                <li>🚛 Multi-route Support: Blue, Yellow, and Green delivery routes</li>
                <li>📦 Package Validation: Weight, size, and destination verification</li>
                <li>🗺️ Route Optimization: Shortest path algorithms with Euclidean distance</li>
                <li>⚖️ Capacity Management: Weight (2500kg) and volume (100m³) constraints</li>
                <li>🎯 Smart Assignment: Multi-criteria truck selection logic</li>
                <li>🔍 Load Balancing: Optimal distribution across available trucks</li>
                <li>🧪 Comprehensive Testing: 32 test cases with 100% coverage</li>
            </ul>
            <h4>Technical Implementation:</h4>
            <p>Developed in C/C++ with modular design, custom pathfinding algorithms, and sophisticated data structures. Implements graph algorithms for route traversal and multi-criteria optimization.</p>
            <h4>Algorithms & Data Structures:</h4>
            <p>Features custom shortest path algorithms, 2D array map representation, dynamic memory management, and complex struct-based data modeling for trucks, packages, and routes.</p>
        `,
        technologies: ['C', 'C++', 'Visual Studio', 'Microsoft Test Framework', 'Git', 'Algorithms', 'Data Structures'],
        tags: ['C/C++', 'Algorithms', 'System Programming', 'Testing'],
        demoUrl: '#',
        codeUrl: 'https://github.com/AjayMaan13/SenecaPolytechnicDeliveries',
        categories: ['backend'],
        stats: {
            'Test Cases': '32',
            'Code Coverage': '100%',
            'Routes Supported': '3',
            'Memory Management': 'Optimized'
        }
    },
    {
        id: 'project3',
        title: 'SmartLib - Library Management System',
        description: 'A comprehensive C++ library management system demonstrating advanced object-oriented programming principles, dynamic memory management, and professional software design patterns.',
        detailedDescription: `
            <p>A professional-grade library management system built in C++ that simulates real-world library operations with enterprise-level software engineering practices.</p>
            <h4>Key Features:</h4>
            <ul>
                <li>📚 Complete Publication Management: Add, remove, search, and track books</li>
                <li>🔄 Automated Checkout/Return System: Handle member transactions with due dates</li>
                <li>💰 Penalty Calculation: Automatic late fee computation for overdue items</li>
                <li>💾 Persistent Data Storage: File-based database for maintaining records</li>
                <li>🔍 Advanced Search Capabilities: Multi-criteria search with filtering</li>
                <li>🖥️ Professional CLI Interface: Menu-driven console application</li>
                <li>🧪 Comprehensive Testing: Multiple test configurations</li>
            </ul>
            <h4>Technical Implementation:</h4>
            <p>Built with modern C++17 features, implementing advanced OOP concepts including inheritance, polymorphism, virtual functions, and custom operator overloading. Uses proper memory management with RAII principles.</p>
            <h4>Architecture:</h4>
            <p>Follows MVC architecture with clear separation of concerns. Implements design patterns like Factory, Strategy, and Template Method for flexible and maintainable code.</p>
        `,
        technologies: ['C++17', 'OOP', 'STL', 'File I/O', 'Memory Management', 'Design Patterns'],
        tags: ['C++', 'OOP', 'System Programming', 'Design Patterns'],
        demoUrl: '#',
        codeUrl: 'https://github.com/AjayMaan13/SmartLib',
        categories: ['backend'],
        stats: {
            'Lines of Code': '3,000+',
            'Classes': '8 Core Classes',
            'Design Patterns': '5+ Patterns',
            'Memory Safety': 'Zero Leaks'
        }
    },
    {
        id: 'project4',
        title: 'TeachMe Online Education Platform - Database',
        description: 'Comprehensive database design for an online education platform featuring advanced SQL programming, business intelligence, and containerized deployment with Oracle Docker.',
        detailedDescription: `
            <p>A sophisticated database system powering an online education platform that connects instructors and students through diverse courses with advanced SQL programming and Docker deployment.</p>
            <h4>Key Features:</h4>
            <ul>
                <li>📊 Business Intelligence: Course performance analytics and enrollment trends</li>
                <li>📈 Financial Reporting: Revenue analysis and growth tracking</li>
                <li>🏗️ Advanced SQL: Window functions, CTEs, complex joins</li>
                <li>🐳 Containerization: Docker deployment with Oracle XE</li>
                <li>📋 Analytics Views: Pre-computed business metrics</li>
                <li>🔍 Complex Queries: Multi-dimensional data analysis</li>
                <li>📦 Data Integrity: Constraints and validation rules</li>
            </ul>
            <h4>Technical Implementation:</h4>
            <p>Built with Oracle Database 12c+, implements ER modeling, database normalization, and advanced SQL features including analytical functions, subqueries, and materialized views.</p>
            <h4>Architecture:</h4>
            <p>Features comprehensive entity relationships (Users, Courses, Enrollments, Tests, Scores, etc.) with proper foreign key constraints and business rule enforcement through database design.</p>
        `,
        technologies: ['Oracle Database', 'SQL', 'PL/SQL', 'Docker', 'Business Intelligence', 'Database Design'],
        tags: ['Database', 'SQL', 'Oracle', 'Docker', 'BI'],
        demoUrl: '#',
        codeUrl: 'https://github.com/AjayMaan13/TeachMe-Education-DB',
        categories: ['backend'],
        stats: {
            'Tables': '9 Core Tables',
            'Views': 'Multiple BI Views',
            'Deployment': 'Docker Ready',
            'SQL Features': 'Advanced Analytics'
        }
    },
    {
        id: 'project5',
        title: 'Digital Dine-In - Restaurant Management System',
        description: 'A comprehensive console-based restaurant ordering and billing system built with modern C++ design patterns, featuring menu management, order processing, and persistent storage.',
        detailedDescription: `
            <p>A sophisticated command-line restaurant management application that streamlines the ordering process for waitstaff with memory safety and object-oriented design principles.</p>
            <h4>Key Features:</h4>
            <ul>
                <li>🍽️ Interactive Menu System: Navigate through food and drink categories</li>
                <li>📐 Size Selection: Multiple size options with dynamic pricing</li>
                <li>📝 Order Customization: Special instructions for food items</li>
                <li>💰 Automatic Billing: Tax computation and formatted receipts</li>
                <li>💾 Data Persistence: CSV integration and bill file generation</li>
                <li>🔒 Memory Safety: Zero memory leaks with RAII principles</li>
                <li>🎯 Input Validation: Comprehensive user input sanitization</li>
            </ul>
            <h4>Technical Implementation:</h4>
            <p>Built with C++11/14 using abstract base classes, inheritance hierarchies, operator overloading, and proper const-correctness. Implements RAII for automatic resource management.</p>
            <h4>Architecture:</h4>
            <p>Features abstract Billable interface with Food and Drink implementations, Menu container system, and modular design with clear separation of concerns across multiple files.</p>
        `,
        technologies: ['C++11/14', 'OOP', 'File I/O', 'Memory Management', 'Design Patterns', 'CLI Design'],
        tags: ['C++', 'OOP', 'CLI', 'File I/O'],
        demoUrl: '#',
        codeUrl: 'https://github.com/AjayMaan13/Digital-Dine-In',
        categories: ['backend'],
        stats: {
            'Lines of Code': '2,000+',
            'Classes': '7',
            'Memory Leaks': '0',
            'Design Patterns': 'Multiple'
        }
    },
    {
        id: 'project6',
        title: 'Credit Card Validator Upgraded',
        description: 'Advanced credit card management system with military-grade encryption, real-time API integration, and professional logging using OpenSSL, cURL, and JSON.',
        detailedDescription: `
            <p>A comprehensive C application that evolved from a simple validator into a production-ready card management system with advanced security and network programming.</p>
            <h4>Key Features:</h4>
            <ul>
                <li>🔐 AES-256-CBC Encryption: Military-grade security with OpenSSL</li>
                <li>🌐 Real-time API Integration: BIN database lookups with cURL</li>
                <li>📝 JSON Structured Logging: Professional audit trails</li>
                <li>💳 Secure Card Storage: Encrypted data persistence</li>
                <li>🔍 Card Validation: Luhn algorithm with type detection</li>
                <li>📊 Activity Monitoring: Complete operation history</li>
                <li>🛡️ Memory Safety: Secure memory management practices</li>
            </ul>
            <h4>Technical Implementation:</h4>
            <p>Built with OpenSSL for cryptography, cURL for HTTP operations, and cJSON for data parsing. Implements secure key management, proper IV handling, and Base64 encoding.</p>
            <h4>Security Features:</h4>
            <p>Features AES-256-CBC encryption, secure memory management, input sanitization, and comprehensive logging for audit compliance and forensic analysis.</p>
        `,
        technologies: ['C', 'OpenSSL', 'cURL', 'cJSON', 'Security', 'Cryptography', 'Network Programming'],
        tags: ['C', 'Security', 'Encryption', 'API', 'Network'],
        demoUrl: '#',
        codeUrl: 'https://github.com/AjayMaan13/Credit-Card-Validator-Upgraded',
        categories: ['backend'],
        stats: {
            'Encryption': 'AES-256-CBC',
            'Memory Leaks': '0',
            'API Integration': 'Real-time',
            'Security': 'Military-grade'
        }
    },
    {
        id: 'project7',
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
                <li>🖥️ Interactive terminal feature</li>
                <li>🎯 Guided tour functionality</li>
                <li>📧 Contact form with email integration</li>
            </ul>
            <h4>Technical Implementation:</h4>
            <p>Built with vanilla JavaScript for optimal performance, utilizing modern CSS features like CSS Grid and Flexbox. The theme system uses CSS custom properties for seamless color transitions.</p>
        `,
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express', 'Nodemailer'],
        tags: ['Web', 'Frontend', 'UI/UX'],
        demoUrl: 'https://portfolio-gray-xi-10.vercel.app',
        codeUrl: 'https://github.com/AjayMaan13/Portfolio',
        categories: ['web', 'frontend'],
        stats: {
            'Lines of Code': '5,000+',
            'Components': '15+',
            'Load Time': '< 1s',
            'Features': '10+'
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

// Add CSS for scroll animations (no flip animations)
// Updated CSS for smaller cards and better modal
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
        
        /* Smaller cards with consistent height */
        .project-card {
            background: var(--color-surface);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-md);
            transition: all 0.3s ease;
            height: 420px; /* Fixed height for consistency */
            padding: var(--space-5);
            border: 1px solid var(--color-divider);
            display: flex;
            flex-direction: column;
        }
        
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
            border-color: var(--color-accent-primary);
        }
        
        .project-card.animate-in:hover {
            transform: translateY(-5px);
        }
        
        /* Project card content */
        .project-card-content {
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        
        .project-image-placeholder {
            width: 100%;
            height: 160px; /* Smaller height */
            background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: var(--text-xl); /* Smaller font */
            font-weight: var(--weight-bold);
            border-radius: var(--radius-md);
            margin-bottom: var(--space-3);
            opacity: 0.9;
        }
        
        .project-title {
            font-size: var(--text-lg); /* Smaller title */
            font-weight: var(--weight-bold);
            margin-bottom: var(--space-2);
            color: var(--color-text-primary);
            line-height: 1.3;
        }
        
        .project-description {
            font-size: var(--text-sm);
            color: var(--color-text-secondary);
            line-height: 1.5;
            margin-bottom: var(--space-3);
            flex-grow: 1;
            display: -webkit-box;
            -webkit-line-clamp: 3; /* Limit to 3 lines */
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        
        .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: var(--space-1);
            margin-bottom: var(--space-3);
        }
        
        .project-tag {
            background-color: rgba(var(--color-accent-primary-rgb), 0.1);
            color: var(--color-accent-primary);
            padding: var(--space-1) var(--space-2);
            border-radius: var(--radius-full);
            font-size: var(--text-xs);
            font-weight: var(--weight-medium);
        }
        
        .project-links {
            display: flex;
            gap: var(--space-2);
            margin-top: auto;
        }
        
        .project-link {
            display: inline-flex;
            align-items: center;
            gap: var(--space-1);
            padding: var(--space-2) var(--space-3);
            background-color: var(--color-bg-secondary);
            border-radius: var(--radius-full);
            color: var(--color-text-primary);
            font-weight: var(--weight-medium);
            transition: all var(--transition-speed) ease;
            text-decoration: none;
            font-size: var(--text-xs);
            border: 1px solid var(--color-divider);
            flex: 1;
            justify-content: center;
        }
        
        .project-link svg {
            width: 14px;
            height: 14px;
        }
        
        .project-link:hover {
            background-color: var(--color-accent-primary);
            color: white;
            transform: translateY(-2px);
            border-color: var(--color-accent-primary);
        }
        
        .project-details-btn {
            background-color: var(--color-accent-primary);
            color: white;
            border-color: var(--color-accent-primary);
        }
        
        .project-details-btn:hover {
            background-color: var(--color-accent-secondary);
            border-color: var(--color-accent-secondary);
        }
        
        /* Adjust projects grid for smaller cards */
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: var(--space-6);
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
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
            .projects-grid {
                grid-template-columns: 1fr;
            }
            
            .project-card {
                height: auto;
                min-height: 380px;
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

// Create a single project card (no flip, show details by default)
function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-categories', project.categories.join(','));
    card.setAttribute('data-project-index', index);
    
    // Create HTML structure without flip animation
    card.innerHTML = `
        <div class="project-card-content">
            <div class="project-image-placeholder">
                <span>${project.title.split(' ')[0]}</span>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
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

// Create and show improved project modal
function createProjectModal(project) {
    console.log('Creating modal for project:', project.title);
    
    // Remove existing modal if any
    const existingModal = document.querySelector('.project-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create modal structure with improved design
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
                <!-- Header Section with Gradient Background -->
                <div class="modal-header">
                    <div class="modal-icon">
                        <span>${project.title.split(' ')[0].charAt(0)}</span>
                    </div>
                    <h1 class="modal-title">${project.title}</h1>
                    <div class="modal-tech-stack">
                        ${project.technologies.slice(0, 5).map(tech => 
                            `<span class="tech-badge">${tech}</span>`
                        ).join('')}
                        ${project.technologies.length > 5 ? `<span class="tech-badge-more">+${project.technologies.length - 5} more</span>` : ''}
                    </div>
                </div>

                <!-- Content Section -->
                <div class="modal-body">
                    <div class="modal-description">
                        ${project.detailedDescription}
                    </div>

                    <!-- Technologies Grid -->
                    <div class="modal-technologies">
                        <h3>Technologies Used</h3>
                        <div class="tech-grid">
                            ${project.technologies.map(tech => `
                                <div class="tech-item">
                                    <span class="tech-name">${tech}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Project Stats -->
                    <div class="modal-stats">
                        <h3>Project Metrics</h3>
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

// Enhanced setup function
function setup3DCardEffect() {
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