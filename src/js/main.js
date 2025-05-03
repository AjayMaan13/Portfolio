// Main JavaScript functionality

// Mobile navigation toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        }
    });
});

// Active section highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
            item.classList.add('active');
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real project, you would send this data to a server
        // For this demo, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded - checking for contact form');
    
    const contactForm = document.getElementById('contact-form');
    console.log('Contact form found:', !!contactForm);
    
    if (contactForm) {
        // Log form inputs
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        console.log('Form elements found:');
        console.log('- name input:', !!nameInput);
        console.log('- email input:', !!emailInput);
        console.log('- message input:', !!messageInput);
        
        contactForm.addEventListener('submit', function(event) {
            console.log('Form submit event triggered');
            event.preventDefault();
            
            // Get and log form values
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();
            
            console.log('Form values:');
            console.log('- name:', name);
            console.log('- email:', email);
            console.log('- message:', message);
            
            // Validate form data
            if (!name || !email || !message) {
                console.error('Validation failed - missing required fields');
                showMessage('Please fill in all fields', 'error');
                return;
            }
            
            // Prepare data for sending
            const formData = { name, email, message };
            console.log('Sending form data:', formData);
            
            // Show loading indicator
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Send form data to server
            fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                console.log('Response received from server:', response.status);
                return response.json();
            })
            .then(data => {
                console.log('Server response data:', data);
                
                if (data.success) {
                    console.log('Email sent successfully');
                    showMessage('Message sent successfully!', 'success');
                    // Reset form
                    contactForm.reset();
                } else {
                    throw new Error(data.message || 'Failed to send message');
                }
            })
            .catch(error => {
                console.error('Error during fetch or processing response:', error);
                showMessage(error.message || 'An error occurred. Please try again.', 'error');
            })
            .finally(() => {
                // Reset button
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            });
        });
    } else {
        console.error('Contact form with ID "contact-form" not found in the document');
    }

    // Helper function to show messages
    function showMessage(text, type) {
        const messageEl = document.createElement('div');
        messageEl.className = `${type}-message`;
        messageEl.textContent = text;
        contactForm.appendChild(messageEl);
        
        // Remove message after 3 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 3000);
    }
});