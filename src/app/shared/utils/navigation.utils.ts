import { AppMode } from '../constants/app.constants';

export function getPortfolioLink(mode: AppMode): string {
  return `/${mode}/portfolio`;
}

export function getResumeLink(mode: AppMode): string {
  return `/${mode}/resume`;
}