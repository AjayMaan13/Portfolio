/**
 * Enhanced Main JavaScript with Typing Effect
 * Handles navigation, scrolling, form handling, and typing animation
 */

// DOM Elements
const header = document.querySelector('.header');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const contactForm = document.getElementById('contact-form');
const formStatus = document.querySelector('.form-status');
const backToTop = document.querySelector('.back-to-top');
const pageLoader = document.querySelector('.page-loader');


// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Hide page loader after content loads
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.classList.add('loaded');
        }, 500);
    }
    
    // Initialize typing effect
    simpleTypingEffect();
    
    // Set up scroll observers
    setupScrollObservers();
    
    // Set active nav link based on initial scroll position
    updateActiveNavLink();
});

// Smooth scroll function
function scrollToNext() {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 80;
        const targetPosition = aboutSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

const backToTopBtn = document.querySelector('.back-to-top');

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize after DOM loads
document.addEventListener('DOMContentLoaded', function() {
    const scrollHint = document.querySelector('.hero-scroll-hint');
    if (scrollHint) {
        scrollHint.addEventListener('click', scrollToNext);
    }
});

// Simple, reliable typing effect
function simpleTypingEffect() {
    const roles = [
        'Software Engineer',
        'Web Developer',
        'Problem Solver',
        'Full-Stack Developer',
        'Programming Student'
    ];
    
    const element = document.querySelector('.typing-text');
    
    if (!element) {
        console.error('Typing element not found!');
        return;
    }
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            element.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let speed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentRole.length) {
            speed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 500; // Pause before next word
        }
        
        setTimeout(type, speed);
    }
    
    // Start after DOM is fully loaded
    setTimeout(type, 1000);
}

// Typing Animation Effect
function initTypingEffect() {
    const roles = [
        'Software Engineer',
        'Web Developer',
        'Problem Solver',
        'Full-Stack Developer',
        'Programming Student'
    ];
    
    const typingElement = document.querySelector('.typing-text');
    
    if (!typingElement) return;
    
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let isWaiting = false;
    
    const TYPING_SPEED = 100;
    const DELETING_SPEED = 50;
    const PAUSE_AFTER_COMPLETE = 2000;
    const PAUSE_AFTER_DELETE = 500;
    
    function type() {
        if (isWaiting) return;
        
        const currentRole = roles[currentRoleIndex];
        
        if (!isDeleting) {
            // Typing phase
            typingElement.textContent = currentRole.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            
            if (currentCharIndex === currentRole.length) {
                // Finished typing, wait before deleting
                isWaiting = true;
                setTimeout(() => {
                    isWaiting = false;
                    isDeleting = true;
                    type();
                }, PAUSE_AFTER_COMPLETE);
                return;
            }
            
            setTimeout(type, TYPING_SPEED);
        } else {
            // Deleting phase
            typingElement.textContent = currentRole.substring(0, currentCharIndex);
            currentCharIndex--;
            
            if (currentCharIndex < 0) {
                // Finished deleting, move to next role
                isDeleting = false;
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                currentCharIndex = 0;
                
                isWaiting = true;
                setTimeout(() => {
                    isWaiting = false;
                    type();
                }, PAUSE_AFTER_DELETE);
                return;
            }
            
            setTimeout(type, DELETING_SPEED);
        }
    }
    
    // Start the typing effect after page loads
    setTimeout(type, 1000);
}

// Mobile menu toggle
if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Add overflow hidden to body when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
}

// Close mobile menu when clicking a nav link
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenuToggle && mobileMenuToggle.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        // Skip if it's just '#'
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Get the target's position, accounting for the fixed header
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            // Smooth scroll to target
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Change header style on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Update active nav link
    updateActiveNavLink();
    
    // Show/hide back to top button
    if (backToTop) {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    }
});

// Set up intersection observers for scroll animations
function setupScrollObservers() {
    // Elements to animate
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    // Create observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class based on data-animation attribute
                const animation = entry.target.dataset.animation || 'fade-in';
                entry.target.classList.add(animation);
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Offset from the bottom
    });
    
    // Observe all elements
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    // Get current scroll position
    const scrollPosition = window.scrollY;
    
    // Loop through all sections
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Offset for header
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        // Check if current scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to current section's nav link
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
}


// Make sure the function is globally available
window.scrollToNext = scrollToNext;

// Contact form handling
// Contact form handling (replace existing form handler)
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formDataObj = Object.fromEntries(formData.entries());
        
        // Basic form validation (now includes subject)
        if (!formDataObj.name || !formDataObj.email || !formDataObj.subject || !formDataObj.message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formDataObj.email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        try {
            // Send form data to server
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObj),
            });
            
            const data = await response.json();
            
            if (data.success) {
                showFormMessage('Message sent successfully!', 'success');
                contactForm.reset();
            } else {
                showFormMessage(data.message || 'Failed to send message.', 'error');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            showFormMessage('An error occurred. Please try again.', 'error');
        } finally {
            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }
    });
}

// Show form message (success or error)
function showFormMessage(message, type) {
    if (formStatus) {
        // Create message element
        formStatus.innerHTML = `<div class="${type}-message">${message}</div>`;
        
        // Remove message after 5 seconds
        setTimeout(() => {
            formStatus.innerHTML = '';
        }, 5000);
    }
}

// Context-Aware Navigation
function initContextNav() {
    // DOM elements
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    const progressBar = document.querySelector('.scroll-progress');
    
    // Update progress bar width based on scroll position
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = scrollPercentage + '%';
    });
    
    // Create section observer to detect which section is in view
    const options = {
        threshold: 0.2, // 20% of the section must be visible
        rootMargin: '-70px 0px -30% 0px' // Adjust based on header height
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Add active class to section when it comes into view
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Update active nav link
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    // Get the href attribute without the #
                    const href = link.getAttribute('href').substring(1);
                    if (href === id) {
                        link.classList.add('active');
                    }
                });
                
                // Add data-active attribute for additional effects
                entry.target.setAttribute('data-active', 'true');
            } else {
                entry.target.removeAttribute('data-active');
            }
        });
    }, options);
    
    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Call this function on page load
document.addEventListener('DOMContentLoaded', initContextNav);