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

          <Door subtitlu={'subtitlu'} titlu={'s'} />
          
        </div>
      </div>
    </section>
  );
}









const Door = ({titlu, subtitlu}) => {
  return(

    <div className={tw('flex flex-col items-center')}>

 
 <span className={typography.heading1}>{titlu}</span>
 <span>{subtitlu}</span>
  </div>
    )
}