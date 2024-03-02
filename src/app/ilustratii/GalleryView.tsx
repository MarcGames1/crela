'use client'
import React, { useEffect, useState } from 'react'
import { GalleryData } from './ilustratiiData';
import GalleryGrid from './GalleryGrid';
import Image from 'next/image';
import ImageGallery from 'react-image-gallery';
const GalleryView = ({ data }: { data: GalleryData[] }) => {

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (selectedImageIndex !== null) {
    window.addEventListener('keydown', (e)=>{
      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else window.removeEventListener('keydown', () =>{return});
    })
    }
    
  }, [selectedImageIndex]);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };
  const images = data.map((d) => ({
    original: d.src,
    thumbnail: d.thumbnail,
  }));

  if(selectedImageIndex !== null){
    return (
      <ImageGallery
        items={images}
        startIndex={selectedImageIndex}

        // onClose={(e) => setSelectedImageIndex(null)}
      />
    );
  } else
  return (
    
      <GalleryGrid>
        {data.map((d, idx) => (
          <div
            onClick={() => handleImageClick(idx)}
            key={idx}
            className="after:content group relative mb-5 block cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            <Image
              className="py-5 max-h-[90vh] min-w-[300px] w-auto  mx-auto transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
              loading={idx === 0 ? 'eager' : 'lazy'}
              key={d.id}
              alt={d.alt}
              height={d.height}
              width={d.width}
              src={d.src}
            />
          </div>
        ))}
      </GalleryGrid>
  
  );
};

export default GalleryView