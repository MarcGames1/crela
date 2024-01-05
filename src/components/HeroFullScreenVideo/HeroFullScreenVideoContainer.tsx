import React, { PropsWithChildren } from 'react'

const HeroFullScreenVideoContainer = ({children}:PropsWithChildren) => {
  return (
    <div className="max-w-screen  min-h-screen relative">{children}</div>
  );
}

export default HeroFullScreenVideoContainer