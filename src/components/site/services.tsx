import Link from "next/link";

import { getFeaturedServices } from "@/lib/django-api";
import { getT } from "@/lib/i18n/server";
import type { TFunction } from "@/lib/i18n/dictionaries";
import { getPoleId, poles } from "@/lib/poles";

import { PoleIcon } from "./pole-icon";

type ServiceCard = {
  id: string | number;
  title: string;
  description: string;
  image: string;
};

const serviceImages = [
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85",
];

const fallbackServices: ServiceCard[] = [
  {
    id: "business-law",
    title: "Droit des affaires et conseil aux entreprises",
    description:
      "Nous accompagnons les sociétés, dirigeants et investisseurs dans la structuration, la négociation et la sécurisation de leurs opérations importantes.",
    image: serviceImages[0],
  },
  {
    id: "litigation",
    title: "Contentieux, arbitrage et gestion des différends",
    description:
      "Notre équipe intervient dans les litiges sensibles avec une stratégie claire, une préparation rigoureuse et une défense ferme des intérêts du client.",
    image: serviceImages[1],
  },
  {
    id: "property",
    title: "Droit immobilier, foncier et patrimonial",
    description:
      "Nous aidons nos clients à protéger leurs droits, clarifier les titres, prévenir les risques et résoudre les conflits liés aux biens et aux investissements.",
    image: serviceImages[2],
  },
  {
    id: "public-law",
    title: "Droit public, institutions et conformité",
    description:
      "Nous conseillons les acteurs publics et privés dans leurs relations administratives, réglementaires et institutionnelles avec une approche pratique.",
    image: serviceImages[3],
  },
];

function PoleBadge({
  title,
  centered,
  t,
}: {
  title: string;
  centered: boolean;
  t: TFunction;
}) {
  const pole = poles[getPoleId(title)];

  return (
    <span
      className={`mb-4 inline-flex w-fit items-center gap-2 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white ${
        centered ? "mx-auto" : ""
      }`}
      style={{ backgroundColor: pole.color }}
    >
      <PoleIcon pole={pole.id} className="h-4 w-4" />
      {t(`pole.${pole.id}.name`)}
    </span>
  );
}

export async function Services() {
  const { t } = await getT();
  const featuredServices = await getFeaturedServices();
  const services =
    featuredServices.length > 0
      ? featuredServices.slice(0, 6).map((service) => ({
          id: service.id,
          title: service.title,
          description: service.short_description || service.description,
          image:
            service.imagelink ||
            ("image" in service ? service.image : "") ||
            serviceImages[service.order % serviceImages.length] ||
            serviceImages[0],
        }))
      : fallbackServices;
  const displayedServices = services.slice(0, 6);

  return (
    <section className="bg-[#13293a] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-serif text-3xl uppercase leading-tight tracking-[0.03em] text-white sm:text-4xl md:text-5xl">
          {t("services.title")}
        </h2>

        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:mt-11 lg:gap-7">
          {displayedServices.map((service, index) => (
            <article
              key={service.id}
              className={`relative min-h-[360px] overflow-hidden bg-[#203446] px-7 py-10 sm:min-h-[400px] sm:px-10 sm:py-12 lg:min-h-[450px] lg:px-14 lg:py-16 ${
                index % 2 === 0 ? "text-center" : "text-left"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-[1.03]"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-[#13293a]/18" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13293a]/62 via-[#13293a]/16 to-transparent" />

              <div className="relative z-10 flex min-h-[280px] flex-col justify-end sm:min-h-[304px] lg:min-h-[322px]">
                <PoleBadge title={service.title} centered={index % 2 === 0} t={t} />
                <h3 className="font-serif text-2xl uppercase leading-tight tracking-[0.03em] text-white sm:text-3xl lg:text-4xl">
                  {service.title}
                </h3>

                <p
                  className={`mt-5 text-sm leading-7 text-white/82 sm:text-base sm:leading-8 ${
                    index % 2 === 0 ? "mx-auto max-w-xl" : "max-w-xl"
                  }`}
                >
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className={`mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:text-[#DCE7F4] sm:text-sm ${
                    index % 2 === 0 ? "justify-center" : ""
                  }`}
                >
                  {t("services.readMore")} <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-3 border border-white/35 px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:border-[#DCE7F4] hover:text-[#DCE7F4] sm:text-sm"
          >
            {t("services.all")} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
