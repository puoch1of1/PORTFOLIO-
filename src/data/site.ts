export type ProjectEntry = {
  slug: string;
  name: string;
  summary: string;
  status: string;
  problem: string;
  approach: string;
  stack: string[];
  constraints: string[];
  technicalBreakdown: string[];
  tradeoffs: string[];
  futureImprovements: string[];
  links?: { label: string; href: string }[];
};

export const siteProfile = {
  name: 'Puoch Mabor Makuei',
  role: 'Software Engineer | Data Analyst',
  location: 'South Sudan / East Africa',
  description:
    'Engineering-focused portfolio for Puoch Mabor Makuei. Building systems for Africa with a focus on data, infrastructure, and practical software.',
  mission: 'Building systems for Africa',
  focus: 'Focus: Data, Infrastructure, Real-world Solutions',
  availability: 'Open to roles (Remote / Africa)',
  email: 'lomaspuoch502@gmail.com',
  github: 'https://github.com/puoch1of1',
  linkedin: 'https://www.linkedin.com/in/puoch-mabor-makuei-490252320/',
  resume: '/PUOCH_MABOR_MAKUEI_CV%20.pdf',
};

export const navigationItems = [
  { label: 'HOME', path: '/', description: 'System overview and current focus' },
  { label: 'PROJECTS', path: '/projects', description: 'Engineering work and project records' },
  { label: 'ABOUT', path: '/about', description: 'Background, priorities, and skills' },
  { label: 'CONTACT', path: '/contact', description: 'Professional links and contact details' },
];

export const systemStatus = [
  { label: 'Status', value: 'Final Year CS Student' },
  { label: 'Focus', value: 'Data + Infrastructure' },
  { label: 'Availability', value: siteProfile.availability },
];

export const activeWork = [
  'Logistics system prototype for South Sudan operations.',
  'Data analysis projects in Python and SQL.',
  'Final-year work on medicine supply forecasting and ETL reliability.',
];

export const homeSignals = [
  'Engineering-first interface.',
  'Content over presentation.',
  'Built to show how problems are framed and solved.',
];

export const aboutSections = {
  whoIAm:
    'I am a final-year Computer Science student and engineer from South Sudan. My work sits between software engineering and data analysis, especially where systems need to operate under real constraints instead of ideal assumptions.',
  whatICareAbout:
    'I care about practical systems for Africa: logistics, data quality, infrastructure visibility, and software that respects local operating conditions. I am most motivated by work that reduces friction in real organizations and makes decisions easier.',
  workingStyle:
    'I prefer clear problem definitions, explicit constraints, and technical choices that are easy to maintain. I do not optimize for novelty first; I optimize for usefulness, reliability, and the ability to explain why a system is built the way it is.',
};

export const skillGroups = [
  {
    title: 'Software',
    items: ['TypeScript', 'React', 'Python', 'SQL', 'API design', 'System architecture'],
  },
  {
    title: 'Data',
    items: ['Pandas', 'Data cleaning', 'ETL design', 'Exploratory analysis', 'Forecasting workflows'],
  },
  {
    title: 'Infrastructure',
    items: ['Database modeling', 'Operational tooling', 'Documentation', 'Monitoring mindset'],
  },
];

