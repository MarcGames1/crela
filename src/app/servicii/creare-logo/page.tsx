import { PageComponent,HeaderWithParalax } from '@/components';
import { Metadata } from 'next/types';
import React from 'react';
import { IMainHeader } from '@/components/MainHeader/MainHeader';
import MainHeader from '@/components/MainHeader/MainHeader';
import Link from 'next/link';
const MainHeaderData: IMainHeader = {
  title: 'Creare logo personalizat pentru firma ta',
  paragraph:
    'Te ajut sa ai o comunicare completa in mediul online: Strategie Personalizata si Rezultate Vizibile Creare Continut si Planificare.',
  image: {
    src: '/SocialMedia.gif',
    alt: 'Poza Reprezentativa Social Media',
    width: 1080,
    height: 1920,
  },
};


('https://docs.google.com/document/d/1lPiLXlPLwb0edJxfKqHU3NysNRZqmvubn2f_wFlsNpQ/edit');
export const metadata: Metadata = {
  title: 'Creare logo personalizat pentru firma ta » CRELA ✨',
  description:
    '✌ Ai nevoie logo personalizat pentru firma ta?✅Identitatea Vizuala a Afacerii Tale Incepe de Aici.',
};

const CreareLogo = () => {
  return (
    <PageComponent>
      <MainHeader {...MainHeaderData} />
      <section>
        <h2>Ce trebuie sa transmita un logo</h2>
        [Exemple de la branduri cunoscute cu poze]
      </section>

      <section>
        <h2>Uite o parte din logo-urile realizate de mine</h2>
      </section>
      <section>
        <h2> Creare logo Firma Transport - Exemplu</h2>
      </section>
      <section>
        <h2> Creare logo Firma Constructii - Exemplu</h2>
      </section>
      <section className="flex flex-col">
        <HeaderWithParalax bgImage="/images/assets/parallax1.png">
          <div className='m-auto'>
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
    </PageComponent>
  );
};

export default CreareLogo;
