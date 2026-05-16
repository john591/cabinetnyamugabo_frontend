import Link from "next/link";

const storyParagraphs = [
  "Cabinet Nyamugabo est né d'une conviction simple : le droit doit aider les clients à avancer, pas les perdre dans des complications inutiles.",
  "Nous travaillons aux côtés des entreprises, institutions et particuliers qui ont besoin d'un accompagnement sérieux dans leurs décisions importantes, leurs litiges, leurs contrats et leurs projets structurants.",
  "Chaque dossier commence par l'écoute. Nous cherchons à comprendre le contexte, les risques, les objectifs et les contraintes réelles du client avant de proposer une stratégie juridique claire.",
  "Notre équipe intervient avec méthode, discrétion et détermination. Nous savons que derrière chaque mandat, il y a souvent un enjeu humain, financier ou institutionnel qui mérite une attention totale.",
  "Cette exigence guide notre manière de travailler : préparer avec rigueur, communiquer avec transparence et défendre les intérêts de nos clients avec constance.",
  "Depuis Kinshasa et Bukavu, nous accompagnons nos clients avec une vision ouverte sur les réalités économiques, administratives et juridiques de la République démocratique du Congo et de la région.",
];

export function AboutUs() {
  return (
    <main id="main-content" className="bg-white text-[#1f2937]">
      <section className="relative min-h-[300px] overflow-hidden bg-[#2a0f0d] sm:min-h-[360px] lg:min-h-[420px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-58"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,12,22,0.88)_0%,rgba(122,31,24,0.78)_48%,rgba(211,55,38,0.72)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[300px] max-w-7xl flex-col justify-end px-5 py-10 text-white sm:min-h-[360px] sm:px-8 lg:min-h-[420px] lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="flex items-center gap-5">
              <span className="hidden h-px w-40 bg-white/78 sm:block" />
              <div>
                <h1 className="font-serif text-3xl uppercase leading-tight tracking-[0.03em] sm:text-4xl md:text-5xl">
                  About Cabinet Nyamugabo
                </h1>
                <p className="mt-3 text-sm text-white/86">
                  Accueil <span className="mx-2">›</span> À propos du cabinet
                </p>
              </div>
            </div>

            <Link
              href="/book-appointment"
              className="inline-flex w-fit items-center gap-3 bg-[#0d4595] px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#0a3777] sm:px-7"
            >
              Prendre rendez-vous <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_430px]">
          <article className="max-w-4xl">
            <h2 className="font-serif text-2xl uppercase leading-tight tracking-[0.03em] text-[#172a3a] sm:text-3xl md:text-4xl">
              Nous croyons qu&apos;un bon conseil juridique commence par une
              compréhension précise de votre réalité.
            </h2>

            <div className="mt-8 space-y-6 text-sm leading-7 text-[#222] sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
              {storyParagraphs.slice(0, 4).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                Nous avons construit notre réputation autour d&apos;une pratique
                responsable, ancrée dans la confiance et la recherche de
                solutions concrètes.{" "}
                <strong>
                  Notre ambition est simple : être le partenaire juridique sur
                  lequel vous pouvez compter.
                </strong>
              </p>
              {storyParagraphs.slice(4).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <aside className="lg:pt-1">
            <div className="overflow-hidden bg-slate-100">
              <div
                className="aspect-[4/5] bg-cover bg-center sm:aspect-[5/4] lg:aspect-[4/5]"
                style={{
                  backgroundImage:
                    "url(https://nyamugabo-bucket.s3.amazonaws.com/media/team/908f3d27735b4441afc32ec8b95ca711_lawyr3.jpg)",
                }}
              />
            </div>

            <div className="mt-10 border-l border-slate-200 pl-8 lg:mt-14 lg:pl-10">
              <h3 className="font-serif text-2xl uppercase leading-tight tracking-[0.03em] text-[#172a3a] sm:text-3xl">
                Notre mission et notre niche
              </h3>
              <div className="mt-5 space-y-5 text-sm leading-7 text-[#222] sm:text-base sm:leading-8">
                <p>
                  Nous accompagnons les clients qui recherchent plus qu&apos;une
                  réponse rapide : une stratégie cohérente, lisible et adaptée à
                  leurs responsabilités.
                </p>
                <p>
                  Notre rôle est d&apos;identifier les risques, de clarifier les
                  options et de soutenir chaque décision avec un raisonnement
                  juridique solide.
                </p>
                <p>
                  C&apos;est cette combinaison de proximité, de discipline et de
                  vision pratique qui définit Cabinet Nyamugabo.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
