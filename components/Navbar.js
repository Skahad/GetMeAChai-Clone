import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return ( 
      <nav className='nav-cont '>
        <div className='flex items-center'>
          <Image src="/tea.gif" alt="" width={50} height={50} />
          <Link href={"/"}>
        <div className="logo">GetMeAChai!  
        </div>
        </Link>
        </div>
        <div className='flex mr-4'>
          <Link href={"/login"}>
          <button className='custbtn'>Login</button>
          </Link>
        </div>
      </nav>
   
  )
}

export default Navbar
