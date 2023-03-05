import React from 'react';
import { typography } from '@/helpers/styles';
import { Button } from '@/Components/UX';
import Image from 'next/image';
import { tw } from 'twind';
import { v4 as uuid } from 'uuid';
import Link from 'next/link';
import { Date_Contact, Section_Header, MirodLessSticker } from './components';




const Contact = ({children}) => {
  return (
    <section className={tw('flex flex-col ')} id="contact">
      <Section_Header />
      <div className={tw('m-5 items-center  grid grid-cols-3 gap-2')}>
        <Date_Contact />
        <MirodLessSticker />
      </div>
      {children}
    </section>
      
  );
}

export default Contact