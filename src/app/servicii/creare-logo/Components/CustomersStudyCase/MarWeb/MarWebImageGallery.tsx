import StudyCaseImageGallery from "@/app/servicii/creare-logo/Components/StudyCaseImageGallery";
import React from "react";

const images = [
  {
    original: "/Logo-Mockups/MarWeb-1.png",
    thumbnail: "/Logo-Mockups/MarWeb-1.png",
    description: "Mockup MarWeb1",
  },
  {
    original: "/Logo-Mockups/MarWeb2.png",
    thumbnail: "/Logo-Mockups/MarWeb2.png",
    description: "Mockup MarWeb2",
  },
  {
    original: "/Logo-Mockups/MarWeb3.png",
    thumbnail: "/Logo-Mockups/MarWeb3.png",
    description: "Mockup MarWeb3",
  },
  {
    original: "/Logo-Mockups/MarWeb4.png",
    thumbnail: "/Logo-Mockups/MarWeb4.png",
    description: "Mockup MarWeb4",
  },
  {
    original: "/Logo-Mockups/MarWeb5.png",
    thumbnail: "/Logo-Mockups/MarWeb5.png",
    description: "Mockup MarWeb5",
  },
  {
    original: "/Logo-Mockups/MarWeb6.png",
    thumbnail: "/Logo-Mockups/MarWeb6.png",
    description: "Mockup MarWeb6",
  },
  {
    original: "/Logo-Mockups/MarWeb7.png",
    thumbnail: "/Logo-Mockups/MarWeb7.png",
    description: "Mockup MarWeb7",
  },
  {
    original: "/Logo-Mockups/MarWeb8.png",
    thumbnail: "/Logo-Mockups/MarWeb8.png",
    description: "Mockup MarWeb8",
  },
  {
    original: "/Logo-Mockups/MarWeb9.png",
    thumbnail: "/Logo-Mockups/MarWeb9.png",
    description: "Mockup MarWeb9",
  },
  {
    original: "/Logo-Mockups/MarWeb10.png",
    thumbnail: "/Logo-Mockups/MarWeb10.png",
    description: "Mockup MarWeb10",
  },
  {
    original: "/Logo-Mockups/MarWeb11.png",
    thumbnail: "/Logo-Mockups/MarWeb11.png",
    description: "Mockup MarWeb11",
  },
  {
    original: "/Logo-Mockups/MarWeb12.png",
    thumbnail: "/Logo-Mockups/MarWeb12.png",
    description: "Mockup MarWeb12",
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
