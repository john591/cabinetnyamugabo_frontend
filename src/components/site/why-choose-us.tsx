import Link from "next/link";

const storyPoints = [
  "Trusted Corporate Advisory",
  "Dispute Strategy & Advocacy",
  "Private Client Guidance",
];

export function WhyChooseUs() {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="w-full">

        <article className="relative overflow-hidden bg-[#0f1012]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=80)",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,12,0.9)_0%,rgba(8,10,12,0.54)_42%,rgba(8,10,12,0.22)_70%,rgba(8,10,12,0.52)_100%)]" />

          <div className="relative grid min-h-[780px] grid-cols-[76px_minmax(0,1fr)] lg:grid-cols-[110px_minmax(0,1fr)]">
            <div className="flex items-center justify-center border-r border-white/50 bg-black/28">
              <p className="rotate-180 text-4xl tracking-[0.18em] text-white [writing-mode:vertical-rl] sm:text-5xl">
                Cabinet Nyamugabo
              </p>
            </div>

            <div className="relative flex min-h-[780px] items-stretch">
              <div className="flex w-full flex-col justify-between px-8 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-14">
                <div className="ml-auto max-w-[440px] space-y-10 pt-6 text-left lg:pt-14">
                  {storyPoints.map((point) => (
                    <p
                      key={point}
                      className="text-3xl font-light uppercase tracking-[0.2em] text-white sm:text-4xl"
                    >
                      {point}
                    </p>
                  ))}
                </div>

                <div className="flex justify-end">
                  <div className="w-full max-w-[680px] border border-black/8 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.16)] sm:p-10">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0d4595]">
                      Why Cabinet Nyamugabo
                    </p>
                    <h2 className="mt-4 font-sans text-4xl leading-tight text-slate-950 sm:text-5xl">
                      What makes our counsel different?
                    </h2>
                    <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-700">
                      We partner closely with clients through high-stakes
                      commercial, dispute, and private client matters, combining
                      strategic judgment, careful preparation, and clear
                      communication at every stage.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Link
                        href="/about-us"
                        className="inline-flex items-center justify-center border border-[#0d4595]/20 bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0d4595] transition hover:border-[#0d4595] hover:bg-[#0d4595] hover:text-white"
                      >
                        Learn More
                      </Link>
                      <Link
                        href="/book-appointment"
                        className="inline-flex h-14 w-14 items-center justify-center border border-slate-300 bg-white text-3xl text-slate-950 transition hover:border-slate-950"
                      >
                        ↓
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
