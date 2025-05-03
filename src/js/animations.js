// Animations and scroll effects

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animations on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in class to elements that should animate
    const fadeElements = [
        ...document.querySelectorAll('.project-card'),
        ...document.querySelectorAll('.section-title'),
        document.querySelector('.about-content'),
        document.querySelector('.contact-content')
    ];
    
    // Helper function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll animation
    function checkFade() {
        fadeElements.forEach(element => {
            if (element && isElementInViewport(element)) {
                element.classList.add('fade-in');
            }
        });
    }
    
    // Add CSS animation class to elements
    fadeElements.forEach(element => {
        if (element) {
            element.classList.add('fade-element');
        }
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', checkFade);
    
    // Check initial state
    checkFade();
});

// Add CSS for animations directly (normally this would go in style.css)
const style = document.createElement('style');
style.textContent = `
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .fade-element {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);