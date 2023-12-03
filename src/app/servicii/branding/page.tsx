import { PageComponent, MainHeader } from '@/components';
import { IMainHeader } from '@/interfaces/IMainHeader'; 
import { Metadata } from 'next/types';
import React from 'react';

export const metadata: Metadata = {
  title: 'Branding si identitate vizuala » CRELA ✨',
  description:
    '✌ Ai nevoie de Branding?✅Identitatea Vizuala a Afacerii Tale Incepe de Aici.',
};

const MainHeaderData: IMainHeader = {
  title: 'Branding si Identitate Vizuala',
  paragraph: (
    <>
      <p>Ai nevoie de Branding?</p>
      <p>Identitatea Vizuala a Afacerii Tale Incepe de Aici.</p>
    </>
  ),
  image: {
    src: '/SocialMedia.gif',
    alt: 'Poza Reprezentativa Social Media',
    width: 1080,
    height: 1920,
  },
};

const Branding = () => {
  return (
    <>
      <MainHeader {...MainHeaderData} />
    </>
  );
};

export default Branding;
