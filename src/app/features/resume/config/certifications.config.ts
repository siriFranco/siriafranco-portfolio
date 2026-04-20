
export type CertificationType = 'tech' | 'management';

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  duration?: string;
  description?: string;
  link?: string;
  type: CertificationType; // 👈 clave para agrupar
}

export const CERTIFICATIONS: Certification[] = [
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