import React from 'react'
import { tw } from 'twind';
import Image from 'next/image';

import { typography } from '@/helpers/styles';


export const Servicii = () => {


  return (
    <section id="servicii">
      <div className={tw('flex items-center flex-col')}>
        <span className={typography.heading1}>Servicii</span>
        <div>
          <Door
            src={'/doors/copywriting-door.png'}
            subtitlu={'Ai ceva-n minte, dar nu știi s-o exprimi?'}
            titlu={'COPYWRITING'}
          />
        </div>
      </div>
    </section>
  );
}









const Door = ({titlu, subtitlu, src}) => {
  return(

    <div className={tw('flex flex-col items-center')}>

 <Image src={src} width={132} height={175} />
 <span className={typography.heading2}>{titlu}</span>
 <span>{subtitlu}</span>
  </div>
    )
}