import Link from "next/link";

import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { Partners } from "@/components/site/partners";

const environmentImages = [
  "https://nyamugabo-bucket.s3.us-west-2.amazonaws.com/Environnement/WhatsApp+Image+2026-04-24+at+17.17.47.jpeg",
  "https://nyamugabo-bucket.s3.us-west-2.amazonaws.com/Environnement/WhatsApp+Image+2026-04-24+at+17.18.04.jpeg",
  "https://nyamugabo-bucket.s3.us-west-2.amazonaws.com/Environnement/WhatsApp+Image+2026-04-24+at+17.18.11.jpeg",
  "https://nyamugabo-bucket.s3.us-west-2.amazonaws.com/Environnement/WhatsApp+Image+2026-04-24+at+17.18.16.jpeg",
  "https://nyamugabo-bucket.s3.us-west-2.amazonaws.com/Environnement/WhatsApp+Image+2026-04-24+at+17.29.26.jpeg",
  "https://nyamugabo-bucket.s3.us-west-2.amazonaws.com/Environnement/WhatsApp+Image+2026-04-24+at+17.29.31.jpeg",
  "https://nyamugabo-bucket.s3.us-west-2.amazonaws.com/Environnement/WhatsApp+Image+2026-04-24+at+17.29.33.jpeg",
  "https://nyamugabo-bucket.s3.us-west-2.amazonaws.com/Environnement/WhatsApp+Image+2026-04-24+at+17.29.41.jpeg",
  "https://nyamugabo-bucket.s3.us-west-2.amazonaws.com/Environnement/WhatsApp+Image+2026-04-24+at+17.29.44.jpeg",
  "https://nyamugabo-bucket.s3.us-west-2.amazonaws.com/Environnement/WhatsApp+Image+2026-04-24+at+17.30.01.jpeg",
];

const capabilityCards = [
  {
    title: "Études",
    text: "Études d'Impact Environnemental et Social, plans de gestion, plans de mise en conformité, audits et rapports environnementaux.",
  },
  {
    title: "Suivi",
    text: "Monitoring de la qualité de l'air, de l'eau et du sol, gestion des déchets, biodiversité, réhabilitation des sites et analyse spatiale.",
  },
  {
    title: "Technique",
    text: "Appui aux projets miniers, énergétiques, industriels, routiers, hydrauliques et urbains avec une expertise de terrain multidisciplinaire.",
  },
];

const references = [
  {
    title:
      "Rapports annuels environnementaux pour CARRILU SAS, Lualaba",
    date: "2022 - 2025",
    type: "Référence",
    image: environmentImages[1],
  },
  {
    title:
      "EIES du projet de construction d'une centrale photovoltaïque à Manono",
    date: "2026",
    type: "Énergie",
    image: environmentImages[2],
  },
  {
    title:
      "EIES et PAR du projet RN2 Bukavu-Sake-Goma et voiries structurantes",
    date: "2021",
    type: "Infrastructure",
    image: environmentImages[3],
  },
  {
    title:
      "Élaboration de rapports d'audits environnementaux pour projets industriels",
    date: "2023 - 2025",
    type: "Audit",
    image: environmentImages[4],
  },
  {
    title:
      "Suivi environnemental et monitoring de la qualité de l'air, l'eau et le sol",
    date: "Mission terrain",
    type: "Monitoring",
    image: environmentImages[5],
  },
  {
    title:
      "Gestion de la biodiversité, réhabilitation des sites et sensibilisation EHS",
    date: "Programme continu",
    type: "Biodiversité",
    image: environmentImages[6],
  },
];

const domains = [
  "EIES, PMCES, PGES, PAR et plans d'urgence",
  "Rapports annuels et audits environnementaux",
  "Gestion et valorisation des déchets",
  "Cartographie, SIG et analyse spatiale environnementale",
  "Formation en Environnement, Hygiène et Sécurité",
  "Gestion durable des ressources naturelles",
];

