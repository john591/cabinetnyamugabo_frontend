import Link from "next/link";

import { getT } from "@/lib/i18n/server";

type FooterLink = { label: string; href?: string };
export async function Footer() {
  const { t } = await getT();

  const footerLinks: Record<string, FooterLink[]> = {
    [t("footer.firm")]: [
      { label: t("footer.about"), href: "/about-us" },
      { label: t("footer.practice"), href: "/services" },
    ],
    [t("footer.resources")]: [
      { label: t("footer.insights"), href: "/news" },
      { label: t("footer.client"), href: "/book-appointment" },
    ],
    [t("footer.contact")]: [
      { label: t("footer.city") },
      { label: "+243 999 163 935", href: "tel:+243999163935" },
      {
        label: "contact@cabinetnyamugabo.com",
        href: "mailto:contact@cabinetnyamugabo.com",
      },
    ],
  };

  return (
    <footer
      id="contact"
      className="border-t border-[rgba(13,69,149,0.18)] bg-[linear-gradient(180deg,#0D4595_0%,#0A3777_62%,#08264F_100%)] px-4 py-10 text-[#dce7f4] sm:px-6 sm:py-12 lg:px-8 lg:py-14"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-9 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="space-y-4 sm:space-y-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/Horizontal_Blanc.svg"
            alt="Cabinet Nyamugabo"
            className="h-16 w-auto sm:h-20"
          />
          <h2 className="max-w-2xl font-serif text-2xl leading-snug text-white sm:text-3xl md:text-[2.15rem] md:leading-tight lg:max-w-xl lg:text-4xl">
            {t("footer.closing")}
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-[#d4e2ef] sm:leading-7 lg:max-w-xl">
            Que vous prépariez une transaction, répondiez à un litige ou
            protégiez les intérêts de votre entreprise, notre équipe est à votre
            écoute pour vous offrir des conseils juridiques adaptés à vos
            besoins et à votre situation.
          </p>
          <a
            href="mailto:contact@cabinetnyamugabo.com"
            className="inline-flex max-w-full rounded-full border border-white/22 px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#d9f4ca] transition hover:bg-white/8 sm:px-6 sm:text-xs sm:tracking-[0.22em]"
          >
            <span className="break-all">contact@cabinetnyamugabo.com</span>
          </a>
        </div>

        <div className="grid gap-7 min-[520px]:grid-cols-2 md:grid-cols-3 lg:gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[0.68rem] uppercase tracking-[0.18em] text-[#9fc0e4] sm:text-xs sm:tracking-[0.24em]">
                {title}
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm leading-6 text-[#e3edf6] sm:mt-4 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.label} className="break-words">
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="transition hover:text-white hover:underline"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      link.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-9 flex w-full max-w-7xl flex-col gap-3 border-t border-white/12 pt-5 text-[0.65rem] uppercase leading-5 tracking-[0.1em] text-[#9fc0e4] sm:mt-11 sm:flex-row sm:items-center sm:justify-between sm:pt-6 sm:text-xs sm:tracking-[0.16em]">
        <p>{t("footer.rights")}</p>
        <p className="max-w-xl sm:text-right">
          Conçu pour la confiance, la clarté et un plaidoyer solide.
        </p>
      </div>
    </footer>
  );
}
