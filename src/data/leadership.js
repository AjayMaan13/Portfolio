/**
 * Leadership & mentorship data, current first, then newest first.
 * Wording follows the EXP-Leadership notes; do not add figures that are not in them.
 * hackathons: the badge strip shown under the cards; badges with a url link to the project.
 */
window.PORTFOLIO_LEADERSHIP = [
  {
    id: 'peer-mentor',
    role: 'Peer Mentor',
    company: 'Seneca Polytechnic',
    logo: 'src/images/seneca.png',
    date: '2024 – Present',
    location: 'Toronto, ON',
    highlights: ['Mentored 15+ first-year students per term on study skills and campus resources.'],
    current: true
  },
  {
    id: 'swoc-mentor',
    role: 'Open Source Mentor',
    company: 'Social Winter of Code (SWOC)',
    logo: 'src/images/swoc-logo.svg',
    date: 'Dec 2025 – Mar 2026',
    location: 'Remote',
    highlights: ['Mentored 20+ contributors and reviewed 50+ pull requests across open-source projects.'],
    current: false
  },
  {
    id: 'hackathon-mentor',
    role: 'Hackathon Mentor',
    company: 'MathHacks & UTRA Hacks',
    logo: 'src/images/utra-hacks-logo.webp',
    date: '2025 – 2026',
    location: 'Toronto, ON',
    highlights: [
      'Provided technical mentorship to hackathon participants at MathHacks and UTRA Hacks.',
      'Mentored participant teams at UTRA Hacks and built an autonomous Arduino robot as a reference demo for the timed challenge.'
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
      'Led 6 engineers building ETL workflows in Microsoft Fabric and Databricks (PySpark) that processed 300,000+ public safety records in 48 hours.',
      'Designed a Bronze-Silver-Gold lakehouse on Azure Data Factory and Delta Lake with incremental loading, cutting load time by 70%.',
      'Built Power BI dashboards for real-time crime analytics and geospatial views.',
      'Mapped 45,000 incidents across 140 neighbourhoods in ESRI ArcGIS Pro with hotspot analysis.',
      'Trained a Databricks clustering model that grouped 50 incident types into 6 patterns.'
    ],
    current: false
  }
];

window.PORTFOLIO_HACKATHONS = [
  { name: 'Hack the North', detail: 'Hackathon' },
  { name: 'Hack the Valley', detail: 'Hackathon' },
  { name: 'MLH Production Engineering', detail: 'URL Shortener', url: 'https://devpost.com/software/pe-hackathons-2026' },
  { name: 'Notion MCP Challenge', detail: 'DevOS', url: 'https://dev.to/ajaymaan13/devos-notion-mcp-challenge-4ehi' },
  { name: 'GenAI Genesis', detail: 'FraudNet·AI', url: 'https://fraudnet-ai.vercel.app' },
  { name: 'NASA Space Apps', detail: 'Terralog', url: 'https://terralog-three.vercel.app' },
  { name: 'Build North', detail: 'Winner · AgentTrace', url: 'https://devpost.com/software/agenttrace-qb8jvo' },
  { name: 'Ontario × Microsoft', detail: 'Data Engineering Lead', url: '#lead-ontario-microsoft-hackathon' }
];
