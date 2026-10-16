import { SectionHeader } from "./SectionHeader";
import type { Dictionary } from "../[lang]/dictionaries";

const email = "gabrieldevandrade49@gmail.com";

export function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" aria-labelledby="contact-title" className="mx-auto max-w-[75rem] scroll-mt-14 px-4 pb-10 sm:px-8 lg:px-12">
      <SectionHeader id="contact-title" title={dict.contact.title}>
        {dict.contact.text}
      </SectionHeader>

      <div className="grid lg:grid-cols-12 lg:gap-x-10">
        <div className="-mt-4 flex flex-col gap-5 lg:col-span-7 lg:col-start-6 lg:-mt-8">
          <a
            className="link self-start font-sans text-[clamp(1.375rem,3.4vw,2.25rem)] leading-tight font-semibold [overflow-wrap:anywhere] wdth-85"
            href={`mailto:${email}`}
          >
            {email}
          </a>
          <ul className="flex gap-6 font-sans text-[15px] font-medium">
            <li>
              <a className="link" href="https://github.com/gabrimoreira" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a className="link" href="https://linkedin.com/in/gabrimoreira" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-24 flex flex-col gap-2 border-t border-contour/60 pt-6 font-sans text-[13px] text-quiet sm:flex-row sm:justify-between sm:gap-8">
        <p>
          &copy; {year} {dict.contact.rights}
        </p>
        <p>{dict.contact.colophon}</p>
      </div>
    </footer>
  );
}
