import React from 'react'
import { Section, Card } from '@/components';
import { IPromovareSocialMediaData } from '../pageConstants';
const SocialMediaSection = ({sectionHeader,p, platforme}:IPromovareSocialMediaData) => {
  return (
    <Section
      p={p}
      heading={sectionHeader}
    >
      <div className="grid grid-rows-4 grid-cols-none lg:grid-cols-4 gap-5 lg:grid-rows-none">
        {platforme.map((p, i) => {
          return <Card key={i} {...p} />;
        })}
      </div>
    </Section>
  );
}

export default SocialMediaSection