'use client'
import React, {} from 'react'
import Image from 'next/image';
import { ActionBtn } from '../Buttons';
import { servicii } from '@/StaticData/constants';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';


const Dreapta = ({serviciuSelectat=servicii[0]}) => {


  const appearAnimation =useAnimation()

  useEffect(()=>{
    appearAnimation.set({ opacity: 0 });
  appearAnimation.start({
    opacity:1,transition:{
        type:'spring',
        duration: 20 ,
      }
       
      
})
  }, [serviciuSelectat])



  return (
    <motion.div id='container' animate={appearAnimation} className="relative min-h-full glass shadow-xl">
    
      <figure>
        <Image {...serviciuSelectat.image} width={800} height={800} />
      </figure>
      <div className="absolute bottom-0 left-0 w-full bg-[#ededed] bg-opacity-90 px-2 py-5 md:p-8 2xl:p-12">
        <p className="px-3 text-lg leading-5 text-[#000] md:px-0 md:leading-5">
          {serviciuSelectat.name}
        </p>
        <br />
        <br />
        <p className="px-3 text-lg leading-5 text-[#000] md:px-0 md:leading-5">
          {serviciuSelectat.description}
        </p>
        <div className="m-5 ">
          <ActionBtn.MainCta text={'citeste mai mult'} href={serviciuSelectat.href} dataTip={serviciuSelectat.description} />
        </div>
      </div>
    </motion.div>
  );
}

export default Dreapta