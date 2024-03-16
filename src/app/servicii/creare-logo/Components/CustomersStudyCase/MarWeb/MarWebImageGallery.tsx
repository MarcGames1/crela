import StudyCaseImageGallery from "@/app/servicii/creare-logo/Components/StudyCaseImageGallery";
import React from "react";

const images = [
  {
    original: "/Logo-Mockups/MarWeb-1.png",
    thumbnail: "/Logo-Mockups/MarWeb-1.png",
  },
  {
    original: "/Logo-Mockups/MarWeb2.png",
    thumbnail: "/Logo-Mockups/MarWeb2.png",
  },
  {
    original: "/Logo-Mockups/MarWeb3.png",
    thumbnail: "/Logo-Mockups/MarWeb3.png",
  },
  {
    original: "/Logo-Mockups/MarWeb4.png",
    thumbnail: "/Logo-Mockups/MarWeb4.png",
  },
  {
    original: "/Logo-Mockups/MarWeb5.png",
    thumbnail: "/Logo-Mockups/MarWeb5.png",
  },
  {
    original: "/Logo-Mockups/MarWeb6.png",
    thumbnail: "/Logo-Mockups/MarWeb6.png",
  },
  {
    original: "/Logo-Mockups/MarWeb7.png",
    thumbnail: "/Logo-Mockups/MarWeb7.png",
  },
  {
    original: "/Logo-Mockups/MarWeb8.png",
    thumbnail: "/Logo-Mockups/MarWeb8.png",
  },
  {
    original: "/Logo-Mockups/MarWeb9.png",
    thumbnail: "/Logo-Mockups/MarWeb9.png",
  },
  {
    original: "/Logo-Mockups/MarWeb10.png",
    thumbnail: "/Logo-Mockups/MarWeb10.png",
  },
  {
    original: "/Logo-Mockups/MarWeb11.png",
    thumbnail: "/Logo-Mockups/MarWeb11.png",
  },
  {
    original: "/Logo-Mockups/MarWeb12.png",
    thumbnail: "/Logo-Mockups/MarWeb12.png",
  },
];
const MarWebImageGallery = ({
  thumbnailPosition,
}: {
  thumbnailPosition: "bottom" | "left" | "right" | "top" | undefined;
}) => {
  return (
    <StudyCaseImageGallery
      thumbnailPosition={thumbnailPosition}
      images={images}
    />
  );
};

export default MarWebImageGallery;
