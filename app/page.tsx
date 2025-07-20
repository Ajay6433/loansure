import Image from "next/image";
import Hero from '../pages/Hero'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
export default function Home() {
 return(
  <>
  <Navbar/>
  <Hero/>
  <Footer/>
  </>
 );
}
