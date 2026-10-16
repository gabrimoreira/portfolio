"use client";

import type { MouseEvent } from "react";
import { anchorAtTop } from "./position";

export function LanguageSwitch({ href, label, lang }: { href: string; label: string; lang: string }) {
  // Open the other language at the same spot the reader is looking at.
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.assign(href + anchorAtTop());
  };

  return (
    <a href={href} hrefLang={lang} lang={lang} onClick={handleClick} className="link">
      {label}
    </a>
  );
}
