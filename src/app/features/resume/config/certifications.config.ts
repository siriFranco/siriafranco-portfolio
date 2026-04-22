
export type CertificationType =
  'general'
  | 'management'
  | 'tech'
  | 'ai'
  | 'backend'
  | 'data'
  | 'frontend'
  | 'design'
  | 'platforms'
  | 'architecture'
  ;

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
  duration?: string;
  description?: string;
  skills?: string[];
  link?: string;
  type: CertificationType; // 👈 clave para agrupar
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Bachelor’s Degree in Architecture',
    issuer: 'Universidad de Sonora',
    type: 'architecture',
    description: 'Comprehensive training in architectural design, construction, and project planning.',
    skills: [
      'Architectural Design',
      'AutoCAD',
      'Project Planning',
      'Construction'
    ]
  },
  {
    title: 'English Certificate C2',
    issuer: 'EF SET',
    year: '2024',
    type: 'general',
    description: 'Certified English proficiency level based on EF SET standardized test.',
    skills: [
      'English',
      'Communication'
    ],
    link: 'https://efset.org/cert/58w2qu'
  },
  // management
    {
    title: 'Master Emotional Intelligence in the Workplace',
    issuer: 'Stuart Wesselby',
    year: '2026',
    duration: '4h',
    type: 'management',
    description: 'Emotional intelligence applied to professional environments, including self-awareness, communication, and workplace relationships.',
    skills: [
      'Emotional Intelligence',
      'Communication',
      'Self-awareness',
      'Workplace Relationships'
    ],
    link: 'https://www.udemy.com/certificate/UC-209b5270-05e0-4d9d-8935-b1ef4a2a212e/',
  },
  {
    title: 'Digital Leadership & Team Management',
    issuer: 'Stuart Wesselby',
    year: '2025',
    duration: '3.5h',
    type: 'management',
    description: 'Modern leadership practices focused on team management, digital collaboration, and effective decision-making.',
    skills: [
      'Leadership',
      'Team Management',
      'Decision Making',
      'Digital Collaboration'
    ],
    link: 'https://www.udemy.com/certificate/UC-74d15f7a-2bfd-4985-b6b2-43d1e918af6b/',
  },
  {
    title: 'Agile & Scrum: The Absolute Beginner’s Guide',
    issuer: 'HK School of Management',
    year: '2026',
    duration: '2h',
    type: 'management',
    description: 'Intro to Agile & Scrum, roles, events, and delivering value with iterative workflows.',
    skills: [
      'Agile',
      'Scrum',
      'Sprint Planning',
      'Burndown',
      'Team Collaboration'
    ]
  },
  {
    title: 'Introduction to ISO 21502: Guidance on Project Management',
    issuer: 'ITCERT',
    year: '2026',
    duration: '1.5h',
    type: 'management',
    description: 'Project management basics: lifecycle, roles, risks, and control fundamentals.',
    skills: [
      'Project Management',
      'Lifecycle',
      'Risk Management',
      'Stakeholders',
      'Governance'
    ]
  },
  // TECH
  
  {
    title: 'Java Full Stack Developer Program',
    issuer: 'Generation México',
    year: '2023',
    duration: '480h',
    type: 'tech',
    description: 'Full stack training program focused on Java development, backend and frontend integration, and professional skills for software development.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Java',
      'Spring Boot',
      'Soft Skills'
    ],
    link: 'https://drive.google.com/file/d/1iHhCBdJ1twx-ba9wA9vq-kd0F8c2RTRp/view',
  },
  // DATA
  {
    title: 'Data Analytics Professional Certificate',
    issuer: 'Google',
    year: '2025',
    duration: '240h',
    type: 'data',
    description: 'Data analysis with spreadsheets, SQL, Tableau, and R to drive data-based decisions.',
    skills: [
      'Data Analysis',
      'SQL',
      'Tableau',
      'R',
      'Data Visualization'
    ],
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/R9TU53GZ21J1'
  },
{
  title: 'Linear Algebra – Advanced Data Science Bootcamp',
  issuer: 'Código Facilito',
  year: '2024',
  duration: '2h',
  type: 'data',
  description: 'Linear algebra foundations applied to data science and analytics.',
  skills: [
    'Linear Algebra',
    'Data Science',
    'Mathematics'
  ],
  link: 'https://drive.google.com/file/d/1_5eC-RMM_dGYdg4x1Nct1KNnkuY9pcqi/view'
},
  // 🔥 NUEVOS (AI)
{
  title: 'Introduction to Artificial Intelligence',
  issuer: 'Iberoamerican Tech Foundation',
  year: '2026',
  type: 'ai',
  description: 'Foundations of AI and prompt usage for practical applications.',
  skills: [
    'Artificial Intelligence',
    'Prompt Engineering'
  ],
  link: 'https://campus.iberotech.org/pluginfile.php/1/tool_certificate/issues/1775896141/8437625289SF.pdf'
},
{
  title: 'Introduction to Artificial Intelligence Engr',
  issuer: 'Iberoamerican Tech Foundation',
  year: '2026',
  type: 'ai',
  description: 'Core AI engineering concepts and practical prompt-based workflows.',
  skills: [
    'Artificial Intelligence',
    'Prompt Engineering'
  ],
  link: 'https://campus.iberotech.org/pluginfile.php/1/tool_certificate/issues/1772051030/7711638433SF.pdf'
},
{
  title: 'AI for Software Development',
  issuer: 'Generation México',
  year: '2026',
  type: 'ai',
  description: 'Using AI tools to generate, test, and improve code in real workflows.',
  skills: [
    'AI-Assisted Development',
    'Prompt Engineering',
    'Software Development'
  ],
  link: 'https://www.credly.com/badges/f95a6e89-9508-4817-bd50-ff68a95be859'
},

