import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Logo = ({dark = false, width=200, height=74}) => {
  
  const getLogoSrc = () =>{
    return dark
      ? '/images/brand/logo-light.png'
      : '/images/brand/logo-dark.png';
  }
    return (
      <Link href={'/'}>
        {' '}
        <Image
          alt="Crela Logo"
          className="w-full"
          loading="eager"
          src={getLogoSrc()}
          height={height}
          width={width}
        />
      </Link>
    );
}

export default Logo