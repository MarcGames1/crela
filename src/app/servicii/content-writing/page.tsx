import { PageComponent, MainHeader } from '@/components';
import { IMainHeader } from '@/components/MainHeader/MainHeader';
import { Metadata } from 'next/types';
import React from 'react'

'https://docs.google.com/document/d/1lPiLXlPLwb0edJxfKqHU3NysNRZqmvubn2f_wFlsNpQ/edit';
export const metadata: Metadata = {
  title: 'Servicii Content Writing si Copywriting » CRELA✨',
  description: '✌ Te ajut sa iti atingi obiectivele prin servicii creative de content writing si copywriting: scriere texte, reclame, articole blog.',
};

const MainHeaderData: IMainHeader = {
  title: 'Servicii de Content Writing pentru afacerea ta',
  paragraph:
    'Te ajut sa iti atingi obiectivele prin servicii creative de content writing si copywriting: scriere texte, reclame, articole blog.',
  image: {
    src: '/SocialMedia.gif',
    alt: 'Poza Reprezentativa Content Writing',
    width: 1080,
    height: 1920,
  },
};



const ContentWriting = () => {
  return (
    <PageComponent>
      <MainHeader {...MainHeaderData} />
    </PageComponent>
  );
}

export default ContentWriting;