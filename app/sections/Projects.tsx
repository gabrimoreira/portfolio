import { ProjectItem } from "../components/ProjectItem";
import { SectionHeader } from "../components/SectionHeader";
import { projects } from "@/data/projects";
import type { Locale } from "@/data/locale";
import type { Dictionary } from "../[lang]/dictionaries";

export default function Projects({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-[75rem] scroll-mt-14 px-4 pb-24 sm:px-8 lg:px-12 lg:pb-32">
      <SectionHeader id="projects-title" title={dict.projects.title}>
        {dict.projects.intro}
      </SectionHeader>

      <ul className="flex flex-col gap-20 lg:gap-28">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectItem project={project} lang={lang} dict={dict} />
          </li>
        ))}
      </ul>
    </section>
  );
}
