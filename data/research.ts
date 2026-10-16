import type { Localized } from "./locale";

export interface Paper {
  id: string;
  title: string;
  translatedTitle: string;
  authors: string[];
  self: string;
  year: string;
  venue: Localized;
  summary: Localized;
  link: string;
}

export interface Coursework {
  id: string;
  title: Localized;
  year: string;
  description: Localized;
  link: string;
}

export const paper: Paper = {
  id: "qfa",
  title: "Proposta de um Somador Completo Quântico Fotônico",
  translatedTitle: "Proposal of a photonic quantum full adder",
  authors: ["Orleans C. V. Cardoso", "Gabriel M. de Andrade", "João Batista R. Silva"],
  self: "Gabriel M. de Andrade",
  year: "2025",
  venue: {
    pt: "VIII Workshop-Escola de Computação e Informação Quântica (WECIQ), UFSC, Florianópolis",
    en: "8th Workshop-School on Quantum Computation and Information (WECIQ), UFSC, Florianópolis, Brazil",
  },
  summary: {
    pt: "Somador completo quântico em arquitetura fotônica, com estados coerentes e óptica linear, estendendo a plataforma QPU X para aritmética reversível.",
    en: "A quantum full adder in a photonic architecture built on coherent states and linear optics, extending the QPU X platform to reversible arithmetic.",
  },
  link: "/docs/artigo-qfa.pdf",
};

export const coursework: Coursework[] = [
  {
    id: "ica",
    title: {
      pt: "Estudos em Inteligência Computacional Aplicada",
      en: "Applied Computational Intelligence studies",
    },
    year: "2024",
    description: {
      pt: "Relatórios técnicos aplicando aprendizado de máquina: análise exploratória da qualidade de vinhos, modelos de regressão para prever solubilidade e algoritmos de classificação para pedidos de bolsa.",
      en: "Technical reports applying machine learning: exploratory analysis of wine quality, regression models for solubility prediction and classification algorithms for grant applications.",
    },
    link: "https://github.com/gabrimoreira/university-docs/tree/main/ica",
  },
  {
    id: "vv",
    title: {
      pt: "Verificação e Validação de Software",
      en: "Software Verification & Validation",
    },
    year: "2024",
    description: {
      pt: "Documentação do ciclo de testes de uma aplicação full-stack: plano de testes, especificação de casos de teste, relatórios de falhas e testes automatizados.",
      en: "Documentation of the testing lifecycle for a full-stack application: test planning, test case specifications, failure reports and automated testing.",
    },
    link: "https://github.com/gabrimoreira/university-docs/tree/main/v%26v",
  },
];
