import type { Locale } from "@/data/locale";
import type { Dictionary } from "../[lang]/dictionaries";
import { LanguageSwitch } from "./LanguageSwitch";
import { SectionNav } from "./SectionNav";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const sections = [
    { id: "experience", label: dict.nav.experience },
    { id: "projects", label: dict.nav.projects },
    { id: "research", label: dict.nav.research },
    { id: "contact", label: dict.nav.contact },
  ];

  return (
    <header className="site-nav sticky top-0 z-40 border-b border-contour/40 bg-paper">
      <nav aria-label={dict.nav.label} className="mx-auto flex h-14 max-w-[75rem] items-center justify-between gap-4 px-4 sm:px-8 lg:px-12">
        <a href={`/${lang}`} className="font-sans text-[15px] font-bold wdth-110 transition-colors duration-200 hover:text-magenta">
          Gabriel Andrade
        </a>

        <div className="flex items-center gap-5 font-sans text-[15px] font-medium sm:gap-7">
          <SectionNav sections={sections} />
          <LanguageSwitch {...dict.nav.otherLanguage} />
          <ThemeToggle toDark={dict.nav.themeToDark} toLight={dict.nav.themeToLight} />
        </div>
      </nav>
    </header>
  );
}
