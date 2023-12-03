import { MainHeader, Card, Section, FlexibleColumnSection, HeaderWithParalax } from '@/components';
import {
  MainHeaderData,
  PromovareSocialMediaOrganicData,
  PromovareAds,
  intrebariFrecventeData,
  sections,
} from './pageConstants';
import { IFlexibleColumnSection } from '@/interfaces/IFlexibleColumnSection';

import { Metadata } from 'next/types';
import React from 'react';
import SocialMediaSection from './components/SocialMediaSection';
import IntrebariFrecvente from './components/IntrebariFrecvente';
import { ActionBtn } from '@/components/Buttons';

export const metadata: Metadata = {
  title: 'Servicii Promovare Social Media » CRELA ✨',
  description:
    '✌ Te ajut sa ai o comunicare completa in mediul online:✅Strategie Personalizata si Rezultate Vizibile ✅Creare Continut si Planificare.',
};

const SocialMedia = () => {
  return (
    <>
      <MainHeader {...MainHeaderData} />
      <SocialMediaSection {...PromovareSocialMediaOrganicData} />
      <br />
      <SocialMediaSection {...PromovareAds} />
      <br />
      <IntrebariFrecvente
        sectionHeader={'Intrebari Frecvente din Social Media '}
        data={[...intrebariFrecventeData]}
      />

      {sections.map((section: IFlexibleColumnSection, idx: number) => {
        if (!section.children) {
          return (
            <FlexibleColumnSection
              reversed={idx % 2 !== 0}
              key={idx}
              {...section}
            />
          );
        } else {
          return (
            <FlexibleColumnSection
              reversed={idx % 2 !== 0}
              key={idx}
              {...section}
            >
              {section.children}
            </FlexibleColumnSection>
          );
        }
      })}
      <HeaderWithParalax bgImage="/images/assets/parallax1.png">
        <div className=' flex flex-col gap-5 m-auto'>
        <span
          className="mx-auto text-3xl font-bold leading-[1.25] md:text-5xl md:leading-tight 
          [&>u]:decoration-[2px] [&>u]:underline-offset-[5px] md:[&>u]:decoration-[5px] 
          md:[&>u]:underline-offset-[10px] max-w-[1300px]"
          >
          Scrie-mi un mesaj pe Watsapp 
        </span>
        <div>
        <ActionBtn.Whatsapp />
        </div>

          </div>
      </HeaderWithParalax>
    </>
  );
};

export default SocialMedia;
