import React from 'react'
import { PageComponent } from '@/components';
import Image from 'next/image';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Despre » CRELA ✨',
  description:
    '✌Afla despre pasiunea mea pentru design, cuvinte și social media 🎨✍️ Înălțând creativitatea cu fiecare detaliu la @CRELA. WOW!',
  robots: 'index, follow',
  alternates: {
    canonical: 'despre-mine',
  },
};

const DespreMine = () => {
  return (
    <PageComponent>
      <div className="container p-10 grid grid-flow-row items-center justify-items-center lg:grid-flow-col">
        <div>
          <Image
            src={'/images/poza-Laura.webp'}
            alt="Laura Image"
            width={300}
            height={300}
            loading='eager'
          />
        </div>
        <div>
          <div className="prose">
            <h1 className="text-center bg-primary-gradient bg-clip-text text-transparent">
              Despre mine
            </h1>
            <div className=" tracking-widest">
              <p>
                Numele meu este Laura și sunt: Manager de Social Media,
                Copywriter, Designer Grafic Digital. Întotdeauna am avut o pasiune
                pentru aspectul vizual, estetic, dar și pentru lumea
                literaturii.
              </p>
              <p>
                Iubind atât de mult lectura și desenul, mi-am pus în valoare
                talentele atât pe hârtie, cât și online. Am creat @CRELA tocmai
                datorită multitudinii de pasiuni pe care le am, astfel că @CRELA
                este laboratorul meu creativ.
              </p>
              <p>
                Sunt o persoană meticuloasă și foarte atentă la detalii și pur
                și simplu ador când creez ceva de la zero, doar pentru a vedea o
                reacție de genul <i>wwooow, chiar tu ai creat asta?</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageComponent>
  );
}

export default DespreMine;