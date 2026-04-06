"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "fr" | "en";

export const messages = {
  fr: {
    common: {
      brandLine: "Gouvernance Data • RGPD • AI Act",
      start: "Commencer",
      signIn: "Connexion",
      companies: "Entreprises",
      explore: "Explorer",
      learn: "Apprendre",
      glossary: "Glossaire",
      documents: "Documents",
      blog: "Blog",
      cookies: "Cookies",
    },
  },
  en: {
    common: {
      brandLine: "Data Governance • GDPR • AI Act",
      start: "Start",
      signIn: "Sign in",
      companies: "Companies",
      explore: "Explore",
      learn: "Learn",
      glossary: "Glossary",
      documents: "Documents",
      blog: "Blog",
      cookies: "Cookies",
    },
  },
} as const;

type Messages = (typeof messages)[Locale];

type LanguageContextValue = {
  locale: Locale;
  setLocale: (nextLocale: Locale) => void;
  t: Messages;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "gov-ai-hub-locale";

export function LanguageProvider({
  children,
  initialLocale = "fr",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "fr" || stored === "en") {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: messages[locale],
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}