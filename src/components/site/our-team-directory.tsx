"use client";

import { useMemo, useState } from "react";

type TeamDirectoryMember = {
  name: string;
  role: string;
  city: string;
  email: string;
  phone: string;
  image: string;
};

type OurTeamDirectoryProps = {
  team: TeamDirectoryMember[];
};

export function OurTeamDirectory({ team }: OurTeamDirectoryProps) {
  const [nameQuery, setNameQuery] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [expertiseFilter, setExpertiseFilter] = useState("");

  const cities = useMemo(
    () => Array.from(new Set(team.map((member) => member.city).filter(Boolean))),
    [team],
  );

  const expertiseOptions = useMemo(
    () => Array.from(new Set(team.map((member) => member.role).filter(Boolean))),
    [team],
  );

  const filteredTeam = team.filter((member) => {
    const normalizedName = member.name.toLowerCase();
    const normalizedQuery = nameQuery.trim().toLowerCase();
    const matchesName =
      normalizedQuery.length === 0 || normalizedName.includes(normalizedQuery);
    const matchesCity = cityFilter.length === 0 || member.city === cityFilter;
    const matchesExpertise =
      expertiseFilter.length === 0 ||
      member.role === expertiseFilter;

    return matchesName && matchesCity && matchesExpertise;
  });

  return (
    <>
      <section className="border-b border-[rgba(13,69,149,0.14)] bg-white px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="flex gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            <span>Accueil</span>
            <span>/</span>
            <span className="text-[#0d4595]">Notre equipe</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#299122]">
                Nos experts
              </p>
              <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-none text-slate-950 sm:text-6xl lg:text-7xl">
                Tous nos professionnels
              </h1>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              Retrouvez les membres du Cabinet Nyamugabo par nom, ville et
              domaine d&apos;intervention. Chaque profil vous donne un acces
              direct aux coordonnees utiles pour echanger avec notre equipe.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5faf2] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[320px_minmax(0,1fr)] xl:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="h-fit border border-[rgba(13,69,149,0.14)] bg-white p-5 sm:p-6 lg:sticky lg:top-28">
            <div className="flex items-center justify-between gap-4 border-b border-dashed border-[rgba(13,69,149,0.18)] pb-5">
              <h2 className="text-xl font-semibold text-slate-950">Filtrer</h2>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0d4595]">
                {filteredTeam.length} resultat
                {filteredTeam.length > 1 ? "s" : ""}
              </p>
            </div>

            <div className="mt-6 grid gap-5">
              <label className="grid gap-2 text-sm font-medium text-slate-800">
                Nom
                <input
                  type="search"
                  value={nameQuery}
                  onChange={(event) => setNameQuery(event.target.value)}
                  className="h-12 w-full border border-[rgba(13,69,149,0.18)] bg-white px-4 text-base text-slate-950 outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-800">
                Ville
                <select
                  value={cityFilter}
                  onChange={(event) => setCityFilter(event.target.value)}
                  className="h-12 w-full border border-[rgba(13,69,149,0.18)] bg-white px-4 text-base text-slate-950 outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10"
                >
                  <option value="">Toutes les villes</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-800">
                Expertise(s)
                <select
                  value={expertiseFilter}
                  onChange={(event) => setExpertiseFilter(event.target.value)}
                  className="h-12 w-full border border-[rgba(13,69,149,0.18)] bg-white px-4 text-base text-slate-950 outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10"
                >
                  <option value="">Toutes les expertises</option>
                  {expertiseOptions.map((expertise) => (
                    <option key={expertise} value={expertise}>
                      {expertise}
                    </option>
                  ))}
                </select>
              </label>

              <button
                type="button"
                onClick={() => {
                  setNameQuery("");
                  setCityFilter("");
                  setExpertiseFilter("");
                }}
                className="mt-1 inline-flex h-11 items-center justify-center border border-[#0d4595] px-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0d4595] transition hover:bg-[#0d4595] hover:text-white"
              >
                Reinitialiser
              </button>
            </div>
          </aside>

          <div>
            <div className="flex flex-col gap-3 border-b border-[rgba(13,69,149,0.16)] pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Resultats
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-950">
                  {filteredTeam.length} professionnel
                  {filteredTeam.length > 1 ? "s" : ""}
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600">
                Selectionnez un profil pour identifier rapidement le bon
                interlocuteur.
              </p>
            </div>

            {filteredTeam.length > 0 ? (
              <div className="mt-8 grid gap-5 xl:grid-cols-2">
                {filteredTeam.map((member) => (
                  <article
                    key={member.email || member.name}
                    className="group grid overflow-hidden border border-[rgba(13,69,149,0.14)] bg-white sm:grid-cols-[178px_minmax(0,1fr)]"
                  >
                    <div
                      className="aspect-[4/4.6] bg-slate-100 bg-cover bg-center transition duration-500 group-hover:scale-[1.02] sm:aspect-auto"
                      style={{ backgroundImage: `url(${member.image})` }}
                    />

                    <div className="flex min-h-[250px] flex-col p-5 sm:p-6">
                      <div>
                        <h3 className="text-2xl font-semibold leading-tight text-[#0d4595] underline decoration-[#0d4595]/25 underline-offset-4">
                          {member.name}
                        </h3>
                        <p className="mt-3 text-sm font-medium leading-6 text-slate-700">
                          {member.role}
                        </p>
                      </div>

                      <div className="mt-6 border-t border-dashed border-[rgba(13,69,149,0.16)] pt-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                          Domaine d&apos;expertises :
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-700">
                          {member.role || "Conseil juridique"}
                        </p>
                      </div>

                      <div className="mt-auto space-y-2 pt-6 text-sm leading-6 text-slate-700">
                        <p>{member.city}</p>
                        <p>{member.phone || "+243 000 000 000"}</p>
                        <a
                          href={`mailto:${member.email || "contact@cabinetnyamugabo.org"}`}
                          className="break-words text-[#0d4595] transition hover:text-[#299122]"
                        >
                          {member.email || "contact@cabinetnyamugabo.org"}
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-8 border border-[rgba(13,69,149,0.14)] bg-white p-8 text-slate-700">
                Aucun professionnel ne correspond a ces filtres.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
