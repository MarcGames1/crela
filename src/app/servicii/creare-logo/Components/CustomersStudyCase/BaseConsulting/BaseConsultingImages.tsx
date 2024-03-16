import React from "react";
import Image from "next/image";
import StudyCaseImageGallery from "@/app/servicii/creare-logo/Components/StudyCaseImageGallery";

const images = [
  {
    original: "/Logo-Mockups/BaseConsultingAgency1.png",
    thumbnail: "/Logo-Mockups/BaseConsultingAgency1.png",
    description: "Mockup BaseConsulting Agency",
  },
  {
    original: "/Logo-Mockups/BaseConsultingAgency2.png",
    thumbnail: "/Logo-Mockups/BaseConsultingAgency2.png",
    description: "Mockup BaseConsulting Agency",
  },
  {
    original: "/Logo-Mockups/BaseConsultingAgency3.png",
    thumbnail: "/Logo-Mockups/BaseConsultingAgency3.png",
    description: "Mockup BaseConsulting Agency",
  },
  {
    original: "/Logo-Mockups/BaseConsultingAgency4.png",
    thumbnail: "/Logo-Mockups/BaseConsultingAgency4.png",
    description: "Mockup BaseConsulting Agency",
  },
  {
    original: "/Logo-Mockups/BaseConsultingAgency5.png",
    thumbnail: "/Logo-Mockups/BaseConsultingAgency5.png",
    description: "Mockup BaseConsulting Agency",
  },
  {
    original: "/Logo-Mockups/BaseConsultingAgency6.png",
    thumbnail: "/Logo-Mockups/BaseConsultingAgency6.png",
    description: "Mockup BaseConsulting Agency",
  },
  {
    original: "/Logo-Mockups/BaseConsultingAgency7.png",
    thumbnail: "/Logo-Mockups/BaseConsultingAgency7.png",
    description: "Mockup BaseConsulting Agency",
  },
  {
    original: "/Logo-Mockups/BaseConsultingAgency8.png",
    thumbnail: "/Logo-Mockups/BaseConsultingAgency8.png",
    description: "Mockup BaseConsulting Agency",
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
