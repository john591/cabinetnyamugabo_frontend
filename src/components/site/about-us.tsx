import Link from "next/link";

const principles = [
  {
    title: "Client-Focused Advice",
    text: "We align legal strategy with the commercial, personal, and institutional realities our clients face.",
  },
  {
    title: "Consistent Excellence",
    text: "Every matter receives disciplined preparation, rigorous analysis, and close attention to detail.",
  },
  {
    title: "True Partnership",
    text: "We work collaboratively with clients, building trust through responsiveness, clarity, and accountability.",
  },
  {
    title: "Strong Teamwork",
    text: "Our lawyers coordinate across practice areas so clients receive joined-up advice on complex matters.",
  },
];

const numbers = [
  { value: "20+", label: "Years of combined legal and advisory experience" },
  { value: "4", label: "Core practice areas serving business and private clients" },
  { value: "100%", label: "Commitment to clear communication and practical strategy" },
  { value: "24/7", label: "Responsiveness when matters become urgent or sensitive" },
];

const features = [
  {
    title: "Our People",
    text: "We invest in lawyers who combine technical ability with judgment, empathy, and professionalism.",
  },
  {
    title: "Our Community",
    text: "We believe legal work should strengthen institutions, support enterprise, and serve the wider public good.",
  },
  {
    title: "Our Standards",
    text: "We hold ourselves to a high standard of care in how we prepare, advise, and represent every client.",
  },
];

const founderHighlights = [
  "Avocat pres la Cour",
  "Professeur d'Universite",
  "Homme politique",
  "Kinshasa & Bukavu",
];

export function AboutUs() {
  return (
    <main id="main-content" className="bg-white">
      <section className="border-b border-[rgba(13,69,149,0.14)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#299122]">
              About Us
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight text-slate-950 sm:text-6xl">
              Cabinet Nyamugabo advises businesses, institutions, and private
              clients with clarity, discipline, and strategic calm.
            </h1>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Our work is built on careful preparation, practical judgment, and
              a commitment to helping clients navigate important decisions with
              confidence.
            </p>
            <p>
              We approach every instruction with the same standard: understand
              the stakes, anticipate risk, and deliver advice that is both
              legally sound and genuinely useful.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fbf6_100%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#299122]">
              Our Approach
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">
              Our culture is guided by quality, trust, and long-term
              partnership.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((item) => (
              <article
                key={item.title}
                className="border border-[rgba(13,69,149,0.14)] bg-[#f6faf4] p-6"
              >
                <h3 className="font-serif text-3xl leading-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <div
              className="aspect-[4/5] overflow-hidden rounded-[28px] bg-slate-100 shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
              style={{
                backgroundImage:
                  "url(https://commons.wikimedia.org/wiki/Special:FilePath/Claude%20Nyamugabo%20Bazibuhe%20%28cropped%29.jpg)",
                backgroundPosition: "center top",
                backgroundSize: "cover",
              }}
            />
            <div className="absolute bottom-[-18px] right-[-18px] h-32 w-32 rounded-[24px] border border-[#7fd35a]/55 bg-transparent" />
          </div>

          <article className="relative">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7fd35a]">
              <span className="h-px w-14 bg-[#7fd35a]" />
              Le Promoteur
            </p>
            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#0d4595] sm:text-6xl">
              Maitre Claude Nyamugabo
            </h2>
            <p className="mt-2 text-2xl text-[#299122]">Bazibuhe</p>

            <div className="mt-8 space-y-6 text-lg leading-10 text-slate-600">
              <p>
                Avocat pres la Cour, Professeur d&apos;Universite et Homme
                politique, Maitre Claude Nyamugabo Bazibuhe est le fondateur et
                promoteur du Cabinet Nyamugabo.
              </p>
              <p>
                Son parcours allie une expertise juridique de haut niveau a une
                connaissance approfondie du paysage politique et economique de
                la RDC. Cette double competence lui permet d&apos;offrir a ses
                clients un accompagnement strategique exigeant et adapte aux
                realites du terrain.
              </p>
              <p>
                Sous sa direction, le Cabinet Nyamugabo s&apos;est affirme dans
                des secteurs cles tels que les mines, la fiscalite,
                l&apos;environnement et les questions de propriete, avec une
                approche fondee sur la rigueur, la vision et la responsabilite.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {founderHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[rgba(13,69,149,0.14)] bg-white px-5 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
                >
                  <p className="text-lg font-medium text-[#24303a]">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#edf6ea_0%,#f6faf4_100%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#299122]">
              By The Numbers
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">
              A firm designed to be responsive, rigorous, and close to the work.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-[rgba(13,69,149,0.14)] bg-[rgba(13,69,149,0.14)] sm:grid-cols-2 xl:grid-cols-4">
            {numbers.map((item) => (
              <article key={item.label} className="bg-white p-8">
                <p className="font-serif text-5xl leading-none text-slate-950">
                  {item.value}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="border border-[rgba(13,69,149,0.14)] bg-white p-8 shadow-[0_22px_50px_rgba(15,23,42,0.06)] sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#299122]">
              Culture That Connects
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">
              We believe strong legal work grows from strong professional
              culture.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Our team values integrity, preparation, mentorship, and respect
              for the people behind each mandate. We aim to create a practice
              environment where legal excellence and human judgment strengthen
              one another.
            </p>

            <div className="mt-10 grid gap-5">
              {features.map((feature) => (
                <div key={feature.title} className="border-t border-[rgba(13,69,149,0.14)] pt-5">
                  <h3 className="font-serif text-3xl text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-6">
            <article className="overflow-hidden border border-[rgba(13,69,149,0.18)] bg-[linear-gradient(135deg,#0d4595_0%,#0b3772_62%,#299122_100%)] p-8 text-white sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b9eba2]">
                Professional Development
              </p>
              <h3 className="mt-4 font-serif text-4xl leading-tight">
                Investing in lawyers who can guide clients through complexity.
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/78">
                We value continuous development, thoughtful leadership, and the
                growth of legal professionals who combine technical skill with
                mature judgment.
              </p>
            </article>

            <article className="border border-[rgba(13,69,149,0.14)] bg-[#f6faf4] p-8 sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#299122]">
                Explore More
              </p>
              <div className="mt-6 grid gap-4">
                <Link
                  href="/services"
                  className="border border-[rgba(13,69,149,0.14)] bg-white px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0d4595] transition hover:bg-[#0d4595] hover:text-white"
                >
                  Our Services
                </Link>
                <Link
                  href="/news"
                  className="border border-[rgba(13,69,149,0.14)] bg-white px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0d4595] transition hover:bg-[#0d4595] hover:text-white"
                >
                  Featured Insights
                </Link>
                <Link
                  href="/book-appointment"
                  className="border border-[rgba(13,69,149,0.14)] bg-white px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0d4595] transition hover:bg-[#0d4595] hover:text-white"
                >
                  Book Appointment
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
