import React from 'react'
import TermeniSiConditii from './TermeniSiConditii';
import { PageComponent } from '@/components';
import { NextSeo } from 'next-seo';




const page = () => {
  return (
    <PageComponent>
      <NextSeo noindex />
      <TermeniSiConditii />
    </PageComponent>
  );
}

export default page