import type { Metadata } from 'next'
import { Poppins } from 'next/font/google';
import './globals.css'

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
      <body className={`${font.className} grid grid-flow-row`}>{children}</body>
    </html>
  );
}
