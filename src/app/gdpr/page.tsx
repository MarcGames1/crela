import React from 'react'
import GDPR from './GDPR';
import { PageComponent } from '@/components';
import { NextSeo } from 'next-seo';




const page = () => {
  return (
    <PageComponent>
      <NextSeo noindex />
      <GDPR />
    </PageComponent>
  );
}

export default page