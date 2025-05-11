/**
 * Animations and Microinteractions
 * Implements scroll animations, hover effects, and interactive elements
 */

document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements based on their position
    initScrollAnimations();
    
    // Add hover effects to cards and buttons
    initHoverEffects();
    
    // Initialize cursor effects (optional)
    initCursorEffects();
});

// Initialize scroll animations using Intersection Observer
function initScrollAnimations() {
    // Elements to animate on scroll
    const elements = [
        { selector: '.hero-content > *', animation: 'fade-in-up', delay: true },
        { selector: '.about-image', animation: 'fade-in-left' },
        { selector: '.about-text > *', animation: 'fade-in-right', delay: true },
        { selector: '.timeline-item', animation: 'fade-in', delay: true },
        { selector: '.project-card', animation: 'fade-in-up', delay: true },
        { selector: '.skill-item', animation: 'fade-in-up', delay: true },
        { selector: '.contact-info', animation: 'fade-in-left' },
        { selector: '.contact-form', animation: 'fade-in-right' },
        { selector: '.section-title', animation: 'fade-in' }
    ];
    
    // Process each element type
    elements.forEach(item => {
        const elems = document.querySelectorAll(item.selector);
        
        elems.forEach((el, index) => {
            // Add base classes
            el.classList.add('animate-on-scroll');
            el.classList.add('invisible');
            
            // Set data attribute for animation type
            el.setAttribute('data-animation', item.animation);
            
            // Add staggered delay if specified
            if (item.delay) {
                el.style.transitionDelay = `${index * 0.1}s`;
            }
        });
    });
    
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get animation type from data attribute
                const animation = entry.target.getAttribute('data-animation');
                
                // Remove invisible class
                entry.target.classList.remove('invisible');
                
                // Add animation class
                entry.target.classList.add(animation);
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before the element enters the viewport
    });
    
    // Observe all animate-on-scroll elements
    document.querySelectorAll('.animate-on-scroll').forEach(elem => {
        observer.observe(elem);
    });
}

// Initialize hover effects for interactive elements
function initHoverEffects() {
    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            // Get position of mouse relative to card
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the card
            const y = e.clientY - rect.top; // y position within the card
            
            // Calculate rotation based on mouse position
            // Values between -10 and 10 degrees
            const rotateY = ((x / rect.width) - 0.5) * 10;
            const rotateX = ((y / rect.height) - 0.5) * -10;
            
            // Apply the rotation
            card.querySelector('.project-card-inner').style.transform = 
                `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        // Reset rotation when mouse leaves
        card.addEventListener('mouseleave', () => {
            card.querySelector('.project-card-inner').style.transform = 
                'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn, .filter-btn, .social-link');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('mousedown', () => {
            button.style.transform = 'translateY(-1px)';
        });
        
        button.addEventListener('mouseup', () => {
            button.style.transform = 'translateY(-3px)';
        });
    });
    
    // Skill item hover effect
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });
}

// Initialize cursor effects (optional fancy feature)
function initCursorEffects() {
    // Create custom cursor elements (optional)
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    
    // Only add if we're on a device with hover capability
    if (window.matchMedia('(hover: hover)').matches) {
        document.body.appendChild(cursor);
        document.body.appendChild(cursorDot);
        
        // Update cursor position
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
        
        // Add active class when mouse is down
        document.addEventListener('mousedown', () => {
            cursor.classList.add('active');
            cursorDot.classList.add('active');
        });
        
        document.addEventListener('mouseup', () => {
            cursor.classList.remove('active');
            cursorDot.classList.remove('active');
        });
        
        // Add hover class when over interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                cursorDot.classList.add('hover');
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                cursorDot.classList.remove('hover');
            });
        });
    }
}

// Add CSS for animations and transitions
document.addEventListener('DOMContentLoaded', () => {
    // Add CSS for invisible elements (hidden before animation)
    const style = document.createElement('style');
    style.textContent = `
        .invisible {
            opacity: 0;
            visibility: hidden;
        }
        
        .animate-on-scroll {
            transition: opacity 0.6s ease, transform 0.6s ease, visibility 0.6s ease;
        }
        
        /* Custom cursor styles (optional) */
        .custom-cursor {
            position: fixed;
            width: 40px;
            height: 40px;
            border: 2px solid var(--color-accent-primary);
            border-radius: 50%;
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: 9999;
            transition: width 0.3s, height 0.3s, border-color 0.3s, background-color 0.3s;
            opacity: 0.7;
        }
        
        .cursor-dot {
            position: fixed;
            width: 8px;
            height: 8px;
            background-color: var(--color-accent-primary);
            border-radius: 50%;
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: 9999;
            transition: width 0.3s, height 0.3s, background-color 0.3s;
        }
        
        .custom-cursor.hover {
            width: 60px;
            height: 60px;
            border-color: var(--color-accent-secondary);
            background-color: rgba(var(--color-accent-primary-rgb), 0.1);
        }
        
        .custom-cursor.active {
            width: 20px;
            height: 20px;
            border-width: 3px;
        }
        
        .cursor-dot.hover {
            width: 4px;
            height: 4px;
            background-color: var(--color-accent-secondary);
        }
        
        .cursor-dot.active {
            width: 10px;
            height: 10px;
        }
        
        /* Hide custom cursor on touch devices */
        @media (hover: none) {
            .custom-cursor, .cursor-dot {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
});

// Helper function to add animation delay
function addAnimationDelays(selector, baseDelay = 0, increment = 0.1) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
        el.style.transitionDelay = `${baseDelay + (index * increment)}s`;
    });
}

// Initialize specific animations when page is loaded
window.addEventListener('load', () => {
    // Reveal hero content with staggered animation
    addAnimationDelays('.hero-content > *', 0.3, 0.1);
    document.querySelectorAll('.hero-content > *').forEach(el => {
        el.classList.add('fade-in-up');
    });
    
    // Add ripple effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', createRippleEffect);
    });
});

// Create ripple effect on button click
function createRippleEffect(event) {
    const button = event.currentTarget;
    
    // Create ripple element
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    // Add ripple to button
    button.appendChild(ripple);
    
    // Set position
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    
    // Add active class
    ripple.classList.add('active');
    
    // Remove after animation
    setTimeout(() => {
        ripple.remove();
    }, 600);
}