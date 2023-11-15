import React from 'react'
import Image from 'next/image';
import { ActionBtn } from '../Buttons';
const Dreapta = ({serviciuSelectat=""}) => {
  return (
    <div className=" min-h-full glass shadow-xl">
      <figure>
        <Image
          src="/images/servicii/branding.jpeg"
          alt="branding"
          width={800}
          height={800}
        />
      </figure>
      <div className="absolute bottom-0 left-0 w-full bg-[#ededed] bg-opacity-90 px-2 py-5 md:p-8 2xl:p-12">
        <p className="px-3 text-lg leading-5 text-[#000] md:px-0 md:leading-5">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <br />
        <br />
        <p className="px-3 text-lg leading-5 text-[#000] md:px-0 md:leading-5">
          Generate more profits from the website traffic you already have with a
          strategic CRO approach.
        </p>
        <div className="m-5 ">
        <ActionBtn.MainCta />
        </div>
      </div>
    </div>
  );
}

export default Dreapta