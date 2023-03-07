import Head from "next/head";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";
import Profile from "./profile";
import ContactUs from "./contactus";
import Services from "./services";
import Shiftingtype from "./shiftingtype";
import HeadingProfile from "../components/HeadingProfile";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Highpack</title>
        <meta name="description" content="packers and movers" />
        <link rel="" href="/favicon.ico" />
      </Head>
      <main className="">
        <Hero />
        <HeadingProfile/>
        <Profile/>
        <Services/>
       
        <ContactUs/>
        
        <Shiftingtype/>
      </main>
    </div>
  );
}
