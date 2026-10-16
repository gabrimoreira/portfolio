import { Github, Linkedin, Mail } from "lucide-react";
import { Terminal } from "../components/terminal/Terminal";
import { Intro, introCommands, introTimeline, type TerminalData } from "../components/terminal/outputs";
import { projects } from "@/data/projects";
import { coursework, paper } from "@/data/research";
import { experience } from "@/data/experience";
import { stack } from "@/data/stack";
import type { Locale } from "@/data/locale";
import type { Dictionary } from "../[lang]/dictionaries";

const links = {
  email: "gabrieldevandrade49@gmail.com",
  github: "https://github.com/gabrimoreira",
  linkedin: "https://linkedin.com/in/gabrimoreira",
};

export default function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.terminal;
  const data: TerminalData = {
    bio: dict.hero.bio,
    stack: stack.map(({ group, items }) => ({ group: group[lang], items })),
    experience: experience.map(({ id, role, company }) => ({ id, title: `${role[lang]}, ${company[lang]}` })),
    projects: projects.map(({ id, title, demoLink }) => ({ id, title: title[lang], demoLink })),
    research: [
      { name: `${paper.id}.pdf`, title: paper.title, link: paper.link },
      ...coursework.map((course) => ({ name: `${course.id}/`, title: course.title[lang], link: course.link })),
    ],
    contact: [
      { label: "email", text: links.email, href: `mailto:${links.email}` },
      { label: "github", text: "github.com/gabrimoreira", href: links.github },
      { label: "linkedin", text: "linkedin.com/in/gabrimoreira", href: links.linkedin },
    ],
  };
  const { end } = introTimeline(introCommands(t.files));

  return (
    <section aria-labelledby="hero-name" className="mx-auto max-w-[75rem] px-4 pt-10 pb-20 sm:px-8 lg:px-12 lg:pt-16 lg:pb-28">
      <div className="grid gap-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-8">
        <header className="order-1 lg:col-span-5 lg:row-start-1">
          <h1
            id="hero-name"
            className="-mt-[0.12em] font-sans text-[clamp(2.75rem,5.4vw,4.5rem)] leading-[0.92] font-bold tracking-[-0.02em] wdth-110"
          >
            <span className="block">Gabriel</span>
            <span className="block">Moreira</span>
            <span className="block">de Andrade</span>
          </h1>
          <p className="mt-5 font-sans text-xl font-medium text-quiet lg:text-2xl">{dict.hero.role}</p>
        </header>

        <div className="order-3 flex flex-col gap-6 lg:col-span-5 lg:row-start-2">
          <p className="max-w-[34rem] text-[17px] leading-[1.65]">{dict.hero.bio}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium">
            <li>
              <a className="link inline-flex items-center gap-2" href={links.github} target="_blank" rel="noopener noreferrer">
                <Github aria-hidden className="size-4" />
                GitHub
              </a>
            </li>
            <li>
              <a className="link inline-flex items-center gap-2" href={links.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin aria-hidden className="size-4" />
                LinkedIn
              </a>
            </li>
            <li>
              <a className="link inline-flex items-center gap-2" href={`mailto:${links.email}`}>
                <Mail aria-hidden className="size-4" />
                {dict.hero.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="order-2 h-[460px] sm:h-[420px] lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:h-[440px]">
          <Terminal
            intro={<Intro data={data} files={t.files} />}
            promptDelay={end}
            ctx={{ data, t, otherLanguage: { href: dict.nav.otherLanguage.href, code: dict.nav.otherLanguage.lang } }}
          />
        </div>
      </div>
    </section>
  );
}
