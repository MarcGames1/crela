import { PageComponent,HeaderWithParalax } from '@/components';
import { LogoDefinition } from './Components/LogoDefinition';
import { LogoDefinitionData, LogoTransportSectionData, LogoConstructionSectionData } from './pageConstants';
import { Metadata } from 'next/types';
import React from 'react';
import MainHeader from '@/components/MainHeader/MainHeader';
import Link from 'next/link';
import { pageMetaData, MainHeaderData } from './pageConstants';
import LogouriRealizate from './Components/LogouriRealizate';
import LogoGallery from './Components/LogoGallery';


('https://docs.google.com/document/d/1lPiLXlPLwb0edJxfKqHU3NysNRZqmvubn2f_wFlsNpQ/edit');
export const metadata: Metadata = pageMetaData

const CreareLogo = () => {
  return (
    <>
      
        <MainHeader {...MainHeaderData} />

        <LogoDefinition {...LogoDefinitionData} />
        <LogouriRealizate />
        <LogoGallery {...LogoTransportSectionData} />
        <LogoGallery rtl={true} {...LogoConstructionSectionData} />

     
        <section className="flex flex-col">
          <HeaderWithParalax bgImage="/images/assets/parallax1.png">
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
          </HeaderWithParalax>
        </section>
      
    </>
  );
};



export default CreareLogo;






