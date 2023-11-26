import { IMainHeader } from '@/components/MainHeader/MainHeader';
import { ILogoDefinitionData } from './Components/LogoDefinition';
import { ILogoExample } from './Components/LogoExample';
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
        src: '/images/logos/google-logo.png',
        alt: 'Logo Google',
        width: 400,
        height: 400,
      },
    },
    {
      header: 'Recunoaștere instantanee',
      paragraph:
        'Un logo eficient este ușor de recunoscut și asociat cu brandul imediat ce este văzut. Simplitatea și originalitatea sunt esențiale aici.',
      exampleHeader: 'Apple',
      exampleText:
        'Logo-ul simplu și iconic al Apple este recunoscut imediat și asociat cu inovația și produsele high-tech ale brandului.',
      image: { src: '/images/logos/Apple_logo_grey.svg', alt: 'Logo Apple' },
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
        src: '/images/logos/mercedes-logo.jpg',
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
        src: '/images/logos/adobe-logo.png',
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
      image: { src: '/images/logos/coca-cola-logo.png', alt: 'Logo Coca-Cola' },
    },
    {
      header: 'Reprezentare vizuală',
      paragraph:
        'Este o reprezentare vizuală a brandului, iar culorile, formele și simbolurile folosite pot comunica mesaje subtile sau complexe.',
      exampleHeader: 'Amazon',
      exampleText:
        'Logo-ul Amazon, săgeata de la litera "A" la "Z", reprezintă varietatea și diversitatea produselor disponibile.',
      image: { src: '/images/logos/amazon-logo.png', alt: 'Logo Amazon' },
    },
    {
      header: 'Unicitate și Memorabilitate',
      paragraph:
        'Un logo eficient este unic și ușor de reținut. Ceea ce îl face memorabil poate fi o formă distinctivă, o combinație de culori sau un simbol inconfundabil.',
      exampleHeader: "McDonald's",
      exampleText:
        "Arcele duble aurii ale lui McDonald's sunt memorabile și imediat asociate cu lanțul de restaurante.",
      image: {
        src: '/images/logos/mcdonalds-logo.png',
        alt: "Logo McDonald's",
      },
    },
  ],
};