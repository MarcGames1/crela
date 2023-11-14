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

export default function Homepage() {
  return (
    <PageComponent>
      <HeroFullScreenVideo />
      <BrandsBand />
      <CallToActionWithPicture />
      <HeaderWithParalax>
        <span>“Over 76% of ad spend is typically wasted.”</span>
      </HeaderWithParalax>
      <TestimonialsCarousel data={testimonialData} />
      <Top3Servicii />
      <ToateServiciile />
      <HeaderWithParalax>
        <span>Better Performance on the Platforms That Matter</span>
      </HeaderWithParalax>
    </PageComponent>
  );
}
