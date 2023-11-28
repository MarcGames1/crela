'use client'
import React from 'react'
import Image from 'next/image'
import { Carousel } from 'react-daisyui';
export interface ILogoGallery {
  sectionHeading: string;
  images: {
    src: string;
    alt: string,
    width: number;
    height: number;
  }[];
}



const LogoGallery = ({sectionHeading, images = []}:ILogoGallery) => {
    if (images === undefined) return
    if (images.length === 0) return
  return (
    <section>
      <h2> {sectionHeading}</h2>

      <Carousel className='rounded-box' display='slider' snap='start' width='half' >
        {images.map( (image, idx )=>{          
            return <Carousel.Item key={idx} src={image.src} alt={image.alt} />
        })}
      </Carousel>
    </section>
  );
}

export default LogoGallery