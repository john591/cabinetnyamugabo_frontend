"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TeamMemberCard = {
  name: string;
  role: string;
  bio?: string;
  city?: string;
  email?: string;
  phone?: string;
  image: string;
};

const fallbackTeam: TeamMemberCard[] = [
  {
    name: "Aline Nyamugabo",
    role: "Managing Partner",
    bio: "Aline accompagne les clients du Cabinet Nyamugabo avec rigueur, écoute et une approche stratégique adaptée aux enjeux de chaque dossier.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "David Ilunga",
    role: "Head of Disputes",
    bio: "David intervient dans les dossiers contentieux sensibles avec une préparation minutieuse et une communication claire.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Clarisse Mbayo",
    role: "Counsel, Private Clients",
    bio: "Clarisse conseille les clients privés et institutionnels avec une attention particulière portée aux risques et aux objectifs pratiques.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
  },
];

export function OurTeam() {
  const [team, setTeam] = useState<TeamMemberCard[]>(fallbackTeam);

  useEffect(() => {
    let isMounted = true;

    fetch("/api/team", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: TeamMemberCard[] | null) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setTeam(data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setTeam(fallbackTeam);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  function scrollTeam(direction: "previous" | "next") {
    const carousel = document.getElementById("team-carousel");

    if (!carousel) {
      return;
    }

    carousel.scrollBy({
      left: direction === "next" ? carousel.clientWidth * 0.8 : -carousel.clientWidth * 0.8,
      behavior: "smooth",
    });
  }

  return (
    <section id="team" className="overflow-hidden bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 pb-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0d4595]">
              Notre equipe
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-slate-950 sm:text-4xl lg:mt-4 lg:text-5xl">
              Des professionnels proches de vos enjeux.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg lg:leading-8">
              Avocats, conseils et support juridique travaillent ensemble pour
              offrir une gestion rigoureuse, claire et humaine de chaque dossier.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollTeam("previous")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0d4595] text-white transition hover:bg-[#0a3777] sm:h-12 sm:w-12"
              aria-label="Voir le membre précédent"
            >
              <ChevronLeft aria-hidden className="h-6 w-6" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => scrollTeam("next")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0d4595] text-white transition hover:bg-[#0a3777] sm:h-12 sm:w-12"
              aria-label="Voir le membre suivant"
            >
              <ChevronRight aria-hidden className="h-6 w-6" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      <div
        id="team-carousel"
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {team.map((member) => (
          <article
            key={member.email || member.name}
            tabIndex={0}
            className="group relative h-[470px] w-[86vw] flex-none snap-start overflow-hidden bg-[#0d4595] outline-none sm:h-[520px] sm:w-1/2 md:w-1/3 lg:h-[640px] lg:w-1/4 2xl:w-1/5"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.04] group-hover:opacity-0 group-focus:scale-[1.04] group-focus:opacity-0"
              style={{ backgroundImage: `url(${member.image})` }}
            />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0d4595]/95 via-[#0d4595]/62 to-transparent transition-opacity duration-500 group-hover:opacity-0 group-focus:opacity-0" />

            <div className="absolute inset-0 flex translate-y-6 flex-col justify-end bg-[#0d4595] px-7 py-8 text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 sm:px-8 sm:py-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                Biographie
              </p>
              <h3 className="mt-4 font-serif text-3xl font-semibold leading-none sm:text-4xl lg:text-5xl">
                {member.name}
              </h3>
              <p className="mt-3 text-xs font-light uppercase tracking-[0.12em] text-white/82 sm:text-sm lg:text-base">
                {member.role}
              </p>
              <p className="mt-5 text-sm font-light leading-7 text-white/88 lg:mt-6 lg:text-base lg:leading-8">
                {member.bio ||
                  `${member.name} accompagne les clients du Cabinet Nyamugabo avec rigueur, écoute et une approche stratégique adaptée aux enjeux de chaque dossier.`}
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 px-7 pb-7 text-center text-white transition duration-500 group-hover:translate-y-6 group-hover:opacity-0 group-focus:translate-y-6 group-focus:opacity-0 sm:px-8 sm:pb-8">
              <h3 className="font-serif text-3xl font-semibold leading-none drop-shadow-sm sm:text-4xl lg:text-5xl">
                {member.name}
              </h3>
              <p className="mt-3 text-xs font-light uppercase tracking-[0.12em] text-white/92 sm:text-sm lg:mt-4 lg:text-base">
                {member.role}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
