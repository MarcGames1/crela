import { PageComponent } from '@/components'
import React from 'react'
import { GalleryData, IlustratiiMedadata } from './ilustratiiData';
import GalleryView from './GalleryView'


export const metadata = IlustratiiMedadata
const data = JSON.parse(JSON.stringify(GalleryData))

const Ilustratiipage =  () => {

  return (
    <PageComponent>
      <GalleryView data={data} />
    </PageComponent>
  );
}

export default Ilustratiipage