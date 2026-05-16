const office = {
  phone: "+243 000 000 000",
  email: "contact@cabinetnyamugabo.org",
};

export function Contact() {
  return (
    <section id="contact" className="relative min-h-[640px] overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-72"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.7)_44%,rgba(0,0,0,0.28)_100%)]" />

      <div className="relative z-10 mx-auto grid min-h-[640px] max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(440px,0.72fr)] lg:items-center lg:px-12">
        <div>
          <p className="max-w-3xl text-lg font-semibold leading-tight sm:text-xl lg:text-2xl">
            Engagés. Réactifs. Proches de vos enjeux.
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl md:text-[3.5rem] lg:mt-8 lg:text-8xl lg:leading-[0.95]">
            Experts en
            <span className="block text-[#7fb3ff]">requêtes &amp;</span>
            <span className="block text-[#7fb3ff]">consultations</span>
          </h2>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href={`tel:${office.phone.replace(/\s+/g, "")}`}
              className="rounded-full bg-[#0d4595] px-6 py-3 text-center text-base font-bold text-white transition hover:bg-[#0a3777] lg:px-8 lg:py-4 lg:text-xl"
            >
              Appeler {office.phone}
              <span className="block text-xs font-bold">Ligne ouverte</span>
            </a>
            <a
              href={`mailto:${office.email}`}
              className="rounded-full border-2 border-[#7fb3ff] bg-[#0d4595] px-6 py-3 text-base font-bold text-white transition hover:bg-[#0a3777] lg:px-8 lg:py-4 lg:text-xl"
            >
              Envoyer un email
            </a>
          </div>
        </div>

        <form className="rounded-[28px] bg-white p-7 text-slate-950 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-9">
          <h3 className="text-2xl font-bold leading-tight lg:text-4xl">
            Une question? Ecrivez-nous.
          </h3>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Prénom"
              className="h-12 rounded-full border border-slate-400 px-5 text-sm font-semibold outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10 lg:h-14 lg:text-base"
            />
            <input
              type="text"
              placeholder="Nom de famille"
              className="h-12 rounded-full border border-slate-400 px-5 text-sm font-semibold outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10 lg:h-14 lg:text-base"
            />
            <input
              type="tel"
              placeholder="Numéro de téléphone"
              className="h-12 rounded-full border border-slate-400 px-5 text-sm font-semibold outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10 lg:h-14 lg:text-base"
            />
            <input
              type="email"
              placeholder="Adresse email"
              className="h-12 rounded-full border border-slate-400 px-5 text-sm font-semibold outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10 lg:h-14 lg:text-base"
            />
          </div>

          <textarea
            rows={5}
            placeholder="Comment pouvons-nous vous aider?"
            className="mt-4 w-full rounded-[24px] border border-slate-400 px-5 py-4 text-sm font-semibold outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10 lg:text-base"
          />

          <button
            type="button"
            className="mt-6 rounded-full bg-[#0d4595] px-7 py-3 text-base font-bold text-white transition hover:bg-[#0a3777] lg:px-8 lg:py-4 lg:text-lg"
          >
            Envoyez
          </button>
        </form>
      </div>
    </section>
  );
}
