/**
 * Guided Tour - Complete Redesign
 * Simple, clean, and reliable
 */

document.addEventListener('DOMContentLoaded', () => {
    const tourButton = document.getElementById('guidedTourBtn');
    
    if (!tourButton) {
        console.error('Tour button not found');
        return;
    }

    // Tour configuration
    const TOUR_STEPS = [
        {
            element: '.hero-content',
            title: 'Welcome! 👋',
            description: 'Thanks for visiting my portfolio! Let me show you around.'
        },
        {
            element: '.theme-toggle',
            title: 'Dark Mode Toggle',
            description: 'Switch between light and dark themes to match your preference.'
        },
        {
            element: '#about',
            title: 'About Me',
            description: 'Learn about my background, education, and what drives me as a developer.'
        },
        {
            element: '#experience',
            title: 'Work Experience',
            description: 'Check out the professional roles and projects I\'ve worked on.'
        },
        {
            element: '#projects',
            title: 'My Projects',
            description: 'Explore the applications and systems I\'ve built using various technologies.'
        },
        {
            element: '#skills',
            title: 'Tech Stack',
            description: 'See all the languages, frameworks, and tools I work with.'
        },
        {
            element: '#contact',
            title: 'Get In Touch',
            description: 'Ready to connect? Reach out through the form or my social links!'
        }
    ];

    // Tour state
    let tourState = {
        active: false,
        currentStep: 0,
        elements: {
            overlay: null,
            modal: null,
            highlight: null
        }
    };

    // Initialize
    tourButton.addEventListener('click', startTour);
    
    // Show welcome on first visit
    if (!localStorage.getItem('tour_seen')) {
        setTimeout(showWelcome, 2000);
    }

    /**
     * Show welcome dialog
     */
    function showWelcome() {
        const welcome = document.createElement('div');
        welcome.className = 'tour-welcome';
        welcome.innerHTML = `
            <div class="tour-welcome-box">
                <h2>Welcome to My Portfolio! 👋</h2>
                <p>Would you like a quick tour to see what I've built?</p>
                <div class="tour-welcome-actions">
                    <button class="tour-btn-secondary" data-action="skip">Maybe Later</button>
                    <button class="tour-btn-primary" data-action="start">Show Me Around</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(welcome);
        setTimeout(() => welcome.classList.add('active'), 10);
        
        welcome.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            if (action === 'start') {
                closeWelcome(welcome);
                startTour();
            } else if (action === 'skip') {
                closeWelcome(welcome);
            }
        });
    }

    function closeWelcome(welcome) {
        welcome.classList.remove('active');
        setTimeout(() => welcome.remove(), 300);
        localStorage.setItem('tour_seen', 'true');
    }

    /**
     * Start tour
     */
    function startTour() {
        if (tourState.active) return;
        
        tourState.active = true;
        tourState.currentStep = 0;
        tourButton.style.display = 'none';
        
        // Create overlay
        tourState.elements.overlay = document.createElement('div');
        tourState.elements.overlay.className = 'tour-overlay';
        document.body.appendChild(tourState.elements.overlay);
        
        // Show first step
        showStep(0);
    }

    /**
     * Show specific step
     */
    function showStep(index) {
        if (index >= TOUR_STEPS.length) {
            endTour();
            return;
        }

        tourState.currentStep = index;
        const step = TOUR_STEPS[index];
        const element = document.querySelector(step.element);

        if (!element) {
            console.warn(`Element not found: ${step.element}`);
            showStep(index + 1);
            return;
        }

        // Scroll element into view
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Wait for scroll to finish, then show modal
        setTimeout(() => {
            showHighlight(element);
            showModal(step, index);
        }, 800);
    }

    /**
     * Show highlight around element
     */
    function showHighlight(element) {
        // Remove old highlight
        if (tourState.elements.highlight) {
            tourState.elements.highlight.remove();
        }

        const rect = element.getBoundingClientRect();
        const highlight = document.createElement('div');
        highlight.className = 'tour-highlight';
        
        Object.assign(highlight.style, {
            position: 'absolute',
            top: `${rect.top + window.scrollY - 10}px`,
            left: `${rect.left + window.scrollX - 10}px`,
            width: `${rect.width + 20}px`,
            height: `${rect.height + 20}px`
        });

        document.body.appendChild(highlight);
        tourState.elements.highlight = highlight;
    }

    /**
     * Show modal
     */
    function showModal(step, index) {
        // Remove old modal
        if (tourState.elements.modal) {
            tourState.elements.modal.remove();
        }

        const modal = document.createElement('div');
        modal.className = 'tour-modal';
        modal.innerHTML = `
            <div class="tour-modal-box">
                <div class="tour-modal-header">
                    <span class="tour-step-count">Step ${index + 1} of ${TOUR_STEPS.length}</span>
                    <button class="tour-close" aria-label="Close">&times;</button>
                </div>
                <h3>${step.title}</h3>
                <p>${step.description}</p>
                <div class="tour-modal-footer">
                    ${index > 0 ? '<button class="tour-btn-secondary" data-action="prev">Previous</button>' : ''}
                    ${index < TOUR_STEPS.length - 1 
                        ? '<button class="tour-btn-primary" data-action="next">Next</button>'
                        : '<button class="tour-btn-primary" data-action="finish">Finish</button>'}
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        tourState.elements.modal = modal;

        // Position modal in center of viewport
        setTimeout(() => {
            const box = modal.querySelector('.tour-modal-box');
            const rect = box.getBoundingClientRect();
            
            Object.assign(box.style, {
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxHeight: '90vh',
                overflowY: 'auto'
            });
        }, 10);

        // Event listeners
        modal.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            if (action === 'next') showStep(index + 1);
            else if (action === 'prev') showStep(index - 1);
            else if (action === 'finish') endTour();
        });

        modal.querySelector('.tour-close').addEventListener('click', endTour);
    }

    /**
     * End tour
     */
    function endTour() {
        tourState.active = false;

        // Clean up
        if (tourState.elements.overlay) tourState.elements.overlay.remove();
        if (tourState.elements.modal) tourState.elements.modal.remove();
        if (tourState.elements.highlight) tourState.elements.highlight.remove();

        tourButton.style.display = 'flex';
        tourState.elements = { overlay: null, modal: null, highlight: null };
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        if (!tourState.active) return;
        
        const step = TOUR_STEPS[tourState.currentStep];
        const element = document.querySelector(step.element);
        
        if (element) {
            showHighlight(element);
        }
    });
});