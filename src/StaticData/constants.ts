export interface INavItem {
  name: string;
  href: string;
}
export interface Iservicii {
  name: string;
  href: string;
  image: { alt: string; src: string };
  description: string;
}

export const servicii: Iservicii[] = [
  {
    name: "Content Writing",
    href: "/servicii/content-writing",
    description:
      "Te ajut sa iti atingi obiectivele prin servicii creative de content writing si copywriting: scriere texte, reclame, articole blog.",
    image: {
      alt: "imagine reprezentativa Copy Writing",
      src: "/images/servicii/content-writing.png",
    },
  },
  {
    name: "Social Media",
    href: "/servicii/social-media",
    description:
      "Te ajut sa ai o comunicare completa in mediul online: Strategie Personalizata si Rezultate Vizibile Creare Continut si Planificare.",
    image: {
      alt: "imagine reprezentativa Social Media",
      src: "/images/servicii/social-media.png",
    },
  },
  {
    name: "Branding",
    href: "/servicii/branding",
    description:
      "Ai nevoie de Branding? Identitatea Vizuala a Afacerii Tale Incepe de Aici.",
    image: {
      alt: "imagine reprezentativa Copy Writing",
      src: "/images/servicii/branding.png",
    },
  },
  {
    name: "Creare Logo",
    href: "/servicii/creare-logo",
    description:
      "Te ajut sa ai o comunicare completa in mediul online: Strategie Personalizata si Rezultate Vizibile Creare Continut si Planificare.",
    image: {
      alt: "imagine reprezentativa Creare Logo",
      src: "/images/servicii/logo-creation.png",
    },
  },
  {
    name: "Creare Continut",
    href: "/servicii/creare-continut",
    description:
      "Crearea de conținut este procesul de elaborare și producție a materialelor, cum ar fi texte sau videoclipuri, pentru a atrage și oferi valoare audienței.",
    image: {
      alt: "imagine UGC",
      src: "/images/servicii/UGC.png",
    },
  },
];

export const despre: INavItem = { name: "Despre Mine", href: "/despre-mine" };
export const ilustratii: INavItem = { name: "Iustratii", href: "/ilustratii" };

// export const menuItems: INavItem[] = [despre,{name: 'Servicii', href:'#'} ,ilustratii]

export const legal: INavItem[] = [
  { name: "Termeni si Conditii", href: "/termeni-conditii" },
  { name: "Politica Cookie", href: "/politica-cookie" },
  { name: "GDPR", href: "/gdpr" },
];
