import React from "react";
import Image from "next/image";
import StudyCaseImageGallery from "@/app/servicii/creare-logo/Components/StudyCaseImageGallery";

const images = [
  {
    original: "/Logo-Mockups/BaseConsultingAgency1.png",
    thumbnail: "/Logo-Mockups/BaseConsultingAgency1.png",
  },
  {
    original: "/Logo-Mockups/BaseConsultingAgency2.png",
    thumbnail: "/Logo-Mockups/BaseConsultingAgency2.png",
  },
  {
    original: "/Logo-Mockups/BaseConsultingAgency3.png",
    thumbnail: "/Logo-Mockups/BaseConsultingAgency3.png",
  },
  {
    original: "/Logo-Mockups/BaseConsultingAgency4.png",
    thumbnail: "/Logo-Mockups/BaseConsultingAgency4.png",
  },
  {
    original: "/Logo-Mockups/BaseConsultingAgency5.png",
    thumbnail: "/Logo-Mockups/BaseConsultingAgency5.png",
  },
  {
    original: "/Logo-Mockups/BaseConsultingAgency6.png",
    thumbnail: "/Logo-Mockups/BaseConsultingAgency6.png",
  },
  {
    original: "/Logo-Mockups/BaseConsultingAgency7.png",
    thumbnail: "/Logo-Mockups/BaseConsultingAgency7.png",
  },
  {
    original: "/Logo-Mockups/BaseConsultingAgency8.png",
    thumbnail: "/Logo-Mockups/BaseConsultingAgency8.png",
  },
];
const BaseConsultingImages = ({
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

export default BaseConsultingImages;
