
'use client';
import React from 'react';
import { menuItems } from '@/StaticData/navItems';
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
            className={`hover:bg-primary font-semibold		 text-secondary p-2 rounded-md ${
              // @ts-ignore
              router.pathname == link.href ? 'link-primary' : ''
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
