'use client';
import React from 'react';
import { ActionBtn } from '../Buttons';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';


import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


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
        duration: 1, bounce:0.3,
         delay: .5,
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
      leftSideAnimation.start({x: '-50vw'})
    }
  }, [inView])

  return (
    <section className=" min-h-[75vh] flex lg:flex-row flex-col max-w-screen ">
      <motion.div animate={leftSideAnimation} className="left p-10">
        <h3 className="mb-2 text-3xl font-bold text-secondary md:mb-7 md:text-5xl md:leading-[1.25]">
          The Last Digital Marketing Agency You’ll Ever Need.
        </h3>
        <span className="mb-5 text-xl font-medium uppercase leading-tight tracking-wider text-secondary md:mb-8">
          GET MARKETING THAT DRIVES RESULTS
        </span>
        <div className="h-[3px] w-24 bg-accent"></div>
        <p className="my-5 text-large leading-6">
          Ready to level up your strategy? We’re here to help. For 10 years
          we’ve provided full-service digital marketing expertise.
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
            objectFit="contain"
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
