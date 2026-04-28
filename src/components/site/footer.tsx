const footerLinks = {
  firm: ["About", "Practice Areas", "Case Studies"],
  resources: ["Insights", "FAQs", "Client Intake"],
  contact: ["Kinshasa", "+243 000 000 000", "contact@cabinetnyamugabo.com"],
};

export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-16 border-t border-[rgba(13,69,149,0.18)] bg-[linear-gradient(180deg,#0d4595_0%,#0b3772_62%,#08264f_100%)] px-4 py-14 text-[#dce7f4] sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <p className="text-xs tracking-[0.3em] text-[#b9eba2] uppercase">
            Cabinet Nyamugabo
          </p>
          <h2 className="max-w-xl font-serif text-4xl leading-tight text-white">
            Sophisticated counsel for moments that demand judgment.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[#d4e2ef]">
            Whether you&apos;re preparing a transaction, responding to a dispute,
            or protecting your family&apos;s interests, our team is ready to help
            you move with confidence.
          </p>
          <a
            href="mailto:contact@cabinetnyamugabo.com"
            className="inline-flex rounded-full border border-white/22 px-6 py-3 text-xs font-semibold tracking-[0.22em] text-[#d9f4ca] uppercase transition hover:bg-white/8"
          >
            contact@cabinetnyamugabo.com
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs tracking-[0.24em] text-[#9fc0e4] uppercase">
                {title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-[#e3edf6]">
                {links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-7xl flex-col gap-3 border-t border-white/12 pt-6 text-xs tracking-[0.18em] text-[#9fc0e4] uppercase sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Cabinet Nyamugabo. All rights reserved.</p>
        <p>Built for trust, clarity, and strong advocacy.</p>
      </div>
    </footer>
  );
}
