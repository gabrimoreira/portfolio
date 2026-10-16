import type { Locale } from "./locale";

// Tags are written in English in the data files; these are the Portuguese
// labels for the ones that aren't product names.
const ptLabels: Record<string, string> = {
  AI: "IA",
  "Data viz": "Visualização de dados",
};

export function tagLabel(tag: string, lang: Locale) {
  return lang === "pt" ? (ptLabels[tag] ?? tag) : tag;
}
