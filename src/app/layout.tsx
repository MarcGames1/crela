import type { Metadata } from 'next'
import { Poppins } from 'next/font/google';
import './globals.css'
import Script from 'next/script';

const font = Poppins({
  weight: ['100','400' ,'200','300', '500', '600', '700', '800', '900'],
  style: 'normal',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Crela',
  description: 'Crela',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="crelaTheme" lang="ro">
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script id='GTM'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PTTLWWC');</script>`,
          }}
        ></Script>
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body className={`${font.className} grid grid-flow-row`}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PTTLWWC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        {children}
      </body>
    </html>
  );
}
