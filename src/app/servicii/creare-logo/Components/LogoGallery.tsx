'use client'

import React from 'react'
import Image from 'next/image'

import Carousel from '@/components/Carousel/Carousel'
import styles from './logoGallery.module.css'
import { Iimage } from '@/interfaces/image'
export interface ILogoGallery {
  sectionHeading: string;
  images: Iimage[];
}



const LogoGallery = ({sectionHeading, images}:ILogoGallery) => {
    if (images === undefined) return
    if (images.length === 0) return
  return (
    <section>
      <h2> {sectionHeading}</h2>
      <Carousel slides={images} />

    </section>
  );
}

export default LogoGallery