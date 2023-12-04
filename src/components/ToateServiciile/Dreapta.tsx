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
    appearAnimation.set({ 
      opacity: 0,
      scale: 0,
      rotate:-180
      
    
    });
  appearAnimation.start({
    opacity:1,
    scale: 1,
    rotate:0,
    transition:{
        type:'spring',
        duration: 1.5 ,
      }
       
      
})
  }, [serviciuSelectat])



  return (
    <motion.div
      id="container"
      animate={appearAnimation}
      className="relative m-4 max-h-[80vh] min-h-full glas shadow-2xl drop-shadow-2xl"
    >
      <figure className='relative min-h-[300px]'>
        <Image className='max-h-full max-w-full' {...serviciuSelectat.image} width={800} height={500} />
      </figure>
      <div className="absolute bottom-0 left-0 w-full bg-[#ededed]/80 px-2 py-5 md:p-8 lg:p-12 ">
        <p className="px-3 leading-10 text-[#000] md:px-0 md:leading-5 text-2xl  bg-clip-text text-transparent bg-primary-gradient font-bold text-center">
          {serviciuSelectat.name}
        </p>
        <br />
        <br />
        <p className="px-3 text-lg leading-5 text-[#000] md:px-0 md:leading-5">
          {serviciuSelectat.description}
        </p>
        <div className="m-5 ">
          <ActionBtn.MainCta
            text={'citeste mai mult'}
            href={serviciuSelectat.href}
            dataTip={serviciuSelectat.description}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Dreapta