import React from 'react'
import { typography } from '@/helpers/styles';
import { Button } from '@/Components/UX';
import Image from 'next/image';
import { tw } from 'twind';
export const Portofoliu = (props) => {
 const items = Object.values(props);
  console.log('Portofoliu',items );

  const cols = (limit) =>{
    return items.length > limit ? limit : items.length;
  } 
  


  return (
    <section id="portofoliu">
      <p className={typography.p}>Uită-te prin</p>
      <span className={typography.heading1}>PORTOFOLIU</span>

      <div
        className={tw(
          `grid md:grid-cols-${cols(3)} lg:grid-cols-${cols(
            5
          )} items-center justify-items-center gap-5`
        )}
      >
        {items.map((item) => (
          <IndividualPortfolioCard {...item} />
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
    <div className={tw('flex flex-col')}>
      <Image width={215 } height={ 235 } src={image.url} alt={image.alt}/>

      <div className={tw('flex flex-row w-full self-center  ')}>
      <div>
      <div>titlu {title}</div>
      <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
      </div>
      <Button color={ buttonColor.buttonColor}>test</Button>
      </div>

    </div>
  );
};