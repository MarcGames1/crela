import React from 'react'

import { tw } from 'twind';
import styles from './firstSection.module.css'
import Image from 'next/image';


export const FirstSection = () => {
  return (
    <section className={tw('m-2 w-full h-screen')}>
      <div className={tw('w-2/3 flex flex-col items-between m-auto h-full')}>
        <div className={styles.tagline}>
          Când totul apare imposibil, adu-ți aminte:
        </div>
        <div className={styles.usp}>Creația începe de la tine.</div>
        <Image
          className={tw('self-center')}
          width={300}
          height={300}
          src={'/dog.png'}
        />
      </div>
    </section>
  );
}

