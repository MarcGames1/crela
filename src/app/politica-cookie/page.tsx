import React from 'react'
import PoliticaCookie from './PoliticaCookie';
import { PageComponent } from '@/components';
import { SEOComponent } from '@/components';





const page = () => {
  return (
    <PageComponent>
      <SEOComponent noindex />
      <PoliticaCookie />
    </PageComponent>
  );
}

export default page