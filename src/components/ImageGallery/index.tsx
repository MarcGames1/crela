'use client';
import React from 'react';
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

const ImageGalleryComponent = ({
  images,
}: {
  images: ReactImageGalleryItem[];
}) => {
  return <ReactImageGallery items={images} />;
};

export default ImageGalleryComponent;
 