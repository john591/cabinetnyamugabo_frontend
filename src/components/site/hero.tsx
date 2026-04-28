"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const heroVideoUrl =
  "https://cabinet-nyamugabo.s3.us-west-2.amazonaws.com/videos/Nyamugabo___Expertise_en_RDC.mp4";

const slides = [ 
  {
    eyebrow: "Le Cabinet Nyamugabo",
    title: "Notre mission : offrir des services juridiques de qualité supérieure en RDC.",
    description:
      "Le cabinet Nyamugabo accompagne les particuliers et les entreprises en leur offrant des services juridiques complets, allant du conseil à la représentation en justice, avec une expertise en droit des affaires, fiscal et contentieux.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=80",
    panelClassName: "bg-[#0d4595] text-white",
    overlayClassName:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%,transparent_76%,rgba(0,0,0,0.08))]",
    accentOverlayClassName:
      "bg-[linear-gradient(143deg,transparent_0%,transparent_44%,rgba(17,24,39,0.26)_44.5%,rgba(17,24,39,0.26)_58%,transparent_58.5%)]",
    eyebrowClassName: "text-[#7fd35a]",
    descriptionClassName: "text-white/78",
    buttonClassName:
      "bg-[#7fd35a] text-slate-950 transition hover:bg-[#69bd46]",
    playClassName: "bg-white text-[#299122]",
  },
  {
    eyebrow: "Departement juridique",
    title: "Notre expertise juridique pour votre succès.",
    description:
      "Le département juridique du cabinet Nyamugabo fournit des services complets de conseil et de représentation, en garantissant la conformité, la maîtrise des risques et la protection des intérêts de ses clients.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=80",
    panelClassName: "bg-[#0d4595] text-white",
    overlayClassName:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%,transparent_76%,rgba(0,0,0,0.08))]",
    accentOverlayClassName:
      "bg-[linear-gradient(143deg,transparent_0%,transparent_44%,rgba(17,24,39,0.26)_44.5%,rgba(17,24,39,0.26)_58%,transparent_58.5%)]",
    eyebrowClassName: "text-[#7fd35a]",
    descriptionClassName: "text-white/78",
    buttonClassName:
      "bg-[#7fd35a] text-slate-950 transition hover:bg-[#69bd46]",
    playClassName: "bg-white text-[#299122]",
  },
  {
    eyebrow: "Departement environnemental",
    title: "L'environnement pour notre bien etre.",
    description:
      "Cabinet d’avocats à vocation générale, Nyamugabo intègre en son sein un département dédié aux questions environnementales, apportant une expertise pointue en matière de conformité, de gestion des risques et de projets à impact.",
    image:
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1800&q=80",
    panelClassName: "bg-[#dff4d2] text-[#24303a]",
    overlayClassName:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.38),rgba(255,255,255,0.18)_24%,transparent_76%,rgba(41,145,34,0.06))]",
    accentOverlayClassName:
      "bg-[linear-gradient(143deg,transparent_0%,transparent_44%,rgba(89,149,70,0.18)_44.5%,rgba(89,149,70,0.18)_58%,transparent_58.5%)]",
    eyebrowClassName: "text-[#299122]",
    descriptionClassName: "text-[#3d4b42]",
    buttonClassName:
      "bg-[#299122] text-white transition hover:bg-[#22781d]",
    playClassName: "bg-white text-[#299122]",
  },
];

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    if (!isVideoOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);

  return (
    <section className="min-h-screen bg-white">
      <div className="h-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="hero-swiper h-full overflow-hidden"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.title}>
              <article className="grid min-h-screen overflow-hidden bg-white lg:h-screen lg:grid-cols-[1.08fr_0.92fr]">
                <div className={`hero-panel relative flex items-center overflow-hidden px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-16 lg:py-14 ${slide.panelClassName}`}>
                  <div className={`absolute inset-0 ${slide.overlayClassName}`} />
                  <div className={`absolute bottom-0 left-0 h-40 w-full ${slide.accentOverlayClassName}`} />

                  <div className="relative z-10 max-w-2xl">
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-[0.14em] sm:text-sm ${slide.eyebrowClassName}`}
                    >
                      {slide.eyebrow}
                    </p>
                    <h1 className="mt-4 font-serif text-3xl leading-[1.02] sm:mt-5 sm:text-5xl md:text-6xl lg:mt-6 lg:text-[5.5rem]">
                      {slide.title}
                    </h1>
                    <p className={`mt-4 max-w-xl text-sm leading-7 sm:mt-5 sm:text-base md:text-lg md:leading-8 lg:mt-6 ${slide.descriptionClassName}`}>
                      {slide.description}
                    </p>

                    <div className="mt-6 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 lg:mt-10">
                      <Link
                        href="/book-appointment"
                        className={`px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] sm:px-8 sm:py-4 sm:text-sm ${slide.buttonClassName}`}
                      >
                        En Savoir Plus
                      </Link>
                      <button
                        type="button"
                        onClick={() => setIsVideoOpen(true)}
                        className="inline-flex items-center gap-3 text-sm font-medium transition hover:opacity-75 sm:gap-4 sm:text-base md:text-lg"
                      >
                        <span className={`flex h-11 w-11 items-center justify-center rounded-full sm:h-14 sm:w-14 ${slide.playClassName}`}>
                          <span className="ml-0.5 text-base sm:ml-1 sm:text-xl">▶</span>
                        </span>
                        <span className="uppercase tracking-[0.06em]">
                          
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-full">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08),transparent_18%,transparent_100%)]" />
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isVideoOpen ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/82 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl border border-white/18 bg-slate-950 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/12 px-4 py-3 sm:px-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7fd35a]">
                  Cabinet Nyamugabo
                </p>
                <h2 className="mt-1 font-serif text-xl text-white sm:text-2xl">
                  Expertise en RDC
                </h2>
              </div>
              <button
                type="button"
                aria-label="Fermer la video"
                onClick={() => setIsVideoOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-2xl leading-none text-white transition hover:bg-white hover:text-slate-950"
              >
                &times;
              </button>
            </div>
            <video
              autoPlay
              className="aspect-video w-full bg-black"
              controls
              playsInline
              src={heroVideoUrl}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
