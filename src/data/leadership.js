/**
 * Leadership & mentorship data, ordered current first, then newest first.
 * hackathons: the badge strip shown under the cards; each badge links to its project.
 */
window.PORTFOLIO_LEADERSHIP = [
  {
    id: 'peer-mentor',
    role: 'Peer Mentor',
    company: 'Seneca Polytechnic',
    logo: 'src/images/seneca.png',
    date: 'May – Sep 2024 · Apr 2026 – Present',
    location: 'Toronto, ON',
    highlights: [
      'Mentors 15+ first-year students per term on study skills, time management and campus resources.',
      'Runs peer-support sessions and one-on-one check-ins that connect students to academic and career services.'
    ],
    current: true
  },
  {
    id: 'swoc-mentor',
    role: 'Open Source Mentor',
    company: 'Social Winter of Code (SWOC)',
    logo: 'src/images/swoc-logo.svg',
    date: 'Dec 2025 – Mar 2026',
    location: 'Remote',
    highlights: [
      'Mentored 20+ contributors across open-source projects on code structure, debugging and Git workflows.',
      'Reviewed 50+ pull requests with project admins to keep contributions high quality and original.'
    ],
    current: false
  },
  {
    id: 'hackathon-mentor',
    role: 'Hackathon Mentor',
    company: 'MathHacks (Mar 2026) and UTRA Hacks (Jan 2026)',
    logo: 'src/images/utra-hacks-logo.webp',
    date: 'Jan – Mar 2026',
    location: 'Toronto, ON',
    highlights: [
      'Gave technical mentorship to student teams at MathHacks and UTRA Hacks, from debugging sensors and motor control to scoping a Chrome-extension idea.',
      'For UTRA Hacks, designed and built an autonomous Arduino reference robot (state machine, colour and IR sensors, servo launcher) to show teams what a working solution looks like.'
    ],
    current: false
  },
  {
    id: 'ontario-microsoft-hackathon',
    role: 'Data Engineering Lead',
    company: 'Ontario Government × Microsoft Hackathon',
    logo: 'src/images/govON.png',
    date: 'Nov 2025',
    location: 'Toronto, ON',
    highlights: [
      'Led six engineers building ETL in Microsoft Fabric and Databricks (PySpark) over 300,000+ public-safety records in 48 hours.',
      'Designed a Bronze–Silver–Gold lakehouse on Azure Data Factory and Delta Lake, with Power BI dashboards on top.'
    ],
    current: false
  }
];

window.PORTFOLIO_HACKATHONS = [
  { name: 'Build North', detail: 'AgentTrace', url: 'https://devpost.com/software/agenttrace-qb8jvo' },
  { name: 'NASA Space Apps', detail: 'Terralog', url: 'https://terralog-three.vercel.app' },
  { name: 'MLH Production Engineering', detail: 'URL Shortener', url: 'https://devpost.com/software/pe-hackathons-2026' },
  { name: 'GenAI Genesis', detail: 'FraudNet·AI', url: 'https://fraudnet-ai.vercel.app' },
  { name: 'Notion MCP Challenge', detail: 'DevOS', url: 'https://dev.to/ajaymaan13/devos-notion-mcp-challenge-4ehi' },
  { name: 'Ontario × Microsoft', detail: 'Data Engineering Lead', url: '#lead-ontario-microsoft-hackathon' }
];
