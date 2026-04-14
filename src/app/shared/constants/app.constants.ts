export const APP_MODES = ['home', 'dev', 'arch'] as const;
export type AppMode = typeof APP_MODES[number];

// ✅ Portfolio
export const PORTFOLIO_TYPES = ['architecture', 'software'] as const;
export type PortfolioType = typeof PORTFOLIO_TYPES[number];

// ✅ Resume
export const RESUME_ROLES = ['software', 'estimator', 'architect', 'project-manager'] as const;
export type ResumeRole = typeof RESUME_ROLES[number];

// ✅ Validación
export function isValidMode(mode: string | null): mode is AppMode {
  return APP_MODES.includes(mode as AppMode);
}

// ✅ Parser
export function getModeFromPath(path: string | null): AppMode {
  if (isValidMode(path)) {
    return path;
  }
  return 'home';
}

export function isResumeRole(type: string | null): type is ResumeRole {
  return RESUME_ROLES.includes(type as ResumeRole);
}