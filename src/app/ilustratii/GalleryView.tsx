import React from 'react'
import { ImageData } from './ilustratiiData';
import GalleryGrid from './GalleryGrid';
import Image from 'next/image';

const GalleryView = ({ data }: { data: ImageData[] }) => {
  return <GalleryGrid>
    {data.map(d => <Image className='py-5 max-h-[90vh] min-w-[300px] w-auto  mx-auto' loading='lazy' key={d.alt} {...d} />)}
  </GalleryGrid>
};

export default GalleryView