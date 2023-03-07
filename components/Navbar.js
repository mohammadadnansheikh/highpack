import Link from "next/Link";
import { AiOutlineMenu } from "react-icons/Ai";
import Sidebar from "./Sidebar";
// import IconVid  from "../public/Iconvideo.mp4"


const Navbar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
    <nav className="flex items-center justify-between  text-gray-100 px-[1rem] fixed top-[3rem] h-[4rem] w-[100%] z-20">
      <div>
      {/* <video controls autoPlay loop muted style={{ width: '60px', height: '60px' }}>
        <source src={IconVid}/>
      </video> */}

      
      {/* <video src={require('../public/Iconvideo.mp4')} /> */}
  
    
           
        <img
          src="/Highpack Packers and Movers.png"
          alt=""
          className="h-[auto] w-[3.5rem] m-[auto] rounded-xl border-4 border-gray-900 shadow-sm shadow-teal-900"
        />


        {/* <p className="sm:text-xl font-semibold hover:text-teal-600">Higpack Packers and Movers </p> */}
      </div>
      <ul className="hidden  md:flex md:gap-3 xl:gap-6">
        <li>
          <Link href="/" className="md:text-xl font-semibold bg-[#00A300]  border-solid rounded-md hover:border-4 border-rose-900 px-[.8rem] py-[.3rem]">Home</Link>
        </li>
        <li>
          <Link href="/profile" className="md:text-xl font-semibold bg-[#00A300]  border-solid rounded-md hover:border-4 border-rose-900 px-[.8rem] py-[.3rem]">Profile</Link>
        </li>
        <li>
          <Link href="/services" className="md:text-xl font-semibold bg-[#00A300]  border-solid rounded-md hover:border-4 border-rose-900 px-[.8rem] py-[.3rem]">Services</Link>
        </li>
        <li>
          <Link href="/shiftingtype" className="md:text-xl font-semibold bg-[#00A300]  border-solid rounded-md hover:border-4 border-rose-900 px-[.8rem] py-[.3rem] whitespace-nowrap">Shifting Type</Link>
        </li>

        <li>
          <Link href="/contactus" className="md:text-xl font-semibold bg-[#00A300]  border-solid rounded-md hover:border-4 border-rose-900 px-[.8rem] py-[.3rem] whitespace-nowrap">Contact Us</Link>
        </li>
      </ul>
      <div className="md:hidden" onClick={toggleSidebar}>
        <Link href="#">
          <AiOutlineMenu className="text-2xl font-bold text-gray-900"/>
        </Link>
      </div>
    </nav>
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