export const projects: ProjectEntry[] = [
  {
    slug: 'south-sudan-logistics-system',
    name: 'South Sudan Logistics System Prototype',
    summary:
      'A logistics operations prototype designed around movement tracking, low-friction data entry, and visibility for teams operating in South Sudan.',
    status: 'Prototype',
    problem:
      'Logistics teams often track vehicle movement, cargo status, and delivery updates across calls, chats, and spreadsheets. That creates weak visibility, slow reporting, and avoidable coordination mistakes.',
    approach:
      'I mapped the workflow around actual operational checkpoints instead of generic CRUD screens: request intake, dispatch, in-transit updates, delivery confirmation, and reporting.',
    stack: ['TypeScript', 'React', 'System design', 'Workflow modeling'],
    constraints: [
      'Connectivity can be unreliable, so the system model has to tolerate delayed updates.',
      'Operational staff need very simple data entry; complexity must stay behind the scenes.',
      'Reporting has to be useful without assuming large datasets or expensive infrastructure.',
    ],
    technicalBreakdown: [
      'Defined a shipment lifecycle that makes state transitions explicit and reportable.',
      'Structured records around operational questions: where is it, what changed, who updated it, and what still blocks delivery.',
      'Designed the interface to support quick scanning rather than dense visual dashboards.',
    ],
    tradeoffs: [
      'A lightweight prototype moves faster, but it leaves deeper offline-sync work for later.',
      'Simple data entry improves adoption, but it limits advanced edge-case handling in the first version.',
    ],
    futureImprovements: [
      'Offline-first sync for field usage.',
      'Role-specific dashboards for dispatch, warehouse, and management views.',
      'Audit trails and exception reporting for delivery delays.',
    ],
  },
  {
    slug: 'medicine-supply-data-pipeline',
    name: 'Medicine Supply Data Pipeline & Forecasting System',
    summary:
      'A final-year project focused on reducing stockouts and expiries through cleaner inventory data pipelines and better forecasting inputs.',
    status: 'In Progress',
    problem:
      'Medicine supply decisions are weakened when inventory data arrives late, inconsistently formatted, or with quality issues. Forecasting becomes unreliable when the pipeline feeding it is weak.',
    approach:
      'I approached the project as a data systems problem first: clean ingestion, validation rules, reproducible transformations, and only then forecasting on top of trustworthy inputs.',
    stack: ['Python', 'Pandas', 'SQL', 'ETL design', 'Time-series analysis'],
    constraints: [
      'Source data can arrive from mixed spreadsheet and CSV workflows.',
      'Data quality issues are operational, not just technical, so the pipeline must expose them clearly.',
      'Forecasting needs to remain understandable to non-specialist stakeholders.',
    ],
    technicalBreakdown: [
      'Designed ingestion steps for normalizing raw inventory files into a consistent schema.',
      'Added validation thinking around missing values, date irregularities, and category mismatches.',
      'Separated preparation, analysis, and reporting stages so failures can be traced quickly.',
    ],
    tradeoffs: [
      'More validation improves trust but increases setup effort and processing time.',
      'Forecasting can be made more sophisticated, but overly complex models are harder to explain and maintain.',
    ],
    futureImprovements: [
      'Automated scheduled ingestion and validation reporting.',
      'Scenario-based forecasting for supply planning.',
      'A simple operator-facing dashboard for stock and risk visibility.',
    ],
    links: [{ label: 'Repository', href: 'https://github.com/Moses141/Group-Delta-Project' }],
  },
  {
    slug: 'dynasty-gym-management',
    name: 'Dynasty Gym Management Application',
    summary:
      'A private application replacing manual member tracking with a clearer structure for subscriptions, attendance, and day-to-day operations.',
    status: 'In Progress',
    problem:
      'Manual recordkeeping makes it hard for a growing gym to track subscriptions, attendance, and basic operational follow-up without errors and duplicated work.',
    approach:
      'I focused on replacing scattered manual handling with a simple operational system: member records, subscription status, attendance events, and searchable history.',
    stack: ['Web application design', 'Database modeling', 'CRUD systems'],
    constraints: [
      'The system needs to be straightforward for daily staff use.',
      'Operational value matters more than feature count.',
      'The product has to support gradual adoption from manual processes.',
    ],
    technicalBreakdown: [
      'Modeled members, plans, payments, and attendance as separate but connected records.',
      'Prioritized flows for check-in, renewal visibility, and quick lookup of member status.',
      'Designed the system to be extendable without making the first version heavy.',
    ],
    tradeoffs: [
      'Starting with the core membership workflow avoids overbuilding, but some administrative features remain deferred.',
      'A private deployment reduces integration complexity, but it also limits public demonstration.',
    ],
    futureImprovements: [
      'Staff role permissions.',
      'Automated renewal reminders.',
      'Revenue and attendance trend reporting.',
    ],
  },
  {
    slug: 'synod-course-assistant',
    name: 'Synod Course Assistant',
    summary:
      'An open-source academic assistant that helps structure lecture material into summaries, concepts, and revision support.',
    status: 'Open Source Contribution',
    problem:
      'Students often work through dense course documents that are hard to review quickly, especially when materials come from mixed formats and inconsistent structure.',
    approach:
      'I contributed to an assistant that extracts and restructures academic content into something easier to study: summaries, concepts, and guided revision material.',
    stack: ['Python', 'NLP', 'Document parsing', 'Information extraction'],
    constraints: [
      'Academic material arrives in inconsistent formats such as PDFs and slide decks.',
      'Summaries need to be useful without flattening the important nuance out of the source material.',
      'The workflow has to stay fast enough to support student usage.',
    ],
    technicalBreakdown: [
      'Worked around content extraction and ranking of important concepts.',
      'Focused on making output structured enough to support study rather than producing raw text dumps.',
      'Treated summarization as a pipeline problem: extract, clean, rank, then present.',
    ],
    tradeoffs: [
      'Aggressive simplification improves readability but can lose context.',
      'More advanced NLP can improve quality, but it adds complexity and resource cost.',
    ],
    futureImprovements: [
      'Better handling for slide-heavy courses.',
      'Question generation tied more tightly to extracted concepts.',
      'Evaluation workflows for output usefulness.',
    ],
    links: [{ label: 'Repository', href: 'https://github.com/puoch1of1/Synod' }],
  },
  {
    slug: 'back-and-forth-debate-engine',
    name: 'Back and Forth Debate Engine',
    summary:
      'A system for generating structured debate flows between AI agents so users can inspect competing lines of reasoning instead of one-shot answers.',
    status: 'In Progress',
    problem:
      'Single-answer AI interfaces often hide uncertainty and tradeoffs. For complex questions, seeing competing arguments can be more useful than receiving one polished response.',
    approach:
      'I designed the project around structured contention: claim, response, counter-response, and synthesis. The goal is to expose reasoning paths instead of just outputs.',
    stack: ['TypeScript', 'LLM orchestration', 'Prompt design', 'State handling'],
    constraints: [
      'The debate flow needs to remain coherent across multiple turns.',
      'Latency grows as more agents or rounds are added.',
      'Users need readable structure, not a wall of generated text.',
    ],
    technicalBreakdown: [
      'Modeled debate rounds as explicit steps with output contracts.',
      'Separated stance generation, rebuttal, and synthesis into distinct stages.',
      'Designed the interface to help users inspect reasoning rather than passively consume it.',
    ],
    tradeoffs: [
      'More rounds improve depth, but they also increase cost and response time.',
      'Structured prompts create consistency, but they can reduce flexibility in unusual debates.',
    ],
    futureImprovements: [
      'Evidence grounding with external sources.',
      'Debate quality scoring.',
      'User-controlled depth and reasoning modes.',
    ],
    links: [{ label: 'Repository', href: 'https://github.com/puoch1of1/back-and-forth' }],
  },
];

export const featuredProjectSlugs = [
  'south-sudan-logistics-system',
  'medicine-supply-data-pipeline',
  'dynasty-gym-management',
];

export const getProjectPath = (slug: string) => `/projects/${slug}`;
