"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Github, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);
  
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [isLangChanging, setIsLangChanging] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);



  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-background/60">
         <div className="max-w-6xl mx-auto px-6 h-16" /> 
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-neutral-200/50 dark:border-white/5 bg-white/60 dark:bg-neutral-950/60 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-end">
        
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors active:scale-90"
            title="Alternar Tema"
          >
            <Sun className="w-5 h-5 text-orange-500 absolute transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
            <Moon className="w-5 h-5 text-indigo-400 absolute transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
          </button>

        
      </div>
    </nav>
  );
}