import { ICard } from "@/components/Top3Servicii/Card";
import { IMainHeader } from "@/interfaces/IMainHeader";
import { IAccordionData } from "@/interfaces/IaccordionData";
import Image from "next/image";

export const MainHeaderData: IMainHeader = {
  title: 'Servicii de Promovare pe Social Media pentru afacerea ta',
  paragraph:
    'Te ajut sa ai o comunicare completa in mediul online: Strategie Personalizata si Rezultate Vizibile Creare Continut si Planificare.',
  image: {
    src: '/images/header/SocialMedia.png',
    alt: 'Poza Reprezentativa Social Media',
    width: 400,
    height: 400,
  },
};

export interface IPromovareSocialMediaData {
  sectionHeader: React.ReactNode,
  p: string,
  platforme: ICard[]
}
export const PromovareSocialMediaOrganicData: IPromovareSocialMediaData = {
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
      text: 'Promovare Tiktok Organic',
      image: '/images/socialmedia/tiktok.png',
    },
    {
      text: 'Promovare Facebook Organic',
      image: '/images/socialmedia/facebook.png',
    },
    {
      text: 'Promovare Instagram Organic',
      image: '/images/socialmedia/instagram.png',
    },
    {
      text: 'Promovare Youtube Organic',
      image: '/images/socialmedia/youtube.png',
    },
  ],
};
export const DeCeSocialMediaData = {
  heading: (
    <>
      De ce sa fie si afacerea ta prezenta in{' '}
      <span className=" bg-primary-gradient bg-clip-text text-transparent">
        Social Media
      </span>
    </>
  ),
  p: (
    <>
      <p>
        Am avut privilegiul de a colabora cu diverse companii și am observat că
        nu există o rețetă universală pentru succes în social media. Fiecare
        afacere are nevoi și obiective diferite, iar noi suntem dedicați să
        identificăm și să implementăm soluții personalizate pentru fiecare
        client.
      </p>
      <p>
        Ne pasionează să ajutăm afacerile să-și maximizeze potențialul online.
        Am văzut rezultate remarcabile obținute prin strategii bine definite în
        social media, generând nu doar o creștere în numărul de clienți, ci și
        consolidând relațiile existente.
      </p>
      <p>
        Dorim să fii sigur că suntem aici nu doar ca și experți în social media,
        ci ca și parteneri interesați de nevoile specifice și viziunea unică a
        afacerii tale. Suntem pregătiți să investim efort și creativitate pentru
        a construi împreună o strategie adaptată care să te ajute să atingi
        obiectivele propuse și să-ți consolideze prezența online.
      </p>
      <p>
        Împreună, suntem convinși că putem transforma această călătorie într-o
        experiență captivantă, generând oportunități și aducând afacerea ta în
        fața unui public care va fi atras să colaboreze cu tine.
      </p>
    </>
  ),
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
      image: '/images/socialmedia/tiktok.png',
    },
    {
      text: 'Promovare Facebook Ads',
      image: '/images/socialmedia/facebook.png',
    },
    {
      text: 'Promovare Instagram Ads',
      image: '/images/socialmedia/instagram.png',
    },
    {
      text: 'Promovare Youtube Ads',
      image: '/images/socialmedia/youtube.png',
    },
  ],
};

