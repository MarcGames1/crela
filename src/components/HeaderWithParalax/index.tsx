'use client'
import React, { PropsWithChildren } from 'react'
import { Parallax, Background } from 'react-parallax';
import Image from 'next/image';

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
      <Background className="custom-bg h-1/2 w-full lg:h-full relative">
        <Image
          className="w-full sm:w-auto	 h-full object-cover"
          src={bgImage}
          alt="fill murray"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Background>
      <div className="  flex text-white items-center py-20 text-center overflow-hidden ">
        {children}
      </div>
    </Parallax>
  );
};

export default HeaderWithParalax