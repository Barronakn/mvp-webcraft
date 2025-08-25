import Image from 'next/image'
import React from 'react'
import Wapkon from '../public/assets/logo.png'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
        <Image width={130} height={70} src={Wapkon} alt='Logo de Wapkon Bénin' />
    </Link>
  )
}

export default Logo
