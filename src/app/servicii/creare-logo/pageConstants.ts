import { IMainHeader } from '@/components/MainHeader/MainHeader';
import { ILogoDefinitionData } from './Components/LogoDefinition';
import { ILogoExample } from './Components/LogoExample';
import { ILogoGallery } from './Components/LogoGallery';

const logosPath = '/images/logos';
const transportLogoExamplesPath = '/images/logosExaples/transport'
const constructionLogoExamplesPath = '/images/logosExaples/construction'

const altPozaLogo =  (n : number, d:string) =>{
    return `Exemplu Logo firma ${d} ${n}` 
  }
const squareImage300px ={
  width:300,
  height:300,
 
}

export const pageMetaData = {
  title: 'Creare logo personalizat pentru firma ta » CRELA ✨',
  description:
    '✌ Ai nevoie logo personalizat pentru firma ta?✅Identitatea Vizuala a Afacerii Tale Incepe de Aici.',
};

export const MainHeaderData: IMainHeader = {
  title: 'Creare logo personalizat pentru firma ta',
  paragraph:
    'Te ajut sa ai o comunicare completa in mediul online: Strategie Personalizata si Rezultate Vizibile Creare Continut si Planificare.',
  image: {
    src: '/CreareLogo.png',
    alt: 'Poza Reprezentativa Creare Logo',
    width: 1333,
    height: 2000,
  },
};

export const LogoDefinitionData: ILogoDefinitionData = {
  sectionHeader: ' Ce ar trebui să transmită un logo?',
  sectionIntro:
    'Un logo este mult mai mult decât o simplă imagine sau o combinație de culori și forme. El ar trebui să transmită esența unei afaceri sau a unei entități într-un mod simplu și memorabil. Iată câteva elemente cheie pe care un logo ar trebui să le transmită:',
  examples: [
    {
      header: 'Identitate și Valori',
      paragraph:
        'Un logo ar trebui să reflecte identitatea și valorile brandului. Poate să evidențieze istoria, viziunea, misiunea sau cultura companiei.',
      exampleHeader: 'Google',
      exampleText:
        'Logo-ul Google, prin folosirea culorilor, transmite diversitate și accesibilitate. Culorile sunt o reprezentare a diversității și interconectivității serviciilor și produselor Google.',
      image: {
        src:
          logosPath +
          '/GoogleLogos/logo_Google_FullColor_3x_830x271px.original.png',
        alt: 'Logo Google',
        width: 830,
        height: 571,
      },
      secondaryImages: [
        {
          src: logosPath + '/GoogleLogos/Drive_Icon.original.png',
          alt: 'Google Drive',
        },
        {
          src: logosPath + '/GoogleLogos/Gmail_Icon.original.png',
          alt: 'Gmail Icon',
        },
        {
          src: logosPath + '/GoogleLogos/Google_Calendar_Icon.original.png',
          alt: 'Google Calendar Icon',
        },
        {
          src:
            logosPath +
            '/GoogleLogos/logo_accessibility_color_192dp.original.png',
          alt: 'Google Accessibility Color',
        },
        {
          src: logosPath + '/GoogleLogos/logo_admob_192px_WhiteBG.original.png',
          alt: 'Google adMobile',
        },

        {
          src:
            logosPath +
            '/GoogleLogos/logo_google_adsense_color_2x_web_512dp.original.png',
          alt: 'Google Adsense',
        },
        {
          src:
            logosPath +
            '/GoogleLogos/logo_Google_MarketingPlatform_192px.original.png',
          alt: 'Google Marketing Platform',
        },
        {
          src: logosPath + '/GoogleLogos/Meet_Icon.original.png',
          alt: 'Google Meet',
        },
      ],
    },
    {
      header: 'Recunoaștere instantanee',
      paragraph:
        'Un logo eficient este ușor de recunoscut și asociat cu brandul imediat ce este văzut. Simplitatea și originalitatea sunt esențiale aici.',
      exampleHeader: 'Apple',
      exampleText:
        'Logo-ul simplu și iconic al Apple este recunoscut imediat și asociat cu inovația și produsele high-tech ale brandului.',
      image: { src: logosPath + '/Apple_logo_grey.svg', alt: 'Logo Apple' },
    },
    // Alte exemple pentru fiecare aspect specific al unui logo pot fi adăugate aici
    {
      header: 'Profesionalism și Credibilitate',
      paragraph:
        'Un logo bine realizat transmite profesionalism și încredere. El poate influența modul în care publicul percepe afacerea sau produsul asociat.',
      exampleHeader: 'Mercedes-Benz',
      exampleText:
        'Logo-ul elegant și clasic al lui Mercedes-Benz transmite o imagine de lux și calitate.',
      image: {
        src: logosPath + '/mercedes-logo.jpg',
        alt: 'Logo Mercedes-Benz',
        width: 600,
        height: 300,
      },
    },
    {
      header: 'Versatilitate și Adaptabilitate',
      paragraph:
        'Un logo bun este versatil și poate fi adaptat pe diverse medii și formate fără a-și pierde impactul sau identitatea.',
      exampleHeader: 'Adobe',
      exampleText:
        'Logo-ul Adobe este flexibil și poate fi adaptat în diferite culori și stiluri, menținându-și recunoașterea.',
      image: {
        src: logosPath + '/adobe-logo.png',
        alt: 'Logo Adobe',
        width: 600,
        height: 300,
      },
    },
    {
      header: 'Conexiune emoțională',
      paragraph:
        'Uneori, un logo reușit poate crea o conexiune emoțională cu publicul. Poate să transmită emoții sau să evoci sentimente specifice legate de brand.',
      exampleHeader: 'Coca-Cola',
      exampleText:
        'Logo-ul Coca-Cola are o conexiune emoțională puternică datorită istoriei și mesajului său consistent.',
      image: {
        src: logosPath + '/CocaCola/Coca-cola_logo_300x300.png',
        alt: 'Logo Coca-Cola',
        width: 300,
        height: 300,
      },
      secondaryImages: [
        {
          src: logosPath + '/CocaCola/Coca-cola_light_logo_300x300.png',
          alt: 'Logo Coca Cola',
          width: 300,
          height: 300,
        },
      ],
    },
    {
      header: 'Reprezentare vizuală',
      paragraph:
        'Este o reprezentare vizuală a brandului, iar culorile, formele și simbolurile folosite pot comunica mesaje subtile sau complexe.',
      exampleHeader: 'Amazon',
      exampleText:
        'Logo-ul Amazon, săgeata de la litera "A" la "Z", reprezintă varietatea și diversitatea produselor disponibile.',
      image: {
        src: logosPath + '/amazon/amazon-logo.png',
        alt: 'Logo Amazon',
        width: 733,
        height: 153,
      },
      secondaryImages: [
        {
          src: logosPath + '/amazon/amazon-ads-rgb-squid-ink-large-copy.jpg',
          alt: 'Logo Amazon Ads',
          width: 733,
          height: 153,
        },
        {
          src: logosPath + '/amazon/amazon-music.png',
          alt: 'Logo Amazon Music',
          width: 733,
          height: 153,
        },
      ],
    },
    {
      header: 'Unicitate și Memorabilitate',
      paragraph:
        'Un logo eficient este unic și ușor de reținut. Ceea ce îl face memorabil poate fi o formă distinctivă, o combinație de culori sau un simbol inconfundabil.',
      exampleHeader: "McDonald's",
      exampleText:
        "Arcele duble aurii ale lui McDonald's sunt memorabile și imediat asociate cu lanțul de restaurante.",
      image: {
        src: logosPath + '/mcdonalds/logo.png',
        alt: "Logo McDonald's",
        width: 300,
        height: 300,
      },
      secondaryImages: [
        {
          src: logosPath + '/mcdonalds/icon.png',
          alt: 'Icon Mcdonalds',
          width: 300,
          height: 300,
        },
        {
          src: logosPath + '/mcdonalds/symbol.png',
          alt: 'Symbol Mcdonalds',
          width: 300,
          height: 300,
        },
      ],
    },
  ],
};


