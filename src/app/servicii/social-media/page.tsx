import { MainHeader } from '@/components';
import { MainHeaderData, PromovareSocialMediaOrganicData } from './pageConstants';


import { Metadata } from 'next/types';
import React from 'react';
import Section from './components/Section';


export const metadata: Metadata = {
  title: 'Servicii Promovare Social Media » CRELA ✨',
  description:
    '✌ Te ajut sa ai o comunicare completa in mediul online:✅Strategie Personalizata si Rezultate Vizibile ✅Creare Continut si Planificare.',
};






const SocialMedia = () => {
  return <>
    <MainHeader {...MainHeaderData} />
    <Section p={PromovareSocialMediaOrganicData.p} heading={PromovareSocialMediaOrganicData.sectionHeader} >
      <div>x</div>
    </Section>
   

  </>;
};

export default SocialMedia;
