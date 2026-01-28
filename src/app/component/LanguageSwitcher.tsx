"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { Language, languageLabels } from "@/app/lib/translations";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="fixed -right-5 top-1/2 -translate-y-1/2 z-100">
      {/* Language Column */}
      <div className="flex flex-col gap-1 origin-center">
        {(["en","hi", "bn"] as Language[]).map((lang) => (
          <div
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className={`cursor-pointer px-4 py-2 font-medium text-sm transition-all duration-300 rounded-lg ${language === lang
                ? "bg-[#f60] text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            aria-label={`Select ${languageLabels[lang]}`}
          >
            {languageLabels[lang]}
          </div>
        ))}
      </div>
    </div>
  );
};
