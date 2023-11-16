import React from 'react'
import { servicii, Iservicii } from '@/StaticData/navItems'
const Stanga = ({serviciuSelectat=servicii[0], setlecteazaServiciul=(a:Iservicii) =>{}
}) => {
  return (
    <div className="relative flex-1 self-center text-center lg:max-w-[650px] lg:text-left">
      <ul className="lg:ml-12">
        {servicii.map((serviciu: Iservicii, idx: number) => {
          return (
            <li
              className="mb-3 cursor-pointer px-6 md:mb-7 md:px-0 md:pb-5"
              key={idx}
            >
              <h3
                className="pb-1 text-xl font-bold uppercase leading-6 tracking-wider 
        text-[#9D9D9D] transition-colors md:pb-0 md:text-2xl md:leading-7 "
                onClick={(e) => setlecteazaServiciul(serviciu)}
              >
                {serviciu.name}
              </h3>{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Stanga