import Image from "next/image";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center  font-sans dark:bg-black">
      <Navbar />
    </div>
  );
}
