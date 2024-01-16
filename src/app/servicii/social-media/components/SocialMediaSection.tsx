import React from 'react'
import { Section, Card } from '@/components';
import { IPromovareSocialMediaData } from '../pageConstants';
const SocialMediaSection = ({sectionHeader,p, platforme}:IPromovareSocialMediaData) => {
  return (
    <Section
      p={p}
      heading={sectionHeader}
    >
      <div className="mt-7 flex flex-wrap mx-5 justify-center gap-5 sm:gap-16 md:mt-20 xl:flex-nowrap">
        {platforme.map((p, i) => {
          return <Card key={i} {...p} />;
        })}
      </div>
    </Section>
  );
}

export default SocialMediaSection