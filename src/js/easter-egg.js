/**
 * Easter Eggs
 * Hidden interactive elements to delight visitors
 */

document.addEventListener('DOMContentLoaded', () => {
    // Konami Code sequence
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    // Keydown event listener
    document.addEventListener('keydown', (e) => {
        // Check if the key matches the expected key in sequence
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            // If the sequence is complete, trigger easter egg
            if (konamiIndex === konamiCode.length) {
                activateKonamiEasterEgg();
                konamiIndex = 0; // Reset
            }
        } else {
            konamiIndex = 0; // Reset on wrong key
        }
    });

    // Hidden clicks counter for another easter egg
    const logo = document.querySelector('.logo');
    let logoClicks = 0;
    
    logo.addEventListener('click', (e) => {
        logoClicks++;
        
        // After 5 clicks, activate easter egg
        if (logoClicks >= 5) {
            activateLogoEasterEgg();
            logoClicks = 0;
        }
    });

    // Easter egg activations
    function activateKonamiEasterEgg() {
        // Create the popup element
        const popup = document.createElement('div');
        popup.className = 'easter-egg-popup';
        popup.innerHTML = `
            <div class="easter-egg-content">
                <h3>🎮 Konami Code Activated!</h3>
                <p>You've discovered a hidden easter egg!</p>
                <div class="easter-egg-message">
                    <p>"The programmer who never makes mistakes probably doesn't write much code."</p>
                </div>
                <button class="btn btn-primary close-easter-egg">Continue</button>
            </div>
        `;
        
        // Add to document
        document.body.appendChild(popup);
        
        // Show with animation
        setTimeout(() => {
            popup.classList.add('active');
        }, 10);
        
        // Close button logic
        popup.querySelector('.close-easter-egg').addEventListener('click', () => {
            popup.classList.remove('active');
            setTimeout(() => {
                popup.remove();
            }, 500);
        });
    }

    function activateLogoEasterEgg() {
        // Rainbow animation for the whole page
        document.body.classList.add('rainbow-mode');
        
        // Create notification
        const notification = document.createElement('div');
        notification.className = 'rainbow-notification';
        notification.textContent = '🌈 Rainbow Mode Activated!';
        
        document.body.appendChild(notification);
        
        // Remove after 5 seconds
        setTimeout(() => {
            document.body.classList.remove('rainbow-mode');
            notification.remove();
        }, 5000);
    }
});