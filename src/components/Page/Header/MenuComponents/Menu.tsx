'use client';
import React, { useEffect, useState } from 'react';
import { menuItems } from '@/StaticData/constants';
import Link from 'next/link';

const Menu = () => {
  const [currentLink, setCurrentLink] = useState(window.location.pathname);

  useEffect(() => {
    setCurrentLink(window.location.pathname);
  }, [currentLink === window.location.pathname]);

  return (
    <div className="flex justify-self-center ml-auto self-stretch place-items-around menu menu-horizontal  gap-3 ">
      {menuItems.map((link) => {
        return (
          <Link
            key={link.name}
            className={`hover:text-white rounded-lg p-3 hover:bg-accent uppercase transition-colors font-semibold		  ${
              currentLink === link.href
                ? 'text-accent border-[#DA2128] border-[3px]'
                : ' text-secondary'
            }`}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};
export default Menu;
