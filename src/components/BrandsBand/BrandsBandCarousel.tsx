'use client'
import { Iimage } from '@/interfaces/image';
import React from 'react'
import Carousel from '../Carousel/Carousel';

const BrandsBandCarousel = ({images}:{images:Iimage[]}) => {
  return <Carousel bgColor='bg-wthite' rtl slides={images} />;
}

export default BrandsBandCarousel