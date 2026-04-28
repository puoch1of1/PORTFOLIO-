// Portfolio content data - easily customizable
export const personalInfo = {
  name: "Puoch Mabor Makuei",
  title: "Data Engineer | Computer Scientist",
  specializations: ["Data Engineering", "Data Science", "Cybersecurity", "Infrastructure"],
  location: "South Sudan",
  email: "lomaspuoch502@gmail.com",
  tagline: "Building scalable data infrastructure and secure systems. Specializing in ETL pipelines, data analytics, and infrastructure security for organizations across Africa and beyond.",
};

export const about = {
  name: "Puoch Mabor Makuei",
  origin: "South Sudan",
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "Uganda Christian University",
  },
  narrative: `I'm a computer scientist focused on data engineering, infrastructure, and security in contexts where reliability matters most. My work spans telecommunications monitoring, humanitarian data quality assurance, and applied ETL systems that turn fragmented operational data into trustworthy decision support.

I approach problems with an infrastructure-first mindset: build data quality checks early, design for low-connectivity environments, and prioritize observability and clear documentation so teams can sustain systems beyond the first deployment.`,
  howIWork: {
    workStyle: "async-first",
    preferences: [
      "deep work blocks",
      "written documentation",
      "async code reviews",
    ],
    problemDomains: [
      "ETL optimization in resource-constrained environments",
      "Data quality frameworks for humanitarian projects",
      "Infrastructure monitoring in low-connectivity regions",
    ],
  },
  ahaMonents: [
    {
      title: "Notice: many field teams over-engineer ETL early",
      insight: "I realized several teams were adopting complex orchestration before stabilizing source data contracts and validation rules.",
      result: "I shifted project sequencing to prioritize ingestion contracts, source-level validation, and lightweight batch pipelines before scaling orchestration.",
      domain: "Data Engineering",
    },
    {
      title: "Data quality failures are usually communication failures",
      insight: "Most recurring data issues were not tooling gaps; they were unclear ownership and inconsistent definitions across collaborators.",
      result: "I introduced shared QA checklists, data dictionaries, and review sign-offs that reduced back-and-forth during deliverable review cycles.",
      domain: "Data Quality",
    },
    {
      title: "Monitoring without thresholds creates dashboard noise",
      insight: "Raw KPI visibility alone did not improve decisions because teams lacked clear escalation thresholds and response playbooks.",
      result: "I helped define threshold-based alerts and practical response triggers so monitoring outputs translated into actionable operations.",
      domain: "Infrastructure",
    },
    {
      title: "Documentation speed compounds over time",
      insight: "Teams moving quickly with strong written handoffs maintained momentum even when contributors changed or bandwidth dropped.",
      result: "I standardized concise implementation notes and decision logs, which improved async collaboration and onboarding efficiency.",
      domain: "Engineering Operations",
    },
  ],
  philosophy: "Data pipelines are critical infrastructure. My role is to build systems that are secure, scalable, and reliable - transforming raw data into organizational intelligence while maintaining integrity every step of the way.",
};

