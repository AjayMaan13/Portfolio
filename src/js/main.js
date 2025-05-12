/**
 * Main JavaScript Functionality
 * Handles navigation, scrolling, form handling, and general interactions
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
    
    // Set up scroll observers
    setupScrollObservers();
    
    // Set active nav link based on initial scroll position
    updateActiveNavLink();
});

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

// Contact form handling
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formDataObj = Object.fromEntries(formData.entries());
        
        // Basic form validation
        if (!formDataObj.name || !formDataObj.email || !formDataObj.message) {
            showFormMessage('Please fill in all fields.', 'error');
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
                // Show success message
                showFormMessage('Message sent successfully!', 'success');
                
                // Reset form
                contactForm.reset();
            } else {
                // Show error message
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

// Add this at the bottom of your main.js for testing
setTimeout(() => {
    console.log('=== Terminal Debug Info ===');
    console.log('Terminal toggle:', document.querySelector('.terminal-toggle'));
    console.log('Terminal container:', document.querySelector('.terminal-container'));
    console.log('All scripts loaded');
}, 2000);