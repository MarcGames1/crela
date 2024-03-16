import dynamic from "next/dynamic";

type ComponentImport = () => Promise<any>;

const componentsToDynamicImport: Record<string, ComponentImport> = {
  PageComponent: () => import("@/components/Page"),
  HeroFullScreenVideo: () => import("@/components/HeroFullScreenVideo"),
  BrandsBand: () => import("@/components/BrandsBand"),
  HeaderWithParalax: () => import("@/components/HeaderWithParalax"),
  CallToActionWithPicture: () => import("@/components/CallToActionWithPicture"),
  TestimonialsCarousel: () => import("@/components/TestimonialsCarousel"),
  Top3Servicii: () => import("@/components/Top3Servicii"),
  ToateServiciile: () => import("@/components/ToateServiciile"),
};

const DynamicComponents: Record<string, any> = {};

Object.keys(componentsToDynamicImport).forEach((componentName) => {
  DynamicComponents[componentName] = dynamic(
    componentsToDynamicImport[componentName],
  );
});

// Utilizare: DynamicComponents.PageComponent, DynamicComponents.HeroFullScreenVideo etc.

import { testimonialData } from "@/StaticData/testimonialData";

export default function Homepage() {
  return (
    <>
      <DynamicComponents.PageComponent>
        <DynamicComponents.HeroFullScreenVideo />
        <DynamicComponents.BrandsBand />
        <DynamicComponents.CallToActionWithPicture />
        <DynamicComponents.HeaderWithParalax bgImage="/images/assets/parallax1.webp">
          <span
            className="mx-auto text-3xl font-bold leading-[1.25] md:text-5xl md:leading-tight 
                  [&>u]:decoration-[2px] [&>u]:underline-offset-[5px] md:[&>u]:decoration-[5px] 
                  md:[&>u]:underline-offset-[10px] max-w-[1300px]"
          >
            &ldquo;Știai că peste 76% din banii cheltuiți pe reclame sunt adesea
            aruncați pe fereastră?&rdquo;
          </span>
        </DynamicComponents.HeaderWithParalax>
        {/*<DynamicComponents.TestimonialsCarousel data={testimonialData} />*/}
        <DynamicComponents.Top3Servicii />
        <DynamicComponents.ToateServiciile />
        <DynamicComponents.HeaderWithParalax bgImage="/images/assets/parallax1.webp">
          <div
            className="mx-auto text-3xl font-semibold leading-[1.25] md:text-5xl md:leading-tight 
          [&>u]:decoration-[2px] [&>u]:underline-offset-[5px] md:[&>u]:decoration-[5px] 
          md:[&>u]:underline-offset-[10px] max-w-[1300px]"
          >
            We&apos;re Better <span className=" font-extrabold ">Together</span>
          </div>
        </DynamicComponents.HeaderWithParalax>
      </DynamicComponents.PageComponent>
    </>
  );
}
