import React from 'react'
import { PageComponent } from '@/components';
import Image from 'next/image';
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
          />
        </div>
        <div>
          <div className="prose">
            <h1 className='text-center bg-primary-gradient bg-clip-text text-transparent'>Despre mine</h1>
            <div className=' tracking-widest'>
              <p>
                Numele meu este Laura și sunt: Manager de Social Media
                Copywriter Designer Grafic Digital Întotdeauna am avut o pasiune
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
                reacție de genul 'wwooow, chiar tu ai creat asta?
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageComponent>
  );
}

export default DespreMine;