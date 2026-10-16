import Image from "next/image";
import type { Project } from "@/data/projects";
import type { Locale } from "@/data/locale";
import { tagLabel } from "@/data/tags";
import type { Dictionary } from "../[lang]/dictionaries";

// "https://github.com/a/b/" -> "github.com/a/b"
function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function ProjectItem({ project, lang, dict }: { project: Project; lang: Locale; dict: Dictionary }) {
  return (
    <article id={project.id} aria-labelledby={`${project.id}-title`} className="scroll-in scroll-mt-20">
      <div className="mb-6 flex items-center gap-4">
        <a
          className="link min-w-0 font-mono text-[13px] text-quiet [overflow-wrap:anywhere]"
          href={project.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${dict.projects.codeLabel}: ${displayUrl(project.repoLink)}`}
        >
          {displayUrl(project.repoLink)}
        </a>
        <span aria-hidden className="h-px min-w-8 flex-1 bg-contour/60" />
      </div>

      <div className="grid gap-6 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1">
          {/* Same destination as "Open demo", so it stays out of the tab order. */}
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
            className="group block overflow-hidden border border-contour/50"
          >
            <Image
              src={project.image.src}
              width={project.image.width}
              height={project.image.height}
              alt={project.image.alt[lang]}
              sizes="(min-width: 1024px) 680px, 100vw"
              className="h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          </a>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-5 lg:col-start-1 lg:row-start-1">
          <h3 id={`${project.id}-title`} className="text-2xl leading-tight font-bold wdth-110 lg:text-[1.75rem]">
            {project.title[lang]}
          </h3>
          <p className="max-w-[38rem] text-[17px] leading-[1.65]">{project.description[lang]}</p>
          <p className="font-mono text-[13px] leading-relaxed text-quiet">
            {project.tags.map((tag) => tagLabel(tag, lang)).join(", ")}
          </p>
          <p className="pt-1 text-[15px] font-medium">
            <a className="link" href={project.demoLink} target="_blank" rel="noopener noreferrer">
              {dict.projects.demo}
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}
