import type { Metadata } from "next";
import "./globals.css";

import { LocaleProvider } from "@/lib/i18n/client";
import { htmlLang } from "@/lib/i18n/config";
import { getLocale } from "@/lib/i18n/server";

export const metadata: Metadata = {
  title: "Cabinet Nyamugabo",
  description: "Cabinet d'avocats d'affaires basé à Kinshasa et Bukavu. C'est une structure specialisée dans l'accompagnement juridique, stratégique et reglementaire des entreprises, institutions et particuliers. Notre équipe d'avocats expérimentés offre des services complets en droit des affaires, droit fiscal, contentieux et droit public, avec une approche pratique et orientée vers les solutions.",
  icons: {
    icon: [
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/icons/favicon-180.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={htmlLang[locale]} className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">
        <LocaleProvider locale={locale}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
