import dynamic from 'next/dynamic';
import { Metadata } from 'next/types';
import { MainHeader } from '@/components';
const FirstSection = dynamic(() => import('./components/FirstSection'));
const SecondSection = dynamic(() => import('./components/SecondSection'));

import {
  MainHeaderData,
  SecondSectionData,
  ThirdSectionData,
  ForthSectionData,
} from './pageConstants';


export const metadata: Metadata = {
  title: 'Branding si identitate vizuala » CRELA ✨',
  description:
    '✌ Ai nevoie de Branding?✅Identitatea Vizuala a Afacerii Tale Incepe de Aici.',
    robots:"index, follow",
  alternates: {
    canonical: 'servicii/branding',
  },
};



const Branding = () => {
  return (
    <>
  
      <MainHeader {...MainHeaderData} />
      <FirstSection />
      <SecondSection {...SecondSectionData} />
      <SecondSection reversed {...ThirdSectionData} />
      <SecondSection {...ForthSectionData} />
    </>
  );
};

export default Branding;