export const experiences = [
  {
    id: 1,
    title: "Technical Intern",
    organization: "National Communication Authority (NCA)",
    location: "Gumbo Sherikat, South Sudan",
    period: "June-October 2025",
    description: "Designed and maintained monitoring workflows for national telecom infrastructure, tracking critical network reliability and performance indicators to support operational response and regulatory visibility.",
    highlights: [
      "Infrastructure monitoring and performance evaluation",
      "Network reliability assessment",
      "Spectrum management exposure",
      "Regulatory systems understanding",
    ],
    metrics: [
      "Tracked 5+ network performance and reliability KPIs",
      "Supported visibility for national telecom operations",
      "Improved incident response readiness through structured monitoring",
    ],
    decisions: [
      "Prioritized KPI standardization before adding new dashboards",
      "Documented threshold assumptions to align technical and regulatory expectations",
      "Focused monitoring design on actionable indicators over vanity metrics",
    ],
    lessonsLearned: "Reliable monitoring is as much about operational clarity as tooling. Clear thresholds and ownership make infrastructure data actually useful.",
  },
  {
    id: 2,
    title: "Deliverable Quality Assurance Volunteer",
    organization: "Statistics Without Borders (SWB)",
    location: "Remote",
    period: "January 2025 - Present",
    description: "Strengthened data quality in humanitarian analytics by reviewing datasets and deliverables for integrity, consistency, and statistical soundness across distributed global projects.",
    highlights: [
      "Reviewed and validated analytical reports for accuracy against quality assurance guidelines",
      "Ensured consistency, reliability, and compliance of global datasets",
      "Collaborated with international volunteer teams to support pro bono statistical projects",
      "Promoted rigorous data practices in statistical deliverables",
    ],
    metrics: [
      "Contributed QA review support across 40+ humanitarian datasets",
      "Improved consistency of analytical deliverables before stakeholder handoff",
      "Helped reduce rework by catching quality issues early",
    ],
    decisions: [
      "Used checklist-driven QA reviews to reduce subjective validation",
      "Flagged methodology risks early instead of only reviewing final outputs",
      "Standardized issue feedback in written form to improve async collaboration",
    ],
    lessonsLearned: "High-impact analytics depends on trust in the underlying data. Quality review processes should be explicit, repeatable, and collaborative.",
  },
  {
    id: 3,
    title: "Volunteer Computer Technician",
    organization: "Uganda Christian University",
    location: "Uganda",
    period: "2024",
    description: "Improved operational reliability for community institutions by maintaining and repairing computing equipment, reducing downtime for staff and students.",
    highlights: [
      "Hardware maintenance and repair",
      "Community support",
      "Technical troubleshooting",
    ],
    metrics: [
      "Restored multiple non-functional devices for daily use",
      "Reduced repeat hardware issues through preventive maintenance",
      "Provided on-demand technical support for campus operations",
    ],
    decisions: [
      "Created a triage-first workflow to prioritize high-impact device fixes",
      "Preferred reusable repair procedures over one-off troubleshooting",
      "Documented frequent failure patterns to speed future interventions",
    ],
    lessonsLearned: "Simple systems and disciplined troubleshooting can deliver outsized impact, especially where replacement budgets are limited.",
  },
  {
    id: 4,
    title: "Freelancer",
    organization: "Upwork & Fiverr",
    location: "Remote",
    period: "January-August 2023",
    description: "Delivered remote transcription and copywriting projects with reliable turnaround, clear scope communication, and consistent client feedback management.",
    highlights: [
      "Remote work discipline",
      "Client communication",
      "Project delivery",
    ],
    metrics: [
      "Managed concurrent client deliverables across multiple gigs",
      "Maintained consistent delivery timelines for active contracts",
      "Built repeat-client trust through revision-friendly communication",
    ],
    decisions: [
      "Set explicit scope and revision boundaries before starting work",
      "Used structured delivery templates to increase consistency",
      "Adopted async-first client updates to prevent ambiguity",
    ],
    lessonsLearned: "Execution quality and communication clarity are equally important. Good client outcomes come from disciplined process, not speed alone.",
  },
];

export const skills = {
  "Data Engineering & ETL": [
    "ETL Pipeline Design",
    "Data Modeling",
    "Apache Spark",
    "Apache Airflow",
    "Apache Kafka",
    "Data Quality Assurance",
  ],
  "Data Science & Analytics": [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "Data Analysis",
    "Machine Learning Fundamentals",
  ],
  "Infrastructure & Security": [
    "Network Security",
    "Infrastructure Monitoring",
    "System Architecture",
    "Database Design",
    "Security Assessment",
  ],
  "Tools & Technologies": [
    "Data Pipeline Orchestration",
    "Batch/Stream Processing",
    "Technical Documentation",
    "Remote Collaboration",
  ],
};

