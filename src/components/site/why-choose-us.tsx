import { getT } from "@/lib/i18n/server";

export async function WhyChooseUs() {
  const { t } = await getT();

  return (
    <section className="bg-white px-5 py-12 text-[#1f2937] sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.88fr)] lg:items-start lg:gap-16">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl uppercase leading-tight tracking-[0.03em] text-[#172a3a] sm:text-4xl md:text-[2.75rem] lg:text-5xl">
            {t("why.title")}
          </h2>

          <div className="mt-8 space-y-6 text-sm leading-7 text-[#222] sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
            <p>{t("why.p1")}</p>

            <p>{t("why.p2")}</p>

            <p>
              {t("why.p3a")}{" "}
              <span className="font-semibold text-[#0d4595]">
                {t("why.p3b")}
              </span>{" "}
              {t("why.p3c")}{" "}
              <span className="font-semibold text-[#0d4595]">
                {t("why.p3d")}
              </span>{" "}
              {t("why.p3e")}
            </p>
          </div>

          <div className="mt-9 border-t border-slate-200 pt-8">
            <h3 className="font-serif text-2xl uppercase leading-tight tracking-[0.03em] text-[#172a3a] sm:text-3xl lg:text-4xl">
              {t("why.diffTitle")}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#222] sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
              {t("why.diffText")}
            </p>
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="aspect-[4/5] overflow-hidden bg-slate-100 shadow-[0_18px_50px_rgba(15,23,42,0.1)] sm:aspect-[5/4] lg:aspect-[4/5]">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://nyamugabo-bucket.s3.us-west-2.amazonaws.com/media/claude-nyamugabo-avec-constitution.jpeg)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
