import { AppMode } from 'src/app/shared/constants/app.constants';

export type HomeGreeting = {
  intro?: string;
  title: string;
  subtitle: string;
  description?: string[];
};

const GLOBAL_INTRO =
  'Hi, welcome to my website — glad you’re here. This space is designed to give you a clear and honest view of my work, mindset, and professional journey.';

export const HOME_CONFIG: Partial<Record<AppMode, HomeGreeting>> = {
    home: {
    title: 'Welcome',
    subtitle: 'Explore my professional world',
    description: [
        'Hi, I’m a software developer and construction professional with experience across architecture, project management, and fullstack development.',
        'This space is designed to give you a clear overview of my work, skills, certifications, and professional journey.',
        'Explore my portfolio to see selected projects, and check my resume to review my experience, technical skills, and certifications in detail.'
    ]
    },

    dev: {
    title: 'Software Developer',
    subtitle: 'Building scalable digital products',
    description: [
        'I specialize in fullstack development, working across frontend interfaces, backend systems, and API integrations.',
        'My focus is on writing clean, maintainable code and building systems that are performant and scalable.',
        'Explore my projects to see real implementations of modern web applications and technical solutions.'
    ]
    },

    'dev-pm': {
    title: 'Technical Project Manager',
    subtitle: 'Bridging technology and execution',
    description: [
        'I combine my background in software development with project management to lead technical initiatives from planning to delivery.',
        'I work coordinating teams, managing timelines, and ensuring that technical decisions align with business goals.',
        'My focus is on communication, execution, and delivering scalable solutions while keeping projects on track.'
    ]
    },

    arch: {
    title: 'Architecture & Construction',
    subtitle: 'Designing and coordinating real-world projects',
    description: [
        'I work in architecture and construction, focused on planning, coordination, and execution of residential projects.',
        'My experience includes design interpretation, site supervision, and collaboration with contractors and clients.',
        'This section highlights my approach to structured planning and real-world project delivery.'
    ]
    },

    'arch-est': {
    title: 'Construction Estimator',
    subtitle: 'Precision in cost and planning',
    description: [
        'I am familiar with construction estimation processes, including material takeoffs, budgeting, and cost analysis for residential projects.',
        'I have worked alongside project teams supporting planning and financial structuring, gaining a strong understanding of how estimates impact execution.',
        'My focus is on developing accuracy in analysis, learning industry standards, and applying structured thinking to construction planning.'
    ]
    },

    'arch-pm': {
    title: 'Project Manager',
    subtitle: 'Execution, coordination and delivery',
    description: [
        'I manage construction projects by coordinating teams, timelines, and deliverables across multiple phases.',
        'My focus is on execution, communication, and ensuring projects stay aligned with scope and objectives.',
        'Here you can see my experience leading workflows, organizing teams, and delivering structured results.'
    ]
    },
};