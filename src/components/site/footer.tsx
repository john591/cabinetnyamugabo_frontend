const footerLinks = {
  "Le Cabinet": ["À propos", "Domaines de pratique", "Études de cas"],
  resources: ["Perspectives", "FAQ", "Prise en charge des clients"],
  contact: ["Kinshasa", "+243 000 000 000", "contact@cabinetnyamugabo.org"],
};

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[rgba(13,69,149,0.18)] bg-[linear-gradient(180deg,#0d4595_0%,#0b3772_62%,#08264f_100%)] px-4 py-10 text-[#dce7f4] sm:px-6 sm:py-12 lg:px-8 lg:py-14"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-9 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="space-y-4 sm:space-y-5">
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#b9eba2] sm:text-xs sm:tracking-[0.3em]">
            Cabinet Nyamugabo
          </p>
          <h2 className="max-w-2xl font-serif text-2xl leading-snug text-white sm:text-3xl md:text-[2.15rem] md:leading-tight lg:max-w-xl lg:text-4xl">
            Nous sommes là pour vous apporter des solutions juridiques claires,
            rapides et efficaces, afin que vous puissiez avancer avec confiance
            dans vos projets et protéger ce qui compte le plus pour vous.
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-[#d4e2ef] sm:leading-7 lg:max-w-xl">
            Que vous prépariez une transaction, répondiez à un litige ou
            protégiez les intérêts de votre entreprise, notre équipe est à votre
            écoute pour vous offrir des conseils juridiques adaptés à vos
            besoins et à votre situation.
          </p>
          <a
            href="mailto:contact@cabinetnyamugabo.org"
            className="inline-flex max-w-full rounded-full border border-white/22 px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#d9f4ca] transition hover:bg-white/8 sm:px-6 sm:text-xs sm:tracking-[0.22em]"
          >
            <span className="break-all">contact@cabinetnyamugabo.org</span>
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
                  <li key={link} className="break-words">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-9 flex w-full max-w-7xl flex-col gap-3 border-t border-white/12 pt-5 text-[0.65rem] uppercase leading-5 tracking-[0.1em] text-[#9fc0e4] sm:mt-11 sm:flex-row sm:items-center sm:justify-between sm:pt-6 sm:text-xs sm:tracking-[0.16em]">
        <p>© 2026 Cabinet Nyamugabo. Tous droits réservés.</p>
        <p className="max-w-xl sm:text-right">
          Conçu pour la confiance, la clarté et un plaidoyer solide.
        </p>
      </div>
    </footer>
  );
}
