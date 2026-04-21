
export type CertificationType = 'tech' | 'management' | 'architecture';

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
/*   {
    title: 'Angular - The Complete Guide',
    issuer: 'Udemy',
    year: '2024',
    duration: '40h',
    type: 'tech',
    description: 'Advanced Angular concepts and RxJS.'
  }, */
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
  }
];