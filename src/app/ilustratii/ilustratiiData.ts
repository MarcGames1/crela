import { Metadata } from "next";

export interface ImageData { src: string; alt: string; width?: number; height?: number;}



export const IlustratiiMedadata: Metadata = {
  title: 'Ilustratii » CRELA ✨',
  description:
    '✌ Aici poti vedea o parte din desenele facute de mine. Întotdeauna am avut o pasiune pentru aspectul vizual, estetic',
  robots: 'index, follow',
  alternates: {
    canonical: 'ilustratii',
  },
};
const IlustratiiFolder =  '/ilustratii/'
export const GalleryData: ImageData[] = [
  {
    src: IlustratiiFolder + '1.jpg',
    alt: '1',
    width: 1920,
    height: 2561,
  },
  {
    src: IlustratiiFolder + '2.png',
    alt: '2',
    width: 360,
    height: 480,
  },
  {
    src: IlustratiiFolder + '3.jpg',
    alt: '3',
    width: 1920,
    height: 2561,
  },
  {
    src: IlustratiiFolder + '4.jpg',
    alt: '4',
    width: 1920,
    height: 2561,
  },
  {
    src: IlustratiiFolder + '5.jpg',
    alt: '5',
    width: 1920,
    height: 2561,
  },
  {
    src: IlustratiiFolder + '6.jpg',
    alt: '6',
    width: 1920,
    height: 1439,
  },
  {
    src: IlustratiiFolder + '7.jpg',
    alt: '7',
    width: 1920,
    height: 1439,
  },
  {
    src: IlustratiiFolder + '8.jpg',
    alt: '8',
    width: 1920,
    height: 1439,
  },
  {
    src: IlustratiiFolder + '9.jpg',
    alt: '9',
    width: 1920,
    height: 2561,
  },
  {
    src: IlustratiiFolder + '10.jpg',
    alt: '10',
    width: 1920,
    height: 2561,
  },
  {
    src: IlustratiiFolder + '11.jpg',
    alt: '11',
    width: 1920,
    height: 2561,
  },
  {
    src: IlustratiiFolder + '12.jpg',
    alt: '12',
    width: 1920,
    height: 2561,
  },
  {
    src: IlustratiiFolder + '13.jpg',
    alt: '13',
    width: 1920,
    height: 2561,
  },
  {
    src: IlustratiiFolder + '14.jpg',
    alt: '14',
    width: 1920,
    height: 2561,
  },
  {
    src: IlustratiiFolder + '15.jpg',
    alt: '15',
    width: 1199,
    height: 1600,
  },
];