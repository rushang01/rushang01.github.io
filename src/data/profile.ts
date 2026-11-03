// Single source for the Experience page, the Resume page and the resume PDF.
// Every line needs a source.
export const positioning = {
  headline: 'Data and AI engineer.',
  intro:
    "I'm Rushang. I work at eClinicalWorks, where I built a text-to-SQL agent and semantic layer for anyone in the company to use. Before that I worked on forecasting and GenAI at ZF, and on Power BI and full-stack tools at Daimler Truck.",
  seeking:
    "I'm looking for data platform, data engineering and applied AI roles on the US West Coast or in New York.",
};

export const fieldNotes = [
  { value: '400M+', label: 'rows moved from SQL Server to MySQL' },
  { value: '400K', label: 'rows of context in the semantic layer' },
  { value: '50K+', label: 'files indexed for AI search at ZF' },
  { value: '13K+', label: 'SKUs forecast at ZF' },
];

export const experience = [
  {
    company: 'eClinicalWorks',
    roles: [
      {
        title: 'Business Intelligence Engineer',
        period: 'Aug 2025 – Present',
        highlights: [
          'Built a text-to-SQL agent and semantic layer for anyone in the company to use. An LLM generates Cube queries, validated by Pydantic.',
          'Stack: SQL Server with CDC and SQL Agent, dbt, Cube Core, FastAPI, React, ECharts and TanStack Table.',
          'Used Codex-based agents on Azure Pipelines to parse call transcripts, the report repository and its documentation into YAML and Markdown.',
          'Used that output with hybrid retrieval and a live database connection to build the semantic layer, with 400K rows of context.',
          'Migrated and partitioned 400M+ rows from SQL Server into MySQL.',
          'Built a prediction engine for return visits with a logistic GAM, using visit history, visit types, diagnoses and provider.',
          'Analyzed multi-year scheduling data to recommend appointment lengths, which reduced wait times by 10%.',
          'Set up an Azure pipeline for product usage data with bronze, silver and gold layers.',
        ],
      },
    ],
    summary: 'Text-to-SQL agent, semantic layer and a 400M+ row migration.',
  },
  {
    company: 'ZF North America',
    roles: [
      {
        title: 'Data Engineer Intern',
        period: 'May 2024 – Dec 2024',
        highlights: [
          'Compared 5+ time-series models for 13K+ SKUs, including Temporal Fusion Transformers, XGBoost and Prophet, and built the forecasting framework on Prophet.',
          'Reduced annual demand forecast error by 7% and automated 20+ hours of monthly manual work.',
          'Set up a Databricks workflow with Unity Catalog that detects Azure Data Lake file drops and ingests customer data in under 3 minutes.',
          'Co-developed a GenAI chatbot for vehicle parts questions on Azure Cognitive Search and GPT-4o, and prepared 50K+ unstructured files for it.',
          'Made Power BI dashboards of the forecasts that helped executives identify $100K+ in cost-saving opportunities.',
        ],
      },
    ],
    summary: 'Demand forecasting for 13K+ SKUs and a GenAI chatbot over 50K+ files.',
  },
  {
    company: 'Daimler Truck Innovation Center India',
    roles: [
      {
        title: 'Data Engineer',
        period: 'Aug 2022 – Aug 2023',
        highlights: [
          'Cleared a 7-month backlog of data discrepancies in a Power BI solution with DAX and SQL fixes, saving 40+ hours a month of manual validation.',
          'Built a Power BI tracker for department name changes across 12 international markets.',
          'Led a team of 4 moving 5,000+ project records from Excel to Dataverse for a model-driven app. Project update response rates went up 15%.',
          'Automated the migration of 2K+ work items to a new DevOps platform with Selenium, which cut the team\'s time by 50%.',
          'Resolved 50+ issues across Angular, .NET and SQL. Average bugs per sprint dropped 25%.',
          'Helped set up a Power Platform team, including candidate interviews and business discovery.',
        ],
      },
      {
        title: 'Software Engineer Intern',
        period: 'Mar 2022 – Aug 2022',
        highlights: [
          'Built a full-stack scheduling tool for Agile sprint planning with Angular, a .NET API and SQL Server.',
        ],
      },
    ],
    summary: 'Power BI work across 12 markets and a 5,000+ record migration to Dataverse.',
  },
];

export const education = [
  {
    school: 'University of Florida',
    degree: 'MS, Computer and Information Science and Engineering',
    period: 'Aug 2023 – May 2025',
    grade: 'GPA 3.96',
  },
  {
    school: 'Dayananda Sagar College of Engineering',
    degree: 'BE, Computer Science and Engineering',
    period: 'Aug 2018 – Jul 2022',
    grade: 'CGPA 8.66/10',
  },
];

export const skills = [
  { group: 'Data engineering', items: ['SQL', 'T-SQL', 'dbt', 'Databricks', 'Unity Catalog', 'SQL Server CDC', 'Medallion Architecture', 'Power BI', 'DAX'] },
  { group: 'AI and ML', items: ['Semantic layers', 'Text-to-SQL agents', 'Hybrid retrieval', 'Cube Core', 'Azure Cognitive Search', 'Prophet', 'XGBoost', 'Logistic GAMs', 'spaCy'] },
  { group: 'Languages and backend', items: ['Python', 'FastAPI', 'Pydantic', 'TypeScript', 'C#', '.NET', 'SQL Server', 'MySQL'] },
  { group: 'Frontend and tools', items: ['React', 'Angular', 'ECharts', 'TanStack Table', 'Azure', 'Azure Pipelines', 'Power Platform', 'Selenium', 'Git'] },
];
