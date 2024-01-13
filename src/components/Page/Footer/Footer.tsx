'use client';
import React from 'react';
import { Footer as F } from 'react-daisyui';
import Logo from '../Logo';
import { INavItem, servicii, legal } from '@/StaticData/constants';
import Link from 'next/link';
import { FaFacebook, FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';

const Footer = () => {


  return (
    <footer>
      <F className=" p-10 bg-neutral text-neutral-content  items-start justify-items-center place-items-center text-center ">
        <div className="w-full flex items-center  gap-5 flex-col ">
          <Logo dark />
          <div className="flex flex-row gap-10 items-center justify-items-center">
            <Link
              href={'https://www.facebook.com/profile.php?id=61555699130647'}
            >
              <FaFacebook size={'2rem'} />
            </Link>
            <Link
              href={'https://www.facebook.com/profile.php?id=61555699130647'}
            >
              <FaInstagram size={'2rem'} />
            </Link>
            <Link
              href={'https://www.facebook.com/profile.php?id=61555699130647'}
            >
              <FaTiktok  size={'2rem'} />
            </Link>
            <Link
              href={'https://www.facebook.com/profile.php?id=61555699130647'}
            >
              <FaThreads  size={'2rem'} />
            </Link>
          </div>
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
