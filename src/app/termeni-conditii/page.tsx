import React from 'react'
import TermeniSiConditii from './TermeniSiConditii';
import { PageComponent } from '@/components';
import { Metadata } from 'next';


export const metadata: Metadata = {
  robots: 'noindex, follow',
  alternates: {
    canonical: '/politica-cookie',
  },
};


const page = () => {
  return (
    <PageComponent>
     
      <TermeniSiConditii />
    </PageComponent>
  );
}

export default page