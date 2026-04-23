export const BASE_MODES = ['home', 'dev', 'arch'] as const;
export const MODE_EXTENSIONS = ['est', 'pm'] as const;

export type BaseMode = typeof BASE_MODES[number];
export type ModeExtension = typeof MODE_EXTENSIONS[number];

export type AppMode =
  | BaseMode
  | `${BaseMode}-${ModeExtension}`;

// ✅ Portfolio
export const PORTFOLIO_TYPES = ['architecture', 'software', 'ux-projects'] as const;
export type PortfolioType = typeof PORTFOLIO_TYPES[number];

// ✅ Resume
export const RESUME_ROLES = ['software', 'estimator', 'architect', 'project-manager'] as const;
export type ResumeRole = typeof RESUME_ROLES[number];

// ✅ Validación
export function isValidMode(mode: string | null): mode is AppMode {
  if (!mode) return false;

  if (BASE_MODES.includes(mode as BaseMode)) return true;

  const [base, ext] = mode.split('-');

  return (
    BASE_MODES.includes(base as BaseMode) &&
    MODE_EXTENSIONS.includes(ext as ModeExtension)
  );
}

// ✅ Parser
export function getModeFromPath(path: string | null | undefined): AppMode {
  if (isValidMode(path ?? null)) {
    return path as AppMode;
  }
  return 'home';
}

export function isResumeRole(type: string | null): type is ResumeRole {
  return RESUME_ROLES.includes(type as ResumeRole);
}

export const MODE_TO_PORTFOLIO: Record<BaseMode, PortfolioType[]> = {
  home: ['architecture', 'software', 'ux-projects'],
  dev: ['software', 'ux-projects'],
  arch: ['architecture'],
};

export function getAllowedPortfolioTypes(mode: AppMode): PortfolioType[] {
  return MODE_TO_PORTFOLIO[mode.split('-')[0] as BaseMode] ?? [];
}

export function resolveMode(mode: string | null | undefined): AppMode {
  const normalizedMode = mode ?? null;

  return isValidMode(normalizedMode) ? normalizedMode : 'home';
}

export function getBaseMode(mode: AppMode): BaseMode {
  return mode.split('-')[0] as BaseMode;
}

export function getModeExtension(mode: AppMode): ModeExtension | null {
  return mode.includes('-')
    ? (mode.split('-')[1] as ModeExtension)
    : null;
}

export type ResumeContentRole = BaseMode | 'pm';

export function resolveResumeRole(extension: ModeExtension | null, base: BaseMode): ResumeContentRole {

  if (!extension) return base;

  // regla especial: est → pm
  if (extension === 'est') return 'pm';

  return extension;
}