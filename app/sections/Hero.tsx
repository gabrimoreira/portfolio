"use client"; 

import { useState, useEffect } from "react";

export default function Hero() {
  const name = "Gabriel";
  const [displayedName, setDisplayedName] = useState("");
  
  useEffect(() => {

    const seq = [
      "G", "Ga", "Gab", "Gabr", "Gabri", "Gabrie", "Gabriel", "Gabriel ", "Gabriel ."
    ];

    let i = 0;

    const type = setInterval(() => {
      if (i < seq.length) {
        setDisplayedName(seq[i]);
        i++;
      } else {
        clearInterval(type);
        
        setTimeout(() => {        clearInterval(type);
          setDisplayedName("Gabriel");
        }, 600);
      }
    }, 150); 

    return () => clearInterval(type);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background min-w-screen">
      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
        Oi, meu nome é 
        
        <span className="text-gradient"> 
          {" " + displayedName}
        </span>

        <span className="animate-pulse text-primary ml-1">|</span>
      </h1>
      <span>
        
      </span>
    </main>
  );
}