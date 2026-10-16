import type { Localized } from "./locale";

// What `cat stack.txt` prints in the terminal. Only technologies used in the
// experience, projects and research listed on the page.
export const stack: { group: Localized; items: string[] }[] = [
  { group: { pt: "front-end", en: "front-end" }, items: ["TypeScript", "Vue 3", "React", "Next.js", "Tailwind CSS", "PWA"] },
  { group: { pt: "back-end", en: "back-end" }, items: ["Node.js", "NestJS", "Express", "TypeORM", "PostgreSQL"] },
  { group: { pt: "infra", en: "infra" }, items: ["Git", "Railway", "DigitalOcean"] },
  { group: { pt: "dados", en: "data" }, items: ["Python", "NumPy", "D3.js", "scikit-learn"] },
  { group: { pt: "testes", en: "testing" }, items: ["Jest", "Cypress"] },
];
