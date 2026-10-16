import { Fragment, type ReactNode } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { coursework, paper } from "@/data/research";
import type { Locale } from "@/data/locale";
import type { Dictionary } from "../[lang]/dictionaries";

interface Row {
  id: string;
  year: string;
  title: ReactNode;
  meta: ReactNode[];
  summary: string;
  link: { href: string; label: string };
}

function AuthorList({ authors, self, and }: { authors: string[]; self: string; and: string }) {
  return (
    <>
      {authors.map((author, index) => (
        <Fragment key={author}>
          {index > 0 && (index === authors.length - 1 ? ` ${and} ` : ", ")}
          {author === self ? <strong className="font-semibold text-ink">{author}</strong> : author}
        </Fragment>
      ))}
    </>
  );
}

export default function Research({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const rows: Row[] = [
    {
      id: paper.id,
      year: paper.year,
      title: (
        <>
          <span lang="pt-BR">{paper.title}</span>
          {lang === "en" && <span className="block text-base font-normal text-quiet">{paper.translatedTitle}</span>}
        </>
      ),
      meta: [<AuthorList key="authors" authors={paper.authors} self={paper.self} and={dict.research.and} />, paper.venue[lang]],
      summary: paper.summary[lang],
      link: { href: paper.link, label: dict.research.paper },
    },
    ...coursework.map((course) => ({
      id: course.id,
      year: course.year,
      title: course.title[lang],
      meta: [dict.research.courseContext],
      summary: course.description[lang],
      link: { href: course.link, label: dict.research.repo },
    })),
  ];

  return (
    <section id="research" aria-labelledby="research-title" className="mx-auto max-w-[75rem] scroll-mt-14 px-4 pb-24 sm:px-8 lg:px-12 lg:pb-32">
      <SectionHeader id="research-title" title={dict.research.title} />

      <ul className="divide-y divide-contour/50">
        {rows.map((row) => (
          <li
            key={row.id}
            id={row.id}
            className="scroll-in grid scroll-mt-20 gap-x-10 gap-y-2 py-7 first:pt-0 sm:grid-cols-[7.5rem_1fr] lg:grid-cols-[7.5rem_1fr_auto]"
          >
            <p className="pt-1 font-mono text-[13px] text-quiet">{row.year}</p>
            <div className="flex max-w-[48rem] flex-col gap-1.5">
              <h3 className="text-xl leading-snug font-semibold">{row.title}</h3>
              {row.meta.map((line, index) => (
                <p key={index} className="text-sm text-quiet">
                  {line}
                </p>
              ))}
              <p className="mt-1 text-[16px] leading-[1.6]">{row.summary}</p>
            </div>
            <p className="pt-1 text-[15px] font-medium sm:col-start-2 lg:col-start-3 lg:text-right">
              <a className="link whitespace-nowrap" href={row.link.href} target="_blank" rel="noopener noreferrer">
                {row.link.label}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
