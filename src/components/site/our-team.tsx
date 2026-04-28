import { getTeamMembers, mapTeamMemberToCard } from "@/lib/django-api";

export async function OurTeam() {
  const team = (await getTeamMembers()).map(mapTeamMemberToCard);

  return (
    <section
      id="team"
      className="border-t border-black/8 bg-[#f5faf2] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Our Team
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">
            Lawyers who combine legal rigor, strong advocacy, and practical
            client partnership.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:gap-6 xl:grid-cols-2">
          {team.map((member) => (
            <article
              key={member.email || member.name}
              className="overflow-hidden bg-transparent md:grid md:grid-cols-[1fr_1.05fr]"
            >
              <div
                className="aspect-[4/4.8] bg-cover bg-center md:min-h-[300px] md:aspect-auto"
                style={{ backgroundImage: `url(${member.image})` }}
              />

              <div className="bg-white p-4 sm:p-5 md:p-8 lg:p-10">
                <h3 className="font-sans text-lg leading-tight text-[#0d4595] underline decoration-[#0d4595]/35 underline-offset-4 sm:text-xl md:text-3xl">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm text-slate-700 sm:text-base md:mt-3 md:text-2xl">
                  {member.role}
                </p>

                <div className="mt-4 space-y-1 text-xs leading-5 text-slate-700 sm:text-sm sm:leading-6 md:mt-8 md:space-y-2 md:text-xl md:leading-9">
                  <p>{member.city}</p>
                  <p>{member.email || "contact@cabinetnyamugabo.com"}</p>
                  <p>{member.phone || "+243 000 000 000"}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
