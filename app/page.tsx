import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Research from "./sections/Research";
import { Footer } from "./components/Footer";
export default function Home() {
  return (
    <div className="bg-background flex flex-col min-h-screen items-center justify-center  font-sans ">
      <Navbar />
      <Hero/>
      <Projects/>
      <Research/>
      <Footer/>
    </div>
  );
}
