import type { Localized } from "./locale";

export interface Job {
  id: string;
  role: Localized;
  company: Localized;
  start: Localized;
  end: Localized;
  summary?: Localized;
  highlights: { label?: Localized; text: Localized }[];
  stack: string[];
}

// Most recent first.
export const experience: Job[] = [
  {
    id: "raposo",
    role: { pt: "Estagiário de Desenvolvimento de Software", en: "Software Development Intern" },
    company: { pt: "Raposo Plástico", en: "Raposo Plástico" },
    start: { pt: "2026", en: "2026" },
    end: { pt: "atual", en: "present" },
    summary: {
      pt: "Atuo na transformação digital de uma empresa de reciclagem de plásticos, desenvolvendo soluções internas que organizam o trabalho das equipes e reduzem processos manuais.",
      en: "I work on the digital transformation of a plastics recycling company, building internal tools that organize the teams' work and cut down manual processes.",
    },
    highlights: [
      {
        label: { pt: "FlowPilot", en: "FlowPilot" },
        text: {
          pt: "desenvolvo a plataforma interna de gestão de tarefas e rotinas da empresa.",
          en: "I build the company's internal platform for managing tasks and routines.",
        },
      },
      {
        label: { pt: "Full stack", en: "Full stack" },
        text: {
          pt: "Vue 3 (Composition API) e Tailwind CSS no frontend, e NestJS, TypeScript e TypeORM no backend, com PostgreSQL.",
          en: "Vue 3 (Composition API) and Tailwind CSS on the frontend, and NestJS, TypeScript and TypeORM on the backend, with PostgreSQL.",
        },
      },
      {
        label: { pt: "Novas features", en: "New features" },
        text: {
          pt: "desenvolvo novas funcionalidades para a plataforma.",
          en: "I ship new functionality for the platform.",
        },
      },
      {
        label: { pt: "Infraestrutura", en: "Infrastructure" },
        text: {
          pt: "deploy no Railway com banco no DigitalOcean, além do planejamento e evolução de migrações de schema.",
          en: "deploys on Railway with the database on DigitalOcean, plus planning and evolving schema migrations.",
        },
      },
    ],
    stack: ["Vue.js", "TypeScript", "NestJS", "TypeORM", "PostgreSQL", "Tailwind CSS", "PWA", "Railway", "DigitalOcean"],
  },
  {
    id: "iniciacao-cientifica",
    role: {
      pt: "Bolsista de Iniciação Científica (Pesquisa & Desenvolvimento)",
      en: "Undergraduate Research Fellow (Research & Development)",
    },
    company: { pt: "Universidade Federal do Ceará (UFC)", en: "Federal University of Ceará (UFC)" },
    start: { pt: "set. 2024", en: "Sep 2024" },
    end: { pt: "nov. 2025", en: "Nov 2025" },
    highlights: [
      {
        text: {
          pt: "Desenvolvi scripts para simulação de circuitos quânticos e processamento de dados.",
          en: "Wrote scripts for quantum circuit simulation and data processing.",
        },
      },
      {
        text: {
          pt: "Colaborei em ambiente acadêmico focado em resolução de problemas matemáticos e algorítmicos.",
          en: "Worked in an academic team focused on solving mathematical and algorithmic problems.",
        },
      },
    ],
    stack: ["Python", "NumPy", "Git"],
  },
  {
    id: "gti",
    role: { pt: "Desenvolvedor Full Stack e Gerente de Projetos", en: "Full Stack Developer and Project Manager" },
    company: { pt: "GTI (Empresa Júnior)", en: "GTI (Junior Enterprise)" },
    start: { pt: "jan. 2024", en: "Jan 2024" },
    end: { pt: "dez. 2024", en: "Dec 2024" },
    highlights: [
      {
        label: { pt: "Frontend", en: "Frontend" },
        text: {
          pt: "construí interfaces responsivas e dinâmicas com React e Tailwind CSS, traduzindo protótipos de alta fidelidade do Figma em código funcional.",
          en: "built responsive, dynamic interfaces with React and Tailwind CSS, turning high-fidelity Figma prototypes into working code.",
        },
      },
      {
        label: { pt: "Backend", en: "Backend" },
        text: {
          pt: "atuei na arquitetura e construção de APIs REST com Node.js e Express.",
          en: "designed and built REST APIs with Node.js and Express.",
        },
      },
      {
        label: { pt: "Liderança", en: "Leadership" },
        text: {
          pt: "como gerente, liderei as cerimônias SCRUM (dailies, sprints), garantindo o versionamento correto via Git e a entrega das features do projeto.",
          en: "as manager, I ran the Scrum ceremonies (dailies, sprints), keeping Git versioning in order and the project's features shipping.",
        },
      },
    ],
    stack: ["Next.js", "React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Git", "GitHub"],
  },
];
