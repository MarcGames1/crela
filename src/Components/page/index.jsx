import Head from 'next/head';
import { tw } from 'twind';
import Footer from '../footer';
import { ScrollPositionProvider } from '../../context/scroolPositionContext';
import { Navigation } from '@/Components/NavBar/Index';


const Page = ({ children }) => (
  <ScrollPositionProvider>
    <Contents>{children}</Contents>
  </ScrollPositionProvider>
);

export default Page;







const Contents = ({ children }) => {
return (
  <>
    <Head>
      <link rel="favicon" href="favicon.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={tw(`min-h-screen relative flex flex-col`)}>
      <Navigation />
      {children}
    </div>
    <Footer />
  </>
);
};