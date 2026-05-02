import Link from "next/link";

import { getPosts, mapPostToCard } from "@/lib/django-api";

export async function News() {
  const posts = (await getPosts()).slice(0, 3).map(mapPostToCard);

  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f5faf2_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#299122]">
              Actualités
            </p>
            <h2 className="mt-4 font-sans text-3xl leading-tight text-slate-950 sm:text-5xl sm:leading-none lg:text-6xl">
              Les dernières nouvelles et analyses de notre équipe d&apos;experts
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Commentaires, actualités du cabinet et developpements juridiques selectionnés pour aider les clients à rester informés des enjeux qui façonnent les affaires commerciales et privées.
          </p>
        </div>
        <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 lg:grid-cols-3 lg:gap-12">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/news/${post.slug}`}
              className="group flex flex-col"
            >
              <article className="grid grid-cols-[132px_minmax(0,1fr)] items-start gap-4 border border-black/6 bg-white p-3 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:block sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:hover:translate-y-0">
                <div className="aspect-[1/1] overflow-hidden bg-slate-100 sm:aspect-[16/8]">
                  <div
                    className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-[1.04]"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                </div>

                <div className="min-w-0 sm:mt-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500 sm:text-[11px] sm:tracking-[0.34em]">
                    {post.date} | {post.type}
                  </p>

                  <h3 className="mt-2 font-sans text-lg leading-tight text-slate-950 transition group-hover:text-[#0d4595] sm:mt-4 sm:text-3xl">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-9">
                    {post.summary}
                  </p>

                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#299122] sm:mt-6">
                    Lire l&apos;article
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-start sm:mt-16 lg:justify-end">
          <Link
            href="/news"
            className="inline-flex w-full items-center justify-center border border-slate-300 bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0d4595] transition hover:border-[#0d4595] hover:text-[#0d4595] sm:min-w-[240px] sm:w-auto sm:px-10 sm:py-5 sm:tracking-[0.22em]"
          >
            Voir toutes les actualités
          </Link>
        </div>
      </div>
    </section>
  );
}
