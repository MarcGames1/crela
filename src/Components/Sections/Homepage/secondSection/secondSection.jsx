import React from 'react'
import { tw } from 'twind'
import Image from 'next/image'

import { typography } from '@/helpers/styles'




export const Despre = () => {
  return (
    <section id='despre-mine'
      className={tw('flex flex-col  justify-items-around items-center')}
    >
      <Image
        width={137}
        height={146}
        src={'/compositions/Miroodles Color Comp.png'}
      />
      <div className="flex items-center">
        <span className={typography.heading1}>Salut, </span>
        <Image src={'/compositions/gargarita.png'} width={92} height={86} />
      </div>
      <div
        className={tw(
          'm-5 lg:grid lg:grid-cols-2 items-center gap-2 justify-items-center md:flex  lg:flex-row md:flex-row'
        )}
      >
        <p className={`${tw('block lg:w-8/12')} ${typography.p}`}>
          Numele meu este Laura și acesta este primul meu laborator creativ.
          Inspirată de Dexter din desenele animate, mi-am luat inima-n dinți cu
          tot cu artere și-am creat acest spațiu unde am strâns toate pasiunile
          mele într-un singur loc.
        </p>
        <Image width="400" height="400" src={'/Laura.webp'} />
      </div>
      <span className={typography.heading1}>Ce vei găsi aici?</span>
      <span className={typography.heading2}>
        O creativitate inteligentă care te va ajuta să realizezi ce ți-ai
        propus.
      </span>
      <div className={tw('flex w-full  place-content-between')}>
        <Image
          className={tw('self-center')}
          src={'/compositions/SquigglesL.png'}
          width={400}
          height={92}
        />
        <Image
          className={tw('self-center')}
          src={'/compositions/SquigglesR.png'}
          width={300}
          height={92}
        />
      </div>
      <Image
        className={tw('self-center')}
        src={'/compositions/You are fuego Art.png'}
        width={418}
        height={442}
      />
    </section>
  );
}
