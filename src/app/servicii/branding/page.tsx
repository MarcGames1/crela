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

export const metadata: Metadata = {
  title: 'Branding si identitate vizuala » CRELA ✨',
  description:
    '✌ Ai nevoie de Branding?✅Identitatea Vizuala a Afacerii Tale Incepe de Aici.',
};



const Branding = () => {
  return (
    <>
      <MainHeader {...MainHeaderData} />
      <FirstSection />
      <SecondSection {...SecondSectionData} />
      <SecondSection reversed {...ThirdSectionData} />
      <SecondSection  {...ForthSectionData} />
     
    </>
  );
};

export default Branding;
