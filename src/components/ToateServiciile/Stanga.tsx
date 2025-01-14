import { useLayoutEffect, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { servicii, Iservicii } from '@/StaticData/constants';
import LiniaRosie from './LiniaRosie';
const Stanga = ({
  serviciuSelectat = servicii[0],
  setlecteazaServiciul = (a: Iservicii) => {},
}) => {
  const [totalServicii, setTotalServicii] = useState(servicii.length)
  const container =  useRef(null);
  const [height, setHeight] = useState(0);
  const[lineOffsetY, setLineOffsetY] = useState(height/totalServicii)
  
   useEffect(() => {
    setTotalServicii(servicii.length)
     if (!container.current) {
       return;
     } else {
       //@ts-ignore
       const currentHeight = Number(container.current.offsetHeight);
       setHeight(currentHeight);
       const index = servicii.findIndex(
         (serviciu) => serviciu.name === serviciuSelectat.name
       );
       setLineOffsetY((currentHeight / totalServicii) * index +( currentHeight / totalServicii)/1.25 );
      
     }
     //@ts-ignore
   }, [container.current, serviciuSelectat, totalServicii]);
  
  return (
    <div className="relative flex-1 self-center text-center lg:max-w-[650px] lg:text-left">
      <LiniaRosie y={lineOffsetY} />
      <ul ref={container} className="lg:ml-12 flex flex-col justify-evenly">
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
};

export default Stanga;