export default function EnvironmentPage() {
  return (
    <div className="min-h-screen bg-[#203425] text-white">
      <Navbar />
      <main id="main-content" className="bg-[#203425]">
        <section className="relative min-h-[640px] overflow-hidden bg-[#203425] text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-58"
            style={{
              backgroundImage: `url(${environmentImages[0]})`,
            }}
          />
          <div className="absolute inset-0 bg-[#203425]/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(32,52,37,0.95)_0%,rgba(32,52,37,0.66)_46%,rgba(32,52,37,0.48)_100%)]" />

          <div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl flex-col justify-center px-5 py-16 sm:px-8 lg:px-12">
            <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.02em] text-white sm:text-7xl lg:text-8xl">
              Making
              <span className="block">Sustainability</span>
              <span className="mt-2 flex items-center gap-5">
                <span className="text-[#d3fb79]">✣</span>
                Happen
              </span>
            </h1>

            <Link
              href="#mission"
              className="mt-8 inline-flex w-fit items-center gap-3 bg-[#d3fb79] px-5 py-3 text-sm font-medium text-[#203425] transition hover:bg-[#c4eb68]"
            >
              Notre mission <span aria-hidden>↗</span>
            </Link>
          </div>
        </section>

        <section
          id="mission"
          className="relative overflow-hidden bg-[#314f36] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
        >
          <div className="absolute right-0 top-0 hidden h-64 w-[33%] opacity-35 lg:block">
            <div className="h-full w-full bg-[linear-gradient(45deg,transparent_47%,rgba(211,251,121,0.32)_48%,rgba(211,251,121,0.32)_52%,transparent_53%)] bg-[length:42px_42px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl">
            <p className="max-w-4xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Nous accompagnons les entreprises, institutions et projets
              industriels dans la prévention, la gestion et la réduction de leurs
              impacts environnementaux et sociaux.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {capabilityCards.map((card) => (
                <article
                  key={card.title}
                  className="border border-[#d3fb79]/28 p-7 sm:p-9"
                >
                  <h2 className="font-serif text-3xl text-white">
                    {card.title}
                  </h2>
                  <p className="mt-8 text-sm leading-7 text-white/82 sm:text-base sm:leading-8">
                    {card.text}
                  </p>
                  <span className="mt-5 inline-block text-2xl text-[#d3fb79]">
                    ↗
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1d2f22] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.9fr)] lg:items-center">
            <div>
              <h2 className="font-serif text-3xl leading-tight text-[#d3fb79] sm:text-4xl">
                La durabilité n&apos;est plus optionnelle.
              </h2>
              <div className="mt-6 space-y-5 text-sm leading-7 text-white/84 sm:text-base sm:leading-8">
                <p>
                  Établi en République Démocratique du Congo depuis décembre
                  2017, agréé par l&apos;arrêté du Ministère de
                  l&apos;Environnement et Développement Durable, le Cabinet
                  NYAMUGABO est spécialisé dans le conseil en environnement et
                  la réalisation des études d&apos;impacts environnemental et
                  social des projets.
                </p>
                <p>
                  Le Cabinet opère sur l&apos;ensemble du territoire national à
                  partir de son siège social de Kinshasa et de sa succursale de
                  Bukavu, au Sud-Kivu.
                </p>
                <p>
                  Notre promesse : appuyer les porteurs de projets dans le
                  respect des obligations légales et promouvoir une gestion
                  durable des ressources naturelles.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {domains.map((domain) => (
                  <div
                    key={domain}
                    className="border border-white/12 px-4 py-3 text-sm leading-6 text-white/82"
                  >
                    {domain}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden lg:translate-y-12">
              <div className="absolute left-0 top-0 z-10 h-20 w-20 bg-[#1d2f22] [clip-path:polygon(0_0,100%_0,0_100%)]" />
              <div
                className="aspect-[5/3] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${environmentImages[1]})`,
                }}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#203425] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d3fb79]">
                  Terrain
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl">
                  Nos équipes en mission
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-white/72 sm:text-base">
                Des interventions de terrain pour documenter, suivre et
                accompagner les projets environnementaux et sociaux.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {environmentImages.slice(7, 10).map((image, index) => (
                <div
                  key={image}
                  className={`overflow-hidden ${
                    index === 1 ? "md:translate-y-10" : ""
                  }`}
                >
                  <div
                    className="aspect-[4/3] bg-cover bg-center transition duration-700 hover:scale-[1.03]"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f2] px-5 py-16 text-[#203425] sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Latest Thinking
            </h2>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {references.map((reference) => (
                <article
                  key={reference.title}
                  className="border border-[#cfd7c8] bg-[#f4f4ef]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${reference.image})` }}
                    />
                    <span className="absolute bottom-4 left-4 bg-[#f7f7f2] px-4 py-2 text-sm text-[#203425]">
                      {reference.type}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4 text-sm text-[#526050]">
                      <span>{reference.date}</span>
                      <span>Projet réalisé</span>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold leading-7 text-[#203425]">
                      {reference.title}
                    </h3>
                    <div className="mt-10 border-t border-[#cfd7c8] pt-5">
                      <Link
                        href="/book-appointment"
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#203425] transition hover:text-[#0d4595]"
                      >
                        En savoir plus <span aria-hidden>↗</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Partners />
      </main>
      <Footer />
    </div>
  );
}
