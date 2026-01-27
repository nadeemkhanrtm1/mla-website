import { en } from "@/app/lib/translations/en";
import { hi } from "@/app/lib/translations/hi";
import { bn } from "@/app/lib/translations/bn";

export type Language = "en" | "hi" | "bn";

export const translations = {
  en,
  hi,
  bn,
};

export const languageLabels: Record<Language, string> = {
  en: "En",
  hi: "हिन्दी",
  bn: "বাংলা",
};

export const getTranslation = (language: Language) => {
  return translations[language];
};
