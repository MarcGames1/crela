'use client';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, stagger, inView  } from 'framer-motion';


import Image from 'next/image';

export const ImagesGrid = ({
  image,
  secondaryImages,
}: {
  image: {
    src: string;
    alt: string;
    width?: number | undefined;
    height?: number | undefined;
  };
  secondaryImages: {
    src: string;
    alt: string;
    width?: number | undefined;
    height?: number | undefined;
  }[];
}) => {
  const middleIndex = Math.ceil(secondaryImages.length / 2);
  const firstHalf = secondaryImages.slice(0, middleIndex);
  const secondHalf = secondaryImages.slice(middleIndex);
  const container = useRef(null);
  const isInView = useInView(container);
  const controls = useAnimation();

  



  if(secondaryImages.length === 1 ){
    return (
      <motion.div
        ref={container}
        initial={{ opacity: 0, x: -100, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        className="block m-auto relative w-auto aspect-square h-[550px]"
        // Poți ajusta dimensiunile pentru imagine
      >
        <div className="absolute top-0 left-0">
          <img {...image} />
        </div>
        <div className="absolute  border-white border-4 bottom-0 right-0">
          <img
            src={secondaryImages[0].src}
            alt={secondaryImages[0].alt}
            width={secondaryImages[0].width || 150}
            height={secondaryImages[0].height || 150}
          />
        </div>
      </motion.div>
    );

  }

  if(secondaryImages.length === 2) {return (
    <motion.div
      initial={{ opacity: 0, x: -100, y: -100 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      className="grid grid-flow-row place-items-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: -100, y: -100 }}
        animate={{ opacity: 1, scale: 1, x: 0, y:0 }}
        transition={{ type: 'spring', duration: 0.5, delay: 0.5 }}
        className=""
      >
        <Image className=" scale-75" {...secondaryImages[0]} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', duration: 0.5, delay: 0.5 }}
        className=""
      >
        <Image {...image} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', duration: 0.5, delay: 0.5 }}
        className=""
      >
        <Image className=" scale-75" {...secondaryImages[1]} />
      </motion.div>
    </motion.div>
  );
  }

  return (
    secondaryImages.length >= 8 && (
      <motion.div
        initial={{ opacity: 0, x: -100, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        className="grid grid-cols-4 gap-4 place-items-center"
      >
        {firstHalf.map((secondaryImage, index) => (
          <motion.div
            initial={{ opacity: 0, x: -100, y: -100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ type: 'spring', duration: 0.5, delay: index * 0.1 }}
            key={index}
            className="firstRow col-span-1"
          >
            <Image
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              width={secondaryImage.width || 50}
              height={secondaryImage.height || 50}
            />
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: 0.5, delay: 0.5 }}
          className="col-span-4 row-span-1 row-start-2 row-end-2"
        >
          <Image {...image} />
        </motion.div>
        {secondHalf.map((secondaryImage, index) => (
          <motion.div
            id="secondRow"
            key={index}
            className="col-span-1"
            initial={{ opacity: 0, x: -100, y: -100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ type: 'spring', duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              width={secondaryImage.width || 50}
              height={secondaryImage.height || 50}
            />
          </motion.div>
        ))}
      </motion.div>
    )
  );
};
