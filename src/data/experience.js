/**
 * Experience data. Order on the page = order in this array.
 *
 * highlights: strings. Text before the first ": " is rendered bold as a lead-in.
 * techGroups: [{ label, items }] grouped chips. technologies: flat chip list (fallback).
 */
window.PORTFOLIO_EXPERIENCE = [
  {
    id: 'ontario-gov-coop',
    role: 'Software Developer & Tester (Co-op)',
    company: 'Government of Ontario, Ministry of Children, Community and Social Services',
    logo: 'src/images/govON.png',
    date: 'September 2025 – May 2026',
    duration: '8-month co-op',
    location: 'Toronto, ON · Hybrid',
    type: 'co-op',
    description:
      'QA automation, full-stack tooling and AI automation for SAMS, the case-management platform behind ODSP and OCSD benefit delivery across Ontario.',
    highlights: [
      'QA automation: Automated 4,000+ regression and end-to-end test cases for SAMS using Java, Selenium WebDriver, TestNG/JUnit and Maven with a Page Object Model, cutting test cycles from 8 hours to 28 minutes.',
      'CI/CD: Built a tag-based Jenkins pipeline that runs single or full suites on demand across Linux servers as a quality gate, then rebuilt it in Azure DevOps YAML, cutting build failures by 80% and pipeline maintenance time by 70%.',
      'Data quality & root cause: Wrote SQL against IBM DB2, Oracle and SQL Server, including 200+ automated data-quality checks that cut data-defect tickets by 45%, and debugged XML, XSLT, JSON and SOAP payloads to speed defect root-cause analysis by 35%.',
      'Defect triage: Logged and resolved 70–90 Jira defects across React UI, REST API and DB2 layers during incident management, validating SOAP and REST services end to end with cross-functional teams.',
      'Full-stack tooling: Architected and owned a MERN test-scenario platform (React, Node.js, Express, MongoDB, REST) used by 100+ engineers across 4 teams, removing 90% of manual scenario writing.',
      'Enterprise development: Shipped features for an Angular dashboard and Java/Spring Boot services in the SAMS/MyBenefits ecosystem on IBM Cúram, working in two-week Agile sprints with Jira and Azure Boards.',
      'AI agents: Built a multi-step Python AI agent (LLM APIs, Microsoft Azure) that analyses system logs and triages failures, cutting investigations from 2 days to 20 minutes.',
      'RAG & LLM evaluation: Built a RAG assistant over 12,000 internal documents (Python, Azure OpenAI, Azure AI Search) that cut staff lookup time from 20 minutes to 45 seconds, and benchmarked AI-generated test scenarios against legacy datasets with A/B pipelines and a 100-sample evaluation harness.'
    ],
    techGroups: [
      { label: 'Test automation', items: ['Java', 'Selenium', 'TestNG', 'JUnit', 'Maven', 'Page Object Model', 'Extent Reports'] },
      { label: 'CI/CD', items: ['Jenkins', 'Azure DevOps'] },
      { label: 'Full-stack', items: ['React', 'Node.js', 'Express', 'MongoDB', 'Angular', 'Spring Boot', 'REST', 'SOAP'] },
      { label: 'Data', items: ['SQL', 'IBM DB2', 'Oracle', 'SQL Server'] },
      { label: 'AI', items: ['Python', 'LLM APIs', 'Azure OpenAI', 'Azure AI Search', 'RAG'] },
      { label: 'Process', items: ['IBM Cúram', 'Jira', 'Azure Boards', 'Agile'] }
    ],
    current: false
  },
  {
    id: 'seneca-service-hub',
    role: 'Service Hub Ambassador',
    company: 'Seneca Polytechnic',
    logo: 'src/images/seneca.png',
    date: 'April 2026 – Present',
    duration: '',
    location: 'North York, ON · On-site',
    type: 'part-time',
    description: '',
    highlights: [
      'Front-line support for students: answering inquiries and guiding them to college services and resources.',
      'Prioritised competing requests in a fast-paced, agile environment to keep service timely.',
      'Built communication, problem-solving and teamwork skills through daily interaction with students and staff.'
    ],
    technologies: ['Communication', 'Time Management', 'Problem Solving', 'Teamwork'],
    current: true
  }
];
