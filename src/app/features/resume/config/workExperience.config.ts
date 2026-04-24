import { AppMode } from 'src/app/shared/constants/app.constants';

export type RoleMode = 'home' | 'dev' | 'arch' | 'est' | 'pm';
export type BaseMode = 'home' | 'dev' | 'arch';

export type ResumeJob = {
  role: string;
  company: string;
  period: string;

  visibleIn?: string[];

  descriptions: {
    default: string[];

    roles?: {
      roles: DescriptionKey[];
      content: string[];
      priority?: number;
    }[];

  } & Partial<Record<DescriptionKey, string[]>>;
};

export type DescriptionKey = 'home' | 'dev' | 'arch' | 'est' | 'pm';


// =====================
// 🔥 JOBS (UNA SOLA FUENTE)
// =====================

export const RESUME_JOBS: ResumeJob[] = [
  {
    role: 'Freelance Architect',
    company: 'Self-employed',
    period: 'Feb 2023 – Present',
    visibleIn: [ 'arch', 'arch-pm', 'arch-est'],
    descriptions: {
      default: ['Freelance architectural work.'],
      est: [
        'Defined project scope, requirements, and budget with clients.',
        'Performed material takeoffs and supported cost estimation for residential projects.',
        'Prepared technical drawings for construction planning.',
        'Coordinated with contractors and monitored progress to ensure budget, timeline, and scope compliance.'
        ],
      pm: [
        'Defined project scope, requirements, and budgets in direct collaboration with clients.',
        'Performed material takeoffs and supported cost estimation for residential projects.',
        'Coordinated teams and monitored progress to ensure compliance with budget, timeline, and scope.',
        'Ensured clear communication between stakeholders during project execution and delivery.'
      ],
      dev: [
        'Test dev'
      ]
    }
  },
  {
    role: 'Software Developer',
    company: 'Nantisystem',
    period: 'Feb 2024 – Present',
    visibleIn: ['home', 'arch-pm', 'arch-est',  'dev',],
    descriptions: {
      default: [
        'Web developer.'
      ],
      est: [
        'Partnered with the Product Owner to define requirements, prioritize features, and align development with project goals.',
        'Contributed to development tasks while tracking team progress, supporting project updates, and improving system usability by applying best practices in coordination with design and business areas.',
        'Provided technical support by identifying and resolving system issues to maintain stability and performance.'
      ],
      pm: [
        'Partnered with the Product Owner to define requirements, prioritize features, and align development with project goals.',
        'Tracked team progress and supported project updates, ensuring visibility and delivery alignment across stakeholders.',
        'Improved system usability by coordinating with design and business areas and applying structured development practices.',
        'Provided technical support by identifying and resolving system issues to maintain stability and performance.'
      ],      
      roles: [
        {
          roles: ['home', 'dev'],
          content: [
              'Investigated and resolved system issues by analyzing data flows between APIs, backend services, and frontend components.',
              'Worked with SQL queries to validate, filter, and analyze data, ensuring consistency and accuracy across the system.',
              'Collaborated with Product Owner and cross-functional teams to prioritize features and troubleshoot technical problems.',
              'Provided technical support by identifying root causes of errors and delivering timely solutions to improve system performance.',
              'Integrated APIs and developed frontend components using Angular, contributing to data-driven features such as dashboards and CRM functionalities.',
              'Documented issues and solutions to improve troubleshooting efficiency and team knowledge sharing.'
          ]
        }
      ]
    }
  },
  {
    role: 'Fullstack Developer',
    company: 'Generation',
    period: 'Mar 2023 – Jun 2023',
    visibleIn: ['home', 'dev'],
    descriptions: {
      default: [
        'Fullstack info.'
      ],
      roles: [
        {
          roles: ['home', 'pm', 'dev'],
          content: [
            'Built fullstack applications using Java (Spring Boot) and JavaScript.',
            'Developed frontend interfaces and backend logic with focus on data handling and validation.',
            'Collaborated in an Agile team, tracking progress and validating features with stakeholders.'
          ]
        }
      ]
    }
  },
  {
    role: 'Construction Coordinator',
    company: 'Desarrollos ProVida',
    period: 'Feb 2022 – Feb 2023',
    visibleIn: ['home', 'arch',  'arch-pm', 'arch-est', 'dev'],
    descriptions: {
      default: [
        'Construction coordinator.'
      ],
      arch: [
        'Managed and supervised multiple construction projects ensuring quality, timelines, and compliance from structural phase to final delivery.',
        'Analyzed project data, performed material quantification, and supported cost estimation and resource planning.',
        'Coordinated cross-functional teams and contractors, tracking progress and resolving operational issues efficiently.',
        'Acted as a client-facing point of contact during handovers and post-sale support, ensuring issue resolution and customer satisfaction.',
        'Maintained documentation, reports, and logs to monitor project performance.'
      ],
      est: [
        'Served as the main point of contact for clients, managing post-delivery support.',
        'Planned, supervised, and executed projects from start to finish, demonstrating a strong ability to control progress and mitigate risks.',
        'Maintained strategic communication with supervisors and contractors.'
      ],
      roles: [
        {
          roles: ['home', 'pm', 'dev'],
          content: [
            'Coordinated with contractors and monitored execution to ensure alignment with project plans.',
            'Supported cost estimation and maintained structured records of materials and expenses.',
            'Ensured accuracy in project documentation, reporting, and operational tracking.',
            'Managed progress tracking and resolved coordination issues across teams.'
          ]
        }
      ]
    }
  },
  {
    role: 'Quality Manager',
    company: 'Espacios IR',
    period: 'Jul 2021 – Jan 2022',
    visibleIn: ['home', 'arch', 'arch-est', 'arch-pm', 'dev'],
    descriptions: {
      default: [
        'Quality manager info'
    ],
      est: [
        'Directed and coordinated teams of up to 30 people on construction projects.',
        'Served as the main point of contact for clients, managing their expectations and ensuring their satisfaction throughout the project lifecycle and post-delivery support.',
        'Oversaw inventory control and managed material and tool procurement.',
        'Controlled suppliers and handled administrative processes for material requests with the company and external vendors.'
      ],
      roles: [
        {
          roles: ['home', 'arch', 'pm', 'dev'],
          content: [
            'Directed and coordinated teams of up to 30 people across construction projects.',
            'Served as main point of contact for clients during project lifecycle and post-delivery support.',
            'Managed inventory control and supervised material and tool procurement processes.',
            'Controlled suppliers and administrative workflows for material requests with internal and external vendors.'
          ]
        }
      ]
    }
  },
  {
    role: 'Construction Supervisor',
    company: 'Constructora Magno',
    period: 'Jan 2020 – Feb 2021',
    visibleIn: ['home', 'arch', 'arch-est', 'arch-pm', 'dev'],
    descriptions: {
      default: [
        'Construction supervisor info.'
      ],
      est: [
        'Managed crews for an 8,611 ft² high-end residence and a 1,507 ft² high-end expansion, ensuring quality and schedule.',
        'Coordinated construction activities and tracked progress with contractors and stakeholders.',
        'Handled material takeoffs, cost support, and piece-rate payments for budget control.'
      ],
      roles: [
        {
          roles: ['home', 'arch', 'pm', 'dev'],
          content: [
            'Managed construction crews for high-end residential projects ensuring quality and schedule compliance.',
            'Coordinated construction activities and tracked progress with contractors and stakeholders.',
            'Maintained detailed records of materials, labor, and execution status throughout the project lifecycle.',
            'Supported on-site decision making and resolved operational issues to maintain workflow continuity.'
          ]
        }
      ]
    }
  },
  {
    role: 'Draftsperson and Assistant',
    company: 'SQTech',
    period: 'Jan 2019 – Jan 2020',
    visibleIn: ['home', 'arch', 'arch-est'],
    descriptions: {
      default: ['Drafting and construction support.'],

      roles: [
        {
          roles: ['home', 'arch', 'est'],
          content: [
            'Collaborated in the development of executive plans for fabrication and installation of steel structures.',
            'Supported site surveys and field data collection for project validation.',
            'Performed material quantification to assist in cost estimation and planning.',
            'Prepared progress reports and maintained construction logs for tracking execution.'
          ]
        }
      ]
    }
  },
  {
    role: 'Warranty Supervisor',
    company: 'Constructora Vertex Desarrollos',
    period: 'Aug 2018 – Dec 2018',
    visibleIn: ['home', 'arch', 'arch-est'],
    descriptions: {
      default: ['Warranty and post-delivery support.'],

      roles: [
        {
          roles: ['home', 'arch', 'est'],
          content: [
            'Supervised crews responsible for final detailing prior to home delivery in mass housing projects.',
            'Coordinated inspections to ensure quality standards and project completion requirements.',
            'Managed post-sale support by identifying and resolving installation or finishing issues.',
            'Tracked and documented warranty-related tasks to ensure proper follow-up and resolution.'
          ]
        }
      ]
    }
  }
];