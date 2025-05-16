/**
 * Improved Timeline with Better Visual Design
 * Fixes layout issues and enhances visual appearance
 */

// Clean timeline data - achievements only, no duplicate descriptions
const timelineData = [
    {
        id: 'timeline1',
        year: '2025',
        date: 'May 2025 - Present',
        title: 'Peer Mentor',
        organization: 'Seneca Polytechnic',
        location: 'Toronto, ON',
        icon: 'work',
        type: 'experience',
        achievements: [
            'Mentor 30+ students weekly in programming fundamentals and advanced concepts',
            'Achieve 95% success rate in course completion',
            'Design and deliver workshops on OOP, data structures, and software design patterns',
            'Collaborate with faculty to develop innovative learning materials'
        ],
        current: true
    },
    {
        id: 'timeline2',
        year: '2025',
        date: 'Jan 2025 - Present',
        title: 'Event Security Guard',
        organization: 'Cross Connect',
        location: 'Toronto, ON',
        icon: 'work',
        type: 'experience',
        achievements: [
            'Ensure security protocols at large-scale technology events with 500+ attendees',
            'Implement crowd control algorithms and emergency response procedures',
            'Maintain incident-free environments through effective risk management',
            'Collaborate with event teams using digital communication and access control systems'
        ],
        current: true
    },
    {
        id: 'timeline3',
        year: '2024',
        date: '2024 - Present',
        title: 'Computer Programming & Analysis',
        organization: 'Seneca Polytechnic',
        location: 'Toronto, ON',
        icon: 'education',
        type: 'education',
        achievements: [
            'Study full-stack development with focus on modern web technologies',
            'Build expertise in software development and programming fundamentals',
            'Master database management and system design principles',
            'Apply agile methodologies and modern development practices'
        ],
        current: true
    }
];

// DOM Elements
const timelineContainer = document.querySelector('.timeline');

// Initialize timeline
document.addEventListener('DOMContentLoaded', () => {
    // Add improved CSS
    addImprovedTimelineCSS();
    
    // Generate timeline items
    generateTimelineItems();
    
    // Set up scroll animations
    setupTimelineAnimations();
    
    // Add interaction effects
    addTimelineInteractions();
});

