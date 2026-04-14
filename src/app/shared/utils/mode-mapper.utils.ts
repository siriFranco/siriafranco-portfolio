import { AppMode, PortfolioType, ResumeRole } from '../constants/app.constants';

export function mapModeToPortfolio(mode: AppMode): PortfolioType | 'all' {
  switch (mode) {
    case 'dev':
      return 'software';
    case 'arch':
      return 'architecture';
    default:
      return 'all';
  }
}

export function mapModeToResume(mode: AppMode): ResumeRole | 'all' {
  switch (mode) {
    case 'dev':
      return 'software';
    case 'arch':
      return 'architect';
    default:
      return 'all';
  }
}