import Link from "next/link";

import { getFeaturedServices } from "@/lib/django-api";

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

export async function Services() {
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
          Les domaines d&apos;expertise
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
                className="absolute inset-0 bg-cover bg-center opacity-38 transition duration-700 hover:scale-[1.03]"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-[#13293a]/78" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13293a]/92 via-[#13293a]/55 to-transparent" />

              <div className="relative z-10 flex min-h-[280px] flex-col justify-end sm:min-h-[304px] lg:min-h-[322px]">
                <h3 className="font-serif text-2xl uppercase leading-tight tracking-[0.03em] text-[#c99d78] sm:text-3xl lg:text-4xl">
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
                  className={`mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:text-[#c99d78] sm:text-sm ${
                    index % 2 === 0 ? "justify-center" : ""
                  }`}
                >
                  Lire plus <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-3 border border-white/35 px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:border-[#c99d78] hover:text-[#c99d78] sm:text-sm"
          >
            Tous nos domaines d&apos;expertise <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
