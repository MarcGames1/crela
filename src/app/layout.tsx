import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';


import { GoogleTagManager } from '@next/third-parties/google';


const font = Poppins({
  weight: ['100', '400', '200', '300', '500', '600', '700', '800', '900'],
  style: 'normal',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Crela',
  description: 'Crela Expertul Tău în Marketing Online',
  metadataBase: new URL('https://crela.ro'),
  manifest: '/manifest.json',
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Crela',
    description: 'STRATEGII UNICE PENTRU SUCCESUL TĂU ONLINE',
    url: 'https://crela.ro',
    siteName: 'Next.js',
    images: [
      {
        url: '/images/brand/logo-light.png',
        width: 800,
        height: 600,
      },
      {
        url: '/images/brand/logo-light.png',
        width: 1800,
        height: 1600,
        alt: 'Crela Logo',
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="crelaTheme" lang="ro">
      <head>
        <GoogleTagManager gtmId="GTM-PTTLWWC" />
      </head>
      <body className={`${font.className} grid grid-flow-row`}>
        {children} <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

