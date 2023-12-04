import React from 'react'
import GDPR from './GDPR';
import { PageComponent } from '@/components';
import {SEOComponent} from '@/components';



const page = () => {
  return (
    <PageComponent>
      <SEOComponent noindex />
      <GDPR />
    </PageComponent>
  );
}

export default page