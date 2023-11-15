'use client';
import React from 'react';

import styles from './Hamburger.module.css';
const Hamburger = ({ isOpen = false, setIsOpen =(a:boolean) =>{} }) => {
  return (
    <>
      <div
        onClick={(e) => {
          e.preventDefault;
          setIsOpen(!isOpen);
        }}
        className={`${styles.burger}  ${isOpen ? styles.Clicked : ''}`}
      >
        <div className={`${styles.strip} ${styles['burger-strip']} `}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Hamburger;