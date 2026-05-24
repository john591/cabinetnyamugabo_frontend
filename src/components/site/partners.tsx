const partners = [
  {
    name: "Liquid",
    logo: "https://nyamugabo-bucket.s3.us-west-2.amazonaws.com/media/partenaires+/logo_LIQUID.png",
  },
  {
    name: "ITP",
    logo: "https://nyamugabo-bucket.s3.us-west-2.amazonaws.com/media/partenaires+/logo-ITP.png",
  },
  {
    name: "Petrocam",
    logo: "https://nyamugabo-bucket.s3.us-west-2.amazonaws.com/media/partenaires+/petrocam.jpg",
  },
  {
    name: "Sicomines",
    logo: "https://nyamugabo-bucket.s3.us-west-2.amazonaws.com/media/partenaires+/sicomine.jpg",
  },
  {
    name: "Helios",
    logo: "https://nyamugabo-bucket.s3.us-west-2.amazonaws.com/media/partenaires+/Helios.jpg",
  },
];

export function Partners() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-normal leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
          Nos partenaires et clients
        </h2>

        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-4 min-[420px]:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex min-h-[112px] items-center justify-center border border-[rgba(13,69,149,0.12)] bg-white px-5 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:min-h-[128px] sm:p-6 lg:min-h-[148px]"
              >
                <div
                  className="h-16 w-full max-w-[150px] bg-contain bg-center bg-no-repeat sm:h-20 sm:max-w-[170px] lg:h-24 lg:max-w-[190px]"
                  style={{ backgroundImage: `url(${partner.logo})` }}
                  role="img"
                  aria-label={partner.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
