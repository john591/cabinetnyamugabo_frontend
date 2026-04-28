import Link from "next/link";

import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { getPosts, mapPostToCard } from "@/lib/django-api";

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const posts = (await getPosts()).map(mapPostToCard);

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main id="main-content" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#299122]">
              News
            </p>
            <h1 className="mt-4 font-sans text-5xl leading-none sm:text-6xl">
              All Insights
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Articles, legal updates, and commentary from Cabinet Nyamugabo on
              the issues shaping business, disputes, and private client
              matters.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-12">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/news/${post.slug}`}
                className="group flex flex-col"
              >
                <article>
                  <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                    <div
                      className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-[1.02]"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                  </div>

                  <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.34em] text-[#627180]">
                    {post.date} | {post.type}
                  </p>

                  <h2 className="mt-4 font-sans text-3xl leading-tight transition group-hover:text-[#0d4595]">
                    {post.title}
                  </h2>

                  <p className="mt-5 text-base leading-9 text-slate-700">
                    {post.summary}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
