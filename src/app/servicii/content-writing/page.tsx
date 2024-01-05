import { MainHeader, IntroSection  } from '@/components';
import { Metadata } from 'next/types';
import React from 'react';

import CePutemRealiza from './components/CePutemRealiza';
import {
  AccordionData,
  DeCeCopyWritingData,
  DeCeSaLucreziCuMineData,
  ModDeLucruData,
} from './pageConstants';
import DeCeCopyWriting from './components/DeCeCopyWriting';
import ModDeLucru from './components/ModDeLucru';
import DeCeSaLucreziCuMine from './components/DeCeSaLucreziCuMine';
import { IMainHeader } from '@/interfaces/IMainHeader';


export const metadata: Metadata = {
  title: 'Servicii Content Writing si Copywriting » CRELA✨',
  description:
    '✌ Te ajut sa iti atingi obiectivele prin servicii creative de content writing si copywriting: scriere texte, reclame, articole blog.',
  robots: 'index, follow',
  alternates: {
    canonical: 'servicii/content-writing',
  },
};

const MainHeaderData: IMainHeader = {
  title: 'Servicii de Content Writing pentru afacerea ta',
  paragraph:
    'Te ajut sa iti atingi obiectivele prin servicii creative de content writing si copywriting: scriere texte, reclame, articole blog.',
  video: {
    src: '/images/header/ContentWriting.webm',
    width: 648,
    height: 648,
  },
};

const ContentWriting = () => {
  return (
    <>
      
      <MainHeader {...MainHeaderData} />
      <IntroSection
        p="Ai nevoie de cuvinte care să transforme vizitatorii în clienți
            fideli? Eu sunt aici să fac ca fiecare frază să conteze și să aducă
            rezultate palpabile pentru afacerea ta."
      >
        <h2 className="text-center">
          Servicii de{' '}
          <span className="bg-clip-text text-transparent bg-primary-gradient">
            Content Writing si CopyWriting
          </span>
        </h2>
      </IntroSection>
      <CePutemRealiza sectionHeader="Te pot ajuta Cu:" data={AccordionData} />
      <DeCeCopyWriting {...DeCeCopyWritingData} />
      <ModDeLucru reversed {...ModDeLucruData} />
      <DeCeSaLucreziCuMine {...DeCeSaLucreziCuMineData} />
    </>
  );
};

export default ContentWriting;
