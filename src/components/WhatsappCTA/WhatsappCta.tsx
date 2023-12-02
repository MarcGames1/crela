import React from 'react'
import { ActionBtn } from '../Buttons';
const WhatsappCta = () => {
  return (
    <div className="bg-primary-gradient relative flex justify-center items-center w-full h-full text-white">
      <div className=" flex flex-col place-self-center gap-5 shadow-2xl glass p-10">
        <b>Vrei sa lucram impreuna?</b>
        <span>Scrie-mi pe Whatsapp</span>
        <div>
          <ActionBtn.Whatsapp />
        </div>
      </div>
    </div>
  );
}

export default WhatsappCta