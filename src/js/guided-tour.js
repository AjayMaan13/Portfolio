/**
 * Fixed Guided Tour - Corrected Element Targeting
 * Provides a step-by-step introduction to the portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    // Tour steps - updated with correct selectors from your HTML
    const tourSteps = [
        {
            target: '.hero-content',
            title: 'Welcome to My Portfolio',
            content: 'This portfolio showcases my work, skills, and journey. Let me give you a quick tour!',
            position: 'bottom'
        },
        {
            target: '.theme-toggle',
            title: 'Theme Toggle',
            content: 'Click here to switch between light and dark modes based on your preference.',
            position: 'left'
        },
        {
            target: '#about',
            title: 'About Me',
            content: 'Learn more about my background, education, and what drives me as a developer.',
            position: 'left',
            offset: { x: -100, y: 0 }
        },
        {
            target: '#experience',
            title: 'My Experience',
            content: 'Check out my professional experience and the roles I\'ve held.',
            position: 'left',
            offset: { x: -100, y: 0 }
        },
        {
            target: '#projects',
            title: 'My Projects',
            content: 'Browse through the projects I\'ve built. Each project card shows the technologies used and links to the code.',
            position: 'top'
        },
        {
            target: '#skills',
            title: 'Technical Skills',
            content: 'Here you can see all the languages, frameworks, and tools I work with.',
            position: 'top'
        },
        {
            target: '#contact',
            title: 'Get in Touch',
            content: 'Interested in working together? Feel free to contact me through this form or my social links.',
            position: 'top'
        },
        {
            target: '.fixed-social-bar',
            title: 'Social Links',
            content: 'You can also find me on these platforms. Check out my GitHub for more projects!',
            position: 'left'
        }
    ];

    // Create the tour button
    const tourButton = document.createElement('button');
    tourButton.className = 'tour-button';
    tourButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
        <span>Take a Tour</span>
    `;
    
    // Add button to the page
    document.body.appendChild(tourButton);
    
    // Tour state
    let currentStep = 0;
    let tourActive = false;
    let tourPopup = null;
    
    // Start the tour when the button is clicked
    tourButton.addEventListener('click', startTour);
    
    // Show the welcome message on first visit
    if (!localStorage.getItem('tourShown')) {
        // Show welcome message after a short delay
        setTimeout(() => {
            showWelcomeMessage();
        }, 2000);
    }
    
    function showWelcomeMessage() {
        const welcomeModal = document.createElement('div');
        welcomeModal.className = 'tour-modal';
        welcomeModal.innerHTML = `
            <div class="tour-modal-content">
                <h3>Welcome to My Portfolio!</h3>
                <p>Thank you for visiting! Would you like a quick guided tour to explore the features of this site?</p>
                <div class="tour-modal-buttons">
                    <button class="btn btn-primary start-tour-btn">Yes, show me around</button>
                    <button class="btn btn-secondary close-tour-btn">No thanks, I'll explore on my own</button>
                </div>
            </div>
        `;
        
        // Add to page
        document.body.appendChild(welcomeModal);
        
        // Show with animation
        setTimeout(() => {
            welcomeModal.classList.add('active');
        }, 100);
        
        // Add event listeners
        welcomeModal.querySelector('.start-tour-btn').addEventListener('click', () => {
            welcomeModal.classList.remove('active');
            setTimeout(() => {
                welcomeModal.remove();
                startTour();
            }, 300);
        });
        
        welcomeModal.querySelector('.close-tour-btn').addEventListener('click', () => {
            welcomeModal.classList.remove('active');
            setTimeout(() => {
                welcomeModal.remove();
            }, 300);
        });
        
        // Remember that we've shown the welcome message
        localStorage.setItem('tourShown', 'true');
    }

    function startTour() {
        // Set tour as active
        tourActive = true;
        
        // Hide the tour button during the tour
        tourButton.style.display = 'none';
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'tour-overlay';
        document.body.appendChild(overlay);
        
        // Start with the first step
        showTourStep(0);
    }

    function showTourStep(stepIndex) {
        // Check if we're at the end of the tour
        if (stepIndex >= tourSteps.length) {
            endTour();
            return;
        }
        
        // Update current step
        currentStep = stepIndex;
        
        // Get the step details
        const step = tourSteps[stepIndex];
        
        // Find the target element
        const targetElement = document.querySelector(step.target);
        
        if (!targetElement) {
            console.warn(`Tour step ${stepIndex}: Target element "${step.target}" not found. Skipping...`);
            // Skip to next step if target doesn't exist
            showTourStep(stepIndex + 1);
            return;
        }
        
        // Get target position
        const targetRect = targetElement.getBoundingClientRect();
        
        // Create highlight on the target
        highlightElement(targetElement);
        
        // Create the popup if it doesn't exist
        if (!tourPopup) {
            tourPopup = document.createElement('div');
            tourPopup.className = 'tour-popup';
            document.body.appendChild(tourPopup);
        }
        
        // Set popup content
        tourPopup.innerHTML = `
            <div class="tour-popup-header">
                <span class="step-indicator">Step ${stepIndex + 1} of ${tourSteps.length}</span>
                <button class="close-tour">&times;</button>
            </div>
            <h3>${step.title}</h3>
            <p>${step.content}</p>
            <div class="tour-popup-footer">
                ${stepIndex > 0 ? '<button class="tour-prev">Previous</button>' : ''}
                ${stepIndex < tourSteps.length - 1 ? 
                    '<button class="tour-next">Next</button>' : 
                    '<button class="tour-finish">Finish Tour</button>'}
            </div>
        `;
        
        // Position the popup with improved logic
        positionPopup(tourPopup, targetRect, step.position, step.offset);
        
        // Add event listeners
        tourPopup.querySelector('.close-tour').addEventListener('click', endTour);
        
        const prevButton = tourPopup.querySelector('.tour-prev');
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                showTourStep(stepIndex - 1);
            });
        }
        
        const nextButton = tourPopup.querySelector('.tour-next');
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                showTourStep(stepIndex + 1);
            });
        }
        
        const finishButton = tourPopup.querySelector('.tour-finish');
        if (finishButton) {
            finishButton.addEventListener('click', endTour);
        }
        
        // Scroll to the element
        scrollToElement(targetElement);
    }

    function positionPopup(popup, targetRect, position, offset = { x: 0, y: 0 }) {
        // Reset positioning
        popup.style.top = '';
        popup.style.left = '';
        popup.style.right = '';
        popup.style.bottom = '';
        
        // Remove all position classes
        popup.classList.remove('position-top', 'position-right', 'position-bottom', 'position-left');
        
        // Add appropriate position class
        popup.classList.add(`position-${position}`);
        
        // Calculate position with offset
        const popupRect = popup.getBoundingClientRect();
        
        // Check if social sidebar would interfere
        const socialSidebarWidth = 80; // Approximate width of social sidebar area
        const viewportWidth = window.innerWidth;
        
        switch (position) {
            case 'top':
                popup.style.bottom = `${window.innerHeight - targetRect.top + 10 + offset.y}px`;
                popup.style.left = `${Math.max(10, targetRect.left + targetRect.width / 2 - popupRect.width / 2 + offset.x)}px`;
                break;
            case 'right':
                // Avoid social sidebar on the right
                if (targetRect.right + popupRect.width + 20 > viewportWidth - socialSidebarWidth) {
                    // Switch to left if would collide with sidebar
                    position = 'left';
                    popup.classList.remove('position-right');
                    popup.classList.add('position-left');
                    popup.style.right = `${viewportWidth - targetRect.left + 10 + offset.x}px`;
                } else {
                    popup.style.left = `${targetRect.right + 10 + offset.x}px`;
                }
                popup.style.top = `${targetRect.top + targetRect.height / 2 - popupRect.height / 2 + offset.y}px`;
                break;
            case 'bottom':
                popup.style.top = `${targetRect.bottom + 10 + offset.y}px`;
                popup.style.left = `${Math.max(10, targetRect.left + targetRect.width / 2 - popupRect.width / 2 + offset.x)}px`;
                break;
            case 'left':
                popup.style.right = `${window.innerWidth - targetRect.left + 10 - offset.x}px`;
                popup.style.top = `${targetRect.top + targetRect.height / 2 - popupRect.height / 2 + offset.y}px`;
                break;
        }
        
        // Make sure popup stays within viewport
        const updatedPopupRect = popup.getBoundingClientRect();
        
        // Adjust horizontal position
        if (updatedPopupRect.left < 10) {
            popup.style.left = '10px';
            popup.style.right = 'auto';
        } else if (updatedPopupRect.right > window.innerWidth - socialSidebarWidth - 10) {
            popup.style.right = `${socialSidebarWidth + 10}px`;
            popup.style.left = 'auto';
        }
        
        // Adjust vertical position
        if (updatedPopupRect.top < 10) {
            popup.style.top = '10px';
        } else if (updatedPopupRect.bottom > window.innerHeight - 10) {
            popup.style.top = `${window.innerHeight - popupRect.height - 10}px`;
        }
    }

    function highlightElement(element) {
        // Remove any existing highlights
        const existingHighlight = document.querySelector('.tour-highlight');
        if (existingHighlight) {
            existingHighlight.remove();
        }
        
        // Create highlight element
        const highlight = document.createElement('div');
        highlight.className = 'tour-highlight';
        
        // Position highlight over the element
        const rect = element.getBoundingClientRect();
        highlight.style.top = `${rect.top + window.scrollY}px`;
        highlight.style.left = `${rect.left + window.scrollX}px`;
        highlight.style.width = `${rect.width}px`;
        highlight.style.height = `${rect.height}px`;
        
        // Add to page
        document.body.appendChild(highlight);
        
        // Add pulse animation
        setTimeout(() => {
            highlight.classList.add('active');
        }, 100);
    }

    function scrollToElement(element) {
        // Get element position
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.scrollY;
        
        // Calculate scroll position (slightly above the element)
        const scrollPosition = absoluteElementTop - 100;
        
        // Scroll smoothly
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    }

    function endTour() {
        // Remove overlay
        const overlay = document.querySelector('.tour-overlay');
        if (overlay) {
            overlay.remove();
        }
        
        // Remove highlight
        const highlight = document.querySelector('.tour-highlight');
        if (highlight) {
            highlight.remove();
        }
        
        // Remove popup
        if (tourPopup) {
            tourPopup.remove();
            tourPopup = null;
        }
        
        // Show tour button again
        tourButton.style.display = 'flex';
        
        // Set tour as inactive
        tourActive = false;
    }
});