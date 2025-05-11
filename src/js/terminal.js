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
                   <p>- <span class="command">taskapi</span>: RESTful API for task management</p>
                   <p>Type <span class="command">project [name]</span> to learn more about a specific project.</p>`;
        }
    },
    project: {
        description: 'Get details about a specific project',
        action: (args) => {
            const project = args[0]?.toLowerCase();
            switch (project) {
                case 'portfolio':
                    return '<p>Portfolio: A modern personal website with dark/light theme toggle and interactive elements.</p>';
                case 'ecommerce':
                    return '<p>E-commerce: Full-stack platform with user authentication and payment processing.</p>';
                case 'weather':
                    return '<p>Weather App: Real-time weather application using weather API and location services.</p>';
                case 'taskapi':
                    return '<p>Task API: RESTful API built with Node.js, Express, and MongoDB.</p>';
                default:
                    return `<p>Project "${args[0]}" not found. Type <span class="command">projects</span> to see available projects.</p>`;
            }
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
    const terminalToggle = document.querySelector('.terminal-toggle');
    const terminalContainer = document.querySelector('.terminal-container');
    const terminalInput = document.querySelector('.terminal-input');
    const terminalOutput = document.querySelector('.terminal-output');
    const closeButton = document.querySelector('.control.close');
    
    // Toggle terminal visibility
    terminalToggle.addEventListener('click', () => {
        terminalContainer.classList.toggle('open');
        if (terminalContainer.classList.contains('open')) {
            terminalInput.focus();
        }
    });
    
    // Close terminal
    closeButton.addEventListener('click', () => {
        terminalContainer.classList.remove('open');
    });
    
    // Handle command input
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