import Link from "next/link";

import { getT } from "@/lib/i18n/server";
import { poles } from "@/lib/poles";

import { PoleIcon } from "./pole-icon";

export async function Poles() {
  const { t } = await getT();

  return (
    <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0d4595]">
          {t("poles.kicker")}
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-center font-serif text-3xl leading-tight text-slate-950 sm:text-4xl">
          {t("poles.title")}
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
          {Object.values(poles).map((pole) => (
            <article
              key={pole.id}
              className="flex flex-col border-t-4 p-7 sm:p-9"
              style={{
                borderColor: pole.color,
                backgroundColor: pole.softColor,
              }}
            >
              <span
                className="inline-flex h-14 w-14 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: pole.color }}
              >
                <PoleIcon pole={pole.id} className="h-7 w-7" />
              </span>
              <h3
                className="mt-5 font-serif text-2xl leading-tight sm:text-3xl"
                style={{ color: pole.color }}
              >
                {t(`pole.${pole.id}.name`)}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {t(`pole.${pole.id}.tagline`)}
              </p>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                {t(`pole.${pole.id}.desc`)}
              </p>
              <Link
                href={pole.href}
                className="mt-6 inline-flex w-fit items-center gap-3 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:opacity-90"
                style={{ backgroundColor: pole.color }}
              >
                {t(`pole.${pole.id}.cta`)} <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
