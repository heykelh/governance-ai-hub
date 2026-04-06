"use client";

import type { ReactNode } from "react";
import { useLanguage, type Locale, messages } from "@/providers/language-provider";

export type Messages = (typeof messages)[Locale];

export function LocaleProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function useLocale() {
  return useLanguage();
}