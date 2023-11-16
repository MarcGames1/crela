import React from 'react'
import Link from 'next/link'
import { Button } from 'react-daisyui';
import styles from './Buttons.module.css'
const Whatsapp = ({
  className = 'btn btn-outline btn-success btn-md sm:btn-sm ',
  dataTip = 'Scrie-mi pe Whatsapp',
  text = 'Whatsapp',
}) => {
  return (
    <Link
      title={dataTip}
      className={className}
      href={'https://wa.me/+40766713369'}
    >
      {text}
    </Link>
  );
};


const MainCta = ({
  className = ' btn hover:text-[#DA2128] ml-[7px] hover:ml-[2px]  hover:border-[#DA2128] hover:border-[3px] hover:bg-transparent hover:bg-none hover:border-opacity-100	 bg-gradient-to-t from-[#800507] to-[#DA2128] border-[0px] border-solid border-white border-opacity-0 text-white transition-colors duration-300',
  text = 'Consultanta Gratuita',
  dataTip = 'Programeaza-te pentru o sedinta gratuita pe Zoom!',
  href = 'https://calendly.com/crela/consultanta-gratuita',
}) => {
  return (
    <Link title={dataTip} className={className} href={href}>
      {text}
    </Link>
  );
};

const Primary = () =>{

  return (
    <div
      className={` btn btn-secondary hover:text-secondary ml-[7px] hover:ml-[2px]  hover:border-secondary hover:border-[3px] hover:bg-transparent hover:bg-none hover:border-opacity-100	 border-[0px] border-solid border-white border-opacity-0 text-white transition-colors duration-300', ${styles.secondary}`}
    >
      <a
        href={'https://calendly.com/crela/consultanta-gratuita'}
        className={`${styles.link}`}
      >
        Contacteaza-ma
      </a>
    </div>
  );
}
export  const ActionBtn = { MainCta, Whatsapp, Primary };