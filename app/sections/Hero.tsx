"use client";

import { useState, useEffect } from "react";
import { Button } from "../components/Button"; 
import { ArrowDown, Briefcase } from "lucide-react";

export default function Hero() {
  const [displayedName, setDisplayedName] = useState("");
  const [showBio, setShowBio] = useState(false);

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

        setTimeout(() => {
          setDisplayedName("Gabriel");
          setShowBio(true);
        }, 600);
      }
    }, 150);

    return () => clearInterval(type);
  }, []);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-background min-w-screen px-4 gap-8 text-center">
      
      <h1 className="text-5xl md:text-8xl font-bold text-foreground tracking-tight">
        Oi, meu nome é
        <span className="text-gradient">{" " + displayedName}</span>
        <span className="animate-pulse text-primary ml-1">|</span>
      </h1>

      <p
        className={`
          text-lg md:text-xl text-muted max-w-2xl leading-relaxed
          transition-all duration-1000 ease-out
          ${showBio ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
      >
        Sou brasileiro e graduando em Engenharia de Computação na UFC.
        Participei da empresa júnior GTI com foco em desenvolvimento web e atuei
        em pesquisas sobre simulação e análise de dados de circuitos quânticos.
      </p>

      <div 
        className={`
          flex flex-col sm:flex-row gap-4 pt-4
          transition-all duration-1000 ease-out delay-300 
          ${showBio ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <a href="#projects">
          <Button variant="primary">
            Ver Projetos
            <ArrowDown className="w-4 h-4" />
          </Button>
        </a>

        <a href="#experience">
          <Button variant="outline">
            Ver Experiência
            <Briefcase className="w-4 h-4" />
          </Button>
        </a>
      </div>
    </main>
  );
}