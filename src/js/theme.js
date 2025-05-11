/**
 * Theme Toggle Functionality
 * Implements light/dark theme switching with smooth transitions and local storage persistence
 */

// DOM elements
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Theme storage key
const THEME_STORAGE_KEY = 'portfolio-theme-preference';

// Theme options
const THEMES = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme'
};

// Initialization function
function initTheme() {
    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    
    if (savedTheme) {
        // Apply saved theme
        body.className = savedTheme;
    } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        body.className = prefersDark ? THEMES.DARK : THEMES.LIGHT;
    }
    
    // Add animation class after initial load
    setTimeout(() => {
        body.classList.add('theme-transition-enabled');
    }, 100);
}

// Toggle between light and dark themes
function toggleTheme() {
    // Add animation class
    const currentTheme = body.className;
    const newTheme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    
    // Add transition class for animation
    body.classList.add('theme-transitioning');
    
    // Apply new theme
    body.className = newTheme;
    body.classList.add('theme-transitioning');
    
    // Store theme preference
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    
    // Remove transition class after animation completes
    setTimeout(() => {
        body.classList.remove('theme-transitioning');
    }, 600); // Match this with CSS transition time
}

// Add click event listener
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        // Add ripple effect (optional animation)
        const ripple = document.createElement('span');
        ripple.classList.add('theme-toggle-ripple');
        themeToggle.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 1000);
        
        // Toggle theme
        toggleTheme();
    });
}

// Listen for system preference changes
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addEventListener('change', (e) => {
    // Only auto-switch if user hasn't set a preference
    if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        body.className = e.matches ? THEMES.DARK : THEMES.LIGHT;
    }
});

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initTheme);