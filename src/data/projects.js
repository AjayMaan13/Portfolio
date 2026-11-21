/**
 * Project data: the single source of truth for the Projects section.
 *
 * To add a project, add an object to PORTFOLIO_PROJECTS. Nothing else needs to change.
 *
 * Schema
 *   id           unique slug
 *   title        card title
 *   tagline      one-sentence summary (grid cards)
 *   description  2-4 sentences (Latest + featured cards)
 *   date         "YYYY-MM"; used for sorting and the computed NEW ribbon
 *   tracks       any of: sdet | swe | ai | data | hackathon | systems
 *   featured     true => shown in the Featured block
 *   featuredRank order inside Featured (1 = first); ranks 1-2 render as full-width "Latest" cards
 *   points       3-5 verified bullet points, shown on featured cards below the top two
 *   proof        up to 3 short verified facts, shown as chips on featured cards
 *   tech         tech chips (first 6 are visible on featured cards)
 *   image        optional screenshot; a gradient placeholder is rendered when empty
 *   imageAlt     alt text for the screenshot
 *   links        { github, live, devpost, extra: [{ label, url }] }  (all optional)
 *   hackathon    optional { name, context, duration, url }
 *   team         "Solo" | "Team of 6" | "Group project"
 *
 * Rule: every number on this page must be reproducible from the project's own repo
 * (README, results files, CI output). If it cannot be verified, it does not go here.
 */
