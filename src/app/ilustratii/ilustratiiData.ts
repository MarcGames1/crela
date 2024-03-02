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
const ThumbnailFolder ='/ilustratii/thumbnails/'

export interface GalleryData extends ImageData {
  thumbnail: string;
  id: number;
}

class GalleryItem implements GalleryData {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  thumbnail: string;

  constructor(id: number, src: string, alt: string, width: number, height: number, thumbnail: string) {
    this.id = id;
    this.src = src;
    this.alt = alt;
    this.width = width;
    this.height = height;
    this.thumbnail = thumbnail;
  }

}
export const GalleryData: GalleryData[] = [
  new GalleryItem(1, IlustratiiFolder + '1.jpg', '1', 1920, 2561, ThumbnailFolder + '1.png'),
  new GalleryItem(2, IlustratiiFolder + '2.png', '2', 360, 480, ThumbnailFolder + '2.png'),
  new GalleryItem(3, IlustratiiFolder + '3.jpg', '3', 1920, 2561, ThumbnailFolder + '3.png'),
  new GalleryItem(4, IlustratiiFolder + '4.jpg', '4', 1920, 2561, ThumbnailFolder + '4.png'),
  new GalleryItem(5, IlustratiiFolder + '5.jpg', '5', 1920, 2561, ThumbnailFolder + '5.png'),
  new GalleryItem(6, IlustratiiFolder + '6.jpg', '6', 1920, 1439, ThumbnailFolder + '6.png'),
  new GalleryItem(7, IlustratiiFolder + '7.jpg', '7', 1920, 1439, ThumbnailFolder + '7.png'),
  new GalleryItem(8, IlustratiiFolder + '8.jpg', '8', 1920, 1439, ThumbnailFolder + '8.png'),
  new GalleryItem(9, IlustratiiFolder + '9.jpg', '9', 1920, 2561, ThumbnailFolder + '9.png'),
  new GalleryItem(10, IlustratiiFolder + '10.jpg', '10', 1920, 2561, ThumbnailFolder + '10.png'),
  new GalleryItem(11, IlustratiiFolder + '11.jpg', '11', 1920, 2561, ThumbnailFolder + '11.png'),
  new GalleryItem(12, IlustratiiFolder + '12.jpg', '12', 1920, 2561, ThumbnailFolder + '12.png'),
  new GalleryItem(13, IlustratiiFolder + '13.jpg', '13', 1920, 2561, ThumbnailFolder + '13.png'),
  new GalleryItem(14, IlustratiiFolder + '14.jpg', '14', 1920, 2561, ThumbnailFolder + '14.png'),
  new GalleryItem(15, IlustratiiFolder + '15.jpg', '15', 1199, 1600, ThumbnailFolder + '15.png'),
];


