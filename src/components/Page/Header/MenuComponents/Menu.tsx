
'use client';
import React from 'react';
import { menuItems } from '@/StaticData/constants';
import Link from 'next/link';
// @ts-ignore
import { useRouter } from 'next/navigation';

const Menu = () => {
  const router = useRouter();

  return (
    <div className="flex justify-self-center ml-auto self-stretch place-items-around menu menu-horizontal  gap-3 ">
      {menuItems.map((link) => {
        return (
          <Link
            key={link.name}
            className={`hover:text-accent uppercase transition-colors font-semibold		 text-secondary p-2 rounded-md ${
              // @ts-ignore
              router.pathname == link.href ? 'text-red-500' : ''
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
