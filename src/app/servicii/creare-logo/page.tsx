import { PageComponent } from '@/components';
import { Metadata } from 'next/types';
import React from 'react';
import { IMainHeader } from '@/components/MainHeader/MainHeader';
import MainHeader from '@/components/MainHeader/MainHeader';
const MainHeaderData: IMainHeader = {
  title: 'Creare logo personalizat pentru firma ta',
  paragraph:
    'Te ajut sa ai o comunicare completa in mediul online: Strategie Personalizata si Rezultate Vizibile Creare Continut si Planificare.',
  image: {
    src: '/SocialMedia.gif',
    alt: 'Poza Reprezentativa Social Media',
    width: 1080,
    height: 1920,
  },
};


('https://docs.google.com/document/d/1lPiLXlPLwb0edJxfKqHU3NysNRZqmvubn2f_wFlsNpQ/edit');
export const metadata: Metadata = {
  title: 'Creare logo personalizat pentru firma ta » CRELA ✨',
  description:
    '✌ Ai nevoie logo personalizat pentru firma ta?✅Identitatea Vizuala a Afacerii Tale Incepe de Aici.',
};

const CreareLogo = () => {
  return (
    <PageComponent>
      <MainHeader {...MainHeaderData} />
    </PageComponent>
  );
};

export default CreareLogo;
