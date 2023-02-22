import React from 'react'
import { tw } from 'twind';
import Image from 'next/image';

import { typography } from '@/helpers/styles';


export const Servicii = () => {


  return (
    <section id="servicii">
      <div className={tw('flex items-center flex-col')}>
        <span className={typography.heading1}>Servicii</span>
        <div
          className={tw(
            'grid grid-cols-3 grid-rows-3 items-center 	  justify-items-center '
          )}
        >
          <span
            className={`{tw("lg:order-1 row-span-1")} ${typography.decorativ}`}
          >
            Tu
          </span>
          <Door
            style={tw('row-span-1 col-start-2 col-end-2')}
            src={'/doors/copywriting-door.png'}
            subtitlu={'Ai ceva-n minte, dar nu știi s-o exprimi?'}
            titlu={'COPYWRITING'}
          />
          <span
            className={`{tw("lg:order-2 row-span-1")} ${typography.decorativ}`}
          >
            Ce
          </span>
          <span
            className={`{tw(" lg:order-3 row-span-2 col-span-1")} ${typography.decorativ}`}
          >
            ușă
          </span>
          <Door
            style={tw('row-span-2 col-start-2 col-end-2')}
            src={'/doors/copywriting-door.png'}
            subtitlu={'Îți dorești să fii-n atenția tuturor ?'}
            titlu={'SOCIAL MEDIA'}
          />
          <Door
            style={tw('row-span-3 col-start-2 col-end-2')}
            src={'/doors/copywriting-door.png'}
            subtitlu={'Vrei să faci din gândurile tale-o artă?'}
            titlu={'GRAPHIC DESIGN'}
          />
          <span
            className={`{tw("lg:order-4 row-span-3 col-start-3 col-end-3")} ${typography.decorativ}`}
          >
            alegi?
          </span>
        </div>
      </div>
    </section>
  );
}









const Door = ({titlu, subtitlu, src, style}) => {
  return (
    <div className={`${style} ${tw('flex flex-col items-center')}`}>
      <Image src={src} width={132} height={175} />
      <span
        className={`${tw('break-keep whitespace-nowrap	')} ${
          typography.heading2
        }`}
      >
        {titlu}
      </span>
      <span className={typography.p}>{subtitlu}</span>
    </div>
  );
}