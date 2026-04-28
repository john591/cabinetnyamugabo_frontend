const results = [
  {
    matter: "Commercial dispute",
    outcome: "Negotiated resolution that protected the client’s core assets.",
  },
  {
    matter: "Employment investigation",
    outcome: "Rapid internal strategy that reduced exposure and restored trust.",
  },
  {
    matter: "Cross-border transaction",
    outcome: "Structured closing support across multiple counterparties and jurisdictions.",
  },
];

export function CaseResults() {
  return (
    <section className="bg-[linear-gradient(180deg,#f6faf4_0%,#edf6ea_100%)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#299122] uppercase">
            Case Results
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">
            Results shaped by preparation, advocacy, and strategic calm.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {results.map((result) => (
            <article
              key={result.matter}
              className="border border-[rgba(13,69,149,0.14)] bg-white p-6"
            >
              <p className="text-[11px] font-semibold tracking-[0.22em] text-[#627180] uppercase">
                {result.matter}
              </p>
              <p className="mt-6 font-serif text-3xl leading-tight text-[#24303a]">
                {result.outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
