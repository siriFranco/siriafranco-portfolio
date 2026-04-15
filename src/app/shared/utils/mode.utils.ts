import { AppMode, isValidMode } from '../constants/app.constants';

export function resolveMode(mode: string | null | undefined): AppMode {
  return isValidMode(mode ?? null) ? (mode as AppMode) : 'home';
}