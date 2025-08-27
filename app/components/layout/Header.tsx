import Hero from '@/app/(home)/_components/header/Hero'
import MobileNavbar from '@/app/(home)/_components/header/MobileNavbar'
import Navbar from '@/app/(home)/_components/header/Navbar'
import React from 'react'

const Header = () => {
  return (
    <header>
      <Navbar />
      <MobileNavbar />
      <Hero />
    </header>
  )
}

export default Header
