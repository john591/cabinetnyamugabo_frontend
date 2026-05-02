import Link from "next/link";

const principles = [
  {
    title: "Conseil centré sur le client",
    text: "Nous alignons la stratégie juridique sur les réalités commerciales, personnelles et institutionnelles auxquelles nos clients font face.",
  },
  {
    title: "Excellence constante",
    text: "Chaque dossier bénéficie d'une préparation disciplinée, d'une analyse rigoureuse et d'une attention particulière aux détails.",
  },
  {
    title: "Véritable partenariat",
    text: "Nous travaillons en étroite collaboration avec nos clients et bâtissons la confiance par la réactivité, la clarté et la responsabilité.",
  },
  {
    title: "Travail d'équipe solide",
    text: "Nos avocats coordonnent leurs expertises afin d'offrir aux clients des conseils cohérents sur les dossiers complexes.",
  },
];

const numbers = [
  { value: "20+", label: "Années d'expérience juridique et de conseil cumulée" },
  { value: "4", label: "Domaines de pratique au service des entreprises et des particuliers" },
  { value: "100%", label: "Engagement pour une communication claire et une stratégie pratique" },
  { value: "24/7", label: "Réactivité lorsque les dossiers deviennent urgents ou sensibles" },
];

const features = [
  {
    title: "Notre équipe",
    text: "Nous misons sur des juristes qui allient compétence technique, jugement, empathie et professionnalisme.",
  },
  {
    title: "Notre communauté",
    text: "Nous croyons que le travail juridique doit renforcer les institutions, soutenir l'entreprise et servir l'intérêt général.",
  },
  {
    title: "Nos standards",
    text: "Nous nous imposons un haut niveau d'exigence dans la préparation, le conseil et la représentation de chaque client.",
  },
];

const founderHighlights = [
  "Avocat près la Cour",
  "Professeur d'Université",
  "Homme politique",
  "Kinshasa & Bukavu",
];

export function AboutUs() {
  return (
    <main id="main-content" className="bg-white">
      <section className="border-b border-[rgba(13,69,149,0.14)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#299122]">
              À propos de nous
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight text-slate-950 sm:text-6xl">
              Le Cabinet Nyamugabo conseille les entreprises, les institutions
              et les particuliers avec clarté, discipline et sérénité
              stratégique.
            </h1>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Notre travail repose sur une préparation minutieuse, un jugement
              pratique et l&apos;engagement d&apos;aider nos clients à prendre des
              décisions importantes avec confiance.
            </p>
            <p>
              Nous abordons chaque mission avec la même exigence : comprendre
              les enjeux, anticiper les risques et fournir des conseils à la
              fois juridiquement solides et réellement utiles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fbf6_100%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#299122]">
              Notre approche
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">
              Notre culture est guidée par la qualité, la confiance et le
              partenariat à long terme.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((item) => (
              <article
                key={item.title}
                className="border border-[rgba(13,69,149,0.14)] bg-[#f6faf4] p-6"
              >
                <h3 className="font-serif text-3xl leading-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <div
              className="aspect-[4/5] overflow-hidden rounded-[28px] bg-slate-100 shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
              style={{
                backgroundImage:
                  "url(https://commons.wikimedia.org/wiki/Special:FilePath/Claude%20Nyamugabo%20Bazibuhe%20%28cropped%29.jpg)",
                backgroundPosition: "center top",
                backgroundSize: "cover",
              }}
            />
            <div className="absolute bottom-[-18px] right-[-18px] h-32 w-32 rounded-[24px] border border-[#7fd35a]/55 bg-transparent" />
          </div>

          <article className="relative">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7fd35a]">
              <span className="h-px w-14 bg-[#7fd35a]" />
              Le Promoteur
            </p>
            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#0d4595] sm:text-6xl">
              Maître Claude Nyamugabo
            </h2>
            <p className="mt-2 text-2xl text-[#299122]">Bazibuhe</p>

            <div className="mt-8 space-y-6 text-lg leading-10 text-slate-600">
              <p>
                Avocat près la Cour, Professeur d&apos;Université et Homme
                politique, Maître Claude Nyamugabo Bazibuhe est le fondateur et
                promoteur du Cabinet Nyamugabo.
              </p>
              <p>
                Son parcours allie une expertise juridique de haut niveau à une
                connaissance approfondie du paysage politique et économique de
                la RDC. Cette double compétence lui permet d&apos;offrir à ses
                clients un accompagnement stratégique exigeant et adapté aux
                réalités du terrain.
              </p>
              <p>
                Sous sa direction, le Cabinet Nyamugabo s&apos;est affirmé dans
                des secteurs clés tels que les mines, la fiscalité,
                l&apos;environnement et les questions de propriété, avec une
                approche fondée sur la rigueur, la vision et la responsabilité.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {founderHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[rgba(13,69,149,0.14)] bg-white px-5 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
                >
                  <p className="text-lg font-medium text-[#24303a]">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#edf6ea_0%,#f6faf4_100%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#299122]">
              En chiffres
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">
              Un cabinet conçu pour être réactif, rigoureux et proche des
              réalités de chaque dossier.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-[rgba(13,69,149,0.14)] bg-[rgba(13,69,149,0.14)] sm:grid-cols-2 xl:grid-cols-4">
            {numbers.map((item) => (
              <article key={item.label} className="bg-white p-8">
                <p className="font-serif text-5xl leading-none text-slate-950">
                  {item.value}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="border border-[rgba(13,69,149,0.14)] bg-white p-8 shadow-[0_22px_50px_rgba(15,23,42,0.06)] sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#299122]">
              Une culture qui rassemble
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">
              Nous croyons qu&apos;un travail juridique solide naît d&apos;une culture
              professionnelle solide.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Notre équipe valorise l&apos;intégrité, la préparation, le mentorat et
              le respect des personnes derrière chaque mandat. Nous voulons
              créer un environnement où l&apos;excellence juridique et le jugement
              humain se renforcent mutuellement.
            </p>

            <div className="mt-10 grid gap-5">
              {features.map((feature) => (
                <div key={feature.title} className="border-t border-[rgba(13,69,149,0.14)] pt-5">
                  <h3 className="font-serif text-3xl text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-6">
            <article className="overflow-hidden border border-[rgba(13,69,149,0.18)] bg-[linear-gradient(135deg,#0d4595_0%,#0b3772_62%,#299122_100%)] p-8 text-white sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b9eba2]">
                Développement professionnel
              </p>
              <h3 className="mt-4 font-serif text-4xl leading-tight">
                Investir dans des avocats capables d&apos;accompagner les clients
                dans la complexité.
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/78">
                Nous valorisons le développement continu, le leadership
                réfléchi et la progression de professionnels du droit qui
                associent compétence technique et jugement mûr.
              </p>
            </article>

            <article className="border border-[rgba(13,69,149,0.14)] bg-[#f6faf4] p-8 sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#299122]">
                Explorer davantage
              </p>
              <div className="mt-6 grid gap-4">
                <Link
                  href="/services"
                  className="border border-[rgba(13,69,149,0.14)] bg-white px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0d4595] transition hover:bg-[#0d4595] hover:text-white"
                >
                  Nos services
                </Link>
                <Link
                  href="/news"
                  className="border border-[rgba(13,69,149,0.14)] bg-white px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0d4595] transition hover:bg-[#0d4595] hover:text-white"
                >
                  Articles à la une
                </Link>
                <Link
                  href="/book-appointment"
                  className="border border-[rgba(13,69,149,0.14)] bg-white px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0d4595] transition hover:bg-[#0d4595] hover:text-white"
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
