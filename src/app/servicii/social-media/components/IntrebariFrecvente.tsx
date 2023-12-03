'use client'
import { AccordionSection } from '@/components';
import { IAccordionData } from '@/interfaces/IaccordionData';
import { FAQPageJsonLd } from 'next-seo';
import React from 'react';
const IntrebariFrecvente = (
  props: React.JSX.IntrinsicAttributes & {
    data: IAccordionData[];
    sectionHeader: string;
  }
) => {
  const getfaqData = (data: IAccordionData[]) => {
   return data.map((data: IAccordionData) => {
     return {
       questionName: data.title,
       acceptedAnswerText: data.p,
     };
   });
  };


  const faqData = getfaqData(props.data)

  return (
    <>
      <FAQPageJsonLd useAppDir
        mainEntity={faqData}
      />
      <AccordionSection {...props} />
    </>
  );
};

export default IntrebariFrecvente;
