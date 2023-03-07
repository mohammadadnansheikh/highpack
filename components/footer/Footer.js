import React from 'react'
import FooterItemContainer from './FooterItemContainer'
import { BsLinkedin } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-[auto]  text-white bg-gray-900 z-70 ">
      <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
        <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold 
        md:w-2/5'>
          <span className='text-teal-400'>Subscribe</span> to know more, connect with us
        </h1>
        <div>
        <input type="text" placeholder='Enter Your Phone Number' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'/>
        <button className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white  font-semibold md:w-auto w-full'>Subscribe Now</button>
        </div>
      </div>
    <FooterItemContainer/>
    <div className='grid grid-cols-1 sm-grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
      <span>&copy; 2023 Apply. All rights and reserved</span>
      <span>Terms:- Privacy and Policy </span>
      <ul className='flex gap-1 md:flex md:gap-6 m-[auto] text-xl'>
        <li className="text-[#DB4437] hover:bg-slate-100 duration-300 rounded p-[1]">
          <Link href="#">
            <MdEmail/>
          </Link>
        </li>
        <li className="text-[#0072b1] hover:bg-slate-100 duration-300 rounded p-[1]">
          <Link href="#">
            <BsLinkedin />
          </Link>
        </li>
        <li className="text-[#3b5998] hover:bg-slate-100 duration-300 rounded p-[1]">
          <Link href="#">
            <AiFillFacebook />
          </Link>
        </li>
        <li className="text-[#FF0000] hover:bg-slate-100 duration-300 rounded p-[1]">
          <Link href="#">
            <AiFillYoutube />
          </Link>
        </li>
        <li className="text-[#E1306C] hover:bg-slate-100 duration-300 rounded p-[1]">
          <Link href="#">
            <FaInstagramSquare />
          </Link>
        </li>
        <li className="text-[#00acee] hover:bg-slate-100 duration-300 rounded p-[1]">
          <Link href="#">
            <FaTwitterSquare />
          </Link>
        </li>
      </ul>
    </div>
   
    </footer>
  )
}
export default Footer
