import React from 'react'
import { typography } from '@/helpers/styles';
import { Button } from '@/Components/UX';
import Image from 'next/image';
import { tw } from 'twind';
import { v4 as uuid } from 'uuid';
import Link from 'next/link';

export const Portofoliu = (props) => {
 const items = Object.values(props);
  console.log('Portofoliu',items );

  const cols = (limit) =>{
    return items.length > limit ? limit : items.length;
  } 
  


  return (
    <section id="portofoliu">
      <p className={`${typography.p} ${tw('text-center')}`}>Uită-te prin</p>
      <span className={`${typography.heading1} ${tw('text-center m-auto block mb-4')}`}>PORTOFOLIU</span>

      <div
        className={tw(
          `grid md:grid-cols-${cols(3)} lg:grid-cols-${cols(
            5
          )} relative items-start justify-around justify-items-center gap-5`
        )}
      >
        {items.map((item) => (
          <IndividualPortfolioCard key={uuid()} {...item} />
        ))}
      </div>
    </section>
  );
}





const IndividualPortfolioCard = ({ title, excerpt,buttonColor, slug, featuredImage }) => {
  
console.log(buttonColor.buttonColor);
  const image = {
    url: featuredImage?.node?.sourceUrl,
    alt: featuredImage?.node?.altText,
  };  
  return (
    <Link href={`/portofoliu/${slug}/`}>
      <div
        className={tw(
          'flex flex-col w-full h-full items-center justify-items-center justify-around'
        )}
      >
        <Image width={215} height={235} src={image.url} alt={image.alt} />

        <div
          className={tw(
            'flex flex-row w-full self-center items-center justify-around gap-4  '
          )}
        >
          <div
            className={tw(
              'flex flex-col items-center justify-items-center place-items-center '
            )}
          >
            <h3 className={typography.heading3}>{title}</h3>
            <div
              className={typography.p}
              dangerouslySetInnerHTML={{ __html: excerpt }}
            ></div>
          </div>
          <div className={tw('justify-self-stretch')}>
            <Button color={buttonColor.buttonColor}>Vezi mai mult</Button>
          </div>
        </div>
      </div>
    </Link>
  );
};