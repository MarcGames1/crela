import { AccordionSection } from '@/components';
import { IAccordionData } from '@/interfaces/IaccordionData';

import React from 'react';

const IntrebariFrecvente = (
  props: React.JSX.IntrinsicAttributes & {
    data: IAccordionData[];
    sectionHeader: string;
  }
) => {
  return <AccordionSection {...props} />;
};

export default IntrebariFrecvente;
