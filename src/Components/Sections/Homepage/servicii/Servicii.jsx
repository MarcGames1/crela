import React from 'react'
import { tw } from 'twind';
import Image from 'next/image';
import Link from 'next/link';

import { typography } from '@/helpers/styles';


export const Servicii = () => {


  return (
    <section id="servicii">
      <div className={tw('flex items-center flex-col')}>
        <span className={typography.heading1}>Servicii</span>
        <div
          className={tw(
            'lg:grid-cols-12 grid grid-cols-4 lg:grid-rows-auto sm:grid-rows-3 items-center 	  '
          )}
        >
          <span
            className={`{tw("lg:order-1 row-span-1")} ${typography.decorativ}`}
          >
            Tu
          </span>
          <Door
            href="/copywriting"
            style={tw('self-start col-span-2')}
            src={'/doors/copywriting-door.png'}
            subtitlu={'Ai ceva-n minte, dar nu știi s-o exprimi?'}
            titlu={'COPYWRITING'}
          />
          <span
            className={`{tw("")} ${typography.decorativ}`}
          >
            Ce
          </span>
          <span
            className={`{tw("justify-self-start ")} ${typography.decorativ}`}
          >
            ușă
          </span>
          <Door
            href="/social-media"
            style={tw('self-start  col-span-2')}
            src={'/doors/copywriting-door.png'}
            subtitlu={'Îți dorești să fii-n atenția tuturor ?'}
            titlu={'SOCIAL MEDIA'}
          />
          <Door
            href="/design-grafic"
            style={tw('self-start  col-span-2 lg:col-start-9 col-start-2')}
            src={'/doors/copywriting-door.png'}
            subtitlu={'Vrei să faci din gândurile tale-o artă?'}
            titlu={'GRAPHIC DESIGN'}
          />
          <span
            className={`${tw('justify-self-start ')} ${typography.decorativ}`}
          >
            alegi?
          </span>
        </div>
      </div>
    </section>
  );
}









const Door = ({titlu, subtitlu, src, style, href = '#'}) => {
   
  return (
    <Link href={href} className={`${style} ${tw('flex flex-col items-center')}`}>
      <Image src={src} width={132} height={175} />
      <span
        className={`${tw('break-keep whitespace-nowrap	')} ${
          typography.heading2
        }`}
      >
        {titlu}
      </span>
      <span className={typography.p}>{subtitlu}</span>
    </Link>
  );
}