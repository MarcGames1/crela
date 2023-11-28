'use client'
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 
import { ILogoExample, LogoExample } from './LogoExample';

export interface ILogoDefinitionData {
  sectionHeader: string;
  sectionIntro: string;
  examples: ILogoExample[];
}

export const LogoDefinition = ({
  sectionHeader,
  sectionIntro,
  examples,
}: ILogoDefinitionData) => {

     const controls = useAnimation();
      const [ref, inView] = useInView({
        triggerOnce: true, // Pentru a declanșa animația doar o dată
    
      });

    useEffect(() => {
      if (inView) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            duration: 0.5,
          },
        });
      }
    }, [controls, inView]);


  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={controls}
      className="flex flex-col lg:mx-20 md:mx-10 mx-5 space-y-8"
    >
      <div>
        <h2 className="text-2xl text-center font-bold mb-4">{sectionHeader}</h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 0.5, delay: 0.2 }}
          className="text-lg mb-4 md:w-1/2 m-auto leading-10"
        >
          {sectionIntro}
        </motion.p>
        <motion.ul
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 0.5, delay: 0.4 }}
          className="list-disc m-10 gap-10 place-items-center pl-8"
        >
          {examples.map((example, idx) => {
            return (
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', duration: 0.5, delay: idx * 0.1 }}
                className="grid lg:grid-flow-col grid-flow-row "
                key={idx}
              >
                <LogoExample isReversed={idx % 2 === 0} {...example} />
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </motion.div>
  );
};
