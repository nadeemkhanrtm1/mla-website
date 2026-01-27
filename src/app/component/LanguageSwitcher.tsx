"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { Language, languageLabels } from "@/app/lib/translations";
import { ChevronDown } from "lucide-react";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="fixed -right-5 top-1/2 z-100">
      {/* Dropdown Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 overflow-hidden text-ellipsis flex transform -rotate-90 items-center justify-between gap-2 px-4 py-2 bg-[#f60] text-white rounded-lg font-medium text-sm transition-colors shadow-lg cursor-pointer"
        aria-label="Toggle language selector"
        aria-expanded={isOpen}
      >
        <span className="w-[70%]">{languageLabels[language]}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-270deg" : "rotate-90deg"}`}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {(["en", "hi", "bn"] as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                language === lang
                  ? "bg-blue-100 text-blue-700 border-l-4 border-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              aria-label={`Select ${languageLabels[lang]}`}
            >
              {languageLabels[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
