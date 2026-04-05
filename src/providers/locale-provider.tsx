"use client";

import { createContext, useContext, useState } from "react";
import { messages, Locale } from "@/data/i18n";

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof messages.fr;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");

  const value: LocaleContextType = {
    locale,
    setLocale,
    t: messages[locale],
  };

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}