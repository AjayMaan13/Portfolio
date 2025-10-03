/**
 * Island Navbar JavaScript
 * Handles all navbar interactions, theme switching, and scroll behaviors
 */

(function() {
    'use strict';

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initIslandNavbar);
    } else {
        initIslandNavbar();
    }

    function initIslandNavbar() {
        // Get all necessary elements
        const islandNav = document.getElementById('islandNav');
        const themeToggle = document.getElementById('themeToggle');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        const navLinkItems = document.querySelectorAll('.island-nav .nav-link');
        const body = document.body;

        // Check if elements exist
        if (!islandNav || !themeToggle || !mobileMenuBtn || !navLinks) {
            console.warn('Island navbar elements not found');
            return;
        }

        // ========== Theme Toggle ==========
        function initTheme() {
            // Load saved theme from localStorage
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                body.classList.add('dark-theme');
            }
        }

        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-theme');
            const isDark = body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            // Add smooth rotation animation
            this.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 300);
        });

        // ========== Mobile Menu Toggle ==========
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navLinks.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!islandNav.contains(e.target) && navLinks.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
            }
        });

        // ========== Smooth Scrolling & Active Link ==========
        navLinkItems.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (!targetSection) return;

                // Close mobile menu
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
                
                // Smooth scroll to section
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active link
                updateActiveLink(this);
            });
        });

        function updateActiveLink(activeLink) {
            navLinkItems.forEach(link => link.classList.remove('active'));
            activeLink.classList.add('active');
        }

        // ========== Scroll Behavior ==========
        let lastScroll = 0;
        let ticking = false;

        function handleScroll() {
            const currentScroll = window.pageYOffset;
            
            // Add scrolled class for styling
            if (currentScroll > 100) {
                islandNav.classList.add('scrolled');
            } else {
                islandNav.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
            ticking = false;
        }

        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(handleScroll);
                ticking = true;
            }
        });

        // ========== Intersection Observer for Active Section ==========
        const sections = document.querySelectorAll('section[id]');
        
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-100px 0px -66%'
        };

        const sectionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    const correspondingLink = document.querySelector(`.island-nav .nav-link[href="#${id}"]`);
                    
                    if (correspondingLink) {
                        updateActiveLink(correspondingLink);
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            sectionObserver.observe(section);
        });

        // ========== Close mobile menu on resize ==========
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth > 768) {
                    mobileMenuBtn.classList.remove('active');
                    navLinks.classList.remove('active');
                    body.style.overflow = '';
                }
            }, 250);
        });

        // ========== Prevent tab focus on hidden mobile menu items ==========
        function updateTabIndex() {
            if (window.innerWidth <= 768) {
                if (!navLinks.classList.contains('active')) {
                    navLinkItems.forEach(link => link.setAttribute('tabindex', '-1'));
                } else {
                    navLinkItems.forEach(link => link.setAttribute('tabindex', '0'));
                }
            } else {
                navLinkItems.forEach(link => link.setAttribute('tabindex', '0'));
            }
        }

        // Update tabindex on menu toggle
        const observer = new MutationObserver(updateTabIndex);
        observer.observe(navLinks, { attributes: true, attributeFilter: ['class'] });
        
        // Initial check
        updateTabIndex();

        // Initialize theme
        initTheme();

        // Add keyboard navigation support
        islandNav.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
                mobileMenuBtn.focus();
            }
        });

        console.log('Island navbar initialized successfully');
    }

    // ========== Utility Functions ==========
    
    // Debounce function for performance
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle function for scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

})();