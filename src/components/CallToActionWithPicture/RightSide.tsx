'use client'
import {  motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'

const RightSide = () => {

   
    
  return (
 <motion.div
>
    <Image width={300} height={300} src={'/images/assets/HeroImage.png'} alt='hero image' />
  </motion.div>
  )
}

export default RightSide
