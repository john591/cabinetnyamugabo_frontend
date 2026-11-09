"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LanguageSwitcher, useT } from "@/lib/i18n/client";
import type { DictKey } from "@/lib/i18n/dictionaries";

const logoUrl = "/logo/Horizontal_Couleur.svg";

const primaryLinks: { key: DictKey; href: string }[] = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about-us" },
  { key: "nav.services", href: "/services" },
  { key: "nav.team", href: "/our-team" },
  { key: "nav.environment", href: "/environment" },
  { key: "nav.articles", href: "/news" },
];

const insightLinks: DictKey[] = [
  "nav.founder",
  "nav.otherLawyers",
  "nav.resources",
];

const citizenshipLinks: DictKey[] = [
  "nav.ambition",
  "nav.impact",
  "nav.work",
  "nav.partner",
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

function isActiveHref(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href.startsWith("#")) {
    return false;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useT();

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
        {t("nav.skip")}
      </a>

      <header className="sticky top-0 z-50 border-b border-black/8 bg-white text-slate-950 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8 2xl:grid-cols-[minmax(180px,0.55fr)_minmax(0,1.6fr)_minmax(220px,0.55fr)]">
          <div className="flex min-w-0 items-center gap-3 sm:gap-5">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls="site-navigation-panel"
              aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              onClick={() => setIsOpen((open) => !open)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-slate-300 text-slate-950 transition hover:border-slate-950 sm:h-14 sm:w-14 2xl:hidden"
            >
              <span className="relative h-3 w-5 sm:h-4 sm:w-7">
                <span className="absolute left-0 top-0 h-px w-full bg-current" />
                <span className="absolute left-0 top-1.5 h-px w-full bg-current sm:top-2" />
                <span className="absolute left-0 top-3 h-px w-full bg-current sm:top-4" />
              </span>
            </button>

            <Link
              href="/"
              className="flex min-w-[86px] shrink-0 items-center sm:min-w-[128px] 2xl:min-w-[170px]"
            >
              <Image
                src={logoUrl}
                alt="Cabinet Nyamugabo"
                width={230}
                height={92}
                priority
                className="h-12 w-auto shrink-0 object-contain sm:h-16 lg:h-20 2xl:h-24"
              />
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-6 2xl:flex">
            {primaryLinks.map(({ key, href }) => {
              const isActive = isActiveHref(pathname, href);

              return (
                <Link
                  key={key}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative pb-2 text-[11px] font-semibold tracking-[0.24em] uppercase transition after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-center after:bg-[#0d4595] after:transition-transform ${
                    isActive
                      ? "text-[#0d4595] after:scale-x-100"
                      : "text-slate-800 after:scale-x-0 hover:text-[#0d4595] hover:after:scale-x-100"
                  }`}
                >
                  {t(key)}
                </Link>
              );
            })}
          </nav>

          <div className="hidden min-w-0 items-center justify-end gap-4 2xl:flex">
            <LanguageSwitcher />

            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center gap-2.5 border border-[#b91c1c] bg-[#b91c1c] px-5 py-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-white shadow-[0_12px_30px_rgba(185,28,28,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#991b1b] hover:shadow-[0_18px_38px_rgba(185,28,28,0.24)] active:translate-y-0 active:scale-[0.98]"
            >
              <AppointmentIcon />
              {t("nav.book")}
            </Link>
          </div>

          <div className="flex min-w-0 items-center justify-end gap-2 2xl:hidden">
            <LanguageSwitcher className="hidden sm:inline-flex" />
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center gap-1.5 border border-[#b91c1c] bg-[#b91c1c] px-3 py-2.5 text-[8px] font-semibold tracking-[0.12em] uppercase text-white shadow-[0_10px_24px_rgba(185,28,28,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#991b1b] hover:shadow-[0_16px_34px_rgba(185,28,28,0.24)] active:translate-y-0 active:scale-[0.98] sm:gap-2 sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.22em]"
            >
              <AppointmentIcon />
              <span className="hidden sm:inline">{t("nav.book")}</span>
              <span className="sm:hidden">{t("nav.bookShort")}</span>
            </Link>
          </div>
        </div>

        {isOpen ? (
          <>
            <button
              type="button"
              aria-label={t("nav.closeMenu")}
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
                    {t("nav.mainSections")}
                  </p>
                  <div className="mt-4 grid gap-2.5 sm:gap-3">
                    {primaryLinks.map(({ key, href }) => {
                      const isActive = isActiveHref(pathname, href);

                      return (
                        <Link
                          key={key}
                          href={href}
                          aria-current={isActive ? "page" : undefined}
                          className={`relative w-fit pb-1 font-serif text-2xl transition after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-[#0d4595] after:transition-transform sm:text-3xl ${
                            isActive
                              ? "text-[#0d4595] after:scale-x-100"
                              : "text-slate-950 after:scale-x-0 hover:text-[#0d4595] hover:after:scale-x-100"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {t(key)}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {t("nav.contact")}
                  </p>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                    <p>{t("nav.address")}</p>
                    <p>contact@cabinetnyamugabo.com</p>
                    <p>+243 999 163 935</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                

                <section className="space-y-4 border-t border-black/10 pt-4 md:border-t-0 md:pt-0">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                      {t("nav.knowledge")}
                    </h2>
                  </div>
                  <div className="grid gap-3">
                    {insightLinks.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="text-sm leading-6 text-slate-700 transition hover:text-[#0d4595]"
                        onClick={() => setIsOpen(false)}
                      >
                        {t(item)}
                      </Link>
                    ))}
                  </div>
                </section>

                <section className="space-y-5 border-t border-black/10 pt-4 md:col-span-2 xl:col-span-1 xl:border-t-0 xl:pt-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {t("nav.otherLinks")}
                  </p>
                  <div className="grid gap-3">
                    {citizenshipLinks.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="text-sm leading-6 text-slate-700 transition hover:text-[#0d4595]"
                        onClick={() => setIsOpen(false)}
                      >
                        {t(item)}
                      </Link>
                    ))}
                  </div>
                </section>

                <section className="space-y-5 border-t border-black/10 pt-4 md:col-span-2 xl:col-span-1 xl:border-t-0 xl:pt-0">
                  <LanguageSwitcher className="sm:hidden" />
                  <Link
                    href="/book-appointment"
                    className="inline-flex w-full items-center justify-center gap-2.5 border border-[#b91c1c] bg-[#b91c1c] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_12px_30px_rgba(185,28,28,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#991b1b] hover:shadow-[0_18px_38px_rgba(185,28,28,0.24)] active:translate-y-0 active:scale-[0.98] sm:w-fit"
                    onClick={() => setIsOpen(false)}
                  >
                    <AppointmentIcon />
                    {t("nav.book")}
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
