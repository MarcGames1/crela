import React from "react";
import StudyCaseImageGallery from "@/app/servicii/creare-logo/Components/StudyCaseImageGallery";

const images = [
  {
    original: "/Logo-Mockups/ThinkDigital1.png",
    thumbnail: "/Logo-Mockups/ThinkDigital1.png",
    description: "Mockup ThinkDigital1",
  },
  {
    original: "/Logo-Mockups/ThinkDigital2.png",
    thumbnail: "/Logo-Mockups/ThinkDigital2.png",
    description: "Mockup ThinkDigital2",
  },
  {
    original: "/Logo-Mockups/ThinkDigital3.png",
    thumbnail: "/Logo-Mockups/ThinkDigital3.png",
    description: "Mockup ThinkDigital3",
  },
  {
    original: "/Logo-Mockups/ThinkDigital4.png",
    thumbnail: "/Logo-Mockups/ThinkDigital4.png",
    description: "Mockup ThinkDigital4",
  },
  {
    original: "/Logo-Mockups/ThinkDigital5.png",
    thumbnail: "/Logo-Mockups/ThinkDigital5.png",
    description: "Mockup ThinkDigital5",
  },
  {
    description: "Mockup ThinkDigital6",
    original: "/Logo-Mockups/ThinkDigital6.png",
    thumbnail: "/Logo-Mockups/ThinkDigital6.png",
  },
  {
    original: "/Logo-Mockups/ThinkDigital7.png",
    thumbnail: "/Logo-Mockups/ThinkDigital7.png",
    description: "Mockup ThinkDigital7",
  },
  {
    original: "/Logo-Mockups/ThinkDigital8.png",
    thumbnail: "/Logo-Mockups/ThinkDigital8.png",
    description: "Mockup ThinkDigital8",
  },
  {
    original: "/Logo-Mockups/ThinkDigital9.png",
    thumbnail: "/Logo-Mockups/ThinkDigital9.png",
    description: "Mockup ThinkDigital9",
  },
];

const ThinkDigitalImages = ({
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

export default ThinkDigitalImages;
