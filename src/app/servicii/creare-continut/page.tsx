import { MainHeader, IntroSection, Section , PhoneMockup} from '@/components';
import { Metadata } from 'next/types';
import React from 'react';


import { IMainHeader } from '@/interfaces/IMainHeader';
import dynamic from 'next/dynamic';
import { UGC_VideosData } from './UGC_Data';
import SingleVideo from './SingleVideo';

export const metadata: Metadata = {
  title: 'UGC Creator Romania » CRELA✨',
  description:
    '✌ Te ajut sa iti atingi obiectivele Cu UGC - User Generated Content, creative si resurse pentru Social Media.',
  robots: 'index, follow',
  alternates: {
    canonical: 'servicii/creare-continut',
  },
};

const MainHeaderData: IMainHeader = {
  title: 'UGC Creator Romania - Creare de conținut și UGC Costuri reduse și vizbilitate crescută',
  paragraph:undefined,
  video: {
    src: '/images/header/UGC.webm',
    width: 648,
    height: 648,
  },
};
type ComponentImport = () => Promise<any>;

const componentsToDynamicImport: Record<string, ComponentImport> = {
  HeaderWithParalax: () => import('@/components/HeaderWithParalax'),
  Section: () => import('@/components'),

};



const UGCPage = () => {
    const DynamicComponents: Record<string, any> = {};

    Object.keys(componentsToDynamicImport).forEach((componentName) => {
      DynamicComponents[componentName] = dynamic(
        componentsToDynamicImport[componentName]
      );
    });


    

 
      


  return (
    <>
      <MainHeader {...MainHeaderData} />
      <IntroSection p="Crearea de conținut este procesul de elaborare și producție a materialelor, cum ar fi texte sau videoclipuri, pentru a atrage și oferi valoare audienței.">
        <h2 className="text-center">
          De ce{' '}
          <span className="bg-clip-text text-transparent bg-primary-gradient">
            Ai Nevoie de un UGC Creator{' '}
          </span>{' '}
          Pentru{' '}
          <span className="bg-clip-text text-transparent bg-primary-gradient">
            Creare de conținut UGC?
          </span>
        </h2>
      </IntroSection>
      <DynamicComponents.HeaderWithParalax bgImage="/images/assets/parallax1.webp">
        <div
          className="mx-auto text-3xl font-semibold leading-[1.25] md:text-5xl md:leading-tight 
          [&>u]:decoration-[2px] [&>u]:underline-offset-[5px] md:[&>u]:decoration-[5px] 
          md:[&>u]:underline-offset-[10px] max-w-[1300px]"
        >
          79% din consumatori spun că UGC sau crearea de conținut îi determina
          să cumpere
        </div>
      </DynamicComponents.HeaderWithParalax>
      <br />
      <Section
        heading={
          <>
            Portofoliu{' '}
            <span className="bg-clip-text text-transparent bg-primary-gradient">
              UGC Romania
            </span>
          </>
        }
        p={undefined}
      >
        <div className="container flex flex-row flex-wrap items-center justify-center m-auto">
          {UGC_VideosData.map((video, idx )=>{
            return <SingleVideo key={idx} {...video} />
          })}
        </div>
      </Section>
      <DynamicComponents.HeaderWithParalax bgImage="/images/assets/parallax1.webp">
        <div
          className="mx-auto text-3xl font-semibold leading-[1.25] md:text-5xl md:leading-tight 
          [&>u]:decoration-[2px] [&>u]:underline-offset-[5px] md:[&>u]:decoration-[5px] 
          md:[&>u]:underline-offset-[10px] max-w-[1300px]"
        >
          Știai că 65% dintre utilizatori din Romania preferă crearea de coținut UGC?
        </div>
      </DynamicComponents.HeaderWithParalax>
    </>
  );
};

export default UGCPage;
