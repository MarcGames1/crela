'use client'
import { motion } from 'framer-motion';
import React from 'react'
import { ActionBtn } from '../Buttons';

const LeftSide = () => {
  return (
    <motion.div className="left p-10">
      <h3 className="mb-2 text-3xl font-bold text-secondary md:mb-7 md:text-5xl md:leading-[1.25] ">
        <span className="bg-clip-text text-transparent bg-primary-gradient">
          Agentie Marketing Online
        </span>
      </h3>
      <span className="mb-5 text-xl font-medium uppercase leading-tight tracking-wider text-secondary md:mb-8">
        Strategii Unice pentru Succesul Tău Online
      </span>
      <div className="h-[3px] w-24 bg-accent"></div>
      <p className="my-5 text-large tracking-widest lg:max-w-[50vw] leading-6">
        Suntem o agenție dedicată cu pasiune dezvoltării și implementării
        strategiilor personalizate în marketingul online. Ne pricepem să creăm
        soluții perfect adaptate nevoilor tale. Echipa noastră se angajează să
        lucreze alături de tine pentru a-ți propulsa afacerea la nivelul următor
        în mediul online. Hai să facem ca afacerea ta să strălucească în
        online!
      </p>
      <ActionBtn.Primary />
    </motion.div>
  );
}

export default LeftSide