"use client";
import React from "react";

import styles from "./hamburger.module.css";
import Link from "next/link";
const Hamburger = ({ isOpen = false, setIsOpen = (a: boolean) => {} }) => {
  return (
    <>
      <Link
        href={"#top"}
        role="button"
        aria-label="menu button"
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls="menuContent"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className={`${styles.burger} ${isOpen ? styles.Clicked : ""}`}
      >
        <div
          aria-hidden
          className={`${styles.strip} ${styles["burger-strip"]} `}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Link>
    </>
  );
};

export default Hamburger;
