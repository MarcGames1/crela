"use client";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import React from "react";

interface IStudyCaseImageGallery {
  images: { thumbnail: string; original: string }[];
  thumbnailPosition: "bottom" | "left" | "right" | "top" | undefined;
}
function renderItem(item: ReactImageGalleryItem) {
  return (
    <div className="image-gallery-image">
      <img
        title={item.description}
        src={item.original}
        alt={item.description}
      />
      <div className="image-gallery-description">{item.description}</div>
    </div>
  );
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
      renderItem={renderItem}
      autoPlay={true}
    />
  );
};
export default StudyCaseImageGallery;
