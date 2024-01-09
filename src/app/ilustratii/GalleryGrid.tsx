import React, { PropsWithChildren } from 'react'

const GalleryGrid = ({children}:PropsWithChildren) => {
  return (
    <div className='p-10 flex flex-wrap items-center justify-items-center justify-between '>{children}</div>
  )
}

export default GalleryGrid