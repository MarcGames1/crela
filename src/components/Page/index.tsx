import dynamic from 'next/dynamic';
import React, { PropsWithChildren } from 'react'
const Header = dynamic(() => import('./Header/header'));
const Footer = dynamic(() => import('./Footer/Footer'));


const PageComponent = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden  ">{children}</main>
      <Footer />
    </>
  );
};

export default PageComponent