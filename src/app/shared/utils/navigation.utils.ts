import { AppMode } from '../constants/app.constants';

export function getPortfolioLink(mode: AppMode): string {
  if (mode.startsWith('arch')) {
    return `/${mode}/portfolio/architecture`;
  }
  if (mode === 'dev') {
    return `/${mode}/portfolio/software`;
  }
  return `/${mode}/portfolio`;
}

export function getResumeLink(mode: AppMode): string {
  if (mode.startsWith('arch')) {
    return `/${mode}/resume/architect`;
  }
  if (mode === 'dev') {
    return `/${mode}/resume/software`;
  }
  return `/${mode}/resume`;
}