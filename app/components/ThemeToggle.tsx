"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};

export function ThemeToggle({ toDark, toLight }: { toDark: string; toLight: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  // The theme is only known in the browser; render a neutral button on the server.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const isDark = mounted && resolvedTheme === "dark";
  const label = isDark ? toLight : toDark;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className="-mr-2 grid size-10 cursor-pointer place-items-center rounded-full transition-colors duration-200 hover:text-magenta"
    >
      {mounted ? isDark ? <Sun aria-hidden className="size-5" /> : <Moon aria-hidden className="size-5" /> : <span className="size-5" />}
    </button>
  );
}
