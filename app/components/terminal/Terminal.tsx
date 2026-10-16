"use client";

import { useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from "react";
import { useTheme } from "next-themes";
import { runCommand, type TerminalContext } from "./commands";
import { Prompt } from "./outputs";
import { anchorAtTop } from "../position";

interface Entry {
  id: number;
  cwd: string;
  command: string;
  output?: ReactNode;
}

interface TerminalProps {
  intro: ReactNode;
  promptDelay: number;
  ctx: TerminalContext;
}

export function Terminal({ intro, promptDelay, ctx }: TerminalProps) {
  const { t } = ctx;
  const { resolvedTheme, setTheme } = useTheme();
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const nextIdRef = useRef(0);
  const historyRef = useRef<string[]>([]);
  const historyIndexRef = useRef(-1);

  const [entries, setEntries] = useState<Entry[]>([]);
  const [showIntro, setShowIntro] = useState(true);
  const [cwd, setCwd] = useState("~");
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  // Follow new output; on first render the intro starts at the top.
  useEffect(() => {
    const screen = screenRef.current;
    if (screen && entries.length) screen.scrollTop = screen.scrollHeight;
  }, [entries]);

  const execute = (input: string) => {
    const command = input.trim();
    if (command) historyRef.current = [...historyRef.current, command].slice(-50);
    historyIndexRef.current = -1;

    const result = runCommand(command, ctx, { cwd, theme: resolvedTheme === "light" ? "light" : "dark" });

    if (result.clear) {
      setEntries([]);
      setShowIntro(false);
      return;
    }

    setEntries((previous) => [...previous.slice(-40), { id: nextIdRef.current++, cwd, command: input, output: result.output }]);
    if (result.cwd) setCwd(result.cwd);
    if (result.theme) setTheme(result.theme);
    if (result.open) window.open(result.open, "_blank", "noopener,noreferrer");
    if (result.navigate) window.location.assign(result.navigate + anchorAtTop());
    if (result.scrollTo) {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      if (result.scrollTo === "top") window.scrollTo({ top: 0, behavior });
      else document.getElementById(result.scrollTo)?.scrollIntoView({ behavior, block: "start" });
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const history = historyRef.current;
    if (event.key === "Enter") {
      event.preventDefault();
      execute(value);
      setValue("");
    } else if (event.key === "ArrowUp" && history.length) {
      event.preventDefault();
      const index = historyIndexRef.current === -1 ? history.length - 1 : Math.max(0, historyIndexRef.current - 1);
      historyIndexRef.current = index;
      setValue(history[index]);
    } else if (event.key === "ArrowDown" && historyIndexRef.current !== -1) {
      event.preventDefault();
      const index = historyIndexRef.current + 1;
      historyIndexRef.current = index < history.length ? index : -1;
      setValue(index < history.length ? history[index] : "");
    } else if (event.key === "l" && event.ctrlKey) {
      event.preventDefault();
      execute("clear");
    }
  };

  // Clicking anywhere in the window types into the prompt, unless the reader
  // is selecting text to copy.
  const focusPrompt = () => {
    if (!window.getSelection()?.toString()) inputRef.current?.focus({ preventScroll: true });
  };

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="terminal" onClick={focusPrompt}>
        <div className="terminal-bar">
          <span>{t.title}</span>
          <span className="t-dim">{t.hint}</span>
        </div>
        <div ref={screenRef} className="terminal-screen">
          <div role="log" aria-live="polite">
            {showIntro && intro}
            {entries.map((entry) => (
              <div key={entry.id} className="t-entry t-enter">
                <p>
                  <Prompt cwd={entry.cwd} />
                  {entry.command}
                </p>
                {entry.output && <div className="t-out">{entry.output}</div>}
              </div>
            ))}
          </div>
          <p className="t-input-line t-reveal" style={{ "--delay": `${promptDelay}s` } as CSSProperties}>
            <label htmlFor={inputId}>
              <Prompt cwd={cwd} />
              <span className="sr-only">{t.inputLabel}</span>
            </label>
            {!focused && !value && <span aria-hidden className="t-cursor" />}
            <input
              ref={inputRef}
              id={inputId}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              enterKeyHint="send"
            />
          </p>
        </div>
      </div>

      <ul aria-label={t.shortcutsLabel} className="flex flex-wrap gap-x-2 gap-y-2">
        {t.shortcuts.map((command) => (
          <li key={command}>
            <button type="button" onClick={() => execute(command)} className="shortcut">
              {command}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
