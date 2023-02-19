import React from 'react'

import { tw } from 'twind';
import styles from './firstSection.module.css'
import Image from 'next/image';

import { Button } from '@/Components/UX';


export const FirstSection = () => {
  return (
    <section className={tw('m-2 min-h-screen flex flex-col')}>
      <div
        className={tw(
          ' md:w-9/12 lg:w-12/12 flex flex-col  h-full  self-center	min-h-screen  justify-self-center			  '
        )}
      >
        <div
          className={tw(
            'flex flex-col justify-items-around h-full  lg:w-2/3 md:w-2/3'
          )}
        >
          <span
            className={styles.tagline + ' ' + tw('lg:text-2xl md:text-2xl')}
          >
            Când totul apare imposibil, adu-ți aminte:
          </span>

          <div>
            <span className={styles.usp + ' ' + tw('lg:text-5xl md:text-5xl')}>
              Creația începe de la tine.
            </span>
          </div>
          <Image
            className={tw('md:hidden lg:hidden self-center')}
            width={300}
            height={300}
            src={'/dog.png'}
            alt="Crela dog"
          />
          <div className={styles.pContainer}>
            <p className={styles.p}>Tot ceea ce visezi, este deja realizat. </p>
            <p className={styles.p}>
              Tot ceea ce trebuie să faci este să te lași pe valurile creației
              împreună cu mine.
            </p>
          </div>
        </div>
        <Button
          className={tw(
            'w-1/2  sm:block md:self-start lg:self-start self-center '
          )}
        >
          Descopera{' '}
        </Button>
      </div>

      <Image
        className={tw('md:hidden self-end lg:hidden  float-right')}
        src={'/compositions/Miroodles Color Comp.png'}
        width={160}
        height={177}
      />
    </section>
  );
}

