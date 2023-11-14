import React, { PropsWithChildren } from 'react'
import Header from './Header/header'
import Footer from './Footer/Footer';



const PageComponent = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageComponent