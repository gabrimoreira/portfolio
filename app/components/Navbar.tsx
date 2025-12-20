"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-neutral-200/50 dark:border-white/5 bg-white/90 dark:bg-neutral-950/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-end">

        {mounted && (
          <button
            onClick={toggleTheme}
            className="group p-2 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 transition-all"
            title="Alternar Tema"
            aria-label="Alternar Tema"
          >
            {resolvedTheme === "dark" ? (
              <Moon className="w-5 h-5 text-indigo-400 transition-transform group-hover:-rotate-12" />
            ) : (
              <Sun className="w-5 h-5 text-orange-500 transition-transform group-hover:rotate-45" />
            )}
          </button>
        )}
      </div>
    </nav>
  );
}