window.PORTFOLIO_PROJECTS = [
  {
    id: 'pluginxchange',
    title: 'PluginXchange',
    tagline: 'License-key marketplace API that never sells the same key twice.',
    description: 'A framework-free PHP 8.3 / MySQL 8 JSON API where orders lock license keys with SELECT … FOR UPDATE SKIP LOCKED inside one transaction, and idempotency keys make retries safe. It is verified by 80 PHPUnit tests and 13 xUnit tests against a real MySQL in Docker, plus a .NET 8 load-testing tool that fires parallel orders at the running API. GitHub Actions runs 11 checks on every push, and a version tag builds, smoke-tests and publishes the Docker image. The AWS deployment is defined in Terraform and rehearsed locally (not yet applied to a live account).',
    date: '2026-11',
    tracks: ['sdet', 'swe'],
    featured: true,
    featuredRank: 4,
    points: [
      'Orders lock keys with FOR UPDATE SKIP LOCKED in one transaction; idempotency keys make retries safe.',
      '.NET 8 load tester: 0 duplicate keys across 3,000 parallel orders over 40 runs; p95 83 ms at 50 parallel.',
      '80 PHPUnit and 13 xUnit tests; 96% PHP line coverage; 11 CI checks on every push.',
      'Integer-cent money, request ids traced through the audit log, 10,000-key bulk import in about 1 s.'
    ],
    proof: [
      '0 duplicate keys · 3,000 parallel orders',
      '96% PHP line coverage'
    ],
    tech: ['PHP 8.3', 'MySQL 8', 'C# / .NET 8', 'PHPUnit', 'xUnit', 'Docker', 'GitHub Actions', 'Terraform'],
    image: 'src/images/pluginxchange.webp',
    imageAlt: 'Diagram: parallel orders hit the PHP API, which locks license keys in MySQL with SELECT FOR UPDATE SKIP LOCKED, with test and load results',
    links: {
      github: 'https://github.com/AjayMaan13/PluginXchange'
    },
    team: 'Solo'
  },
  {
    id: 'agenttrace',
    title: 'AgentTrace',
    tagline: 'A debugger for failing multi-agent AI runs: fork, replay, and find the step that broke.',
    description: 'An observability layer and debugger for multi-agent LLM workflows: record a run, fork it at any step, edit that step and re-run the rest live in a control arm and a treatment arm. Runs are scored with code checks against exact ground truth (5 accounts) instead of AI judges, backed by 474 offline pytest and node:test tests. A root-cause agent (Claude, forced tool calling) ranks suspect steps with quote-checked evidence. FastAPI backend on SurrealDB, a Next.js workbench with a live run graph, Clerk multi-tenant auth, deployed on Render.',
    date: '2026-10',
    tracks: ['ai', 'swe', 'hackathon'],
    featured: true,
    featuredRank: 1,
    proof: [
      'Build North winner',
      'Demo fix verified: 0/8 → 8/8 runs pass',
      '474 offline pytest + node:test tests'
    ],
    tech: ['Python', 'FastAPI', 'Claude API', 'SurrealDB', 'Next.js', 'TypeScript', 'Clerk', 'Render'],
    image: 'src/images/agenttrace.webp',
    imageAlt: 'AgentTrace pitch cover: rewind to any sub-agent, fix it, and be confident the fix works',
    links: {
      github: 'https://github.com/AjayMaan13/AgentTrace',
      live: 'https://agenttrace-web.onrender.com/demo',
      devpost: 'https://devpost.com/software/agenttrace-qb8jvo',
      extra: [
        {
          label: 'Example client',
          url: 'https://github.com/AjayMaan13/agenttrace-harness-demo'
        }
      ]
    },
    hackathon: {
      name: 'Build North',
      award: 'Winner',
      context: 'Winner',
      duration: 'Oct 2026',
      url: 'https://devpost.com/software/agenttrace-qb8jvo'
    },
    team: 'Solo',
    points: [
      'Fork a recorded run at any step, edit it, and re-run the rest live in control and treatment arms.',
      'Runs scored with code checks against exact ground truth (5 accounts) instead of AI judges.',
      'Backed by 474 offline pytest and node:test tests.',
      'Root-cause agent (Claude, forced tool calling) ranks suspect steps with quote-checked evidence.'
    ]
  },
  {
    id: 'ontario-grid-signal',
    title: 'Ontario Grid Signal',
    tagline: 'Real IESO grid data streamed through Kafka into BigQuery, with a backtested peak-demand signal.',
    description: 'A streaming pipeline on real Ontario IESO public data. A Kubernetes (GKE) cluster, VPC and IAM are provisioned with Terraform (remote state) and gated in GitHub Actions with fmt, validate, tflint and Checkov (58 checks passed). Kafka (Strimzi) feeds BigQuery through a Python consumer that KEDA autoscales; a nightly Airflow DAG compares 30 days of IESO file listings with what was ingested and republishes the gap, with idempotent tasks covered by 6 DAG tests. 10 Datadog monitors are defined as Terraform and were proven with induced failure and lag alerts. A backtested peak-risk signal caught 10 of 10 held-out IESO peaks with 45 minutes of notice at 245 alert-hours.',
    date: '2026-09',
    tracks: ['data', 'swe'],
    featured: true,
    featuredRank: 2,
    proof: [
      '10 of 10 held-out peaks caught (45 min notice)',
      'KEDA autoscaling: 5.7× faster catch-up'
    ],
    tech: ['Python', 'Kafka (Strimzi)', 'BigQuery', 'Airflow', 'Kubernetes (GKE)', 'KEDA', 'Terraform', 'Datadog'],
    image: 'src/images/grid-signal.webp',
    imageFit: 'contain',
    imageAlt: 'Chart of draining 57,900 Kafka events with one consumer replica versus KEDA autoscaling',
    links: {
      github: 'https://github.com/AjayMaan13/ontario-grid-signal'
    },
    team: 'Solo',
    points: [
      'GKE cluster, VPC and IAM provisioned with Terraform (remote state), gated by fmt, validate, tflint and Checkov (58 checks passed).',
      'Kafka (Strimzi) to BigQuery pipeline (Python, Airflow) on real IESO data, with a KEDA-autoscaled consumer.',
      'Nightly Airflow DAG reconciles 30 days of IESO file listings and republishes the gap; idempotent tasks, 6 integrity tests.',
      '10 Datadog monitors defined as Terraform, proven with induced failure and lag alerts.'
    ]
  },
  {
    id: 'terralog',
    title: 'Terralog',
    tagline: 'Finding Earth look-alikes for Moon and Mars landing sites.',
    description: 'A Python geospatial pipeline scored 12,362 Earth terrain blocks against 9 NASA Artemis III south-pole regions and surfaced 3 new analog sites; the search was extended to Mars with 68,496 arid blocks. The React and TypeScript front end (CesiumJS, three.js) re-ranks every block live and includes a Twin Terrain Lab comparing real Earth and Moon elevation side by side. Deployed on Vercel.',
    date: '2026-11',
    tracks: ['data', 'hackathon'],
    featured: true,
    featuredRank: 5,
    points: [
      'Scored 12,362 Earth blocks against 9 Artemis III south-pole regions; surfaced 3 new analog sites.',
      'Extended to 4 Mars sites, screening 68,496 arid blocks.',
      'Live re-ranking from plain-language search, importance weights and must-match filters.',
      'Twin Terrain Lab compares Earth and Moon/Mars terrain at the same scale.'
    ],
    proof: ['12,362 blocks scored', '3 new analog sites'],
    tech: ['Python', 'NumPy', 'pandas', 'React', 'TypeScript', 'CesiumJS', 'three.js', 'Vercel'],
    image: 'src/images/terralog.webp',
    imageAlt: 'Terralog app: globe of Earth with heat-field matches to Oxia Planum, ranked analog sites on the left and match conditions on the right',
    links: {
      live: 'https://terralog-three.vercel.app',
      github: 'https://github.com/Tegh25/NASA-SpaceApps-2026',
      githubLabel: 'Team repo'
    },
    hackathon: {
      name: 'NASA Space Apps 2026',
      context: 'Toronto',
      duration: '',
      url: 'https://www.spaceappschallenge.org'
    },
    team: 'Team of 6'
  },
  {
    id: 'a11y-selenium-framework',
    title: 'A11ySeleniumFramework',
    tagline: 'Automated WCAG 2.0 accessibility testing with Selenium, axe-core and BDD scenarios.',
    description: 'A Python/Selenium framework that scans pages against WCAG 2.0 with axe-core across all four POUR principles, with a Page Object Model, an HTML dashboard over the raw axe-core output, a pytest-bdd (Gherkin) layer, and optional Anthropic API analysis of violations.',
    date: '2025-05',
    tracks: ['sdet'],
    featured: true,
    featuredRank: 6,
    points: [
      'Scans pages against WCAG 2.0 with axe-core across all four POUR principles; 100% violation detection rate on fixture pages.',
      'Page Object Model with a shared base page class; HTML dashboard over axe-core JSON plus pytest-html reports.',
      'Multi-step AI agent (generator-and-critic review) using the Anthropic Claude API to batch-analyze violations; grouping by root cause cut API calls ~90%.',
      'pytest-bdd Given/When/Then scenarios; GitHub Actions cross-browser regression on every push in under 4 minutes.'
    ],
    proof: [
      'All four POUR principles',
      'Page Object Model + pytest-bdd'
    ],
    tech: ['Python', 'Selenium', 'axe-core', 'pytest', 'pytest-bdd', 'Anthropic API', 'GitHub Actions'],
    image: 'src/images/a11y.webp',
    imageAlt: 'Accessibility test dashboard listing axe-core violations',
    links: {
      github: 'https://github.com/AjayMaan13/A11ySeleniumFramework'
    },
    team: 'Solo'
  },
  {
    id: 'pe-hackathon-url-shortener',
    title: 'PE Hackathon: URL Shortener',
    tagline: 'A production-hardened URL shortener built to survive real failures.',
    description: 'Built for the MLH Production Engineering Hackathon 2026 (Reliability Engineering track) and since migrated from Flask to FastAPI. A Redis read-through cache cut median redirect lookups from about 12 ms to 3.5 ms (50 requests each), and Redis errors degrade to Postgres-only instead of failing the request. 31 pytest tests at 98%+ coverage, with Docker auto-restart and a GitHub Actions gate that blocks broken deploys.',
    date: '2026-04',
    tracks: ['sdet', 'swe', 'hackathon'],
    featured: true,
    featuredRank: 7,
    points: [
      'Redis read-through cache: median lookups about 12 ms to 3.5 ms; a Redis outage degrades to Postgres-only.',
      '31 tests at 98%+ coverage; CI runs against real Postgres and Redis with a coverage gate.',
      'Docker Compose runs app, Postgres and Redis with auto-restart on crash.',
      'Every error returns JSON, never a stack trace.'
    ],
    proof: ['98%+ coverage · 31 tests', '~12 → 3.5 ms cached lookups'],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Peewee', 'Docker Compose', 'pytest', 'GitHub Actions'],
    image: 'src/images/pe-hackathon.webp',
    imageAlt: 'Architecture diagram of the URL shortener with FastAPI, Redis and PostgreSQL',
    links: {
      github: 'https://github.com/AjayMaan13/pe-hackathon-2026',
      devpost: 'https://devpost.com/software/pe-hackathons-2026'
    },
    hackathon: {
      name: 'MLH PE Hackathon 2026',
      context: 'Reliability Engineering Track',
      duration: '48hrs',
      url: 'https://devpost.com/software/pe-hackathons-2026'
    },
    team: 'Solo'
  },
  {
    id: 'fragments',
    title: 'Fragments: REST API Microservice',
    tagline: 'AWS-hosted Node.js microservice that stores user data and converts it on read.',
    description: 'A Node.js REST API handling 12 content types, protected by AWS Cognito JWT verification, with metadata in DynamoDB and objects in S3 on ECS Fargate behind a load balancer. The whole AWS environment is Terraform (9 modules, 34 resources), with a 6-job GitHub Actions CI/CD pipeline and 94% line coverage.',
    date: '2026-05',
    tracks: ['swe'],
    featured: true,
    featuredRank: 3,
    points: [
      'Built a 6-job GitHub Actions CI/CD pipeline (ESLint, hadolint, unit, Docker Compose integration, Terraform validate), green on 20 consecutive runs.',
      'Node.js REST API handling 12 content types, 99.97% uptime and sub-250 ms response times.',
      'DynamoDB metadata, S3 objects, AWS ECS Fargate at 10,000 requests per second, with Cognito JWT verification middleware.',
      'Terraform codifies the full AWS environment (9 modules, 34 resources, 23 resource types), created or torn down with one command.'
    ],
    proof: [
      '94% line coverage · 195 unit tests',
      'CI green on 20 consecutive runs'
    ],
    tech: ['Node.js', 'Express', 'AWS Cognito', 'S3', 'DynamoDB', 'ECS Fargate', 'Terraform', 'GitHub Actions'],
    image: 'src/images/fragments.webp',
    imageAlt: 'Fragments microservice architecture on AWS',
    links: {
      github: 'https://github.com/AjayMaan13/fragments'
    },
    team: 'Solo'
  },
  {
    id: 'leaselens',
    title: 'LeaseLens: Lease Extraction & Rent Forecasting',
    tagline: 'Evaluation-first AI for commercial lease documents.',
    description: 'Benchmarks three extraction systems (a regex baseline, BERT NER and an LLM structured-output pipeline) against a 40-document gold set of real SEC EDGAR commercial leases. A CI regression gate fails the build if extraction quality drops, accuracy is bias-audited across property type and region, and SARIMA rent forecasting beat a seasonal-naive baseline.',
    date: '2026-08',
    tracks: ['ai'],
    featured: true,
    featuredRank: 8,
    points: [
      'Benchmarks regex, BERT NER and LLM extraction on a 40-document SEC EDGAR gold set: 0.803 vs 0.313 micro-F1.',
      'CI regression gate fails the build if extraction quality drops.',
      'Accuracy bias-audited across property type and region.',
      'SARIMA rent forecasting beat a seasonal-naive baseline by 55%.'
    ],
    proof: [
      '0.803 micro-F1 (LLM) vs 0.313 regex',
      'SARIMA beat baseline by 55%'
    ],
    tech: ['Python', 'Hugging Face Transformers', 'Claude API', 'pandas', 'pytest', 'statsmodels', 'Streamlit', 'GitHub Actions'],
    image: 'src/images/leaseLens.webp',
    imageAlt: 'LeaseLens Streamlit app showing extracted lease fields',
    links: {
      github: 'https://github.com/AjayMaan13/LeaseLens',
      live: 'https://lease-lens-ai.streamlit.app'
    },
    team: 'Solo'
  },
  {
    id: 'breathcam',
    title: 'BreathCam',
    tagline: 'Camera-based breathing-rate estimation, evaluated like a clinical study: Bland-Altman agreement, patient-level validation and a quality gate that refuses to guess. Research prototype, not a medical device.',
    date: '2026-10',
    tracks: ['ai', 'data'],
    tech: ['Python', 'PyTorch', 'MediaPipe', 'Streamlit', 'SQLite'],
    links: {
      github: 'https://github.com/AjayMaan13/BreathCam'
    }
  },
  {
    id: 'coughcast',
    title: 'CoughCast',
    tagline: 'Research prototype for detecting coughs and wheezes in bedside audio and flagging rising coughing against a personal baseline. So far: an ICBHI respiratory-sound data pipeline (920 recordings, 126 patients, 6,898 breathing cycles) with patient-level splits and synthetic-data tests. Model results are not reported yet. Not a medical device.',
    date: '2026-10',
    tracks: ['ai', 'data'],
    tech: ['Python', 'librosa', 'PyTorch', 'scikit-learn', 'pytest'],
    links: {
      github: 'https://github.com/AjayMaan13/CoughCast'
    }
  },
  {
    id: 'gtsrb-traffic-classifier',
    title: 'GTSRB Traffic-Sign Classifier',
    tagline: 'A 43-class traffic-sign classifier: a purpose-built CNN reached 99.17% test accuracy and beat MobileNetV2 transfer learning at a fraction of the size. Grad-CAM explainability and a live Hugging Face demo.',
    date: '2026-07',
    tracks: ['ai'],
    tech: ['Python', 'TensorFlow/Keras', 'scikit-learn', 'Gradio', 'Hugging Face Spaces'],
    links: {
      github: 'https://github.com/AjayMaan13/gtsrb-traffic-classifier',
      live: 'https://huggingface.co/spaces/AjayMaan13/road-sign-vision'
    }
  },
  {
    id: 'javafx-hms',
    title: 'Maple Leaf Hotel (javafx-hms)',
    tagline: 'Desktop hotel reservation and billing system with a guest booking kiosk and a staff back-office. I built the backend, persistence, security (BCrypt, role-based access) and business logic.',
    date: '2026-06',
    tracks: ['systems', 'swe'],
    tech: ['Java', 'JavaFX', 'Hibernate/JPA', 'H2', 'JUnit', 'Maven'],
    links: {
      github: 'https://github.com/AjayMaan13/javafx-hms'
    },
    team: 'Group project'
  },
  {
    id: 'code-review-mcp',
    title: 'code-review-mcp',
    tagline: 'A Python MCP server that gives Claude tool access to GitHub repositories and pull requests for code review, security analysis and onboarding. Runs in Docker or locally with uv.',
    date: '2026-03',
    tracks: ['ai', 'swe'],
    tech: ['Python', 'MCP', 'GitHub API', 'Docker', 'uv'],
    links: {
      github: 'https://github.com/AjayMaan13/code-review-mcp'
    }
  },
  {
    id: 'devos',
    title: 'DevOS',
    tagline: 'AI command center for engineers: one prompt pulls live Notion tasks via MCP, cross-references Gmail and Calendar, returns a prioritized daily plan and writes it back to Notion.',
    date: '2026-03',
    tracks: ['ai', 'hackathon'],
    tech: ['React', 'Node.js', 'Claude API', 'Notion MCP'],
    links: {
      github: 'https://github.com/ajaymaan13/devos',
      live: 'https://dev.to/ajaymaan13/devos-notion-mcp-challenge-4ehi'
    },
    hackathon: {
      name: 'Notion MCP Challenge',
      context: 'Notion MCP Hackathon',
      duration: '1 Week',
      url: 'https://dev.to/challenges/notion-2026-03-04'
    }
  },
  {
    id: 'fraudnet-ai',
    title: 'FraudNet·AI',
    tagline: 'Real-time graph intelligence for fraud rings: streams transactions into a 3D force-directed graph, runs five parallel detection algorithms and uses IBM Granite to explain each finding in plain language.',
    date: '2026-03',
    tracks: ['ai', 'hackathon'],
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'NetworkX', 'WebSocket', 'IBM watsonx.ai'],
    links: {
      github: 'https://github.com/AjayMaan13/fraudnet-ai',
      live: 'https://fraudnet-ai.vercel.app'
    },
    hackathon: {
      name: 'GenAI Genesis 2026',
      context: 'Canada\'s largest AI hackathon',
      duration: '36hrs',
      url: 'https://genaigenesis.ca'
    }
  },
  {
    id: 'utra-hacks-robot',
    title: 'UTRA Hacks Mentor Robot',
    tagline: 'Autonomous biathlon-style Arduino reference robot built as a mentor at UTRA Hacks 2026: colour navigation, dual IR line following, ultrasonic obstacle detection and a servo ball launcher, driven by a state machine.',
    date: '2026-02',
    tracks: ['systems', 'hackathon'],
    tech: ['Arduino', 'C/C++', 'State Machine', 'Sensors'],
    links: {
      github: 'https://github.com/AjayMaan13/UTRA-Hacks-Mentor26'
    },
    hackathon: {
      name: 'UTRA Hacks 2026',
      context: 'Canada\'s premier robotics hackathon',
      duration: '',
      url: 'https://hackathon.utra.ca'
    }
  },
  {
    id: 'artvault',
    title: 'ArtVault',
    tagline: 'Discover and organise artworks from the Metropolitan Museum of Art, with JWT authentication, personal collections, search history and Next.js server-side rendering.',
    date: '2025-08',
    tracks: ['swe'],
    tech: ['Next.js', 'React', 'MongoDB', 'JWT', 'Bootstrap', 'Vercel'],
    links: {
      github: 'https://github.com/AjayMaan13/artvault',
      live: 'https://artvault-delta.vercel.app'
    }
  },
  {
    id: 'pydb-core',
    title: 'PyDB-Core',
    tagline: 'A from-scratch key-value store exploring database internals: persistent immutable data structures and multi-version concurrency control. A learning project in progress.',
    date: '2025-08',
    tracks: ['systems'],
    tech: ['Python', 'MVCC', 'Data structures'],
    links: {
      github: 'https://github.com/AjayMaan13/pydb-core'
    }
  },
  {
    id: 'receipt-analyzer',
    title: 'AI Receipt Analyzer',
    tagline: 'A Streamlit app that sends receipt photos to an OpenAI vision model (gpt-4o-mini) to extract items and prices.',
    date: '2025-05',
    tracks: ['ai'],
    tech: ['Python', 'Streamlit', 'OpenAI API', 'PIL'],
    links: {
      github: 'https://github.com/AjayMaan13/smart-script-analyzer',
      live: 'https://smart-script-analyzer-pxnezltk8wdw775z5ehkwg.streamlit.app'
    }
  },
  {
    id: 'airaware',
    title: 'AirAware',
    tagline: 'An ETL pipeline that pulls air-quality data from multiple APIs, turns measurements into health metrics and raises automated alerts for dangerous conditions.',
    date: '2025-05',
    tracks: ['data'],
    tech: ['Python', 'PostgreSQL', 'Pandas', 'NumPy', 'ETL'],
    links: {
      github: 'https://github.com/AjayMaan13/AirAware'
    }
  },
  {
    id: 'finsight',
    title: 'FinSight',
    tagline: 'Full-stack finance platform with a Flask ML service (Ridge balance forecasts, Isolation Forest anomaly detection) that degrades gracefully with a 503. Jest, pytest and Vitest suites run in GitHub Actions.',
    date: '2025-05',
    tracks: ['swe', 'ai'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Flask', 'scikit-learn', 'Docker'],
    links: {
      github: 'https://github.com/AjayMaan13/FinSight',
      live: 'https://fin-sight-mu.vercel.app/'
    }
  },
  {
    id: 'seneca-deliveries',
    title: 'Seneca Polytechnic Deliveries',
    tagline: 'Delivery routing in C/C++ using A* and Dijkstra pathfinding with capacity constraints, built Agile-style with a CppUnitTest suite.',
    date: '2025-05',
    tracks: ['systems'],
    tech: ['C', 'C++', 'A*', 'Dijkstra', 'CppUnitTest'],
    links: {
      github: 'https://github.com/AjayMaan13/SenecaDeliveries'
    }
  },
  {
    id: 'teachme',
    title: 'TeachMe Education Database',
    tagline: 'Oracle database for an online-education platform with window functions, CTEs and PL/SQL, containerised with Oracle XE in Docker.',
    date: '2025-05',
    tracks: ['data'],
    tech: ['Oracle', 'SQL', 'PL/SQL', 'Docker'],
    links: {
      github: 'https://github.com/AjayMaan13/TeachMe'
    }
  },
  {
    id: 'smartlib',
    title: 'SmartLib',
    tagline: 'Library management system in C++17: inheritance and polymorphism, design patterns, RAII memory management and file persistence.',
    date: '2025-04',
    tracks: ['systems'],
    tech: ['C++17', 'OOP', 'STL', 'Design Patterns'],
    links: {
      github: 'https://github.com/AjayMaan13/SmartLib'
    }
  },
  {
    id: 'credit-card-validator',
    title: 'Credit Card Validator Upgraded',
    tagline: 'A C card-management tool with AES-256-CBC encrypted storage, BIN API lookups through cURL and JSON-structured logging.',
    date: '2025-04',
    tracks: ['systems'],
    tech: ['C', 'OpenSSL', 'cURL', 'cJSON'],
    links: {
      github: 'https://github.com/AjayMaan13/Credit-Card-Validator-Upgraded'
    }
  }
];

window.PORTFOLIO_TRACKS = {
  sdet: {
    label: 'SDET/QA'
  },
  swe: {
    label: 'Full-Stack'
  },
  ai: {
    label: 'AI/ML'
  },
  data: {
    label: 'Data & Cloud'
  },
  hackathon: {
    label: 'Hackathon'
  },
  systems: {
    label: 'Systems'
  }
};
