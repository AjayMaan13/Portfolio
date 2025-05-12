/**
 * Interactive Terminal Feature
 * Allows visitors to interact with a simulated terminal
 */

// Terminal commands and responses
const COMMANDS = {
    help: {
        description: 'Show available commands',
        action: () => {
            let output = '<p>Available commands:</p><ul>';
            for (const cmd in COMMANDS) {
                output += `<li><span class="command">${cmd}</span> - ${COMMANDS[cmd].description}</li>`;
            }
            output += '</ul>';
            return output;
        }
    },
    about: {
        description: 'Learn about me',
        action: () => {
            return `<p>Hello! I'm Ajaypartap Singh Maan, a programmer and problem solver from Canada.</p>
                   <p>I'm currently studying Computer Programming and Analysis at Seneca College.</p>
                   <p>I'm passionate about building web applications with clean code and intuitive user experiences.</p>`;
        }
    },
    skills: {
        description: 'View my technical skills',
        action: () => {
            return `<p>My technical skills include:</p>
                   <p>Programming Languages: C, C++, JavaScript, Python</p>
                   <p>Web Development: HTML5, CSS3, React, Node.js</p>
                   <p>Tools: Git, GitHub, VS Code</p>`;
        }
    },
    projects: {
        description: 'List my projects',
        action: () => {
            return `<p>Here are some of my projects:</p>
                   <p>- <span class="command">portfolio</span>: This website you're currently exploring</p>
                   <p>- <span class="command">ecommerce</span>: Full-stack e-commerce platform</p>
                   <p>- <span class="command">weather</span>: Real-time weather application</p>
                   <p>- <span class="command">taskapi</span>: RESTful API for task management</p>`;
        }
    },
    contact: {
        description: 'Show contact information',
        action: () => {
            return `<p>Email: ajayapsmaanm13@gmail.com</p>
                   <p>LinkedIn: linkedin.com/in/ajaypartap-singh-maan</p>
                   <p>GitHub: github.com/AjayMaan13</p>`;
        }
    },
    clear: {
        description: 'Clear the terminal',
        action: () => {
            document.querySelector('.terminal-output').innerHTML = '';
            return '';
        }
    },
    exit: {
        description: 'Minimize the terminal',
        action: () => {
            document.querySelector('.terminal-container').classList.remove('open');
            return '';
        }
    }
};

// Initialize terminal
document.addEventListener('DOMContentLoaded', () => {
    console.log('Terminal script loaded');
    
    const terminalToggle = document.querySelector('.terminal-toggle');
    const terminalContainer = document.querySelector('.terminal-container');
    const terminalInput = document.querySelector('.terminal-input');
    const terminalOutput = document.querySelector('.terminal-output');
    const closeButton = document.querySelector('.control.close');
    
    console.log('Terminal elements:', {
        toggle: !!terminalToggle,
        container: !!terminalContainer,
        input: !!terminalInput,
        output: !!terminalOutput,
        close: !!closeButton
    });
    
    if (!terminalToggle || !terminalContainer) {
        console.error('Terminal elements not found');
        return;
    }
    
    // Toggle terminal visibility
    terminalToggle.addEventListener('click', () => {
        console.log('Terminal toggle clicked');
        terminalContainer.classList.toggle('open');
        if (terminalContainer.classList.contains('open') && terminalInput) {
            terminalInput.focus();
        }
    });
    
    // Close terminal
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            terminalContainer.classList.remove('open');
        });
    }
    
    // Handle command input
    if (terminalInput) {
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const input = terminalInput.value.trim();
                if (input) {
                    // Add command to output
                    terminalOutput.innerHTML += `<p><span class="terminal-prompt">ajay@portfolio:~$</span> ${input}</p>`;
                    
                    // Process command
                    processCommand(input);
                    
                    // Clear input
                    terminalInput.value = '';
                }
            }
        });
    }
    
    // Process command and show response
    function processCommand(input) {
        const args = input.split(' ');
        const cmd = args.shift().toLowerCase();
        
        if (COMMANDS[cmd]) {
            const response = COMMANDS[cmd].action(args);
            if (response) {
                terminalOutput.innerHTML += response;
            }
        } else {
            terminalOutput.innerHTML += `<p>Command not found: ${cmd}. Type <span class="command">help</span> for available commands.</p>`;
        }
        
        // Scroll to bottom
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
});