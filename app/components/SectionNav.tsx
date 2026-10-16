"use client";

import { useEffect, useRef, useState } from "react";
import { activeSection } from "./position";

interface Section {
  id: string;
  label: string;
}

type Box = { left: number; width: number };

// Section links with a magenta marker on the header's bottom edge. The marker
// follows the link under the pointer (or keyboard focus) and otherwise rests on
// the section being read.
export function SectionNav({ sections }: { sections: Section[] }) {
  const listRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef(new Map<string, HTMLAnchorElement>());
  const [boxes, setBoxes] = useState<Record<string, Box>>({});
  const [active, setActive] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  // Where the marker last was, so it shrinks in place when it has nowhere to go.
  const [last, setLast] = useState<string | null>(null);
  const ids = sections.map((section) => section.id).join(" ");

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const measure = () =>
      setBoxes(
        Object.fromEntries(
          [...linkRefs.current].map(([id, link]) => [id, { left: link.offsetLeft, width: link.offsetWidth }]),
        ),
      );
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    document.fonts?.ready.then(measure);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const current = activeSection(ids.split(" "));
      setActive(current);
      if (current) setLast(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ids]);

  const point = (id: string) => {
    setHovered(id);
    setLast(id);
  };

  const target = hovered ?? active;
  const box = boxes[target ?? last ?? ""];
  const marker = box && target ? box : box ? { left: box.left + box.width / 2, width: 0 } : null;

  return (
    <ul ref={listRef} className="relative hidden h-14 items-center gap-7 sm:flex" onPointerLeave={() => setHovered(null)}>
      {sections.map((section) => {
        const isActive = active === section.id;
        return (
          <li key={section.id}>
            <a
              ref={(link) => {
                if (link) linkRefs.current.set(section.id, link);
                else linkRefs.current.delete(section.id);
              }}
              href={`#${section.id}`}
              aria-current={isActive ? "true" : undefined}
              onPointerEnter={() => point(section.id)}
              onFocus={() => point(section.id)}
              onBlur={() => setHovered(null)}
              className={`transition-colors duration-200 hover:text-magenta focus-visible:text-magenta ${
                hovered === section.id ? "text-magenta" : isActive ? "text-ink" : "text-quiet"
              }`}
            >
              {section.label}
            </a>
          </li>
        );
      })}
      <li aria-hidden className="contents">
        <span
          className="nav-marker"
          style={{
            width: marker?.width ?? 0,
            transform: `translateX(${marker?.left ?? 0}px)`,
            opacity: marker && target ? 1 : 0,
          }}
        />
      </li>
    </ul>
  );
}