export const LogoTransportSectionData: ILogoGallery = {
  sectionHeading: 'Uite Cateva Exemple de Creare Logo Pentru Firme de Transport',
  images: [
    {...squareImage300px, src: `${transportLogoExamplesPath}/1.png`, alt: altPozaLogo(1, 'transport')},
    {...squareImage300px, src: `${transportLogoExamplesPath}/2.png`, alt: altPozaLogo(2, 'transport')},
    {...squareImage300px, src: `${transportLogoExamplesPath}/3.png`, alt: altPozaLogo(3, 'transport')},
    {...squareImage300px, src: `${transportLogoExamplesPath}/4.png`, alt: altPozaLogo(4, 'transport')},
    {...squareImage300px, src: `${transportLogoExamplesPath}/5.png`, alt: altPozaLogo(5, 'transport')},
    {...squareImage300px, src: `${transportLogoExamplesPath}/6.png`, alt: altPozaLogo(6, 'transport')},
    {...squareImage300px, src: `${transportLogoExamplesPath}/7.png`, alt: altPozaLogo(7, 'transport')},
    {...squareImage300px, src: `${transportLogoExamplesPath}/8.png`, alt: altPozaLogo(8, 'transport')},
    {...squareImage300px, src: `${transportLogoExamplesPath}/9.png`, alt: altPozaLogo(9, 'transport')},
    {...squareImage300px, src: `${transportLogoExamplesPath}/10.png`, alt: altPozaLogo(10, 'transport')},
    {...squareImage300px, src: `${transportLogoExamplesPath}/11.png`, alt: altPozaLogo(11, 'transport')},
    {...squareImage300px, src: `${transportLogoExamplesPath}/12.png`, alt: altPozaLogo(12, 'transport')},
    {...squareImage300px, src: `${transportLogoExamplesPath}/13.png`, alt: altPozaLogo(13, 'transport')},
  ],
};