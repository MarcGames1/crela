import React from 'react';
import { tw } from 'twind';
import { v4 as uuidv4 } from 'uuid';

import Link from 'next/link';
import { bubble as HamburgerMenu } from 'react-burger-menu';

import styles from './HamburgerMenu.module.css'




export const MobileMenu = ({links}) => {
  return (
    <div className={tw('   ')}>
      <HamburgerMenu
        
        right
        customCrossIcon={
          <>
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
          </>
        }
        burgerButtonClassName={styles.burgerButton}
        burgerBarClassName={styles.bar}
        crossButtonClassName={styles.crossButton}
        crossClassName={styles.cross}
        menuClassName={styles.menu}
        morphShapeClassName={styles.morphShape}
        itemListClassName={styles.itemList}
        overlayClassName={styles.overlay}
      >
        {links.map((link) => (
          <Link key={uuidv4()} href={link.href}>
            {link.label}
          </Link>
        ))}
      </HamburgerMenu>
    </div>
  );
};


// <Menu burgerButtonClassName={ "my-class" } />
// <Menu burgerBarClassName={ "my-class" } />
// <Menu crossButtonClassName={ "my-class" } />
// <Menu crossClassName={ "my-class" } />
// <Menu menuClassName={ "my-class" } />
// <Menu morphShapeClassName={ "my-class" } />
// <Menu itemListClassName={ "my-class" } />
// <Menu overlayClassName={ "my-class" } />