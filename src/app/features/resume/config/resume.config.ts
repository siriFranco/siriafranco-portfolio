import { AppMode } from 'src/app/shared/constants/app.constants';

export type ResumeMeta = {
  title: string;
  summary: string;
};

export const RESUME_META: Partial<Record<AppMode, ResumeMeta>> = {
  home: {
    title: 'Fullstack Developer',
    summary: 'Software Developer experienced in building and maintaining web applications across frontend and backend. Skilled in working with APIs, data, and system integrations to ensure reliable functionality. Collaborative and proactive in troubleshooting issues and improving product performance.'
  },

  dev: {
    title: 'Fullstack Developer',
    summary: `Software Developer experienced in building and maintaining web applications across frontend and backend. Skilled in working with APIs, data, and system integrations to ensure reliable functionality. Collaborative and proactive in troubleshooting issues and improving product performance.`
  },

  'dev-pm': {
    title: 'Technical Project Manager',
    summary: `Detail-oriented professional with experience in project coordination and process organization across construction and tech environments. Skilled in managing information, maintaining structured records, and supporting team performance through reporting. Proactive and adaptable, with strong research abilities and a focus on data accuracy and operations.`
  },

   'arch': {
    title: 'Architect',
    summary: `With experience in design, construction coordination, and project delivery across residential developments. Skilled in supervising on-site execution, managing teams, and ensuring quality, timelines, and compliance. Experienced in material quantification, cost estimation, and resource planning. Detail-oriented and proactive, with strong problem-solving abilities and a focus on efficient operations, client communication, and organized project documentation.`
  },

  'arch-pm': {
    title: 'Project Manager | Architect',
    summary: `Detail-oriented professional with experience in project coordination and process organization across construction and tech environments. Skilled in managing information, maintaining structured records, and supporting team performance through reporting. Proactive and adaptable, with strong research abilities and a focus on data accuracy and operations.`
  },

  'arch-est': {
    title: 'Architect | Estimator',
    summary: `Construction Project Coordinator with experience in residential developments, cost estimation, and contractor coordination. Skilled in managing multiple tasks simultaneously. Analytical and detail-oriented, with a strong foundation in project management and client collaboration. Adaptable, proactive, and resilient, with the ability to adjust quickly and consistently deliver results.`
  }
};
