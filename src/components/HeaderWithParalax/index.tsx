'use client'
import React, { PropsWithChildren } from 'react'
import { Parallax } from 'react-parallax';


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
      strength={500}
    >
      <div className="  flex  items-center py-20 text-center overflow-hidden ">
        {children}
      </div>
    </Parallax>
  );
};

export default HeaderWithParalax