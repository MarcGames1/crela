import React from 'react'
import PoliticaCookie from './PoliticaCookie';
import { PageComponent } from '@/components';
import { NextSeo } from 'next-seo';





const page = () => {
  return (
    <PageComponent>
      <NextSeo noindex />
      <PoliticaCookie />
    </PageComponent>
  );
}

export default page