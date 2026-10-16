import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import Hero from "../sections/Hero";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Research from "../sections/Research";
import { getDictionary, getLocale } from "./dictionaries";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const lang = getLocale((await params).lang);
  const dict = getDictionary(lang);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 bg-ink px-4 py-2 font-sans text-paper focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        {dict.nav.skip}
      </a>
      <Navbar lang={lang} dict={dict} />
      <main id="main">
        <Hero lang={lang} dict={dict} />
        <Experience lang={lang} dict={dict} />
        <Projects lang={lang} dict={dict} />
        <Research lang={lang} dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
