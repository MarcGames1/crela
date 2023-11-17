'use client'
import React, {useState} from 'react'
import Stanga from './Stanga'
import Dreapta from './Dreapta'
import { Iservicii, servicii } from '@/StaticData/navItems'



const ToateServiciile = () => {


  
  const [serviciuSelectat, setServiciuSelectat] = useState(servicii[0]);
  
  
  return (
    <section className='m-5 '>
      <h2 className="text-center pt-5 mb-5 text-3xl font-bold md:mb-10 md:text-5xl md:leading-[1.25]">
        Maximize Every Step of Your Marketing Funnel
      </h2>
      <p className="mx-auto max-w-[1150px] text-lg italic leading-6 md:text-xl md:leading-8">
        We don &apos;t just manage your ad accounts—we provide a full-funnel
        marketing strategy leveraging the best platforms and services to help
        you solve your biggest challenges and achieve your goals.
      </p>
      <div className="mt-14 items-start justify-center md:mt-20 lg:flex">
        <Stanga
          serviciuSelectat={serviciuSelectat}
          setlecteazaServiciul={setServiciuSelectat}
        />
        <Dreapta serviciuSelectat={serviciuSelectat} />
      </div>
    </section>
  );
}

export default ToateServiciile


