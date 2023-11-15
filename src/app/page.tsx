
import PageComponent from "@/components/Page";


import {
  HeroFullScreenVideo,
  BrandsBand,
  HeaderWithParalax,
  CallToActionWithPicture,
  TestimonialsCarousel,
  Top3Servicii,
  ToateServiciile,
} from '@/components';

import { testimonialData } from "@/StaticData/testimonialData";
const data = [{

},]
'https://disruptiveadvertising.com/';
export default function Homepage() {
  return (
    <>
      <PageComponent>
        <HeroFullScreenVideo />
        <BrandsBand />
        <CallToActionWithPicture />
        <HeaderWithParalax bgImage="/images/assets/parallax1.png">
          <span
            className="mx-auto text-3xl font-bold leading-[1.25] md:text-5xl md:leading-tight 
                  [&>u]:decoration-[2px] [&>u]:underline-offset-[5px] md:[&>u]:decoration-[5px] 
                  md:[&>u]:underline-offset-[10px] max-w-[1300px]"
          >
            “Over 76% of ad spend is typically wasted.”
          </span>
        </HeaderWithParalax>
        <TestimonialsCarousel data={testimonialData} />
        <Top3Servicii />
        <ToateServiciile />
        <HeaderWithParalax bgImage="/images/assets/parallax1.png">
          <span
            className="mx-auto text-3xl font-bold leading-[1.25] md:text-5xl md:leading-tight 
          [&>u]:decoration-[2px] [&>u]:underline-offset-[5px] md:[&>u]:decoration-[5px] 
          md:[&>u]:underline-offset-[10px] max-w-[1300px]"
          >
            Better Performance on the Platforms That Matter
          </span>
        </HeaderWithParalax>
      </PageComponent>
    </>
  );
}
