import React, { ReactNode } from 'react';
import { WhatsappCta } from '@/components';

interface DeCeCopyWritingProps {
  sectionHeading: string | ReactNode;
  p: string | ReactNode;
  reversed?: boolean;
  children?: React.ReactNode;
}
const FlexibleColumnSection = ({
  sectionHeading,
  p,
  reversed = false,
  children,
}: DeCeCopyWritingProps) => {
  const desktopPlacement = reversed ? 'lg:order-2' : 'lg:order-1';
  const mobilePlacement = reversed ? 'lg:order-1' : 'lg:order-2';

  return (
    <section className="grid md:grid-rows-2 md:grid-cols-none lg:grid-rows-none lg:grid-cols-2 items-center p-5 lg:mx-10">
      <div
        className={`container self-stretch place-self-center w-full ${desktopPlacement}`}
      >
        <div className="prose w-full block m-auto">
          <h2 className="text-center">{sectionHeading}</h2>
          <p className="leading-7 tracking-wider px-5">{p}</p>
        </div>
      </div>
      <div className={`self-stretch w-full text-center ${mobilePlacement}`}>
        {children || <WhatsappCta />}
      </div>
    </section>
  );
};

export default FlexibleColumnSection