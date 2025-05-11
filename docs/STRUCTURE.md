# Simplified Portfolio Project Structure

This structure is designed to be implemented quickly while still maintaining a clean organization:

```
portfolio/
├── index.html               # Main HTML file
├── favicon.ico              # Site favicon
├── css/                     # CSS files
│   ├── style.css            # Main styles
│   ├── theme.css            # Theme-specific styles (light/dark)
│   └── responsive.css       # Responsive design styles
├── js/                      # JavaScript files
│   ├── main.js              # Main JavaScript functionality
│   ├── theme.js             # Theme toggle functionality
│   ├── animations.js        # Animation effects
│   ├── projects.js          # Project filtering logic
│   └── timeline.js          # Timeline functionality
├── assets/                  # Static assets
│   ├── icons/               # SVG icons
│   │   ├── sun.svg          # Light theme icon
│   │   ├── moon.svg         # Dark theme icon
│   │   └── ... (other icons)
│   └── images/              # Image files
│       ├── profile.jpg      # Your profile picture
│       ├── project1.jpg     # Project screenshots
│       ├── project2.jpg
│       └── ... (other images)
├── data/                    # Data files (optional)
│   ├── projects.json        # Project information
│   └── timeline.json        # Timeline data
└── server.js                # Simple Express server for contact form
```

## Key Files Explanation

### HTML Structure

**index.html**: A single-page application with sections for:
- Header with navigation and theme toggle
- Hero section
- About section
- Timeline section
- Projects section with filters
- Skills section
- Contact section
- Footer

### CSS Organization

**style.css**: Core styles including:
- Reset/normalize styles
- Typography
- Layout and grid
- Component styles (buttons, cards, etc.)
- Animation keyframes

**theme.css**: Theme-specific variables and styles:
- CSS custom properties for colors, shadows, etc.
- Light theme definitions
- Dark theme definitions

**responsive.css**: Media queries for responsive design:
- Mobile styles
- Tablet styles
- Desktop styles

### JavaScript Components

**main.js**: Core functionality:
- Navigation/scrolling
- Intersection observers for scroll animations
- Form handling

**theme.js**: Theme toggle functionality:
- Local storage for theme preference
- Theme switch animation
- System preference detection

**projects.js**: Project showcase features:
- Project filtering system
- 3D card effects on hover
- Project modal/details

**timeline.js**: Timeline interactions:
- Timeline scrolling/navigation
- Animation triggers

### Simplified Data Management

Instead of a complex data management system, use either:
1. Directly embed project and timeline data in the HTML
2. Use simple JSON files in the data folder
3. Hardcode the data in the JavaScript files

This approach eliminates the need for build tools while still allowing for organized data.