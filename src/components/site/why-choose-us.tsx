export function WhyChooseUs() {
  return (
    <section className="bg-white px-5 py-12 text-[#1f2937] sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.88fr)] lg:items-start lg:gap-16">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl uppercase leading-tight tracking-[0.03em] text-[#172a3a] sm:text-4xl md:text-[2.75rem] lg:text-5xl">
            Des avocats d&apos;affaires engagés pour vos décisions importantes
          </h2>

          <div className="mt-8 space-y-6 text-sm leading-7 text-[#222] sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
            <p>
              Lorsque vous faites face à une question juridique importante, vous
              avez besoin d&apos;une équipe capable d&apos;écouter, d&apos;analyser et
              d&apos;agir avec précision. Cabinet Nyamugabo accompagne les
              entreprises, les institutions et les particuliers avec une approche
              claire, rigoureuse et adaptée aux réalités locales.
            </p>

            <p>
              Notre équipe intervient dans les dossiers où la stratégie, la
              confidentialité et la rapidité d&apos;exécution comptent vraiment. Nous
              aidons nos clients à comprendre les risques, à protéger leurs
              intérêts et à prendre des décisions solides.
            </p>

            <p>
              Nos{" "}
              <span className="font-semibold text-[#0d4595]">
                avocats d&apos;affaires
              </span>{" "}
              et{" "}
              <span className="font-semibold text-[#0d4595]">
                conseils juridiques
              </span>{" "}
              servent les clients à Kinshasa, Bukavu et au-delà. Où que vous
              soyez, vous pouvez compter sur un accompagnement attentif,
              structuré et orienté vers des solutions concrètes.
            </p>
          </div>

          <div className="mt-9 border-t border-slate-200 pt-8">
            <h3 className="font-serif text-2xl uppercase leading-tight tracking-[0.03em] text-[#172a3a] sm:text-3xl lg:text-4xl">
              La différence Cabinet Nyamugabo
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#222] sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
              Nous privilégions une relation directe avec nos clients, une
              préparation minutieuse et une communication transparente. Chaque
              dossier est traité avec sérieux afin de construire une réponse
              juridique utile, responsable et durable.
            </p>
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="aspect-[4/5] overflow-hidden bg-slate-100 shadow-[0_18px_50px_rgba(15,23,42,0.1)] sm:aspect-[5/4] lg:aspect-[4/5]">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=85)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
