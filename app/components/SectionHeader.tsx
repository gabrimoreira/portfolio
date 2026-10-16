import type { ReactNode } from "react";

export function SectionHeader({ id, title, children }: { id: string; title: string; children?: ReactNode }) {
  return (
    <header className="mb-10 grid gap-4 border-t border-ink pt-6 lg:mb-14 lg:grid-cols-12 lg:gap-x-10">
      <h2 id={id} className="text-4xl leading-none font-bold tracking-[-0.01em] wdth-110 lg:col-span-5">
        {title}
      </h2>
      {children && (
        <p className="max-w-[38rem] text-[17px] leading-[1.65] text-quiet lg:col-span-7 lg:col-start-6">{children}</p>
      )}
    </header>
  );
}
