import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Logo = ({dark = false}) => {
  
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
          height={74}
          width={200}
        />
      </Link>
    );
}

export default Logo