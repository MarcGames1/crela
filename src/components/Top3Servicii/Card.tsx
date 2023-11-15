import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
export interface ICard {
    href:string,
    image:string,
    text:React.JSX.Element
}


const Card = ({href, image, text}:ICard) => {
  return (
    <Link
      href={href}
      className="group relative block min-h-[240px] overflow-hidden"
    >
      <div className="transition-all duration-300 ease-in-out group-hover:scale-105">
        <Image alt="card-image" role="presentation" src={image} width={300} height={300} />
        <h3 className="absolute bottom-4 left-4 z-10 text-xl font-medium leading-[1.2]  text-white sm:bottom-5 sm:left-7 sm:text-2xl sm:leading-[1.21]">
          {text}
        </h3>
        <div className="absolute -bottom-20 -right-2 h-44 w-[120%] rotate-[12deg]  bg-gradient-to-l from-[#800507] to-[#DA2128] opacity-90 transition-all  duration-300 ease-in-out group-hover:-bottom-16 group-hover:opacity-100 sm:group-hover:-bottom-14  "></div>
      </div>
    </Link>
  );
}

export default Card