import React from "react";
import Image from "next/image";
import TwoColumnLayout from "./TwoColumnsLayout";
import GetAroundDigitalText from "@/app/servicii/creare-logo/Components/CustomersStudyCase/GetAroundDigital/GetAroundDigitalText";
import GetAroundDigitalImages from "@/app/servicii/creare-logo/Components/CustomersStudyCase/GetAroundDigital/GetAroundDigitalImages";
import ThinkDigitalImages from "@/app/servicii/creare-logo/Components/CustomersStudyCase/ThinkDigital/ThinkDigitalImages";
import ThinkDigitalText from "@/app/servicii/creare-logo/Components/CustomersStudyCase/ThinkDigital/ThinkDigitalText";
import MarWebImageGallery from "@/app/servicii/creare-logo/Components/CustomersStudyCase/MarWeb/MarWebImageGallery";
import MarWebText from "@/app/servicii/creare-logo/Components/CustomersStudyCase/MarWeb/MarWebText";
import BaseConsultingImages from "@/app/servicii/creare-logo/Components/CustomersStudyCase/BaseConsulting/BaseConsultingImages";
import BaseConsultingText from "@/app/servicii/creare-logo/Components/CustomersStudyCase/BaseConsulting/BaseConsultingText";
const LogouriRealizate = () => {
  return (
    <section>
      <h2
        className="text-center mb-2 mx-auto text-3xl font-bold leading-[1.25] md:text-5xl md:leading-tight 
              [&>u]:decoration-[2px] [&>u]:underline-offset-[5px] md:[&>u]:decoration-[5px] 
              md:[&>u]:underline-offset-[10px] max-w-[1300px]"
      >
        Uite o parte din logo-urile realizate de mine
      </h2>

      {/* <div></div> */}
      <div>
        <TwoColumnLayout
          leftSideContent={<GetAroundDigitalText />}
          rightSideContent={
            <GetAroundDigitalImages thumbnailPosition={"right"} />
          }
        />
        <TwoColumnLayout
          leftSideContent={<ThinkDigitalImages thumbnailPosition={"left"} />}
          rightSideContent={<ThinkDigitalText />}
        />
        <TwoColumnLayout
          leftSideContent={<MarWebText />}
          rightSideContent={<MarWebImageGallery thumbnailPosition={"right"} />}
        />
        <TwoColumnLayout
          leftSideContent={<BaseConsultingImages thumbnailPosition={"left"} />}
          rightSideContent={<BaseConsultingText />}
        />
      </div>
    </section>
  );
};

export default LogouriRealizate;
