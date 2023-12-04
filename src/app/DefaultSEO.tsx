'use client'
import { DefaultSeo } from 'next-seo';
import React from 'react'

const DefaultSEO = () => {
  return (
    <DefaultSeo
      openGraph={{
        type: 'website',
        locale: 'ro_RO',
        url: 'https://crela.ro/',
        siteName: 'Crela',
      }}
    />
  );
}

export default DefaultSEO