import React from "react";

import StudyCaseImageGallery from "@/app/servicii/creare-logo/Components/StudyCaseImageGallery";

const images = [
  {
    original: "/Logo-Mockups/GetAroundDigital1.png",
    thumbnail: "/Logo-Mockups/GetAroundDigital1.png",
  },
  {
    original: "/Logo-Mockups/GetAroundDigital2.png",
    thumbnail: "/Logo-Mockups/GetAroundDigital2.png",
  },
  {
    original: "/Logo-Mockups/GetAroundDigital3.png",
    thumbnail: "/Logo-Mockups/GetAroundDigital3.png",
  },
  {
    original: "/Logo-Mockups/GetAroundDigital4.png",
    thumbnail: "/Logo-Mockups/GetAroundDigital4.png",
  },
];
const GetAroundDigitalImages = ({
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
export default GetAroundDigitalImages;
