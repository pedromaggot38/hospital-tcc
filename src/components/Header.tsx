import Image from 'next/image'
import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='py-1 md:px-4 lg:px-3'>
      <div className='flex justify-between items-center'>
            <Image src={assets.logo} width={90} alt='logo' className='w-[80px]sm:w-auto'/>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black'>Administração</button>
      </div>
    </div>
  )
}

export default Header