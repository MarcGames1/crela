'use client'
import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Parallax = dynamic(
  () => import('react-parallax').then((module) => module.Parallax),
  {
    ssr: false, // Asigură că această componentă nu este randată pe server
  }
);

const Background = dynamic(
  () => import('react-parallax').then((module) => module.Background),
  {
    ssr: false, // Asigură că această componentă nu este randată pe server
  }
);

interface HeaderWithParalaxProps {
  bgImage: string;
}

const HeaderWithParalax = ({
  children,
  bgImage,
}: PropsWithChildren<HeaderWithParalaxProps>) => {
  return (
    <Parallax
      className="w-full overflow-hidden "
      bgImage={bgImage}
      strength={100}
    >
      <Background className="custom-bg  w-full lg:h-full relative bg-no-repeat object-cover">
        <Image
          className="w-full sm:w-auto h-full object-cover"
          loading="lazy"
          src={bgImage}
          alt="Bg Parallax"
          fill
        />
      </Background>
      <div className="flex text-white items-center py-20 text-center overflow-hidden">
        {children}
      </div>
    </Parallax>
  );
};

export default HeaderWithParalax;
