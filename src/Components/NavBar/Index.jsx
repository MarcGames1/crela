import { tw } from 'twind';
import { useState, useContext, useEffect } from 'react';


import Image from 'next/image';
import styles from './NavBar.module.css'

import {Logo} from '../Logo/Logo';
import Link from 'next/link';
import { ScrollPosition } from '../../context/scroolPositionContext';
import { Button } from '../UX';

const links = [
  {
    label: `Acasa`,
    href: `/`,
  },
  {
    label: `Despre Mine`,
    href: `/#despre-mine`,
  },
  {
    label: `Servicii`,
    href: `/#servicii`,
  },
  {
    label: `Portofoliu`,
    href: `/#portofoliu`,
  },
  {
    label: `Materiale`,
    href: `/materiale`,
  },
  
  {
    label: `Blog`,
    href: `/blog`,
  },
  

  
];


const MenuButton = ({ toggleMenu, showMenu }) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-black`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 21.5C0 33.3741 9.62588 43 21.5 43V43C33.3741 43 43 33.3741 43 21.5V21.5C43 9.62588 33.3741 7.7486e-07 21.5 7.7486e-07V7.7486e-07C9.62588 7.7486e-07 0 9.62588 0 21.5V21.5Z"
          fill="white"
        />
        <line
          y1="-2.5"
          x2="23.0588"
          y2="-2.5"
          transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 11 28.3051)"
          stroke="#FF0000"
          strokeWidth="5"
        />
        <line
          y1="-2.5"
          x2="23.0588"
          y2="-2.5"
          transform="matrix(0.707107 0.707107 0.707107 -0.707107 16 12)"
          stroke="#FF0000"
          strokeWidth="5"
        />
      </svg>
    ) : (
      <svg
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 21.5C0 33.3741 9.62588 43 21.5 43C33.3741 43 43 33.3741 43 21.5C43 9.62588 33.3741 0 21.5 0C9.62588 0 0 9.62588 0 21.5Z"
          fill="white"
        />
        <line
          y1="-2.5"
          x2="23"
          y2="-2.5"
          transform="matrix(1 0 0 -1 10 27)"
          stroke="black"
          strokeWidth="5"
        />
        <line
          y1="-2.5"
          x2="23"
          y2="-2.5"
          transform="matrix(1 0 0 -1 10 11)"
          stroke="black"
          strokeWidth="5"
        />
        <line
          y1="-2.5"
          x2="23"
          y2="-2.5"
          transform="matrix(1 0 0 -1 10 19)"
          stroke="black"
          strokeWidth="5"
        />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className={tw(`md:hidden`)}>
    <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {links.map((link) => (
        <Link
          href={link.href}
          className={tw(`text-gray-500 block px-3 py-2 text-base font-medium`)}
          key={link.label}
        >
          {link.label}
        </Link>
      ))}

      
        <Button>
          <Link href={'/contact'}>Contact</Link>
        </Button>
      
    </div>
  </div>
);

export const Navigation = () => {
  const [scroolPosition] = useContext(ScrollPosition);

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const [sticky, setSticky] = useState('');

  const addSticky = () => {
    setSticky('sticky top-0');
  };

  const removeSticky = () => {
    setSticky('');
  };

  useEffect(() => {
    if (scroolPosition <= 200) {
      removeSticky();
    } else if (scroolPosition >= 300) {
      addSticky();
    }
  }, [scroolPosition]);

  return (
    <div className={tw(`flex flex-col z-[100] bg-white ${sticky}`)}>
      <div className={tw('flex flex-row sm:flex-col items-center')}>
        <div className={tw('sm:block md:hidden  lg:hidden')}>
          <Image
            className={styles.heart}
            width={166}
            height={66}
            src="/heart.svg"
          />
        </div>
        <div className={tw(`sm:hidden flex relative  m-auto lg:flex md:flex`)}>
          <Link className={'block r '} href={'/'}>
            <Image
              className={tw(` `)}
              src="/Logo.svg"
              alt="Crela-logo"
              width={sticky ? 100 : 171}
              height={sticky ? 50 :113}
            />
            {/* <Logo /> */}
          </Link>
        </div>
        <nav className={tw(`bg-white `)}>
          <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
            <div className={tw(`flex items-center justify-between`)}>
              <div className={tw(`flex items-center`)}>
                <div className={tw(`hidden md:block`)}>
                  <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
                    {links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className={tw(
                          `text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium`
                        )}
                      >
                        {link.label}
                      </a>
                    ))}
                    <Link href={'/contact'}>
                    <Button style='m-2 '>Contact</Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={tw(`hidden md:block`)}>
                <div className={tw(`ml-4 flex items-center md:ml-6`)}>
                  {/* <Button primary>Analiza Gratuita</Button> */}
                </div>
              </div>
              <div className={tw(`mr-2 flex md:hidden`)}>
                <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className={tw('self-center')}>
        {showMenu ? <MobileMenu /> : null}
      </div>
    </div>
  );
};


