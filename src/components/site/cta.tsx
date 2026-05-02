export function CTA() {
  return (
    <section className="bg-[linear-gradient(135deg,#0d4595_0%,#0b3772_58%,#299122_100%)] px-4 py-18 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#b9eba2] uppercase">
            CTA
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Besoin de conseils juridiques fiables pour une affaire delicate ?
          </h2>
          <p className="mt-5 text-base leading-8 text-white/78">
            Contactez notre equipe au plus vite. Une strategie juridique efficace se met souvent en place avant meme que le probleme ne devienne urgent. Ne laissez pas les incertitudes juridiques vous submerger, prenez les devants et assurez la protection de vos droits des aujourd&apos;hui.
          </p>
        </div>

        <a
          href="#book-appointments"
          className="inline-flex w-fit items-center justify-center border border-white/30 bg-[#7fd35a] px-8 py-4 text-[11px] font-semibold tracking-[0.22em] text-[#24303a] uppercase transition hover:bg-[#99e077]"
        >
          Demander une consultation
        </a>
      </div>
    </section>
  );
}