// Add significantly improved CSS
function addImprovedTimelineCSS() {
    const style = document.createElement('style');
    style.textContent = `
        /* Reset and base timeline styles */
        .timeline {
            position: relative;
            max-width: 1000px;
            margin: 0 auto;
            padding: var(--space-8) 0;
        }
        
        .timeline-line {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 100%;
            background: linear-gradient(180deg, 
                var(--color-accent-primary) 0%, 
                var(--color-accent-secondary) 50%,
                var(--color-divider) 100%);
            border-radius: var(--radius-full);
            z-index: 1;
        }
        
        /* Timeline item layout */
        .timeline-item {
            position: relative;
            margin-bottom: var(--space-12);
            opacity: 0;
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .timeline-item.visible {
            opacity: 1;
        }
        
        /* Alternating layout for desktop */
        .timeline-item:nth-child(even) .timeline-content {
            margin-left: auto;
            margin-right: calc(50% + 40px);
            text-align: right;
        }
        
        .timeline-item:nth-child(odd) .timeline-content {
            margin-left: calc(50% + 40px);
            margin-right: auto;
            text-align: left;
        }
        
        /* Timeline dot */
        .timeline-dot {
            position: absolute;
            top: 24px;
            left: 50%;
            transform: translateX(-50%);
            width: 24px;
            height: 24px;
            background: var(--color-accent-primary);
            border: 4px solid var(--color-surface);
            border-radius: 50%;
            z-index: 2;
            transition: all 0.3s ease;
            box-shadow: 0 0 0 0 rgba(var(--color-accent-primary-rgb), 0.4);
        }
        
        .timeline-item[data-type="education"] .timeline-dot {
            background: var(--color-accent-secondary);
            box-shadow: 0 0 0 0 rgba(var(--color-accent-secondary-rgb), 0.4);
        }
        
        .timeline-dot:hover {
            transform: translateX(-50%) scale(1.2);
            box-shadow: 0 0 0 8px rgba(var(--color-accent-primary-rgb), 0.2);
        }
        
        /* Timeline content card */
        .timeline-content {
            position: relative;
            width: 45%;
            padding: var(--space-6);
            background: var(--color-surface);
            border-radius: var(--radius-xl);
            box-shadow: var(--shadow-lg);
            transition: all 0.3s ease;
            border: 1px solid var(--color-divider);
        }
        
        .timeline-item[data-type="experience"] .timeline-content {
            border-left: 4px solid var(--color-accent-primary);
        }
        
        .timeline-item[data-type="education"] .timeline-content {
            border-left: 4px solid var(--color-accent-secondary);
        }
        
        .timeline-content:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-xl);
            border-color: var(--color-accent-primary);
        }
        
        /* Content elements */
        .timeline-date {
            display: inline-block;
            background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
            color: white;
            padding: var(--space-2) var(--space-4);
            border-radius: var(--radius-full);
            font-size: var(--text-sm);
            font-weight: var(--weight-semibold);
            margin-bottom: var(--space-3);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .timeline-title {
            font-size: var(--text-2xl);
            font-weight: var(--weight-bold);
            margin-bottom: var(--space-2);
            color: var(--color-text-primary);
        }
        
        .timeline-org {
            font-size: var(--text-lg);
            font-weight: var(--weight-semibold);
            color: var(--color-accent-primary);
            margin-bottom: var(--space-1);
        }
        
        .timeline-location {
            font-size: var(--text-sm);
            color: var(--color-text-secondary);
            margin-bottom: var(--space-4);
            font-style: italic;
        }
        
        .timeline-location::before {
            content: "📍 ";
        }
        
        .timeline-text {
            font-size: var(--text-base);
            line-height: 1.7;
            color: var(--color-text-secondary);
            margin-bottom: var(--space-4);
            display: none; /* Hide description since we're using achievements only */
        }
        
        /* Smaller current badge - more subtle */
        .timeline-content::before {
            position: absolute;
            top: -8px;
            right: var(--space-3);
            background: var(--color-success);
            color: white;
            padding: 2px var(--space-2);
            border-radius: var(--radius-full);
            font-size: 10px;
            font-weight: var(--weight-semibold);
            text-transform: uppercase;
            letter-spacing: 0.3px;
            z-index: 3;
            box-shadow: 0 2px 4px rgba(34, 197, 94, 0.3);
        }
        
        .timeline-item[data-current="true"] .timeline-content::before {
            content: "CURRENT";
        }
        
        /* Achievements section - now the main content */
        .timeline-achievements {
            margin-top: var(--space-4);
        }
        
        .timeline-achievements h5 {
            display: none; /* Remove the "Key Achievements" heading */
        }
        
        .achievement-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .achievement-item {
            position: relative;
            padding-left: var(--space-5);
            margin-bottom: var(--space-2);
            font-size: var(--text-sm);
            color: var(--color-text-secondary);
            line-height: 1.6;
        }
        
        .achievement-item::before {
            content: "▸";
            position: absolute;
            left: 0;
            color: var(--color-accent-primary);
            font-weight: bold;
            font-size: var(--text-base);
        }
        
        .achievement-item:hover {
            color: var(--color-text-primary);
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            .timeline-line {
                left: 30px;
            }
            
            .timeline-dot {
                left: 30px;
                transform: translateX(-50%);
            }
            
            .timeline-content {
                width: calc(100% - 80px);
                margin-left: 80px !important;
                margin-right: 0 !important;
                text-align: left !important;
            }
            
            .timeline-content::before {
                right: auto;
                left: var(--space-4);
            }
            
            .timeline-title {
                font-size: var(--text-xl);
            }
            
            .timeline-org {
                font-size: var(--text-base);
            }
            
            .timeline-text {
                font-size: var(--text-sm);
            }
        }
        
        /* Animation states */
        .timeline-item[data-animation='fade-in-left'] {
            transform: translateX(-50px);
        }
        
        .timeline-item[data-animation='fade-in-right'] {
            transform: translateX(50px);
        }
        
        .timeline-item.visible {
            transform: translateX(0);
        }
        
        /* Timeline dot icon styles */
        .timeline-dot::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 10px;
            z-index: 1;
        }
        
        .timeline-dot[data-icon="work"]::after {
            content: "💼";
        }
        
        .timeline-dot[data-icon="education"]::after {
            content: "🎓";
        }
        
        /* Dark theme adjustments */
        .dark-theme .timeline-content {
            background: var(--color-bg-secondary);
            border-color: var(--color-divider);
        }
        
        .dark-theme .timeline-dot {
            border-color: var(--color-bg-primary);
        }
        
        /* Focus states for accessibility */
        .timeline-item:focus-within .timeline-content {
            outline: 2px solid var(--color-accent-primary);
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);
}

// Generate timeline items (updated for better structure)
function generateTimelineItems() {
    if (!timelineContainer) return;
    
    // Clear existing content except timeline line
    const timelineLine = timelineContainer.querySelector('.timeline-line');
    timelineContainer.innerHTML = '';
    
    // Re-add timeline line
    if (timelineLine) {
        timelineContainer.appendChild(timelineLine);
    }
    
    // Sort by year (most recent first)
    const sortedData = [...timelineData].sort((a, b) => {
        const yearA = parseInt(a.year);
        const yearB = parseInt(b.year);
        
        if (yearA !== yearB) return yearB - yearA;
        
        // If same year, prioritize current items
        if (a.current && !b.current) return -1;
        if (!a.current && b.current) return 1;
        
        return 0;
    });
    
    // Generate items
    sortedData.forEach((item, index) => {
        const timelineItem = createTimelineItem(item, index);
        timelineContainer.appendChild(timelineItem);
    });
}

// Create timeline item with improved structure
function createTimelineItem(item, index) {
    const isEven = index % 2 === 0;
    
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item animate-on-scroll';
    timelineItem.setAttribute('data-animation', isEven ? 'fade-in-left' : 'fade-in-right');
    timelineItem.setAttribute('data-year', item.year);
    timelineItem.setAttribute('data-type', item.type);
    
    if (item.current) {
        timelineItem.setAttribute('data-current', 'true');
    }
    
    timelineItem.style.transitionDelay = `${index * 0.2}s`;
    
    timelineItem.innerHTML = `
        <div class="timeline-dot" data-icon="${item.icon}"></div>
        <div class="timeline-content">
            <span class="timeline-date">${item.date}</span>
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-org">${item.organization}</p>
            <p class="timeline-location">${item.location}</p>
            
            <div class="timeline-achievements">
                <ul class="achievement-list">
                    ${item.achievements.map(achievement => 
                        `<li class="achievement-item">${achievement}</li>`
                    ).join('')}
                </ul>
            </div>
        </div>
    `;
    
    return timelineItem;
}

// Set up scroll animations
function setupTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate dot
                const dot = entry.target.querySelector('.timeline-dot');
                if (dot) {
                    setTimeout(() => {
                        dot.style.transform = 'translateX(-50%) scale(1)';
                    }, 300);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Add interaction effects
function addTimelineInteractions() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hover');
        });
        
        item.addEventListener('mouseleave', () => {
            item.classList.remove('hover');
        });
        
        item.addEventListener('click', () => {
            timelineItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            item.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        });
    });
}

// Export for global access
window.timelineData = timelineData;
window.generateTimelineItems = generateTimelineItems;