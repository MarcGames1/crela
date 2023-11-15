import React from 'react'
import Logo from '../Logo';
import Menu from './MenuComponents/Menu';
import MobileMenu from './MenuComponents/MobileMenu';
import { ActionBtn } from '@/components/Buttons';




const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center bg-base-100  py-5 px-5 shadow-lg xl:px-12 header">
      <>
        <div className="lg:flex hidden w-full items-center  flex-row place-content-around">
          <Logo width={100} />
          <Menu />
          
          <ActionBtn.MainCta />
        </div>

        {/* MOBILE MENU */}

        <div className="lg:hidden flex  justify-between  w-full  text-primary  flex-row place-content-around">
          <MobileMenu />
          <Logo width={100} />
        </div>

        {/* MOBILE MENU */}
      </>
    </header>
  );
}

export default Header