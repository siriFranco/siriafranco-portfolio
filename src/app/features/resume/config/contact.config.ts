import { AppMode } from "src/app/shared/constants/app.constants";

export interface ContactItem {
  label: string;
  value?: string;
  link?: string;
  icon: string;
  copy?: boolean;
  visibleIn?: AppMode[];

  values?: {
    modes: AppMode[];
    value: string;
  }[];
}

export const CONTACT_CONFIG = {
  meta: {
    title: 'Contact',
    summary: 'Feel free to reach out for opportunities or collaborations.',
  },

  contact: [
    {
      label: 'Email',
      icon: 'fa-solid fa-envelope',
      copy: true,

      // 🔥 igual que descriptions en workexperience
      values: [
            {
                modes: ['arch', 'arch-est', 'arch-pm'] as AppMode[],
                value: 'arsiriafranco@gmail.com'
            },
            {
                modes: ['home', 'dev'] as AppMode[],
                value: 'sirifranco00@gmail.com'
            }
        ]
    },
    {
      label: 'Phone',
      value: '+52 1 66-22264928',
      icon: 'fa-solid fa-mobile',
      copy: true,
    },
    {
      label: 'Location',
      value: 'Sonora, México',
      icon: 'fa-solid fa-location-dot'
    },

    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/sirifranco',
      link: 'https://linkedin.com/in/siri-franco',
      icon: 'fa-brands fa-linkedin'
    },
    {
        label: 'GitHub',
        value: 'github.com/siriFranco',
        link: 'https://github.com/siriFranco',
        icon: 'fa-brands fa-github',
        visibleIn: ['home', 'dev'] as AppMode[]
    }
  ]
};