import React from "react";
import Link from "next/link";
import { Button } from "react-daisyui";
import styles from "./Buttons.module.css";
const Whatsapp = ({
  className = "btn btn-outline btn-success btn-md ",
  dataTip = "Scrie-mi pe Whatsapp",
  text = "Whatsapp",
}) => {
  return (
    <Link
      title={dataTip}
      className={className}
      href={"https://wa.me/+40766713369"}
    >
      {text}
    </Link>
  );
};

const MainCta = ({
  className = " btn hover:text-[#DA2128] ml-[7px] hover:ml-[2px]  hover:border-[#DA2128] hover:border-[3px] hover:bg-transparent hover:bg-none hover:border-opacity-100	 bg-primary-gradient border-[0px] border-solid border-white border-opacity-0 text-white transition-colors duration-300",
  text = "Consultanta Gratuita",
  dataTip = "Vrei să programăm o ședință? Dă-mi un mesaj pe WhatsApp!",
  href = "https://wa.me/40766713369?text=Bun%C4%83%2C%20a%C8%99%20dori%20s%C4%83%20programez%20o%20consulta%C8%9Bie%20gratuit%C4%83%20pentru",
}) => {
  return (
    <Link title={dataTip} className={className} href={href}>
      {text}
    </Link>
  );
};

const Primary = () => {
  return (
    <a
        title={'Vrei să programăm o ședință? Dă-mi un mesaj pe WhatsApp!'}
      href={"https://wa.me/40766713369?text=Bun%C4%83%2C%20a%C8%99%20dori%20s%C4%83%20programez%20o%20consulta%C8%9Bie%20gratuit%C4%83%20pentru"}
      className={` btn btn-secondary hover:text-secondary ml-[7px] hover:ml-[2px]  hover:border-secondary hover:border-[3px] hover:bg-transparent hover:bg-none hover:border-opacity-100	 border-[0px] border-solid border-white border-opacity-0 text-white transition-colors duration-300', ${styles.secondary}`}
    >
      <span className={`${styles.link}`}>Contacteaza-ma</span>
    </a>
  );
};
export const ActionBtn = { MainCta, Whatsapp, Primary };
