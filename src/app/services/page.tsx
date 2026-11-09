import Link from "next/link";

import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { PoleIcon } from "@/components/site/pole-icon";
import { getServices } from "@/lib/django-api";
import { getT } from "@/lib/i18n/server";
import { getPoleId, poles } from "@/lib/poles";

export const dynamic = "force-dynamic";

const serviceImages = [
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1400&q=85",
];

export default async function ServicesPage() {
  const { t } = await getT();
  const services = (await getServices()).map((service, index) => ({
    id: service.id,
    title: service.title,
    description: service.short_description || service.description,
    image:
      service.imagelink ||
      ("image" in service ? service.image : "") ||
      serviceImages[index % serviceImages.length],
  }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content" className="bg-white">
        <section className="px-5 pb-8 pt-14 text-[#172a3a] sm:px-8 sm:pb-10 sm:pt-16 lg:px-12 lg:pt-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0d4595]">
              
            </p>
            <h1 className="mx-auto mt-4 max-w-4xl text-center font-serif text-3xl uppercase leading-tight tracking-[0.03em] text-[#172a3a] sm:text-4xl md:text-5xl">
              {t("services.pageTitle")}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              {t("services.pageIntro")}
            </p>
          </div>
        </section>

        <section className="px-5 pb-14 text-white sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 md:grid-cols-2 lg:gap-7">
              {services.map((service, index) => (
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
                    <span
                      className={`mb-4 inline-flex w-fit items-center gap-2 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white ${
                        index % 2 === 0 ? "mx-auto" : ""
                      }`}
                      style={{
                        backgroundColor: poles[getPoleId(service.title)].color,
                      }}
                    >
                      <PoleIcon
                        pole={getPoleId(service.title)}
                        className="h-4 w-4"
                      />
                      {t(`pole.${getPoleId(service.title)}.name`)}
                    </span>
                    <h2 className="font-serif text-2xl uppercase leading-tight tracking-[0.03em] text-[#DCE7F4] sm:text-3xl lg:text-4xl">
                      {service.title}
                    </h2>

                    <p
                      className={`mt-5 text-sm leading-7 text-white/82 sm:text-base sm:leading-8 ${
                        index % 2 === 0 ? "mx-auto max-w-xl" : "max-w-xl"
                      }`}
                    >
                      {service.description}
                    </p>

                    <Link
                      href="/book-appointment"
                      className={`mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:text-[#DCE7F4] sm:text-sm ${
                        index % 2 === 0 ? "justify-center" : ""
                      }`}
                    >
                      {t("services.book")} <span aria-hidden>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
