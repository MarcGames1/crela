import { ICard } from "@/components/Top3Servicii/Card";
import { IMainHeader } from "@/interfaces/IMainHeader";

export const MainHeaderData: IMainHeader = {
  title: 'Servicii de Promovare pe Social Media pentru afacerea ta',
  paragraph:
    'Te ajut sa ai o comunicare completa in mediul online: Strategie Personalizata si Rezultate Vizibile Creare Continut si Planificare.',
  image: {
    src: '/SocialMedia.gif',
    alt: 'Poza Reprezentativa Social Media',
    width: 1080,
    height: 1920,
  },
};

export interface IPromovareSocialMediaData {
  sectionHeader: React.ReactNode,
  p: string,
  platforme: ICard[]
}
export const PromovareSocialMediaOrganicData :IPromovareSocialMediaData = {
  sectionHeader: (
    <>
      Promovare{' '}
      <span className=" bg-primary-gradient bg-clip-text text-transparent">
        Social Media{' '}
      </span>{' '}
      Organic
    </>
  ),
  p: 'Promovarea organică devine din ce în ce mai valoroasă, având capacitatea de a construi relații autentice cu publicul țintă. Această abordare implică crearea de conținut captivant, adaptat fiecărei platforme în parte, strategii de hashtag-uri inteligente, interacțiuni autentice cu utilizatorii și monitorizarea atentă a feedback-ului și a datelor pentru a optimiza și îmbunătăți continuu strategia de social media.',
  platforme: [
  {
    text:"Promovare Tiktok Organic",
    image: ""
  },
  {
    text:"Promovare Facebook Organic",
    image: ""
  },
  {
    text:"Promovare Instagram Organic",
    image: ""
  },
  {
    text:"Promovare Youtube Organic",
    image: ""
  },

]
};

export const PromovareAds: IPromovareSocialMediaData = {
  sectionHeader: (
    <>
      Promovare{' '}
      <span className=" bg-primary-gradient bg-clip-text text-transparent">
        Social Media{' '}
      </span>{' '}
      ADS
    </>
  ),
  p: 'Avantajele promovării plătite constau în capacitatea de a obține rezultate rapide și măsurabile, sporind vizibilitatea și generând acțiuni imediate, cum ar fi clicuri, lead-uri sau vânzări. Această strategie poate fi utilizată pentru a amplifica conținutul organic, pentru a susține lansarea unor produse sau servicii noi sau pentru a consolida prezența brandului în fața unei audiențe mai largi.',
  platforme: [
    {
      text: 'Promovare Tiktok Ads',
      image: '',
    },
    {
      text: 'Promovare Facebook Ads',
      image: '',
    },
    {
      text: 'Promovare Instagram Ads',
      image: '',
    },
    {
      text: 'Promovare Youtube Ads',
      image: '',
    },
  ],
};