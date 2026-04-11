export const PORTFOLIO_TYPES = ['architecture', 'software'] as const;
export type PortfolioType = typeof PORTFOLIO_TYPES[number];

export const RESUME_ROLES = ['software', 'estimator', 'architect', 'project-manager'] as const;
export type ResumeRole = typeof RESUME_ROLES[number];