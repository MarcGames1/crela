export interface INavItem { name: string; href: string }

export const servicii: INavItem[] = [
  {
    name: 'Content Writing',
    href: '/content-writing',
  },
  {
    name: 'Social Media',
    href: '/social-media',
  },
  {
    name: 'Branding',
    href: '/branding',
  },
  {
    name: 'Creare Logo',
    href: '/creare-logo',
  },
];

export const despre: INavItem[]=[
    {name: 'Despre Mine', href: '/despre-mine'}
]

export const menuItems: INavItem[] = [...despre, ...servicii]

export const legal: INavItem[] = [
  { name: 'Termene si Conditii', href: '/termeni-conditii' },
  { name: 'Politica Cookie', href: '/politica-cookie' },
  { name: 'GDPR', href: '/gdpr' },
];


