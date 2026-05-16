import Link from "next/link";
import { ChevronRight, Clock3, Pencil, Search, Tag, UserRound } from "lucide-react";

import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { getPosts, mapPostToCard } from "@/lib/django-api";

export const dynamic = "force-dynamic";

type NewsCard = ReturnType<typeof mapPostToCard>;

const fallbackCategories = [
  "Droit des affaires",
  "Droit environnemental",
  "Actualités du cabinet",
  "Contentieux",
  "Conformité",
  "Non classé",
];

function getCategories(posts: NewsCard[]) {
  const categories = Array.from(
    new Set(posts.map((post) => post.type).filter(Boolean)),
  );

  return categories.length > 0 ? categories : fallbackCategories;
}

function PostMeta({ post }: { post: NewsCard }) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2 font-serif text-sm italic leading-6 text-[#24242c] sm:text-base">
      <Clock3 className="h-4 w-4 text-slate-400" aria-hidden />
      <span>{post.date}</span>
      <Tag className="h-4 w-4 text-slate-400" aria-hidden />
      <span>
        On{" "}
        <span className="text-[#9a1657] underline underline-offset-2">
          {post.type}
        </span>
      </span>
      <span>, by</span>
      <UserRound className="h-4 w-4 text-slate-400" aria-hidden />
      <span className="text-[#9a1657] underline underline-offset-2">
        Cabinet Nyamugabo
      </span>
    </div>
  );
}

export default async function NewsPage() {
  const posts = (await getPosts()).map(mapPostToCard);
  const categories = getCategories(posts);

  return (
    <div className="min-h-screen bg-white text-[#24242c]">
      <Navbar />
      <main id="main-content" className="bg-white">
        <section className="relative h-[320px] overflow-hidden sm:h-[420px] lg:h-[520px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1568430328012-21ed450453ea?auto=format&fit=crop&w=2400&q=85)",
            }}
          />
          <div className="absolute inset-0 bg-[#0a4d57]/36 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#063845]/22 via-transparent to-[#063845]/28" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-end px-5 text-right sm:px-8 lg:px-12">
            <h1 className="font-thin uppercase leading-none tracking-[0.06em] text-white sm:text-6xl lg:text-7xl">
              <span className="block text-5xl italic text-[#c4d86a] sm:text-6xl lg:text-7xl">
                Our
              </span>
              <span className="block text-4xl sm:text-6xl lg:text-7xl">
                Insights
              </span>
            </h1>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_430px]">
            <div>
              {posts.length > 0 ? (
                <div className="space-y-12">
                  {posts.map((post) => (
                    <article
                      key={post.slug}
                      className="border-b border-slate-200 pb-12 last:border-b-0"
                    >
                      <h2 className="max-w-4xl text-2xl font-extrabold uppercase leading-tight tracking-[0.02em] text-[#9a1657] sm:text-3xl lg:text-4xl">
                        {post.title}
                      </h2>

                      <PostMeta post={post} />

                      <p className="mt-10 max-w-4xl text-sm leading-7 text-[#24242c] sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
                        {post.summary}
                      </p>

                      <Link
                        href={`/news/${post.slug}`}
                        className="mt-8 inline-flex items-center gap-1 text-base font-bold text-[#9a1657] underline underline-offset-2 transition hover:text-[#6f0f40]"
                      >
                        Read More <ChevronRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="border border-slate-200 p-8 text-sm leading-7 text-slate-600">
                  Aucune actualité n&apos;est disponible pour le moment.
                </div>
              )}
            </div>

            <aside className="lg:pt-0">
              <form className="flex h-16 bg-[#edeae6]" action="/news">
                <input
                  type="search"
                  name="q"
                  placeholder="Search"
                  className="min-w-0 flex-1 bg-transparent px-6 font-serif text-base italic text-[#24242c] outline-none placeholder:text-[#24242c]"
                />
                <button
                  type="submit"
                  className="flex w-20 items-center justify-center bg-[#333341] text-white transition hover:bg-[#22222d]"
                  aria-label="Search news"
                >
                  <Search className="h-6 w-6" aria-hidden />
                </button>
              </form>

              <div className="mt-16">
                <h2 className="text-3xl font-extrabold text-[#333341]">
                  Categories
                </h2>

                <ul className="mt-14 divide-y divide-[#d8d3cc] border-y border-[#d8d3cc]">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link
                        href="/news"
                        className="flex items-center gap-3 py-5 text-lg text-[#55515a] transition hover:text-[#9a1657] sm:text-xl"
                      >
                        <ChevronRight
                          className="h-5 w-5 flex-none text-[#9a1657]"
                          aria-hidden
                        />
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/book-appointment"
                className="mt-16 inline-flex w-full items-center gap-4 bg-[#9a1657] px-7 py-6 text-base font-semibold uppercase tracking-[0.04em] text-white transition hover:bg-[#7d1146]"
              >
                <Pencil className="h-5 w-5" aria-hidden />
                Subscribe
              </Link>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
