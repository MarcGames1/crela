import React from 'react'

import { tw } from 'twind';
import styles from './firstSection.module.css'
import Image from 'next/image';
import { typography } from '@/helpers/styles';
import { Button } from '@/Components/UX';
import Link from 'next/link';


export const FirstSection = () => {

  const paragraphStyle = `${tw(
    'lg:text-xl md:text-sm sm:text-sm leading-18 indent-0	text-justify		'
  )} ${styles.p}`;

  return (
    <section
      className={`${styles.section} ${tw(
        ' m-2 min-h-screen flex lg:flex-row sm:flex-col md:flex-col'
      )}`}
    >
      <div
        className={tw(
          ' md:w-9/12 lg:w-12/12 flex flex-col  justify-evenly items-center	  h-full   self-center	min-h-screen 			  '
        )}
      >
        <div
          className={tw(
            'flex flex-col justify-evenly	 h-full  lg:w-5/6 md:w-2/3'
          )}
        >
          <span
            className={styles.tagline + ' ' + tw('lg:text-3xl md:text-2xl')}
          >
            Când totul apare imposibil, adu-ți aminte:
          </span>

          <div>
            <span className={styles.usp + ' ' + tw('lg:text-7xl md:text-5xl')}>
              Creația începe de la tine.
            </span>
          </div>
          <Image
            className={tw('md:hidden lg:hidden self-center')}
            width={200}
            height={200}
            src={'/compositions/dog.png'}
            alt="Crela dog"
          />
          <div className={`${tw('grow h-1/4')} ${styles.pContainer}`}>
            <p className={typography.p}>
              Tot ceea ce visezi, este deja realizat.
            </p>
            <p className={typography.p}>
              Tot ceea ce trebuie să faci este să te lași pe valurile creației
              împreună cu mine.
            </p>
          </div>
          <div className={tw('flex relative justify-center')}>
            <Link
              className={tw(
                ' inline-block  sm:block md:self-start  lg:self-start m-0 md:m-auto    self-center '
              )}
              href={'#despre-mine'}
            >
              <Button>Descopera </Button>
            </Link>
            <div
              className={`${styles.heart} ${tw(
                ' hidden self-end md:hidden  lg:inline-block'
              )}`}
            >
              <Image
                className={styles.heart}
                width={300}
                height={300}
                src="/heart.svg"
              />
            </div>
          </div>
        </div>
        <Image
          className={tw('md:hidden relative bottom-0 self-end lg:hidden ')}
          src={'/compositions/ciori.png'}
          width={160}
          height={177}
        />
      </div>
      <Image
        className={tw(
          ' lg:block md:hidden hidden self-start justify-self-center'
        )}
        width={500}
        height={500}
        src={'/compositions/dog.png'}
        alt="Crela dog"
      />
    </section>
  );
}

