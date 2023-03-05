import React from 'react';
import { typography } from '@/helpers/styles';
import { tw } from 'twind';

const Section_Header = () => {
  return (
    <>
      <div className={`${typography.heading1}`}>Hai să ne cunoaștem</div>;
      <span className={`${typography.heading2} ${tw('block font-bold text-center')}`}>
        Contactează-mă și hai să arătăm împreună lumii cine ești.
      </span>
    </>
  );
};

export default Section_Header;
