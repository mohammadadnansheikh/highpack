import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import GetQuoteSlider from "../components/GetQuoteSlider";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import WhatsApp from "../components/WhatsApp";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteOpen, setQuoteOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const setSlider = () => {
    setQuoteOpen(false);
  }

  useEffect(()=>{
   setTimeout(()=>{
    setQuoteOpen(true)
   }, 4000)
  },[])
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      

      <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      { isQuoteOpen && <GetQuoteSlider setSlider={setSlider}/>}

      <Component {...pageProps} isOpen={isOpen}/>
      <WhatsApp/>
      <Footer/>
    </div>
  );
}
