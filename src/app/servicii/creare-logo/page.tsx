import dynamic from 'next/dynamic';

import React from 'react';
import Link from 'next/link';
import { LogoDefinitionData, LogoTransportSectionData, LogoConstructionSectionData } from './pageConstants';
import { Metadata } from 'next/types';
import { pageMetaData, MainHeaderData } from './pageConstants';


type ComponentImport = () => Promise<any>;
const DynamicComponents: Record<string, any> = {};




const componentsToDynamicImport: Record<string, ComponentImport> = {
  MainHeader: () => import('@/components/MainHeader/MainHeader'),
  LogoGallery: () => import('./Components/LogoGallery'),
  LogouriRealizate: () => import('./Components/LogouriRealizate'),
  HeaderWithParalax: () =>
    import('@/components').then((c) => c.HeaderWithParalax),
  LogoDefinition: () =>
    import('./Components/LogoDefinition'),
};


Object.keys(componentsToDynamicImport).forEach((componentName) => {
  DynamicComponents[componentName] = dynamic(
    componentsToDynamicImport[componentName]
  );
});


export const metadata: Metadata = pageMetaData

const CreareLogo = () => {
  return (
    <>
      <DynamicComponents.MainHeader {...MainHeaderData} />

      <DynamicComponents.LogoDefinition {...LogoDefinitionData} />
      {/* <LogouriRealizate /> */}
      <DynamicComponents.LogoGallery {...LogoTransportSectionData} />
      <DynamicComponents.LogoGallery
        rtl={true}
        {...LogoConstructionSectionData}
      />

      <section className="flex flex-col">
        <DynamicComponents.HeaderWithParalax bgImage="/images/assets/parallax1.webp">
          <div className="m-auto">
            <h2
              className="mx-auto text-3xl font-bold leading-[1.25] md:text-5xl md:leading-tight 
              [&>u]:decoration-[2px] [&>u]:underline-offset-[5px] md:[&>u]:decoration-[5px] 
              md:[&>u]:underline-offset-[10px] max-w-[1300px]"
            >
              Incepi o afacere de la 0?{' '}
            </h2>
            <span>
              Te pot ajuta cu servicii complete de &nbsp;
              <Link className="link" href={'/servicii/branding'}>
                branding si identitate vizuala
              </Link>
            </span>
          </div>
        </DynamicComponents.HeaderWithParalax>
      </section>
    </>
  );
};



export default CreareLogo;






