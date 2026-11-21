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
      'AI automation, QA automation and full-stack tooling for SAMS, the case-management platform behind ODSP and OCSD benefit delivery across Ontario.',
    highlights: [
      'AI agents: Built a multi-step AI agent in Python (LLM APIs, Microsoft Azure) that analyses system logs and triages failures, cutting investigations from 2 days to 20 minutes and saving 120+ hours per month.',
      'RAG & LLM testing: Built a RAG assistant over 12,000 internal documents (Python, Azure OpenAI) that cut staff lookup time from 20 minutes to 45 seconds; designed A/B testing pipelines to benchmark legacy test datasets against AI-generated scenarios across 30–50 developers, and built an evaluation harness of 100 labelled log samples to score triage accuracy before every prompt change.',
      'LLM fine-tuning: Fine-tuned an ethical LLM on 20,000 labelled examples, raising triage accuracy from 64% to 92% inside the ministry, served to 400+ staff through a RAG pipeline on Azure AI Search; cut LLM API cost by 85% by batching log chunks, caching repeated prompts and routing easy cases to smaller models.',
      'RAG at scale: Spearheaded LLM and RAG governance standards adopted by 15 ministry teams and launched an Ontario Public Service RAG chatbot serving 5,000 staff with 94% relevance accuracy; built semantic search over 1.2 million embeddings (0.91 recall@5 in under 300 ms) and a hybrid search stack (Azure AI Search, pgvector, BM25 re-ranking) scored with RAGAS faithfulness of 0.94.',
      'Agent platforms: Owned a multi-step LangGraph agent platform that reads logs, queries databases and drafts tickets, cutting ticket writing from 2 hours to 3 minutes for 80+ engineers; raised 5 production agents from 78% to 97% task success on 1,000 test cases with validation and retry nodes.',
      'QA automation: Automated 120+ regression test cases and validated core J2EE/Java business logic across integrated web services (TestNG, JUnit, Maven), cutting test cycles from 8 hours to 28 minutes.',
      'CI/CD: Automated a tag-based Jenkins pipeline that triggers single or full suites on demand across Linux servers, integrating a quality assurance gate, then rebuilt it in Azure DevOps YAML, cutting build failures by 80% and pipeline maintenance time by 70%.',
      'Data quality: Owned data quality for 3 enterprise databases (IBM DB2, Oracle, SQL Server) with 200+ automated SQL checks that cut data defect tickets by 45%, and wrote and optimized SQL against IBM DB2 for test data setup and result validation across 4000+ automated test cases, replacing manual UI checks.',
      'Root cause & triage: Accelerated defect root-cause analysis by 35% by writing complex Oracle, IBM DB2 and SQL queries and debugging XML, XSLT, JSON and SOAP payloads across enterprise web services; provided technical expertise during incident management, logging and resolving 70–90 Jira defects across React UI, REST API and IBM DB2 layers.',
      'Full-stack tooling: Architected and owned a MERN test-scenario platform (React, Node.js, Express, MongoDB) adopted by 100+ engineers across 4 teams, removing 90% of manual scenario writing.',
      'Enterprise development: Implemented secure services using Java, Spring Boot and Angular that processed over 5,000 daily transactions, working in cross-functional Agile teams.',
      'Performance & messaging: Architected Spring Boot services load-tested to 50,000 requests per second with k6 (12 bottlenecks removed, p95 latency down 85%) and implemented Kafka and MQ event-driven messaging for a benefits platform handling 20,000 messages per minute.',
      'Data & .NET: Built C# and .NET services with Angular front ends on Azure App Services and Azure Functions (sub-200 ms); ran exploratory analysis in Python, R and SQL across 2M+ ODSP records, surfacing 14 trends, and built data cubes across 3 databases that accelerated data-issue detection by 27%.'
    ],
    techGroups: [
      { label: 'AI', items: ['Python', 'LLM APIs', 'Azure OpenAI', 'Azure AI Search', 'RAG'] },
      { label: 'Test automation', items: ['Java', 'Selenium', 'TestNG', 'JUnit', 'Maven', 'Page Object Model', 'Extent Reports'] },
      { label: 'CI/CD', items: ['Jenkins', 'Azure DevOps'] },
      { label: 'Full-stack', items: ['React', 'Node.js', 'Express', 'MongoDB', 'Angular', 'Spring Boot', 'REST', 'SOAP'] },
      { label: 'Data', items: ['SQL', 'IBM DB2', 'Oracle', 'SQL Server'] },
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
