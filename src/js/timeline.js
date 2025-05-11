/**
 * Timeline Management
 * Handles timeline visualization and interactions
 */

// Timeline data - can be moved to a separate JSON file
const timelineData = [
    {
        id: 'timeline1',
        year: '2024',
        date: '2024 - Present',
        title: 'Computer Programming & Analysis',
        organization: 'Seneca Polytechnic',
        description: 'Studying full-stack development with a focus on modern web technologies and programming fundamentals.',
        icon: 'education'
    },
    {
        id: 'timeline2',
        year: '2022',
        date: '2022 - 2023',
        title: 'Web Developer Intern',
        organization: 'Tech Solutions Inc.',
        description: 'Developed responsive websites and implemented UI/UX improvements that increased user engagement by 25%.',
        icon: 'work'
    },
    {
        id: 'timeline3',
        year: '2021',
        date: '2021 - 2022',
        title: 'Programming Fundamentals',
        organization: 'Online Learning Platform',
        description: 'Completed intensive programming courses, focusing on algorithms, data structures, and software design principles.',
        icon: 'education'
    },
    {
        id: 'timeline4',
        year: '2020',
        date: '2020 - 2021',
        title: 'IT Support Specialist',
        organization: 'Global Tech Services',
        description: 'Provided technical support and troubleshooting for software and hardware issues, serving over 100 clients.',
        icon: 'work'
    },
    {
        id: 'timeline5',
        year: '2025',
        date: '2024 - present',
        title: 'Peer Mentor',
        organization: 'Seneca Polytechnic',
        description: 'Provided technical support and troubleshooting for software and hardware issues, serving over 100 clients.',
        icon: 'work'
    }
];

// DOM Elements
const timelineContainer = document.querySelector('.timeline');

// Initialize timeline
document.addEventListener('DOMContentLoaded', () => {
    // Generate timeline items
    generateTimelineItems();
    
    // Set up scroll animations
    setupTimelineAnimations();
    
    // Add interaction effects
    addTimelineInteractions();
});

// Generate timeline items from data
function generateTimelineItems() {
    if (!timelineContainer) return;
    
    // Clear existing content (except timeline line)
    const timelineLine = timelineContainer.querySelector('.timeline-line');
    timelineContainer.innerHTML = '';
    
    // Re-add the timeline line
    timelineContainer.appendChild(timelineLine);
    
    // Generate timeline items
    timelineData.forEach((item, index) => {
        const timelineItem = createTimelineItem(item, index);
        timelineContainer.appendChild(timelineItem);
    });
}

// Create a single timeline item
function createTimelineItem(item, index) {
    const isEven = index % 2 === 0;
    
    // Create item element
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item animate-on-scroll';
    timelineItem.setAttribute('data-animation', isEven ? 'fade-in-left' : 'fade-in-right');
    timelineItem.setAttribute('data-year', item.year);
    
    // Add animation delay based on index
    timelineItem.style.transitionDelay = `${index * 0.2}s`;
    
    // Create HTML structure
    timelineItem.innerHTML = `
        <div class="timeline-dot" data-icon="${item.icon}"></div>
        <div class="timeline-content">
            <span class="timeline-date">${item.date}</span>
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-org">${item.organization}</p>
            <p class="timeline-text">${item.description}</p>
        </div>
    `;
    
    return timelineItem;
}

// Set up timeline scroll animations
function setupTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Get dots and animate them separately
                const dot = entry.target.querySelector('.timeline-dot');
                if (dot) {
                    setTimeout(() => {
                        dot.classList.add('animate-dot');
                    }, 300);
                }
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe timeline items
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Add interaction effects to timeline
function addTimelineInteractions() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        // Hover effect
        item.addEventListener('mouseenter', () => {
            item.classList.add('hover');
        });
        
        item.addEventListener('mouseleave', () => {
            item.classList.remove('hover');
        });
        
        // Click to focus
        item.addEventListener('click', () => {
            // Remove active class from all items
            timelineItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
        });
    });
}

// Add custom CSS for timeline interactions
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        /* Timeline item states */
        .timeline-item {
            opacity: 0;
            transform: translateX(0);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .timeline-item[data-animation='fade-in-left'] {
            transform: translateX(-50px);
        }
        
        .timeline-item[data-animation='fade-in-right'] {
            transform: translateX(50px);
        }
        
        .timeline-item.visible {
            opacity: 1;
            transform: translateX(0);
        }
        
        /* Timeline dot animation */
        .timeline-dot {
            transform: scale(0);
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .timeline-dot.animate-dot {
            transform: scale(1);
        }
        
        /* Active state */
        .timeline-item.active .timeline-content {
            box-shadow: var(--shadow-lg);
            border-left: 4px solid var(--color-accent-primary);
        }
        
        /* Hover state */
        .timeline-item.hover .timeline-content {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
        }
        
        /* Timeline dot icons */
        .timeline-dot[data-icon='education']::before {
            content: '🎓';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 10px;
        }
        
        .timeline-dot[data-icon='work']::before {
            content: '💼';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 10px;
        }
    `;
    document.head.appendChild(style);
});

// Initialize timeline scrolling functionality
function initTimelineScroll() {
    // This can be used to add horizontal scrolling for the timeline if needed
    // For now, we're using a vertical timeline
}