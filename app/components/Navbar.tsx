"use client"; 
import { useState, useEffect } from "react";
import { Moon, Sun, Github, Linkedin } from "lucide-react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-background/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-end">

        <div className="flex items-center gap-4">

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full text-neutral-400 hover:text-primary hover:bg-white/5 transition-colors"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>



        </div>
      </div>
    </nav>
  );
}