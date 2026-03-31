import { projects } from "./content";

export const SKILL_DEPTH = {
  EXPERT: "expert",
  INTERMEDIATE: "intermediate",
  LEARNING: "learning",
} as const;

export type SkillDepth = (typeof SKILL_DEPTH)[keyof typeof SKILL_DEPTH];

type SkillCategory = {
  description: string;
  depth: Record<string, SkillDepth>;
  synergies: string[];
  relatedProjects: string[];
};

export const skillsMap: Record<string, SkillCategory> = {
  "Data Engineering & ETL": {
    description: "Building and optimizing data pipelines for reliability and scale",
    depth: {
      "ETL Pipeline Design": SKILL_DEPTH.EXPERT,
      "Data Modeling": SKILL_DEPTH.EXPERT,
      "Apache Spark": SKILL_DEPTH.INTERMEDIATE,
      "Apache Airflow": SKILL_DEPTH.INTERMEDIATE,
      "Apache Kafka": SKILL_DEPTH.LEARNING,
      "Data Quality Assurance": SKILL_DEPTH.EXPERT,
    },
    synergies: ["Data Science & Analytics", "Infrastructure & Security"],
    relatedProjects: ["medicine-supply-pipeline", "synod-learning-assistant"],
  },
  "Data Science & Analytics": {
    description: "Turning complex data into explainable, actionable insights",
    depth: {
      Python: SKILL_DEPTH.EXPERT,
      SQL: SKILL_DEPTH.EXPERT,
      Pandas: SKILL_DEPTH.EXPERT,
      NumPy: SKILL_DEPTH.INTERMEDIATE,
      "Data Analysis": SKILL_DEPTH.EXPERT,
      "Machine Learning Fundamentals": SKILL_DEPTH.INTERMEDIATE,
    },
    synergies: ["Data Engineering & ETL", "Tools & Technologies"],
    relatedProjects: ["medicine-supply-pipeline", "back-and-forth-ai-debate", "synod-learning-assistant"],
  },
  "Infrastructure & Security": {
    description: "Designing resilient systems with observability and security in mind",
    depth: {
      "Network Security": SKILL_DEPTH.INTERMEDIATE,
      "Infrastructure Monitoring": SKILL_DEPTH.EXPERT,
      "System Architecture": SKILL_DEPTH.EXPERT,
      "Database Design": SKILL_DEPTH.EXPERT,
      "Security Assessment": SKILL_DEPTH.INTERMEDIATE,
    },
    synergies: ["Data Engineering & ETL", "Tools & Technologies"],
    relatedProjects: ["dynasty-gym-operations-platform", "medicine-supply-pipeline"],
  },
  "Tools & Technologies": {
    description: "Using practical tooling to ship maintainable production systems",
    depth: {
      "Data Pipeline Orchestration": SKILL_DEPTH.INTERMEDIATE,
      "Batch/Stream Processing": SKILL_DEPTH.INTERMEDIATE,
      "Technical Documentation": SKILL_DEPTH.EXPERT,
      "Remote Collaboration": SKILL_DEPTH.EXPERT,
      "AI/LLM Integration": SKILL_DEPTH.INTERMEDIATE,
      "Web Development": SKILL_DEPTH.INTERMEDIATE,
    },
    synergies: ["Data Science & Analytics", "Infrastructure & Security"],
    relatedProjects: [
      "back-and-forth-ai-debate",
      "ngimuria-travel-platform",
      "dynasty-gym-operations-platform",
    ],
  },
};

const toSlug = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getSkillsByCategory = (category: string): string[] => {
  const entry = skillsMap[category];
  return entry ? Object.keys(entry.depth) : [];
};

export const getProjectsBySkill = (skill: string): string[] => {
  const normalized = skill.toLowerCase();

  const matchedFromMap = Object.values(skillsMap)
    .filter((category) => Object.keys(category.depth).some((name) => name.toLowerCase() === normalized))
    .flatMap((category) => category.relatedProjects);

  const matchedFromProjects = projects
    .filter((project) => {
      const tools = project.tools || [];
      const focus = project.technicalFocus || [];
      return (
        tools.some((item: string) => item.toLowerCase().includes(normalized)) ||
        focus.some((item: string) => item.toLowerCase().includes(normalized))
      );
    })
    .map((project) => project.caseStudySlug || toSlug(project.title));

  return Array.from(new Set([...matchedFromMap, ...matchedFromProjects]));
};

export const getSkillsByDepth = (depth: SkillDepth): string[] => {
  return Object.values(skillsMap)
    .flatMap((category) =>
      Object.entries(category.depth)
        .filter(([, level]) => level === depth)
        .map(([skill]) => skill),
    )
    .filter((skill, index, arr) => arr.indexOf(skill) === index);
};

export const getSkillSynergies = (skill: string): string[] => {
  const categoryName = Object.keys(skillsMap).find((category) =>
    Object.keys(skillsMap[category].depth).some((name) => name.toLowerCase() === skill.toLowerCase()),
  );

  if (!categoryName) {
    return [];
  }

  return skillsMap[categoryName].synergies;
};
