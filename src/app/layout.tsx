import "./globals.css";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import { LanguageProvider } from "@/providers/language-provider";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GOV-AI-HUB",
  description: "Data Governance, GDPR & AI Act learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${kanit.className} min-h-screen bg-[#0B0F1A] text-white antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}