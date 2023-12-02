import { MainHeader, Card, Section } from '@/components';
import { MainHeaderData, PromovareSocialMediaOrganicData, PromovareAds } from './pageConstants';


import { Metadata } from 'next/types';
import React from 'react';
import SocialMediaSection from './components/SocialMediaSection';



export const metadata: Metadata = {
  title: 'Servicii Promovare Social Media » CRELA ✨',
  description:
    '✌ Te ajut sa ai o comunicare completa in mediul online:✅Strategie Personalizata si Rezultate Vizibile ✅Creare Continut si Planificare.',
};






const SocialMedia = () => {
  return <>
    <MainHeader {...MainHeaderData} />
   <SocialMediaSection {...PromovareSocialMediaOrganicData} />
   <br />
   <SocialMediaSection {...PromovareAds} />
   

  </>;
};

export default SocialMedia;
