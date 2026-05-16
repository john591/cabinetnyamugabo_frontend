import { ChevronLeft, ChevronRight } from "lucide-react";

const partners = [
  {
    name: "VIA Water",
    logo: "https://logo.clearbit.com/viawater.nl",
  },
  {
    name: "British Council",
    logo: "https://logo.clearbit.com/britishcouncil.org",
  },
  {
    name: "Kadaster",
    logo: "https://logo.clearbit.com/kadaster.nl",
  },
  {
    name: "De Heus",
    logo: "https://logo.clearbit.com/deheus.com",
  },
  {
    name: "Change the Game Academy",
    logo: "https://logo.clearbit.com/changethegameacademy.org",
  },
  {
    name: "Mastercard Foundation",
    logo: "https://logo.clearbit.com/mastercardfdn.org",
  },
  {
    name: "Porticus",
    logo: "https://logo.clearbit.com/porticus.com",
  },
  {
    name: "The World Bank",
    logo: "https://logo.clearbit.com/worldbank.org",
  },
];

export function Partners() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-normal leading-tight text-black sm:text-5xl lg:text-6xl">
          Nos partenaires et clients
        </h2>

        <div className="relative mt-12 sm:mt-16">
          <button
            type="button"
            className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff3b78] text-white transition hover:bg-[#df2b63] lg:flex"
            aria-label="Partenaires précédents"
          >
            <ChevronLeft className="h-7 w-7" aria-hidden />
          </button>

          <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-x-8 gap-y-8 px-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 lg:px-16">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex min-h-[92px] items-center justify-center"
              >
                <div
                  className="h-24 w-full max-w-[160px] bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${partner.logo})` }}
                  role="img"
                  aria-label={partner.name}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff3b78] text-white transition hover:bg-[#df2b63] lg:flex"
            aria-label="Partenaires suivants"
          >
            <ChevronRight className="h-7 w-7" aria-hidden />
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#ffd4df]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff3b78]" />
          <span className="h-2 w-2 rounded-full bg-[#ffd4df]" />
        </div>
      </div>
    </section>
  );
}
