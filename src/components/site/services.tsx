"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import {
  DjangoService,
  getFeaturedServices,
  mapServiceToSlide,
} from "@/lib/django-api";

const fallbackImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80",
];

export function Services() {
  const [slides, setSlides] = useState<
    ReturnType<typeof mapServiceToSlide>[]
  >([]);

  useEffect(() => {
    let isMounted = true;

    getFeaturedServices().then((services: DjangoService[]) => {
      if (isMounted) {
        setSlides(
          services.map((service, index) =>
            mapServiceToSlide(service, index, fallbackImages),
          ),
        );
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="overflow-hidden bg-[#f5faf2] py-20 sm:py-24">
      <div className="mx-auto mb-10 max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            DOMAINES D&apos;INTERVENTION
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">
            Nos Expertises
          </h2>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            Un accompagnement juridique complet pour les acteurs economiques en
            Republique Democratique du Congo.
          </p>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        centeredSlides
        slidesPerView={1.15}
        spaceBetween={18}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1.25,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 1.6,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 1.95,
            spaceBetween: 36,
          },
        }}
        className="services-swiper !overflow-visible"
      >
        {slides.map((service) => (
          <SwiperSlide key={service.id}>
            <article className="services-slide relative mx-auto h-[540px] w-full overflow-hidden bg-black shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:h-[620px] xl:h-[680px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/45 to-black/20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.12),transparent_18%),radial-gradient(circle_at_58%_72%,rgba(255,255,255,0.1),transparent_10%)]" />
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/55 to-transparent" />

              <div className="relative z-10 flex h-full items-end px-8 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-16">
                <div className="max-w-2xl text-white">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/75">
                    {service.label}
                  </p>
                  <h3 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                    {service.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-white/82 sm:text-lg">
                    {service.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/services"
                      className="text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:text-white/75"
                    >
                      lire plus
                    </Link>
                    <Link
                      href="/book-appointment"
                      className="border border-white/70 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-slate-950"
                    >
                      Prendre rendez-vous
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Services;
