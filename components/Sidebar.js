import Link from 'next/Link'
import React from 'react'
import {RiCloseFill} from 'react-icons/Ri'

const Sidebar = ({isOpen, toggleSidebar}) => {
  return (
    <div className={`w-[80%] h-screen mt-[3rem] absolute ${isOpen? "fixed":"hidden"} top-0 left-0 bg-gray-800 z-20 text-teal-500 text-2xl hover:bg-teal-500 hover:text-white rounded px-[.4rem] py-[.3rem] grid place-items-center`}>
      <div className='absolute top-0 right-0 mr-[30px] mt-[10px] text-[24px]' onClick={toggleSidebar}>
      <RiCloseFill className='cursor-pointer'/>
      </div>
      <div className='flex flex-col gap-6'>
        <Link href="/" onClick={toggleSidebar}>Home</Link>
        <Link href="/profile" onClick={toggleSidebar}>Profile</Link>
        <Link href="/services" onClick={toggleSidebar}>Services</Link>
        <Link href="/shiftingtype" onClick={toggleSidebar}>Shifting Type</Link>
        <Link href="/contactus" onClick={toggleSidebar}>Contact Us</Link>
      </div>
    </div>
  )
}

export default Sidebar
