import { IHeadingWParagraph } from "@/interfaces/IHeadingWParagraph";
import { IMainHeader } from "@/interfaces/IMainHeader";
import Image from "next/image";
import { ReactNode } from "react";


const imageLocation = '/images/branding'

interface ISectionWImage extends IHeadingWParagraph{
    children: ReactNode
}
export const MainHeaderData: IMainHeader = {
  title: 'Branding si Identitate Vizuala',
  paragraph: (
    <>
      <p>Ai nevoie de Branding?</p>
      <p>Identitatea Vizuala a Afacerii Tale Incepe de Aici.</p>
    </>
  ),
  image: {
    src: '/SocialMedia.gif',
    alt: 'Poza Reprezentativa Social Media',
    width: 500,
    height: 525,
  },
};

export const SecondSectionData: ISectionWImage = {
  sectionHeading: (
    <>
      Ce este{' '}
      <span className="bg-clip-text text-transparent bg-primary-gradient">
        Identitatea Vizuală de Brand?
      </span>
    </>
  ),
  p: 'Identitatea vizuală de brand reprezintă esența și personalitatea unui brand transmise prin elemente vizuale unice și caracteristice. Acestea includ logo-ul, culorile, tipografia, designul și alte elemente grafice care definesc și diferențiază brand-ul de ceilalți actori din piață. Este o punte între brand și publicul său, o modalitate de a comunica mesajul și valorile într-un mod tangibil și memorabil.',
  children: (
    <Image
        className="block m-auto w-fit h-fit"
      width={500}
      height={500}
      alt="Ce Este Identitatea Vizuala de Brand"
      src={imageLocation + '/1.png'}
    />
  ),
};


export const ThirdSectionData: ISectionWImage = {
  sectionHeading: (
    <>
      De ce este importantă Identitatea Vizuală în{' '}
      <span className="bg-clip-text text-transparent bg-primary-gradient">
        Crearea unei Strategii de Branding?
      </span>
    </>
  ),
  p: 'Identitatea vizuală reprezintă cartea de vizită a unui brand. Ea conferă consistență și recunoaștere, construiește încredere și stabilește o conexiune emoțională cu audiența. Prin intermediul ei, transmitem mesajul și valorile noastre într-un mod coerent și captivant. O identitate vizuală bine definită și implementată corect nu este doar estetică, ci servește drept ghid pentru toate aspectele vizuale ale comunicării brandului.',
  children: (
    <Image
      className="block m-auto w-fit h-fit"
      width={500}
      height={500}
      alt="Crearea unei Strategii de Branding"
      src={imageLocation + '/2.png'}
    />
  ),
};


export const ForthSectionData: ISectionWImage = {
  sectionHeading: (
    <>
      <span className="bg-clip-text text-transparent bg-primary-gradient">
        Ce elemente cuprinde
      </span>{' '}
      identitatea vizuală?
    </>
  ),
  p: (
    <>
      <p>
        Identitatea vizuală este alcătuită dintr-o varietate de elemente care
        lucrează împreună pentru a crea o imagine consistentă și memorabilă a
        brandului. Acestea includ logo-ul, culorile specifice, tipografia și
        fonturile utilizate, stilul fotografic sau ilustrativ, precum și orice
        alte elemente grafice care definesc și completează experiența vizuală a
        brandului nostru.
      </p>
      <p>
        Aceste elemente, atunci când sunt integrate strategic, formează un set
        de linii directoare ce servesc ca un pilon solid pentru construirea și
        consolidarea identității unui brand în mintea publicului său.
      </p>
      <p>
        Dorim ca identitatea vizuală să reflecte esența și valorile noastre, să
        creeze o impresie puternică și să rămână memorabilă în mintea și inimile
        celor care interacționează cu brand-ul nostru.
      </p>
    </>
  ),
  children: (
    <Image
      className="block m-auto w-fit h-fit"
      width={500}
      height={500}
      alt="Elemente Identitate Vizuala"
      src={imageLocation + '/3.png'}
    />
  ),
};
