import { ReactNode } from "react";
import { IAccordionData } from "./components/CePutemRealiza";

export interface CopyWritingData {
  sectionHeading: string | ReactNode;
  p: string;
}

export interface IModDeLucruData {
  sectionHeading: string | ReactNode;
  p: string;
  timeLineData: {title: string, description: string}[]
}


export const AccordionData: IAccordionData[] = [
  {
    title: 'Articole Pentru Blog',
    p: 'Creează conținut captivant și relevant pentru blogul tău, menit să atragă și să interactioneze cu audiența ta.',
  },
  {
    title: 'Articole Tip Stire (Advertoriale)',
    p: 'Transmite informații esențiale într-un mod atractiv, integrând subtil mesaje publicitare.',
  },
  {
    title: 'Articole optimizate SEO',
    p: 'Dezvoltă conținut care să fie optimizat pentru motoarele de căutare, crescând vizibilitatea și clasarea în rezultatele de căutare.',
  },
  {
    title: 'Articole 100% unice',
    p: 'Oferă conținut original și distinct, adaptat nevoilor tale specifice pentru a te diferenția în mediul online.',
  },
  {
    title: 'Articole Tehnice',
    p: 'Redactează articole cu accent pe detalii tehnice sau specializate, adaptate pentru a fi înțelese și apreciate de publicul țintă.',
  },
  {
    title: 'Prezentari Produse',
    p: 'Elaborează descrieri și prezentări detaliate ale produselor tale, evidențiind beneficiile și caracteristicile cheie.',
  },
];


export const DeCeCopyWritingData: CopyWritingData = {
  sectionHeading: (
    <>
      De ce Ai Nevoie de{' '}
      <span className="text-transparent bg-clip-text bg-primary-gradient">Servicii de Copywriting și Content Writing?</span>
    </>
  ),
  p: 'În lumea digitală de astăzi, cuvintele sunt cheia care deschide ușile către succesul online. Un conținut de calitate este un factor determinant în atragerea atenției, convingerea clienților și crearea unei legături puternice între afacerea ta și publicul său. De la convingerea vizitatorilor să acționeze și până la transmiterea mesajului tău distinct, serviciile de copywriting și content writing îți oferă avantajul de a te face remarcabil și de a-ți aduce afacerea pe primele pagini în rezultatele motoarelor de căutare.',
  
};


export const ModDeLucruData: IModDeLucruData = {
  sectionHeading: (
    <>
      Cum Vom Lucra{' '}
      <span className="text-transparent bg-clip-text bg-primary-gradient">
        Impreuna?
      </span>
    </>
  ),
  p: 'În lumea digitală de astăzi, cuvintele sunt cheia care deschide ușile către succesul online. Un conținut de calitate este un factor determinant în atragerea atenției, convingerea clienților și crearea unei legături puternice între afacerea ta și publicul său. De la convingerea vizitatorilor să acționeze și până la transmiterea mesajului tău distinct, serviciile de copywriting și content writing îți oferă avantajul de a te face remarcabil și de a-ți aduce afacerea pe primele pagini în rezultatele motoarelor de căutare.',
  timeLineData: [
    { title: 'Research', description: 'Studiu și cercetare a subiectului' },
    {
      title: 'Planning',
      description: 'Planificare a conținutului și a strategiei',
    },
    { title: 'Writing', description: 'Scrierea conținutului propriu-zis' },
    { title: 'Editing', description: 'Editare și revizuire' },
    {
      title: 'Publishing',
      description: 'Publicarea și distribuirea conținutului',
    },
  ],
};


export const DeCeSaLucreziCuMineData: CopyWritingData = {
  sectionHeading: <span className=" underline underline-offset-4 decoration-accent">De ce Să Lucrezi cu Mine</span>,
  p: 'În lumea digitală de astăzi, cuvintele sunt cheia care deschide ușile către succesul online. Un conținut de calitate este un factor determinant în atragerea atenției, convingerea clienților și crearea unei legături puternice între afacerea ta și publicul său. De la convingerea vizitatorilor să acționeze și până la transmiterea mesajului tău distinct, serviciile de copywriting și content writing îți oferă avantajul de a te face remarcabil și de a-ți aduce afacerea pe primele pagini în rezultatele motoarelor de căutare.',
};