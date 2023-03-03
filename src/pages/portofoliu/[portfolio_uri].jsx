
import React, {  } from 'react';
import dynamic from 'next/dynamic';
import { gql } from '@apollo/client';
import { NextSeo } from 'next-seo';
import { cleanAndTransformBlocks } from '../../utils/cleanAndTransformBlocks';
import { tw } from 'twind';
import Image from 'next/image';
import { typography } from '@/helpers/styles';

import client from '../../utils/client';
import {
  PortfolioItems,
  PostDataByUri,
  PortfolioItemsBySlug,
  PortfolioItemsSlugs,
} from '../../utils/WPQuerys';
import BlockRenderer from '../../Components/BlockRenderer/BlockRenderer';
import { PostWrapper } from '../../context/blogPost';


const Page = dynamic(() => import('../../Components/page'));
// const ErrorPage = dynamic(() => import('../../components/ErrorPage'));



const PortfolioPage = (props) => {
 
const { title,  featuredImage, blocks, seo } = props;



  if ( !blocks || !featuredImage || !title ) {
    // return <ErrorPage />;
    null;
  }
  
 console.log('PROPSSSS =>>>>>>>>>>>>>    ', props);
  return (
    <Page>
        <NextSeo
          canonical={seo?.canonical}
          title={seo?.title}
          description={seo?.metaDesc}
        />
      <div className={tw('block w-100 relative  min-h-1/4')}>
        <Image className={tw('m-auto z--1')} width={300} height={300} src={featuredImage?.node?.link} alt={featuredImage?.node?.altText || " "} /> 
      <h1 className={typography.heading1}>{title}</h1>
      </div>
      <>
        {blocks ? <BlockRenderer blocks={blocks} /> : <>Loading...</>}
      </>
    </Page>
  );
};





export default PortfolioPage;




export async function getStaticProps(context) {
  const currentUri = context.params.portfolio_uri;
 
  

  const { data } = await client.query({
    query: gql(PortfolioItemsBySlug(currentUri)),
  });

  let blocks,  title,  featuredImage, seo;
  if (data && data.portfolioItemBy) {
    blocks = cleanAndTransformBlocks(data.portfolioItemBy.blocksJSON);

    title = data.portfolioItemBy.title || '';

    featuredImage = data.portfolioItemBy.featuredImage || '';
    seo = data.portfolioItemBy.seo || '';
   
  }

   if (!data || !data.portfolioItemBy) {
     return {
       props: {},
     };
   }

 seo = {
   ...data.portfolioItemBy.seo,
   canonical: `${process.env.DOMAIN}/portofoliu/${currentUri}`,
 };
  return {
    props: {
      blocks,
      title ,
      featuredImage,
      seo,
      
      
    },
  };
}




export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql(PortfolioItemsSlugs()),
  });

  console.log(data, "Get Static Paths");
  const portfolioItems = data.portfolioItems.nodes;
  const paths = portfolioItems.map((path) => ({
    params: { portfolio_uri: `/portofoliu/${path.slug}` },
  }));
  
  console.log(paths)
  return {
    paths,
    fallback: true,
  };
}