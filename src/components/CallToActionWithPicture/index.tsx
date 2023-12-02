'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import { ActionBtn } from '../Buttons';




const CallToActionWithPicture = () => {
  

  const {ref, inView} = useInView();
  const powderAnimation = useAnimation();
  const lauraAnimation = useAnimation();
  const leftSideAnimation = useAnimation();

  useEffect( () =>{
    if(inView){
      powderAnimation.start({x: 0,
      transition:{
        type:'spring',
        duration: 1, bounce:0.1,
         delay: 0,
         
      }
      })
      lauraAnimation.start({x: 0,
      transition:{
        type:'spring',
       
        duration: 1.3, bounce:0.1
      }
      })
      leftSideAnimation.start({x: 0,
      transition:{
        type:'spring',
        duration: 1.5, bounce:0.5
      }
      })
    }
    if(!inView){
      powderAnimation.start({x: '100vw'})
      lauraAnimation.start({x: '50vw'})
      leftSideAnimation.start({x: '-100vw'})
    }
  }, [inView])

  return (
    <section className=" min-h-[75vh] flex lg:flex-row flex-col max-w-screen overflow-hidden">
      <motion.div animate={leftSideAnimation} className="left p-10">
        <h3 className="mb-2 text-3xl font-bold text-secondary md:mb-7 md:text-5xl md:leading-[1.25] ">
          Laura - Expertul Tău în{' '}
          <span className="bg-clip-text text-transparent bg-primary-gradient">
            Marketing Online
          </span>
        </h3>
        <span className="mb-5 text-xl font-medium uppercase leading-tight tracking-wider text-secondary md:mb-8">
          Strategii Unice pentru Succesul Tău Online
        </span>
        <div className="h-[3px] w-24 bg-accent"></div>
        <p className="my-5 text-large leading-6">
          Sunt Laura, și mă dedic în mod pasionat dezvoltării și implementării
          unor strategii personalizate în marketingul online. Imi place să creez
          soluții care să se potrivească perfect nevoilor tale. Mă angajez să
          lucrez alături de tine pentru a-ți aduce afacerea la nivelul următor
          în mediul online.
        </p>
        <ActionBtn.Primary />
      </motion.div>
      <div ref={ref} className="right relative w-full h-full">
        <motion.div
          animate={powderAnimation}
          className="absolute top-0 h-full w-full"
        >
          <Image alt="Powder" fill src={'/images/Powder.png'} />
        </motion.div>
        <motion.div
          animate={lauraAnimation}
          className=" top-0 max-w-[500px] display:block"
        >
          <Image
            alt="Laura"
            src={'/images/LauraNoBg.png'}
            width={200}
            height={222}
            sizes="(min-width: 500px) 500px, 100vw)"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionWithPicture;
