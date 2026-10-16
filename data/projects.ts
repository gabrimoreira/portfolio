import type { Localized } from "./locale";

export interface Project {
  id: string;
  title: Localized;
  description: Localized;
  tags: string[];
  repoLink: string;
  demoLink: string;
  image: { src: string; width: number; height: number; alt: Localized };
}

export const projects: Project[] = [
  {
    id: "ocr",
    title: { pt: "Plataforma de OCR com IA", en: "AI-powered OCR platform" },
    description: {
      pt: "Aplicação full-stack que extrai o texto de documentos automaticamente. O frontend é em Next.js, o backend em NestJS, e a integração com IA resume cada documento e preenche campos como fornecedor, datas e valor total.",
      en: "A full-stack app that extracts text from documents automatically. The frontend is Next.js, the backend is NestJS, and an AI integration summarizes each document and fills in fields such as vendor, dates and total amount.",
    },
    tags: ["Next.js", "NestJS", "TypeScript", "AI"],
    repoLink: "https://github.com/gabrimoreira/document-ocr-ai",
    demoLink: "https://document-ocr-ai.vercel.app/",
    image: {
      src: "/projects/ocr.png",
      width: 1260,
      height: 616,
      alt: {
        pt: "Uma fatura ao lado do resultado da análise: resumo e campos extraídos.",
        en: "An invoice next to the analysis result: summary and extracted fields.",
      },
    },
  },
  {
    id: "lung-segmentation",
    title: { pt: "Segmentação de pulmões em TC", en: "Lung segmentation web app" },
    description: {
      pt: "Interface web para análise de imagens médicas. Recebe tomografias em DICOM, aplica algoritmos de segmentação (Otsu, Watershed), permite editar os contornos à mão e exportar o resultado. Feita com React, TypeScript e shadcn/ui.",
      en: "A web interface for medical image analysis. Upload CT scans as DICOM files, run segmentation algorithms (Otsu, Watershed), edit the contours by hand and export the results. Built with React, TypeScript and shadcn/ui.",
    },
    tags: ["React", "TypeScript", "Tailwind CSS", "DICOM", "shadcn/ui"],
    repoLink: "https://github.com/gabrimoreira/lung-segmentation-web",
    demoLink: "https://lung-segmentation-web.vercel.app/",
    image: {
      src: "/projects/lung.png",
      width: 1689,
      height: 783,
      alt: {
        pt: "Tela inicial com a ilustração de um pulmão e um corte de tomografia com o contorno pulmonar marcado.",
        en: "Home screen with a lung illustration and a CT slice with the lung contour outlined.",
      },
    },
  },
  {
    id: "d3-notebooks",
    title: { pt: "Visualizações interativas com D3.js", en: "Interactive D3.js visualizations" },
    description: {
      pt: "Coleção de notebooks interativos no Observable que exploram estruturas de dados complexas, grafos de força e mapas geoespaciais com D3.js e Vega-Lite.",
      en: "A collection of interactive Observable notebooks exploring complex data structures, force-directed graphs and geospatial maps with D3.js and Vega-Lite.",
    },
    tags: ["D3.js", "JavaScript", "Data viz", "Observable"],
    repoLink: "https://observablehq.com/@gabriel-moreira-de-andrade",
    demoLink: "https://observablehq.com/collection/@gabriel-moreira-de-andrade/interactive-visualizations",
    image: {
      src: "/projects/d3.png",
      width: 883,
      height: 651,
      alt: {
        pt: "Grafo de força com centenas de nós azuis, laranjas e verdes.",
        en: "Force-directed graph with hundreds of blue, orange and green nodes.",
      },
    },
  },
  {
    id: "censo-2022",
    title: { pt: "Brasil em dados: Censo 2022", en: "Brazil in data: 2022 Census" },
    description: {
      pt: "Narrativa de dados com rolagem sobre a transição demográfica do Brasil a partir do Censo 2022. Mapas coropléticos e gráficos interativos feitos com Next.js e D3.js mostram o envelhecimento da população, a desigualdade racial e a visibilidade dos territórios indígenas e quilombolas.",
      en: "A scrollytelling piece on Brazil's demographic transition based on the 2022 Census. Interactive choropleth maps and charts built with Next.js and custom D3.js show population aging, racial inequality and the visibility of Indigenous and Quilombola territories.",
    },
    tags: ["Next.js", "D3.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    repoLink: "https://github.com/kelvinleandro/censo-dataviz-react",
    demoLink: "https://censo-2022-dataviz.vercel.app/",
    image: {
      src: "/projects/censo.png",
      width: 1628,
      height: 688,
      alt: {
        pt: "Capa do projeto com o título Censo Brasil 2022 e o mapa dos estados brasileiros.",
        en: "Project cover with the title Censo Brasil 2022 and a map of the Brazilian states.",
      },
    },
  },
];
