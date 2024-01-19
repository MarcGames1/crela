'use client'
import React from 'react'
import Logo from '../Logo';
import Menu from './MenuComponents/Menu';
import MobileMenu from './MenuComponents/MobileMenu';
import { ActionBtn } from '@/components/Buttons';

import useScrollDirection from '@/hooks/scroolDirection';



const Header = () => {

   const isScrollingUp = useScrollDirection();


  return (
    <header
      className={`${
        isScrollingUp ? 'sticky ' : 'sticky lg:relative '
      }  top-0 z-30 flex max-w-screen items-center bg-base-100  py-5 px-5 shadow-lg xl:px-12 header`}
    >
      <>
        <div className="lg:flex hidden w-full items-center  flex-row place-content-around">
          <Logo width={100} />
          <Menu />

          <ActionBtn.MainCta />
        </div>

        {/* MOBILE MENU */}

        <div className="lg:hidden flex  justify-between  w-full flex-row place-content-around">
          <MobileMenu />
          <Logo width={100} />
        </div>

        {/* MOBILE MENU */}
      </>
    </header>
  );
}

export default Header