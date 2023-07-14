import Image from 'next/image';
import React from 'react'

const Logo = (props) => {
    const{src} = props;
  return (
    <>
        <Image src={src} alt="Logo" className="w-14 h-14"/>
    </>
  )
}

export default Logo;