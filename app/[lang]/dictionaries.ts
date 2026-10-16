import { isLocale, type Locale } from "@/data/locale";

const pt = {
  meta: {
    title: "Gabriel Moreira de Andrade",
    description:
      "Gabriel Moreira de Andrade, desenvolvedor de software full-stack e estudante de Engenharia de Computação na Universidade Federal do Ceará. Projetos, pesquisa e contato.",
  },
  nav: {
    label: "Principal",
    skip: "Pular para o conteúdo",
    experience: "Experiência",
    projects: "Projetos",
    research: "Pesquisa",
    contact: "Contato",
    otherLanguage: { label: "English", href: "/en", lang: "en" },
    themeToDark: "Usar tema escuro",
    themeToLight: "Usar tema claro",
  },
  hero: {
    role: "Desenvolvedor de software full-stack",
    bio: "Sou estudante de Engenharia de Computação na Universidade Federal do Ceará (UFC) e estagiário de desenvolvimento de software na Raposo Plástico. Antes, trabalhei com desenvolvimento web na empresa júnior GTI e fiz iniciação científica em simulação de circuitos quânticos.",
    email: "E-mail",
  },
  terminal: {
    title: "gabriel@ufc",
    hint: "digite help",
    inputLabel: "Comando do terminal",
    shortcutsLabel: "Comandos prontos",
    files: { experience: "experiencia", projects: "projetos", research: "pesquisa", contact: "contato.txt", stack: "stack.txt" },
    help: [
      ["help", "lista os comandos"],
      ["whoami", "quem eu sou"],
      ["ls [pasta]", "lista arquivos, experiência, projetos ou pesquisa"],
      ["cd <pasta>", "vai até a seção da página"],
      ["cat <arquivo>", "mostra stack.txt ou contato.txt"],
      ["open <projeto>", "abre a demo do projeto"],
      ["tema", "alterna entre claro e escuro"],
      ["lang en", "muda o site para inglês"],
      ["clear", "limpa o terminal"],
    ],
    notFound: "comando não encontrado. Digite help para ver os comandos.",
    noSuchPath: "arquivo ou pasta não encontrado",
    noSuchProject: "projeto não encontrado. Use ls projetos para ver os nomes.",
    missingProject: "informe o projeto, por exemplo: open ocr",
    opening: "abrindo",
    themeNames: { light: "claro", dark: "escuro" },
    themeSet: "tema",
    langUsage: "uso: lang en",
    sudo: "gabriel não está no arquivo sudoers. Este incidente será reportado.",
    shortcuts: ["help", "ls projetos", "cat stack.txt", "cat contato.txt", "tema", "clear"],
  },
  experience: {
    title: "Experiência",
  },
  projects: {
    title: "Projetos",
    intro:
      "Projetos da graduação e pessoais. Todos têm o código aberto e uma versão publicada para testar.",
    demo: "Abrir demo",
    codeLabel: "Código-fonte",
  },
  research: {
    title: "Pesquisa",
    and: "e",
    paper: "PDF",
    repo: "Repositório",
    courseContext: "Disciplina, UFC",
  },
  contact: {
    title: "Contato",
    text: "Para conversar sobre um projeto, uma vaga ou pesquisa, escreva para",
    rights: "Gabriel Moreira de Andrade",
    colophon: "Composto em Archivo e Martian Mono. Feito com Next.js e Tailwind CSS.",
  },
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  meta: {
    title: "Gabriel Moreira de Andrade",
    description:
      "Gabriel Moreira de Andrade, full-stack software developer and Computer Engineering student at the Federal University of Ceará, Brazil. Projects, research and contact.",
  },
  nav: {
    label: "Main",
    skip: "Skip to content",
    experience: "Experience",
    projects: "Projects",
    research: "Research",
    contact: "Contact",
    otherLanguage: { label: "Português", href: "/pt", lang: "pt-BR" },
    themeToDark: "Use dark theme",
    themeToLight: "Use light theme",
  },
  hero: {
    role: "Full-stack software developer",
    bio: "I'm a Computer Engineering undergraduate at the Federal University of Ceará (UFC), Brazil, and a software development intern at Raposo Plástico. Before that, I did web development at GTI Junior Enterprise and undergraduate research on quantum circuit simulation.",
    email: "Email",
  },
  terminal: {
    title: "gabriel@ufc",
    hint: "type help",
    inputLabel: "Terminal command",
    shortcutsLabel: "Ready-made commands",
    files: { experience: "experience", projects: "projects", research: "research", contact: "contact.txt", stack: "stack.txt" },
    help: [
      ["help", "list the commands"],
      ["whoami", "who I am"],
      ["ls [folder]", "list files, experience, projects or research"],
      ["cd <folder>", "go to that section of the page"],
      ["cat <file>", "print stack.txt or contact.txt"],
      ["open <project>", "open the project's demo"],
      ["theme", "switch between light and dark"],
      ["lang pt", "switch the site to Portuguese"],
      ["clear", "clear the terminal"],
    ],
    notFound: "command not found. Type help to see the commands.",
    noSuchPath: "no such file or folder",
    noSuchProject: "project not found. Use ls projects to see the names.",
    missingProject: "name a project, for example: open ocr",
    opening: "opening",
    themeNames: { light: "light", dark: "dark" },
    themeSet: "theme",
    langUsage: "usage: lang pt",
    sudo: "gabriel is not in the sudoers file. This incident will be reported.",
    shortcuts: ["help", "ls projects", "cat stack.txt", "cat contact.txt", "theme", "clear"],
  },
  experience: {
    title: "Experience",
  },
  projects: {
    title: "Projects",
    intro:
      "Projects from my degree and of my own. Each one has open source code and a live version to try.",
    demo: "Open demo",
    codeLabel: "Source code",
  },
  research: {
    title: "Research",
    and: "and",
    paper: "PDF (in Portuguese)",
    repo: "Repository",
    courseContext: "Coursework, UFC",
  },
  contact: {
    title: "Contact",
    text: "To talk about a project, a role or research, write to",
    rights: "Gabriel Moreira de Andrade",
    colophon: "Set in Archivo and Martian Mono. Built with Next.js and Tailwind CSS.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getLocale(value: string): Locale {
  return isLocale(value) ? value : "pt";
}

export function getDictionary(lang: Locale) {
  return dictionaries[lang];
}
