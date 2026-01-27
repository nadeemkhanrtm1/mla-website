"use client";

import { LanguageProvider } from "@/app/context/LanguageContext";
import Header from "./header/Header";
import { FooterClient } from "./footer/FooterClient";

interface RootLayoutClientProps {
  children: React.ReactNode;
}

export function RootLayoutClient({ children }: RootLayoutClientProps) {
  return (
    <LanguageProvider>
      <Header />
      {children}
      <FooterClient />
    </LanguageProvider>
  );
}
