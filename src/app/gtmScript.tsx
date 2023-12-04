'use client'
import React from 'react';
import Script from 'next/script';

const Gtm = () => {
  return (
    <>
      <Script id='GTM1'
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=GTM-PTTLWWC`}
      />
      <Script id='GTM2'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtmScript() {
              dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
            }
            gtmScript();
          `,
        }}
      />
    </>
  );
};

export default Gtm;
