"use client";

import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { ArrowDown, Briefcase, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const [displayedName, setDisplayedName] = useState("");
  const [showBio, setShowBio] = useState(false);

  useEffect(() => {
    const seq = [
      "G",
      "Ga",
      "Gab",
      "Gabr",
      "Gabri",
      "Gabrie",
      "Gabriel",
      "Gabriel ",
      "Gabriel .",
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
        Hi, my name is
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
        I am a Computer Engineering undergraduate at the Federal University of
        Ceará (UFC). My background includes web development at GTI Junior
        Enterprise and research on quantum circuit simulation and data analysis.
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
            View Projects
            <ArrowDown className="w-4 h-4" />
          </Button>
        </a>

        <a href="#research">
          <Button variant="outline">
            Read Research
            <Briefcase className="w-4 h-4" />
          </Button>
        </a>
      </div>

      <div
        className={`
          flex gap-6 mt-4
          transition-all duration-1000 ease-out delay-500 
          ${showBio ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <a
          href="https://github.com/gabrimoreira"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-primary transition-colors hover:scale-110 transform duration-200"
        >
          <Github className="w-6 h-6" />
        </a>

        <a
          href="https://linkedin.com/in/gabrimoreira"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-primary transition-colors hover:scale-110 transform duration-200"
        >
          <Linkedin className="w-6 h-6" />
        </a>

        <a
          href="mailto:gabrieldevandrade49@gmail.com"
          className="text-muted hover:text-primary transition-colors hover:scale-110 transform duration-200"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </main>
  );
}
