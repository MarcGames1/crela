import { PageComponent, MainHeader } from '@/components';
import { IMainHeader } from '@/components/MainHeader/MainHeader';


import { Metadata } from 'next/types';
import React from 'react';

('https://docs.google.com/document/d/1lPiLXlPLwb0edJxfKqHU3NysNRZqmvubn2f_wFlsNpQ/edit');
export const metadata: Metadata = {
  title: 'Servicii Promovare Social Media » CRELA ✨',
  description:
    '✌ Te ajut sa ai o comunicare completa in mediul online:✅Strategie Personalizata si Rezultate Vizibile ✅Creare Continut si Planificare.',
};

const MainHeaderData: IMainHeader = {
  title: 'Servicii de Promovare pe Social Media pentru afacerea ta',
  paragraph:
    'Te ajut sa ai o comunicare completa in mediul online: Strategie Personalizata si Rezultate Vizibile Creare Continut si Planificare.',
  image: {
    src: '/SocialMedia.gif',
    alt: 'Poza Reprezentativa Social Media',
    width: 1080,
    height: 1920,
  },
};




const SocialMedia = () => {
  return <PageComponent>
    <MainHeader {...MainHeaderData} />
  </PageComponent>;
};

export default SocialMedia;
