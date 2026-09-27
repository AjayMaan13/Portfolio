/**
 * Page loader, smooth-scroll for non-nav anchor links (e.g. the hero's
 * "Get In Touch" button, footer's back-to-top), and contact form handling.
 *
 * Everything nav-related (mobile menu, scroll-spy, theme toggle) lives in
 * island-navbar.js — this file used to duplicate all of that against a
 * `.header` element that no longer exists, throwing on every scroll. Typing
 * effect also used to be duplicated here; typing.js is now the only copy.
 */

const contactForm = document.getElementById('contact-form');
const formStatus = document.querySelector('.form-status');
const pageLoader = document.querySelector('.page-loader');
const islandNav = document.getElementById('islandNav');

document.addEventListener('DOMContentLoaded', () => {
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.classList.add('loaded');
        }, 500);
    }
});

const backToTopBtn = document.querySelector('.back-to-top');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Smooth scroll for any "#section" link that isn't part of the island nav
// (island-navbar.js already handles its own .nav-link clicks).
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    if (islandNav && islandNav.contains(anchor)) return;

    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        e.preventDefault();
        const headerHeight = islandNav ? islandNav.offsetHeight + 24 : 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
});

// Contact form handling
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const formDataObj = Object.fromEntries(formData.entries());

        if (!formDataObj.name || !formDataObj.email || !formDataObj.subject || !formDataObj.message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formDataObj.email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
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
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }
    });
}

function showFormMessage(message, type) {
    if (formStatus) {
        formStatus.innerHTML = `<div class="${type}-message">${message}</div>`;
        setTimeout(() => {
            formStatus.innerHTML = '';
        }, 5000);
    }
}
