import React from 'react'

import { tw } from 'twind';
import styles from './firstSection.module.css'
import Image from 'next/image';

import { Button } from '@/Components/UX';


export const FirstSection = () => {
  return (
    <section className={tw('m-2 w-full h-screen')}>
      <div className={tw('w-2/3 flex flex-col justify-evenly		 m-auto h-full')}>
        <div className={tw()}>
          <span className={styles.tagline}>
            Când totul apare imposibil, adu-ți aminte:
          </span>
        </div>

        <div>
          <span className={styles.usp}>Creația începe de la tine.</span>
        </div>
        <Image
          className={tw('self-center')}
          width={300}
          height={300}
          src={'/dog.png'}
          alt='Crela dog'
        />
        <div className={styles.pContainer}>

          <p className={styles.p}>Tot ceea ce visezi, este deja realizat. </p>
          <p className={styles.p}>
            Tot ceea ce trebuie să faci este să te lași pe valurile creației
            împreună cu mine.
          </p>
        </div>
      </div>
      <Button>Descopera </Button>
    </section>
  );
}

