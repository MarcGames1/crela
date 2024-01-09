import { PageComponent } from '@/components'
import React from 'react'
import { GalleryData, IlustratiiMedadata } from './ilustratiiData'
import GalleryView from './GalleryView'


export const metadata = IlustratiiMedadata


const Ilustratiipage = () => {
  return (
    <PageComponent>
        <GalleryView data={GalleryData} />
    </PageComponent>
  )
}

export default Ilustratiipage