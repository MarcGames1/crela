import React from 'react'
import Image from "next/image";
import { tw } from 'twind';

const DefaultImage =({Imageurl, width, height, alt, caption, border}) =>{
    if (border == undefined){
      border = {
        width:0,
        radius:0,
      }
    }
    return (
      <>
        <div className={tw(`border-[${border.border?.width}] rounded-[${border?.border?.radius}]`)}>
          <Image src={Imageurl} width={width} height={height} alt={alt} />
        </div>
        {caption ? <span className={tw('block text-center text-gray-300	')}>{caption}</span> : null}
      </>
    );
}
export const BlockImage = props => {
    return (
      props.anchor ? <a href={props.anchor}><DefaultImage {...props} /></a>:<DefaultImage {...props} /> 
    
  );
};



