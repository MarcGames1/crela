'use client';

import { IAccordionData } from '@/interfaces/IaccordionData';
import React from 'react';

import { Accordion } from 'react-daisyui';

const AccordionSection = ({
  data,
  sectionHeader,
}: {
  data: IAccordionData[];
  sectionHeader: string;
}) => {
  return (
    <>
      <h2 className="text-center text-2xl font-bold m-2">{sectionHeader}</h2>

      <div className="flex items-center justify-items-center w-full justify-center  ">
        <div className="flex flex-wrap justify-self-center  my-10 drop-shadow-2xl mx-5 lg:w-1/2 m-auto gap-2">
          {data.map((a: IAccordionData, i: number) => {
            return (
              <Accordion
                className="bg-red-800 text-white  "
                name="Ce Putem Realiza"
                key={i}
                icon="plus"
              >
                <Accordion.Title className="text-2xl font-bold tracking-wide prose prose-h2 text-white ">
                  {a.title}
                </Accordion.Title>
                <Accordion.Content>
                  <p className=" leading-7 tracking-wider ">{a.p}</p>
                </Accordion.Content>
              </Accordion>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AccordionSection;
