export interface INavItem { name: string; href: string, }
export interface Iservicii {
  name: string;
  href: string;
  image: { alt: string; src: string };
  description: string;
}


export const servicii: Iservicii[] = [
  {
    name: 'Content Writing',
    href: '/servicii/content-writing',
    description:
      'Te ajut sa iti atingi obiectivele prin servicii creative de content writing si copywriting: scriere texte, reclame, articole blog.',
    image: {
      alt: 'imagine reprezentativa Copy Writing',
      src: '/images/servicii/content-writing.png',
    },
  },
  {
    name: 'Social Media',
    href: '/servicii/social-media',
    description:
      'Te ajut sa ai o comunicare completa in mediul online: Strategie Personalizata si Rezultate Vizibile Creare Continut si Planificare.',
    image: {
      alt: 'imagine reprezentativa Social Media',
      src: '/images/servicii/social-media.png',
    },
  },
  {
    name: 'Branding',
    href: '/servicii/branding',
    description:
      'Ai nevoie de Branding? Identitatea Vizuala a Afacerii Tale Incepe de Aici.',
    image: {
      alt: 'imagine reprezentativa Copy Writing',
      src: '/images/servicii/branding.jpeg',
    },
  },
  {
    name: 'Creare Logo',
    href: '/servicii/creare-logo',
    description:
      'Te ajut sa ai o comunicare completa in mediul online: Strategie Personalizata si Rezultate Vizibile Creare Continut si Planificare.',
    image: {
      alt: 'imagine reprezentativaCreare Logo',
      src: '/images/servicii/logo-creation.avif',
    },
  },
];

export const despre: INavItem = {name: 'Despre Mine', href: '/despre-mine'}


export const menuItems: INavItem[] = [despre, ...servicii]

export const legal: INavItem[] = [
  { name: 'Termene si Conditii', href: '/termeni-conditii' },
  { name: 'Politica Cookie', href: '/politica-cookie' },
  { name: 'GDPR', href: '/gdpr' },
];


