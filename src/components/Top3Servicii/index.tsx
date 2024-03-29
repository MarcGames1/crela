import React from 'react';
import Card, { ICard } from './Card';

const data: ICard[] = [
  {
    image: '/images/cards/1.png',
    text: (
      <>
        Strategie de <b>BRANDING</b> 360
      </>
    ),
    href: '/branding',
  },
  {
    image: '/images/cards/2.png',
    text: (
      <>
        Crestem Afacerea pe <b>social media</b>
      </>
    ),
    href: '/social-media',
  },
  {
    image: '/images/cards/3.png',
    text: (
      <>
        Redactare de texte <b>optimizate SEO</b>
      </>
    ),
    href: '/content-writing',
  },
];

const Top3Servicii = () => {
  return (
    <>
      <h3 className="text-center text-3xl font-bold text-secondary md:text-5xl  md:leading-[1.25]  ">
       Abordarea noastra în Online Marketing îți aduce <u className="decoration-accent">Mai Mult</u>.
      </h3>
      <div className="mt-7 flex flex-wrap justify-center gap-5 sm:gap-16 md:mt-20 xl:flex-nowrap">
        {data.map((card: ICard, index: number) => {
          return <Card key={index} {...card} href={`/servicii${card.href}`} />;
        })}
      </div>
    </>
  );
};

export default Top3Servicii;
