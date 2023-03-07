import { BsTelephoneOutboundFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center  bg-gray-800 h-[3rem] px-[.5rem] fixed top-0 w-[100%]">
      <span className="text-white md:font-bold md:text-2xl bg-[#ff0000]  hover:bg-violet-600 duration-300 py-[.2rem] px-[.3rem] rounded">
        <BsTelephoneOutboundFill className="inline animate-pulse text-white" />
        <Link href="tel:+916206941545" className="text-slate-100">
           +916206941545
        </Link>
      </span>
      <div className="hidden md:block animate-pulse text-xl font-bold text-teal-600">Highpack Packers and Movers</div>

      <ul className="flex gap-1 md:flex md:gap-6">
        <li className="text-[#DB4437]">
          <Link href="">
            <MdEmail className="text-lg  hover:bg-slate-300"/>
          </Link>
        </li>
        <li className="text-[#0072b1]">
          <Link href="">
            <BsLinkedin className="text-lg  hover:bg-slate-300"/>
          </Link>
        </li>
        <li className="text-[#3b5998]">
          <Link href="">
            <AiFillFacebook className="text-lg  hover:bg-slate-300"/>
          </Link>
        </li>
        <li className="text-[#FF0000]">
          <Link href="">
            <AiFillYoutube className="text-lg  hover:bg-slate-300"/>
          </Link>
        </li>
        <li className="text-[#E1306C]">
          <Link href="">
            <FaInstagramSquare className="text-lg  hover:bg-slate-300"/>
          </Link>
        </li>
        <li className="text-[#00acee]">
          <Link href="">
            <FaTwitterSquare className="text-lg  hover:bg-slate-300"/>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
