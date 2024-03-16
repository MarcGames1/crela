import React from "react";

import StudyCaseImageGallery from "@/app/servicii/creare-logo/Components/StudyCaseImageGallery";

const images = [
  {
    original: "/Logo-Mockups/GetAroundDigital1.png",
    thumbnail: "/Logo-Mockups/GetAroundDigital1.png",
    description: "Mockup GetAroundDigital1",
  },
  {
    original: "/Logo-Mockups/GetAroundDigital2.png",
    thumbnail: "/Logo-Mockups/GetAroundDigital2.png",
    description: "Mockup GetAroundDigital2",
  },
  {
    original: "/Logo-Mockups/GetAroundDigital3.png",
    thumbnail: "/Logo-Mockups/GetAroundDigital3.png",
    description: "Mockup GetAroundDigital3",
  },
  {
    original: "/Logo-Mockups/GetAroundDigital4.png",
    thumbnail: "/Logo-Mockups/GetAroundDigital4.png",
    description: "Mockup GetAroundDigital4",
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
