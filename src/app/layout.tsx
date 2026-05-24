import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cabinet Nyamugabo",
  description: "Cabinet d'avocats d'affaires basé à Kinshasa et Bukavu. C'est une structure specialisée dans l'accompagnement juridique, stratégique et reglementaire des entreprises, institutions et particuliers. Notre équipe d'avocats expérimentés offre des services complets en droit des affaires, droit fiscal, contentieux et droit public, avec une approche pratique et orientée vers les solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