export const intrebariFrecventeData: IAccordionData[] = [
  {
    title:
      'Care sunt avantajele promovării pe social media în comparație cu alte canale de marketing?',
    p: 'Promovarea pe social media oferă o serie de avantaje distincte față de alte canale de marketing. Principalul avantaj este accesul la o audiență vastă și diversă, având posibilitatea de a interacționa direct și de a construi relații autentice cu clienții potențiali. Flexibilitatea și costurile reduse comparativ cu alte forme de publicitate sunt alte avantaje notabile, oferind oportunitatea de a testa și de a ajusta campaniile în timp real pentru a obține rezultate optime.',
  },
  {
    title:
      'Cum ajuți afacerile să-și găsească vocea și identitatea distinctă pe diversele platforme sociale?',
    p: 'În colaborare strânsă cu fiecare afacere, abordăm fiecare platformă socială cu o strategie personalizată. Identificăm valorile și viziunea afacerii pentru a defini o voce autentică și o identitate distinctă. Construim mesaje și conținut care să reflecte personalitatea brandului și să rezoneze cu publicul țintă, consolidând astfel o prezență autentică și memorabilă.',
  },
  {
    title:
      'Cum poți evalua eficiența unei campanii de social media și ce metrici consideri cele mai relevante?',
    p: 'Evaluarea eficienței unei campanii de social media este esențială pentru optimizarea și îmbunătățirea strategiilor viitoare. Metrici precum engagement-ul, rata de conversie, vizualizările video, numărul de clicuri sau distribuirea conținutului sunt esențiale. În plus, analiza datelor demografice și a comportamentului publicului te ajută să adaptezi campaniile pentru a atinge obiectivele propuse.',
  },
  {
    title:
      'Ce rol joacă conținutul creativ în retenția și angajarea audienței pe diversele platforme sociale?',
    p: 'Conținutul creativ reprezintă inima unei strategii de succes pe social media. Este esențial pentru captarea atenției și reținerea interesului publicului. Prin crearea de conținut captivant, adaptat specific fiecărei platforme și segmentului de public, se generează angajament și se construiește o relație autentică între brand și urmăritori.',
  },
  {
    title:
      'Care sunt cele mai recente tendințe sau schimbări în algoritmul platformelor sociale majore și cum influențează acestea strategiile de social media?',
    p: 'Platformele sociale sunt într-o continuă evoluție, aducând schimbări frecvente în algoritmul lor. Tendințe precum prioritizarea conținutului video, interacțiunea autentică și transparența în comunicare sunt la ordinea zilei. Este esențial să fim la curent cu aceste schimbări pentru a ajusta și a adapta strategiile noastre pentru a rămâne relevanți și eficienți pe fiecare platformă.',
  },
];


export const sections = [
  {
    sectionHeading: (
      <>
        Ce presupun serviciile de{' '}
        <span className=" bg-primary-gradient bg-clip-text text-transparent">
          social media?
        </span>
      </>
    ),
    p: 'Serviciile de social media implică un set cuprinzător de strategii și acțiuni menite să amplifice prezența și impactul unei afaceri în mediul online. Acestea înglobează dezvoltarea unei strategii personalizate, crearea și distribuirea de conținut captivant, gestionarea comunității online și promovarea eficientă a brandului. De la stabilirea obiectivelor până la măsurarea rezultatelor, serviciile de social media sunt fundamentale pentru a construi și menține o prezență puternică și convingătoare pe diversele platforme sociale.',
    children: (
      <div className="flex  place-content-center">

      <Image 
        src={'/images/socialmedia/section/1.png'}
        width={500}
        height={500}
        alt="poza reprezentativa ce presupun serviciile de social media"
        />
        </div>
    ),
  },
  {
    sectionHeading: (
      <>
        Administrare conturi de{' '}
        <span className=" bg-primary-gradient bg-clip-text text-transparent">
          Social Media
        </span>
      </>
    ),
    p: 'Administrarea eficientă a conturilor de social media înseamnă mai mult decât simpla publicare a conținutului. Echipa noastră se ocupă de planificarea strategică a conținutului, crearea și adaptarea mesajelor pentru fiecare platformă, interacțiunea constantă cu audiența și analiza datelor pentru a identifica cele mai bune practici și a ajusta strategiile. Monitorizăm și raportăm performanța pentru a ne asigura că fiecare acțiune are un impact pozitiv și contribuie la atingerea obiectivelor propuse.',
    children: (
      <div className="flex  place-content-center">
        <Image
          src={'/images/socialmedia/section/2.png'}
          width={500}
          height={500}
          alt="poza reprezentativa ce presupun serviciile de social media"
        />
      </div>
    ),
  },
  {
    sectionHeading: <>Social Media și SEO</>,
    p: 'Interconectarea dintre social media și optimizarea pentru motoarele de căutare (SEO) este esențială pentru creșterea vizibilității și a impactului online. Activitățile din social media pot influența direct căutările organice prin creșterea expunerii conținutului și a angajamentului. Integrăm metode SEO în strategiile noastre de social media, folosind cuvinte cheie relevante, optimizând conținutul și construind legături pentru a spori autoritatea online a brandului. Astfel, contribuim la creșterea vizibilității și a poziționării în rezultatele căutărilor online, consolidând astfel prezența și influența afacerii pe internet.',
    children: (
      <div className="flex  place-content-center">
        <Image
          src={'/images/socialmedia/section/3.png'}
          width={500}
          height={500}
          alt="poza reprezentativa ce presupun serviciile de social media"
        />
      </div>
    ),
  },
];