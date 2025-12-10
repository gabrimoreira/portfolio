import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
export default function Home() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center  font-sans dark:bg-black">
      <Navbar />
      <Hero/>
    </div>
  );
}