export const projects = [
  {
    id: 1,
    title: "Medicine Supply Pipeline - Reducing Waste and Preventing Stockouts",
    status: "Final Year Project - In Progress",
    expectedCompletion: "May",
    isCollaborative: true,
    overview: "Designed an end-to-end data pipeline for hospital inventory data to detect stockout risk and expiry exposure early, replacing fragmented spreadsheet-based tracking with a more reliable analytics workflow.",
    problem: "Hospitals lose critical medicines and budget value due to delayed inventory visibility, stockouts, and expiry events caused by manual reporting and inconsistent records.",
    whyMatters: "Medicine availability directly affects patient outcomes, treatment continuity, and healthcare costs.",
    outcomes: [
      "Projected 30-35% reduction in preventable medicine waste",
      "Single source of truth for inventory and expiry visibility",
      "Faster detection of stockout risk through automated data checks",
    ],
    keyDecisions: [
      "Prioritized source-level validation before warehouse-level transformations",
      "Used Python and Pandas for rapid iteration during data contract discovery",
      "Designed modular ETL stages so forecasting can evolve independently",
    ],
    caseStudySlug: "medicine-supply-pipeline",
    liveDemo: null,
    technicalFocus: [
      "ETL pipeline design for inventory data",
      "Data cleaning and validation workflows",
      "Time-series data modeling",
      "Automated data ingestion (CSV/Excel)",
      "Data quality monitoring"
    ],
    role: [
      "Data pipeline architecture",
      "ETL workflow implementation",
      "Data quality assurance",
      "System documentation"
    ],
    tools: ["Python", "Pandas", "SQL", "Data Pipeline Design", "ETL"],
    isFeatured: false,
    github: "https://github.com/Moses141/Group-Delta-Project",
  },
  {
    id: 2,
    title: "Synod - Making Dense Course Content Actionable",
    status: "Open Source Contribution",
    isCollaborative: true,
    overview: "Contributed to a learning assistant that converts complex lecture materials into structured summaries, ranked concepts, and study prompts so students can revise efficiently.",
    problem: "Students often spend more time navigating disorganized notes and slides than actually learning core concepts.",
    whyMatters: "Better content structuring improves study efficiency and reduces cognitive overload for learners.",
    outcomes: [
      "Improved extraction of key concepts from lecture files",
      "Generated revision-ready summaries and question prompts",
      "Reduced manual prep effort for exam revision workflows",
    ],
    keyDecisions: [
      "Combined TF-IDF and transformer-based ranking for balanced relevance",
      "Separated extraction pipeline from summarization logic for maintainability",
      "Focused on explainable output structure over opaque scoring",
    ],
    caseStudySlug: "synod-learning-assistant",
    liveDemo: null,
    technicalFocus: [
      "Natural Language Processing",
      "Transformer models & TF-IDF",
      "PDF/PPTX content extraction",
      "Concept ranking & summarization"
    ],
    role: [
      "Contributor",
      "Feature development",
      "NLP implementation"
    ],
    tools: ["Python", "NLP", "Transformers", "TextRank"],
    isFeatured: false,
    github: "https://github.com/puoch1of1/Synod",
  },
  {
    id: 3,
    title: "Back and Forth - Structuring Better AI-Assisted Debate",
    status: "In Progress",
    isCollaborative: false,
    overview: "Building a multi-agent debate platform that transforms open-ended prompts into structured arguments, rebuttals, and synthesized conclusions for clearer reasoning.",
    problem: "Users exploring complex topics often receive one-sided AI responses without transparent counterarguments or synthesis.",
    whyMatters: "Balanced reasoning support helps users evaluate trade-offs and make better-informed decisions.",
    outcomes: [
      "Structured claim, rebuttal, and synthesis flow for each prompt",
      "Clearer comparison of competing perspectives",
      "Foundation for explainable AI-driven discussion interfaces",
    ],
    keyDecisions: [
      "Used role-based agent orchestration instead of single-model monologues",
      "Defined deterministic debate rounds for traceable outputs",
      "Prioritized synthesis quality as a first-class product feature",
    ],
    caseStudySlug: "back-and-forth-ai-debate",
    liveDemo: null,
    technicalFocus: [
      "AI agent orchestration",
      "Argument generation & analysis",
      "Real-time debate logic",
      "Synthesis algorithms"
    ],
    role: [
      "Full-stack development",
      "AI integration",
      "Debate engine design"
    ],
    tools: ["Web Development", "AI/LLM Integration", "Real-time Systems"],
    isFeatured: false,
    github: "https://github.com/puoch1of1/back-and-forth",
  },
  {
    id: 4,
    title: "Ngimuria Travel Platform - Building Trust Through Digital Presence",
    status: "In Progress",
    isCollaborative: false,
    overview: "Developing a performance-focused company site that helps a regional travel agency present services clearly, build trust, and convert inquiries into bookings.",
    problem: "Local tourism operators often lose potential clients due to low-credibility web presence and unclear service communication.",
    whyMatters: "A credible digital presence directly affects customer trust, inquiry quality, and business growth.",
    outcomes: [
      "Improved service visibility across priority travel routes",
      "Mobile-first experience for regional user behavior",
      "Clear inquiry pathways for prospective clients",
    ],
    keyDecisions: [
      "Prioritized mobile UX and load performance for low-bandwidth users",
      "Designed content architecture around customer journey stages",
      "Used accessible, conversion-oriented page structure over visual clutter",
    ],
    caseStudySlug: null,
    liveDemo: null,
    technicalFocus: [
      "Responsive web design",
      "Performance",
      "Accessibility",
      "Client-oriented development"
    ],
    role: [
      "Full-stack development",
      "UI/UX implementation",
      "Client requirements gathering"
    ],
    tools: ["Web Development", "Responsive Design", "Performance Optimization"],
    isFeatured: false,
    github: null,
  },
  {
    id: 5,
    title: "Dynasty Gym System - Replacing Manual Operations",
    status: "Private - In Progress",
    isPrivate: true,
    isCollaborative: false,
    overview: "Designing a private operations platform to digitize membership, subscriptions, and attendance management for a growing gym business.",
    problem: "Manual gym workflows create billing inaccuracies, inconsistent attendance records, and poor operational visibility.",
    whyMatters: "Operational digitization improves service quality, member retention, and business decision-making.",
    outcomes: [
      "Centralized member and subscription records",
      "Improved billing and attendance tracking consistency",
      "Foundation for reporting and retention analytics",
    ],
    keyDecisions: [
      "Modeled core entities first to prevent workflow fragmentation",
      "Designed role-aware access patterns for staff operations",
      "Scoped MVP around billing and attendance before advanced analytics",
    ],
    caseStudySlug: "dynasty-gym-operations-platform",
    liveDemo: null,
    technicalFocus: [
      "System architecture",
      "Member & subscription management",
      "Attendance tracking",
      "Database design"
    ],
    role: [
      "Architecture design",
      "Core functionality",
      "Database implementation"
    ],
    tools: ["Web Development", "Database Design", "System Architecture"],
    isFeatured: false,
    github: null,
  },
];

