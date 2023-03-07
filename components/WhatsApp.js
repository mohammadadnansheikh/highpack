import {BsWhatsapp} from "react-icons/Bs"
import Link from "next/Link"
const WhatsApp = () => {
  return (
    <div className="bg-[#25D366] fixed z-[100] text-white p-[.8rem] sm:p-[1rem] rounded-full rounded-2 text-[2rem] sm:text-[3rem] md:text-[3rem] right-[2rem] bottom-[2rem] md:right-[4rem] md:bottom-[4rem] cursor-pointer hover:bg-[#075E54]  duration-300">
       <Link href="https://wa.me/6206941545"><BsWhatsapp/></Link>
       
    </div>
  )
}

export default WhatsApp
