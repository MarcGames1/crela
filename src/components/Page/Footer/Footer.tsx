'use client';
import React from 'react';
import { Footer as F } from 'react-daisyui';
import Logo from '../Logo';
import { INavItem, servicii, legal } from '@/StaticData/navItems';
import Link from 'next/link';

const Footer = () => {


  return (
    <F className="p-10 bg-neutral text-neutral-content">
      <div className="flex flex-col items-center">
        <Logo dark />
      </div>

      <div>
        <F.Title>Servicii</F.Title>
        {servicii.map((s: INavItem, i: number) => {
          return (
            <Link className="link link-hover" href={s.href}>
              {s.name}
            </Link>
          );
        })}
      </div>
      <div>
        <F.Title>Company</F.Title>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <F.Title>Legal</F.Title>
        {legal.map((s: INavItem, i: number) => {
          return (
            <Link className="link link-hover" href={s.href}>
              {s.name}
            </Link>
          );
        })}
      </div>
    </F>
  );
};

export default Footer;
