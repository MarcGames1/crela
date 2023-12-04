import React from 'react'
import TermeniSiConditii from './TermeniSiConditii';
import { PageComponent } from '@/components';
import { SEOComponent } from '@/components';




const page = () => {
  return (
    <PageComponent>
      <SEOComponent noindex />
      <TermeniSiConditii />
    </PageComponent>
  );
}

export default page