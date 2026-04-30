import { AppMode } from 'src/app/shared/constants/app.constants';

export type SkillCategoryKey =
  | 'languages'
  | 'architecture'
  | 'methodologies'
  | 'frontend'
  | 'design'
  | 'backendData'
  | 'cloudApis'
  | 'data'
  | 'developerTools'
  | 'collaborationProductivity'
  | 'construction'
  | 'other'
  ;

export type SkillItem = {
  name: string;
  icon?: string;
  visibleIn?: AppMode[];
};

export type SkillCategory = {
  title: string;
  visibleIn?: AppMode[];

  skills: {
    name: string;
    icon?: string;
    visibleIn?: AppMode[];
  }[];
};

export const RESUME_SKILLS: SkillCategory[] = [

  // =====================
  // ARCH
  // =====================
    {
    title: 'Architecture',
    visibleIn: ['home', 'arch'],
    skills: [
        { name: 'AutoCAD', icon: 'fa-solid fa-drafting-compass' },
        { name: 'Revit', icon: 'fa-solid fa-building' }, 
        { name: 'SketchUp', icon: 'fa-solid fa-cube' }
    ]
    },
    // =====================
  // 🌍 LANGUAGES
  // =====================
  {
    title: 'Languages',
    visibleIn: ['home', 'dev', 'arch'],
    skills: [
      { name: 'Spanish (Native)' },
      { name: 'English (C1)' },
      { name: 'French (B2)' }
    ]
  },
    // =====================
  // 📊 METHODOLOGIES
  // =====================
  {
    title: 'Methodologies',
    visibleIn: ['home', 'dev', 'arch'],
    skills: [
      { name: 'Agile (Scrum)' },
      { name: 'SAFe' },
      { name: 'DevOps', visibleIn: ['dev'] } // ejemplo granular
    ]
  },
  // =====================
  // 💻 FRONTEND
  // =====================
  {
    title: 'Frontend',
    visibleIn: ['home', 'dev'],
    skills: [
      { name: 'Angular', icon: 'devicon-angularjs-plain' },
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'CSS', icon: 'devicon-css3-plain' }
    ]
  },
    // =====================
    // 🎨 DESIGN
    // =====================
    {
    title: 'Design',
    visibleIn: ['home', 'arch', 'dev'],
    skills: [
        { name: 'Photoshop', icon: 'fa-solid fa-image' },
        { name: 'Illustrator', icon: 'fa-solid fa-pen-nib' },
        { name: 'Lightroom', icon: 'fa-solid fa-camera' },
        { name: 'Figma', icon: 'fa-brands fa-figma' },
        { name: 'Vegas Pro', icon: 'fa-solid fa-film' } 
    ]
    },
  // =====================
  // 🗄️ BACKEND
  // =====================
  {
    title: 'Backend & Data',
    visibleIn: ['home', 'dev'],
    skills: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain' },
        { name: 'SQL', icon: 'devicon-azuresqldatabase-plain' },
        { name: 'MySQL', icon: 'devicon-mysql-plain' },
        { name: 'TypeORM', icon: 'devicon-typescript-plain' }
    ]
  },

  // =====================
  // ☁️ CLOUD
  // =====================
  {
    title: 'Cloud & APIs',
    visibleIn: ['home', 'dev'],
    skills: [
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' },
      { name: 'REST APIs', icon: 'devicon-fastapi-plain' },
      { name: 'Salesforce', icon: 'devicon-salesforce-plain' },
    ]
  },
// =====================
  // 📊 DATA
  // =====================
    {
    title: 'Data',
    visibleIn: ['home', 'arch', 'dev'],
    skills: [
        { name: 'Excel', icon: 'fa-solid fa-file-excel' },
        { name: 'R Studio', icon: 'fa-solid fa-chart-line' }
    ]
    },
    {
    title: 'Construction & Estimation',
    visibleIn: ['home', 'arch'],
    skills: [
        { name: 'NeoData', icon: 'fa-solid fa-chart-column' },
        { name: 'Opus', icon: 'fa-solid fa-calculator' },
    ]
    },

    {
      title: 'Developer Tools',
      visibleIn: ['home', 'dev'],
      skills: [
        { name: 'GitHub', icon: 'devicon-github-original' },
        { name: 'GitLab', icon: 'devicon-gitlab-plain' },
        { name: 'Docker', icon: 'devicon-docker-plain' },
        { name: 'Postman', icon: 'devicon-postman-plain' }
      ]
    },
    
  // =====================
  // 🧰 TOOLS
  // =====================
{
  title: 'Collaboration & Productivity',
  visibleIn: ['home', 'dev', 'arch'],
  skills: [
    { name: 'Jira', icon: 'devicon-jira-plain' },
    { name: 'Slack', icon: 'devicon-slack-plain' },
    { name: 'Mattermost', icon: 'fa-brands fa-mastodon' },
    { name: 'Trello', icon: 'fa-brands fa-trello' },
    { name: 'Asana', icon: 'fa-solid fa-circle-nodes' },
    { name: 'Microsoft Office', icon: 'fa-solid fa-file-word' },
    { name: 'Email', icon: 'fa-solid fa-envelope' }
  ]
}

];