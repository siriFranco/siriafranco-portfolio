
export type CertificationType = 'tech' | 'management';

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  duration?: string;
  description?: string;
  skills?: string[];
  link?: string;
  type: CertificationType; // 👈 clave para agrupar
}

export const CERTIFICATIONS: Certification[] = [
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
  {
    title: 'Angular - The Complete Guide',
    issuer: 'Udemy',
    year: '2024',
    duration: '40h',
    type: 'tech',
    description: 'Advanced Angular concepts and RxJS.'
  },
  {
    title: 'Scrum Fundamentals',
    issuer: 'SCRUMstudy',
    year: '2023',
    duration: '12h',
    type: 'management'
  }
];