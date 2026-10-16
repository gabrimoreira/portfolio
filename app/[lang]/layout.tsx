import type { Metadata } from "next";
import { Archivo, Martian_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { SmoothScroll } from "../components/SmoothScroll";
import { locales } from "@/data/locale";
import { getDictionary, getLocale } from "./dictionaries";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-archivo",
});

const martianMono = Martian_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-martian-mono",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Omit<LayoutProps, "children">): Promise<Metadata> {
  const { meta } = getDictionary(getLocale((await params).lang));
  return { title: meta.title, description: meta.description };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const lang = getLocale((await params).lang);

  return (
    <html lang={lang === "pt" ? "pt-BR" : "en"} className={`${archivo.variable} ${martianMono.variable}`} suppressHydrationWarning>
      <body className="bg-paper font-sans text-ink antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <SmoothScroll />
      </body>
    </html>
  );
}
