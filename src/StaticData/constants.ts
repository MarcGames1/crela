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
    description: 'Servicii content writing',
    image: {
      alt: 'imagine reprezentativa Copy Writing',
      src: '/images/servicii/content-writing.png',
    },
  },
  {
    name: 'Social Media',
    href: '/servicii/social-media',
    description: 'Servicii Social Media',
    image: {
      alt: 'imagine reprezentativa Social Media',
      src: '/images/servicii/social-media.png',
    },
  },
  {
    name: 'Branding',
    href: '/servicii/branding',
    description: 'Servicii Branding',
    image: {
      alt: 'imagine reprezentativa Copy Writing',
      src: '/images/servicii/branding.jpeg',
    },
  },
  {
    name: 'Creare Logo',
    href: '/servicii/creare-logo',
    description: 'Creare Logo',
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


