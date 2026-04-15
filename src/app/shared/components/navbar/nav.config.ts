import {
  PORTFOLIO_TYPES,
  RESUME_ROLES
} from '../../constants/app.constants';

type NavChild = readonly string[];

export const NAV_CONFIG: {
  key: string;
  label: string;
  children: NavChild;
}[] = [
  {
    key: 'portfolio',
    label: 'Portfolio',
    children: PORTFOLIO_TYPES
  },
  {
    key: 'resume',
    label: 'Resume',
    children: RESUME_ROLES
  }
];