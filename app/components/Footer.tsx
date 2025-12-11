import { Mail } from "lucide-react";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm font-semibold">
          Gabriel<span className="text-gradient"> Andrade</span>
        </div>

        <div className="text-xs text-muted text-center">
          &copy; {currentYear} Gabriel. Construído com <span className="text-foreground">Next.js</span> & <span className="text-foreground">Tailwind</span>.
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/gabrimoreira" 
            target="_blank" 
            rel="noreferrer"
            className="text-muted hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/gabrimoreria" 
            target="_blank" 
            rel="noreferrer"
            className="text-muted hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:gabrieldevandrade@gmail.com" 
            className="text-muted hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}