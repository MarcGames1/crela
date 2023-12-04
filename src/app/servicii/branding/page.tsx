import { Metadata } from 'next/types';
import { MainHeader } from '@/components';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';

import {
  MainHeaderData,
  SecondSectionData,
  ThirdSectionData,
  ForthSectionData,
} from './pageConstants';
import { NextSeo } from 'next-seo';

export const metadata: Metadata = {
  title: 'Branding si identitate vizuala » CRELA ✨',
  description:
    '✌ Ai nevoie de Branding?✅Identitatea Vizuala a Afacerii Tale Incepe de Aici.',
};



const Branding = () => {
  return (
    <>
      <NextSeo canonical="https://crela.ro/servicii/branding" />
      <MainHeader {...MainHeaderData} />
      <FirstSection />
      <SecondSection {...SecondSectionData} />
      <SecondSection reversed {...ThirdSectionData} />
      <SecondSection {...ForthSectionData} />
    </>
  );
};

export default Branding;
