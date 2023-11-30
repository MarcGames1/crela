'use client'

import React from 'react'

import Carousel from '@/components/Carousel/Carousel'
import { Iimage } from '@/interfaces/image'
export interface ILogoGallery {
  sectionHeading: string;
  images: Iimage[];
  rtl ?: boolean;
}



const LogoGallery = ({sectionHeading, images, rtl=false}:ILogoGallery) => {
    if (images === undefined) return
    if (images.length === 0) return
  return (
    <section>
      <h2 className="text-2xl text-center font-bold mb-4"> {sectionHeading}</h2>
      <Carousel rtl={false} slides={images} />
    </section>
  );
}

export default LogoGallery