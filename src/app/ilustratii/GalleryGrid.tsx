import React, { PropsWithChildren } from 'react'

const GalleryGrid = ({children}:PropsWithChildren) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3 w-screen  justify-items-center items-center">
      {children}
    </div>
  );
}

export default GalleryGrid