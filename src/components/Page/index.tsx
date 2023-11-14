import React, { PropsWithChildren } from 'react'
import Header from './Header/header'
import Footer from './Footer/Footer';



const PageComponent = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="min-w-full">{children}</main>
      <Footer />
    </>
  );
};

export default PageComponent