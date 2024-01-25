import React from 'react'
import { ActionBtn } from '../Buttons';

export enum WhatsappCTAVariants {
default = 'default',
UGC='UGC_CTA'
}

const Default =() =>{
  return (
    <>
      <div className="bg-primary-gradient relative flex justify-center items-center w-full h-full text-white">
        <div className=" flex flex-col place-self-center gap-5 shadow-2xl glass p-10">
          <b>Vrei sa lucram impreuna?</b>
          <span>Scrie-mi pe Whatsapp</span>
          <div>
            <ActionBtn.Whatsapp />
          </div>
        </div>
      </div>
    </>
  );
}

const UGC_CTA = () =>{
  return <div className="bg-primary-gradient relative flex justify-center items-center w-full h-full text-white">
      <div className=" flex flex-col place-self-center gap-5 shadow-2xl glass p-10">
        <b>
          Daca ai un brand sau oferi servicii si-ti doresti nu numai sa atragi
          mai multi clienti, dar sa si ii fidelizezi atunci hai sa cream
          continut pentru afacerea ta.
        </b>
        <span>
          P.S: Daca doar vrei sa vezi cum se face, atunci cu siguranta
          continutul de pe websiteul meu te va lamuri si poate cine
          stie, te apuci si tu?
        </span>
        <div>
          <ActionBtn.Whatsapp />
        </div>
      </div>
    </div>
}
const WhatsappCta = ({variant=WhatsappCTAVariants.default}) => {

  if(variant === WhatsappCTAVariants.default) {
    return <Default />
  } 
  else return <UGC_CTA />
}

export default WhatsappCta