//backend backend
{
  title: 'Professional Docker Course',
  issuer: 'Código Facilito',
  year: '2024',
  duration: '4h',
  type: 'backend',
  description: 'Containerization with Docker for development and deployment workflows.',
  skills: [
    'Docker',
    'Containers',
    'DevOps'
  ],
  link: 'https://drive.google.com/file/d/1thBzgMt5mKZUDcUYkf4Mh4Lbrzkhxuy4/view'
},
{
  title: 'Spring Framework & Spring Boot Course',
  issuer: 'Código Facilito',
  year: '2023',
  duration: '4h',
  type: 'backend',
  description: 'Backend development with Spring and Spring Boot for Java applications.',
  skills: [
    'Java',
    'Spring Boot',
    'Backend Development'
  ],
  link: 'https://drive.google.com/file/d/1JKuXy7-wsU6tUI5IVTqW1byaTykmNl45/view'
},
{
  title: 'Database Professional Course',
  issuer: 'Código Facilito',
  year: '2023',
  duration: '5.5h',
  type: 'backend',
  description: 'Database fundamentals, queries, and data management concepts.',
  skills: [
    'Databases',
    'SQL',
    'Data Management'
  ],
  link: 'https://drive.google.com/file/d/1TjTh3t9LP6dIzC1d9KTsc9_EEiqJRsDp/view'
},
{
  title: 'JavaScript Code Challenges',
  issuer: 'LinkedIn Learning',
  year: '2023',
  duration: '1h',
  type: 'backend',
  description: 'Practice solving JavaScript problems to improve logic and coding skills.',
  skills: [
    'JavaScript',
    'Problem Solving'
  ],
  link: 'https://www.linkedin.com/learning/certificates/a2e7d7be7702fb15e9ebb8f7ff5fece5f97446e4f5577f0b37ab7b9b92e7664c'
},
{
  title: 'Node.js Essential Training',
  issuer: 'LinkedIn Learning',
  year: '2023',
  duration: '1.3h',
  type: 'backend',
  description: 'Core Node.js concepts for building backend services and APIs.',
  skills: [
    'Node.js',
    'Backend Development',
    'APIs'
  ],
  link: 'https://www.linkedin.com/learning/certificates/608970a011686c91d6a3323118398968dfbde35790d522ca965909bf56f46304'
},
{
  title: 'Java Professional Course',
  issuer: 'Código Facilito',
  year: '2023',
  duration: '6h',
  type: 'backend',
  description: 'Core Java programming concepts and object-oriented development.',
  skills: [
    'Java',
    'OOP',
    'Software Development'
  ],
  link: 'https://drive.google.com/file/d/1I2RgpOcfZuw91SpQNx7r-P-gz5Ft2zam/view'
},

//frontend frontend
{
  title: 'Frontend Development Program (React)',
  issuer: 'Oracle One Next Education',
  year: '2024',
  duration: '313h',
  type: 'frontend',
  description: 'Focused on JavaScript, React, APIs, and Git. Built real-world projects applying responsive design, problem-solving, and user-centered development practices.',
  skills: [
    'JavaScript',
    'React',
    'SQL',
    'Git',
    'Responsive Design'
  ],
  link: 'https://app.aluracursos.com/program/certificate/1c558afe-376d-4385-bbe5-70aa7b00758d?lang'
},
{
  title: 'UX Design Professional Certificate',
  issuer: 'Google',
  year: '2024',
  duration: '200h',
  type: 'design',
  description: 'UX process end-to-end: research, wireframes, prototypes, and user testing.',
  skills: [
    'UX Design',
    'Wireframing',
    'Prototyping',
    'User Research',
    'Usability Testing'
  ],
  link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/61Y044KG9Y5H'
},
// 🔥 NUEVOS

{
  title: 'Software Architecture Fundamentals',
  issuer: 'Código Facilito',
  year: '2025',
  duration: '2h',
  type: 'tech',
  description: 'Core software architecture concepts and system design basics.',
  skills: [
    'Software Architecture',
    'System Design'
  ],
  link: 'https://drive.google.com/file/d/1iJ38tsPMH1nkzNUVFMqfqCh8DC6QjjDR/view'
},
{
  title: 'Prompt Engineering Course',
  issuer: 'Código Facilito',
  year: '2025',
  duration: '5h',
  type: 'ai',
  description: 'Prompt design techniques for effective AI interaction and outputs.',
  skills: [
    'Prompt Engineering',
    'Artificial Intelligence'
  ],
  link: 'https://drive.google.com/file/d/1X0dBvLI3IY1s8URLN7srKrj7PDULiG9O/view'
},
{
  title: 'React Professional Course',
  issuer: 'Código Facilito',
  year: '2023',
  duration: '9.5h',
  type: 'frontend',
  description: 'Building modern web apps using React components, state, and hooks.',
  skills: [
    'React',
    'JavaScript',
    'Frontend Development'
  ],
  link: 'https://drive.google.com/file/d/1h9UEjbxvUO9E1xztrACVqGhNnnFM17GV/view'
},
/*   {
    title: 'Angular - The Complete Guide',
    issuer: 'Udemy',
    year: '2024',
    duration: '40h',
    type: 'tech',
    description: 'Advanced Angular concepts and RxJS.'
  }, */
  //platforms platforms
  {
    title: 'Mendix Rapid Developer Certification',
    issuer: 'Mendix',
    year: '2024',
    duration: '20h',
    type: 'platforms',
    description: 'Low-code development skills using Mendix platform for rapid applications.',
    skills: [
      'Mendix',
      'Low-Code',
      'Application Development'
    ],
    link: 'https://drive.google.com/file/d/10_lr-my4T5pX9hmHwEVL2R_JPPEMRP2R/view'
  },
];