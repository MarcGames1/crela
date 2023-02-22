


import { tw } from 'twind';
import Image from "next/legacy/image";
import ScroolToTop from '../scrooltoTop/scrooltoTop';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

const productLinks = [`Features`, `Customers`, `Platform`, `Pricing`, `Enterprise`, `What's new?`];
const linkuriUtile = [{
  text: "Blog",
  href: '/blog'
},
{
  text: 'Servicii',
  href: '/#servicii'
},
// {
//   text: 'Mentorat SEO',
//   href: '/mentorat-seo'
// },

];
const dispozitiiLegale = [
  { text: 'Termeni si Conditii', href: 'termeni-conditii' },
  { text: 'Politica Cookie', href: 'politica-cookie' },
  { text: 'Contact', href: 'contact' }

];


const FooterStyles = {
heading: tw(`text-gray-500 text-base font-bold mb-1`),
link: tw(`text-gray-500 text-sm font-medium leading-6`),
}

const Footer = () => (
  <>
    <ScroolToTop />
    <hr />
    <footer
      className={tw(
        `grid grid-cols-3 gap-1 justify-items-center bg-gray-100 items-center`
      )}
    >
      <div>
        <Link href={'/'}>
          <Image src="/Logo.svg" alt="logo" width={150} height={150} />
        </Link>
       
      </div>

      <div>
        <h4 className={FooterStyles.heading}>Dispozitii Legale</h4>
        <ul>
          {dispozitiiLegale.map((link, index) => (
            <FooterLink
              link={link}
              key={`dispozitiiLegale ${Math.random() * 10 * (index + 1 * 15)}`}
            />
          ))}
        </ul>
      </div>

      <div>
        <h4 className={FooterStyles.heading}>Linkuri Utile</h4>
        <ul>
          {linkuriUtile.map((link, index) => (
            <FooterLink
              link={link}
              key={`linkuriUtile${Math.random() * 10 * (index + 1 * 15)}`}
            />
          ))}
        </ul>
      </div>
    </footer>
  </>
);



const FooterLink = ({
  link,
  
}) => {
  return <>
    <li className={FooterStyles.link} >
      <Link href={link.href}>
        {link.text}
      </Link>
    </li>
  </>;
};

export default Footer;
