"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const primaryLinks = [
   "Home",
  "Appropos de Nous",
  "Services",
  'Notre Equipe',
  "Environnement & nous",
  "Blog",
  "Contact-nous",
];

const mainSections = [
  "Home",
  "Appropos de Nous",
  "Services",
  'Notre Equipe',
  "Environnement & nous",
  "Blog",
  "Contact-nous",
];

const insightLinks = [
  "Le fondateur",
  "Autres Avocats",
  "Ressources",
];

const citizenshipLinks = [
  "Notre ambition",
  "L'impact de notre travail dans la communauté",
  "Travailler avec nous",
  "Devenir un partenaire",
];

function AppointmentIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="m10 15 2 2 4-4" />
    </svg>
  );
}

function getHref(label: string) {
  switch (label) {
    case "Home":
      return "/";
    case "Appropos de Nous":
      return "/about-us";
    case "Services":
      return "/services";
    case "Notre Equipe":
      return "/our-team";
    case "Environnement & nous":
      return "/environment";
    case "Blog":
      return "/news";
    case "Contact-nous":
      return "#contact";
    default:
      return "#";
  }
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        Skip to Main content
      </a>

      <header className="sticky top-0 z-50 border-b border-black/8 bg-white text-slate-950 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-5 lg:gap-8">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls="site-navigation-panel"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setIsOpen((open) => !open)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-slate-300 text-slate-950 transition hover:border-slate-950 sm:h-14 sm:w-14"
            >
              <span className="relative h-3 w-5 sm:h-4 sm:w-7">
                <span className="absolute left-0 top-0 h-px w-full bg-current" />
                <span className="absolute left-0 top-1.5 h-px w-full bg-current sm:top-2" />
                <span className="absolute left-0 top-3 h-px w-full bg-current sm:top-4" />
              </span>
            </button>

            <Link href="/" className="min-w-0 max-w-[190px] shrink text-left sm:max-w-none">
              <span className="block truncate font-sans text-[15px] font-semibold tracking-[0.16em] uppercase text-[#0d4595] sm:text-[20px] sm:tracking-[0.2em] md:text-[24px]">
                Cabinet Nyamugabo
              </span>
              <span className="mt-1 hidden text-[9px] font-semibold tracking-[0.24em] uppercase text-slate-500 sm:block sm:text-[10px] sm:tracking-[0.28em]">
                Avocats d&apos;Affaires
              </span>
            </Link>
          </div>

          <nav className="hidden items-center gap-6 2xl:flex">
            {primaryLinks.map((item) => (
              <Link
                key={item}
                href={getHref(item)}
                className="text-[11px] font-semibold tracking-[0.24em] uppercase text-slate-800 transition hover:text-[#0d4595]"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden min-w-0 flex-1 items-center justify-end gap-4 2xl:flex">

            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center gap-2.5 border border-[#b91c1c] bg-[#b91c1c] px-5 py-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-white shadow-[0_12px_30px_rgba(185,28,28,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#991b1b] hover:shadow-[0_18px_38px_rgba(185,28,28,0.24)] active:translate-y-0 active:scale-[0.98]"
            >
              <AppointmentIcon />
              Prendre Rendez-Vous
            </Link>
          </div>

          <div className="flex min-w-0 flex-1 justify-end 2xl:hidden">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center gap-2 border border-[#b91c1c] bg-[#b91c1c] px-3 py-2.5 text-[9px] font-semibold tracking-[0.18em] uppercase text-white shadow-[0_10px_24px_rgba(185,28,28,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#991b1b] hover:shadow-[0_16px_34px_rgba(185,28,28,0.24)] active:translate-y-0 active:scale-[0.98] sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.22em]"
            >
              <AppointmentIcon />
              <span className="hidden sm:inline">Prendre Rendez-Vous</span>
              <span className="sm:hidden">Prendre Rendez-Vous</span>
            </Link>
          </div>
        </div>

        {isOpen ? (
          <>
            <button
              type="button"
              aria-label="Fermer le menu"
              className="fixed inset-0 z-40 bg-slate-950/28 backdrop-blur-[1px]"
              onClick={() => setIsOpen(false)}
            />
            <div
              id="site-navigation-panel"
              className="fixed inset-x-0 top-[72px] z-50 max-h-[calc(100vh-72px)] overflow-y-auto border-t border-black/8 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.14)] sm:top-[86px] sm:max-h-[calc(100vh-86px)]"
            >
              <div className="mx-auto grid w-full max-w-[1600px] gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-8 lg:py-10">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Main Sections
                  </p>
                  <div className="mt-4 grid gap-2.5 sm:gap-3">
                    {mainSections.map((item) => (
                      <Link
                        key={item}
                        href={getHref(item)}
                        className="font-serif text-2xl text-slate-950 transition hover:text-[#0d4595] sm:text-3xl"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Contact
                  </p>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                    <p>Kinshasa, Democratic Republic of the Congo</p>
                    <p>contact@cabinetnyamugabo.org</p>
                    <p>+243 000 000 000</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                

                <section className="space-y-4 border-t border-black/10 pt-4 md:border-t-0 md:pt-0">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Connaissances
                    </h2>
                  </div>
                  <div className="grid gap-3">
                    {insightLinks.map((item) => (
                      <Link
                        key={item}
                        href={getHref(item)}
                        className="text-sm leading-6 text-slate-700 transition hover:text-[#0d4595]"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </section>

                <section className="space-y-5 border-t border-black/10 pt-4 md:col-span-2 xl:col-span-1 xl:border-t-0 xl:pt-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Autres liens
                  </p>
                  <div className="grid gap-3">
                    {citizenshipLinks.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="text-sm leading-6 text-slate-700 transition hover:text-[#0d4595]"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </section>

                <section className="space-y-5 border-t border-black/10 pt-4 md:col-span-2 xl:col-span-1 xl:border-t-0 xl:pt-0">
                
                  <Link
                    href="/book-appointment"
                    className="inline-flex w-full items-center justify-center gap-2.5 border border-[#b91c1c] bg-[#b91c1c] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_12px_30px_rgba(185,28,28,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#991b1b] hover:shadow-[0_18px_38px_rgba(185,28,28,0.24)] active:translate-y-0 active:scale-[0.98] sm:w-fit"
                    onClick={() => setIsOpen(false)}
                  >
                    <AppointmentIcon />
                    Prendre Rendez-Vous
                  </Link>
                </section>
              </div>
            </div>
            </div>
          </>
        ) : null}
      </header>
    </>
  );
}
