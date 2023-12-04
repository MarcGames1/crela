'use client'
import React, { ReactNode } from 'react';
import { WhatsappCta } from '@/components';
import { motion } from 'framer-motion';
import { IFlexibleColumnSection } from '@/interfaces/IFlexibleColumnSection';

const FlexibleColumnSection = ({
  sectionHeading,
  p,
  reversed = false,
  children,
}: IFlexibleColumnSection) => {
  const desktopPlacement = reversed ? 'lg:order-2' : 'lg:order-1';
  const mobilePlacement = reversed ? 'lg:order-1' : 'lg:order-2';

  return (
    <section className="grid gap-1 md:grid-rows-2 md:grid-cols-none lg:grid-rows-none lg:grid-cols-2 items-center place-items-center p-5 lg:mx-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: [1, 1.2, 1], x: 0, y: 0 },
          hidden: { opacity: 0, scale: 0, x: reversed ? 100 : -100, y: -50 },
        }}
        className={`container  place-self-center self-center justify-self-center w-full ${desktopPlacement}`}
      >
        <div className="prose w-full block m-auto ">
          <h2 className="text-center">{sectionHeading}</h2>
          {typeof p === 'string' ? (
            <p className="leading-7 tracking-wider px-5">{p}</p>
          ) : (
            <div className="leading-7 tracking-wider px-5">{p}</div>
          )}
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: [1, 1.2, 1], x: 0, y: 0 },
          hidden: { opacity: 0, scale: 0, x: reversed ? -100 : 100, y: -50 },
        }}
        className={`self-stretch w-full h-full  text-center ${mobilePlacement}`}
      >
        {children || <WhatsappCta />}
      </motion.div>
    </section>
  );
};

export default FlexibleColumnSection