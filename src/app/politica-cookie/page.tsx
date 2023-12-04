import React from 'react'
import PoliticaCookie from './PoliticaCookie';
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
      
      <PoliticaCookie />
    </PageComponent>
  );
}

export default page