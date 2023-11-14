import type { Metadata } from 'next'
import { Poppins } from 'next/font/google';
import './globals.css'

const font = Poppins({
  weight: ['100','400' ,'200','300', '500', '600', '700', '800', '900'],
  style: 'normal',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body className={font.className}>{children}</body>
    </html>
  )
}
