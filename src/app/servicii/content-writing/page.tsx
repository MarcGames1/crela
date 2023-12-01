import { PageComponent, MainHeader } from '@/components';
import { IMainHeader } from '@/components/MainHeader/MainHeader';
import { Metadata } from 'next/types';
import React from 'react'
import IntroSection from './components/IntroSection';

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
      <IntroSection
        p="Ai nevoie de cuvinte care să transforme vizitatorii în clienți
            fideli? Eu sunt aici să fac ca fiecare frază să conteze și să aducă
            rezultate palpabile pentru afacerea ta."
      >
        <h2>
          Servicii de{' '}
          <span className="bg-clip-text text-transparent bg-primary-gradient">
            Content Writing si CopyWriting
          </span>
        </h2>
      </IntroSection>
      <section>
        <div className="prose">
          <h2>
            De ce Ai Nevoie de Servicii de Copywriting și Content Writing?
          </h2>
          <p>
            În lumea digitală de astăzi, cuvintele sunt cheia care deschide
            ușile către succesul online. Un conținut de calitate este un factor
            determinant în atragerea atenției, convingerea clienților și crearea
            unei legături puternice între afacerea ta și publicul său. De la
            convingerea vizitatorilor să acționeze și până la transmiterea
            mesajului tău distinct, serviciile de copywriting și content writing
            îți oferă avantajul de a te face remarcabil și de a-ți aduce
            afacerea pe primele pagini în rezultatele motoarelor de căutare.
          </p>
          <h3>Mod de Lucru</h3>
          <p>
            Colaborez strâns cu fiecare client pentru a înțelege esența afacerii
            tale și a transpune acea esență în cuvinte care să atragă și să
            convingă. Cu abordări personalizate pentru pagini web, newslettere,
            articole de blog, pagini de vânzare și pe social media, îmi propun
            să îți transform afacerea într-o poveste captivantă, cu fiecare
            cuvânt plasat strategic pentru a genera conversii și loialitate.
          </p>
        </div>
      </section>
      <section>
        <div className="prose">
          <h2>De ce Să Lucrezi cu Mine</h2>
          <p>
            Indiferent dacă ești la început de drum sau ai o afacere
            consolidată, îmi dedic experiența de peste doi ani în SEO și content
            writing pentru a-ți oferi conținut care să se ridice la înălțimea
            așteptărilor tale. Abordarea mea se bazează pe înțelegerea profundă
            a pieței și a publicului tău țintă, oferindu-ți un parteneriat de
            încredere pentru a-ți sprijini și dezvolta afacerea într-un mod
            eficient și profitabil.
          </p>
        </div>
      </section>
    </PageComponent>
  );
}

export default ContentWriting;