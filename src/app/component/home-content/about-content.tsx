"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const AboutContent = () => {
  const { t } = useLanguage();

  return (
    <section id="vision" className="py-20 py-42px bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 mb-24px">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary mukta-medium rounded-full text-sm mb-4">
            {t.home.aboutContent.badge}
          </span>
          <h2 className="text-[44px] leading-15 text-foreground mb-6 open-sans-semibold-normal text-mobile-32">
            {t.home.aboutContent.title}{" "}
            <span className="text-gradient">{t.home.aboutContent.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground mukta-regular text-16px">
            {t.home.aboutContent.description}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer p-16px"
            style={{ animationDelay: "0s" }}
          >
            <div className="absolute -top-18.75 -right-16.25 w-32 h-32 bg-gradient-saffron opacity-5 rounded-full group-hover:opacity-10 transition-opacity"></div>
            <div className="w-16 h-16 scaler-0-point-8 rounded-xl mb-12px bg-gradient-saffron flex items-center justify-center mb-6 shadow-button group-hover:animate-pulse-glow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-building w-8 h-8 text-primary-foreground"
              >
                <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                <path d="M9 22v-4h6v4"></path>
                <path d="M8 6h.01"></path>
                <path d="M16 6h.01"></path>
                <path d="M12 6h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M16 10h.01"></path>
                <path d="M16 14h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M8 14h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl text-16px font-heading font-bold text-foreground mb-4 mb-4px group-hover:text-primary transition-colors">
              {t.home.aboutContent.cards.development.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-14px">
              {t.home.aboutContent.cards.development.description}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-saffron scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
          <div
            className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer p-16px"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="absolute -top-18.75 -right-16.25 w-32 h-32 bg-gradient-saffron opacity-5 rounded-full group-hover:opacity-10 transition-opacity"></div>
            <div className="w-16 h-16 scaler-0-point-8 rounded-xl mb-12px bg-gradient-saffron flex items-center justify-center mb-6 shadow-button group-hover:animate-pulse-glow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-graduation-cap w-8 h-8 text-primary-foreground"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                <path d="M22 10v6"></path>
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
              </svg>
            </div>
            <h3 className="text-xl text-16px font-heading font-bold text-foreground mb-4 mb-4px group-hover:text-primary transition-colors">
              {t.home.aboutContent.cards.youth.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-14px">
              {t.home.aboutContent.cards.youth.description}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-saffron scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
          <div
            className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer p-16px"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute -top-18.75 -right-16.25 w-32 h-32 bg-gradient-saffron opacity-5 rounded-full group-hover:opacity-10 transition-opacity"></div>
            <div className="w-16 h-16 scaler-0-point-8 rounded-xl mb-12px bg-gradient-saffron flex items-center justify-center mb-6 shadow-button group-hover:animate-pulse-glow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart w-8 h-8 text-primary-foreground"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
            <h3 className="text-xl text-16px font-heading font-bold text-foreground mb-4 mb-4px group-hover:text-primary transition-colors">
              {t.home.aboutContent.cards.welfare.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-14px">
              {t.home.aboutContent.cards.welfare.description}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-saffron scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;

