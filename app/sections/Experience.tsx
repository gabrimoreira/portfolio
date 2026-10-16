import { SectionHeader } from "../components/SectionHeader";
import { experience } from "@/data/experience";
import type { Locale } from "@/data/locale";
import type { Dictionary } from "../[lang]/dictionaries";

export default function Experience({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-[75rem] scroll-mt-14 px-4 pb-24 sm:px-8 lg:px-12 lg:pb-32">
      <SectionHeader id="experience-title" title={dict.experience.title} />

      <ul className="divide-y divide-contour/50">
        {experience.map((job) => (
          <li key={job.id} id={job.id} className="scroll-in grid scroll-mt-20 gap-x-10 gap-y-2 py-8 first:pt-0 sm:grid-cols-[7.5rem_1fr]">
            <p className="pt-1 font-mono text-[13px] text-quiet">
              <span className="whitespace-nowrap">{job.start[lang]} –</span>{" "}
              <span className="whitespace-nowrap">{job.end[lang]}</span>
            </p>
            <div className="flex max-w-[48rem] flex-col gap-1.5">
              <h3 className="text-xl leading-snug font-semibold">{job.role[lang]}</h3>
              <p className="text-sm text-quiet">{job.company[lang]}</p>
              {job.summary && <p className="mt-1 text-[16px] leading-[1.6]">{job.summary[lang]}</p>}
              <ul className="mt-1 flex list-disc flex-col gap-1 pl-5 text-[16px] leading-[1.6] marker:text-contour">
                {job.highlights.map((highlight) => (
                  <li key={highlight.text.en}>
                    {highlight.label && <span className="font-semibold">{highlight.label[lang]}: </span>}
                    {highlight.text[lang]}
                  </li>
                ))}
              </ul>
              <p className="mt-2 font-mono text-[13px] leading-relaxed text-quiet">{job.stack.join(", ")}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
