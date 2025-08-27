import Image from 'next/image'
import React from 'react'
import Wapkon from '../public/assets/logo.png'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
<Image
  src={Wapkon}
  alt="Logo de Wapkon Bénin"
  priority
  className="w-24 sm:w-28 md:w-32.5"
/>
    </Link>
  )
}

export default Logo
