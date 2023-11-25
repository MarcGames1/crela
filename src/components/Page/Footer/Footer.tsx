'use client';
import React from 'react';
import { Footer as F } from 'react-daisyui';
import Logo from '../Logo';
import { INavItem, servicii, legal } from '@/StaticData/constants';
import Link from 'next/link';
import { ActionBtn } from '@/components/Buttons';

const Footer = () => {


  return (
    <footer>
      <F className=" p-10 bg-neutral text-neutral-content  items-start justify-items-center place-items-center text-center ">
        <div className="">
          <Logo dark />
        
        </div>

        <div className="flex flex-col place-items-start">
          <F.Title className="place-self-center">Servicii</F.Title>
          {servicii.map((s: INavItem, i: number) => {
            return (
              <Link key={i} className="link link-hover" href={s.href}>
                {s.name}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col place-items-start">
          <F.Title className="place-self-center">Legal</F.Title>
          {legal.map((s: INavItem, i: number) => {
            return (
              <Link key={i} className="link link-hover" href={s.href}>
                {s.name}
              </Link>
            );
          })}
        </div>
        
      </F>
    </footer>
  );
};

export default Footer;