export const affiliations = [
  {
    name: "Statistics Without Borders",
    role: "Data Quality Analyst (DQA)",
    url: "https://www.statisticswithoutborders.org/profiles/lomaspuoch502@gmail.com/",
    icon: "chart-bar",
  },
  {
    name: "DataCamp",
    role: "Data Portfolio",
    url: "https://www.datacamp.com/portfolio/dinkaman123",
    icon: "database",
  },
  {
    name: "GitHub",
    role: "Code Repository",
    url: "https://github.com/puoch1of1",
    icon: "github",
  },
  {
    name: "Kaggle",
    role: "Data Science Projects",
    url: "https://www.kaggle.com/puochmabormakuei",
    icon: "code",
  },
  {
    name: "LinkedIn",
    role: "Professional Network",
    url: "https://www.linkedin.com/in/puoch-mabor-makuei-490252320/",
    icon: "linkedin",
  },
];

export const socialLinks = {
  github: "https://github.com/puoch1of1",
  linkedin: "https://www.linkedin.com/in/puoch-mabor-makuei-490252320/",
  kaggle: "https://www.kaggle.com/puochmabormakuei",
  email: "mailto:lomaspuoch502@gmail.com",
};

// Formspree form endpoint
export const formspreeEndpoint = "https://formspree.io/f/xojvqawv";

