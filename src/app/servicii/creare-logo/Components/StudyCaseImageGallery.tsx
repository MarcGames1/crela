"use client";
import ImageGallery from "react-image-gallery";
import React from "react";

interface IStudyCaseImageGallery {
  images: { thumbnail: string; original: string }[];
  thumbnailPosition: "bottom" | "left" | "right" | "top" | undefined;
}
const StudyCaseImageGallery = ({
  images,
  thumbnailPosition,
}: IStudyCaseImageGallery) => {
  return (
    <ImageGallery
      thumbnailPosition={thumbnailPosition}
      lazyLoad={true}
      items={images}
    />
  );
};
export default StudyCaseImageGallery;
