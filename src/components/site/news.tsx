import Link from "next/link";

import { getPosts, mapPostToCard } from "@/lib/django-api";

type NewsCard = ReturnType<typeof mapPostToCard>;

function getDisplayPosts(posts: NewsCard[]) {
  if (posts.length >= 5) {
    return posts.slice(0, 5);
  }

  const repeatedPosts = [...posts];

  while (repeatedPosts.length > 0 && repeatedPosts.length < 5) {
    repeatedPosts.push(posts[repeatedPosts.length % posts.length]);
  }

  return repeatedPosts;
}

function NewsMeta({ post }: { post: NewsCard }) {
  return (
    <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-black lg:mt-4 lg:text-base">
      <span className="font-bold text-[#ff3366]">{post.type}</span>
      <span>{post.date}</span>
    </p>
  );
}

function AuthorLine({ name = "Cabinet Nyamugabo" }: { name?: string }) {
  return (
    <div className="mt-auto flex items-center gap-3 pt-6 text-sm lg:gap-4 lg:pt-8 lg:text-base">
      <div
        className="h-11 w-11 rounded-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80)",
        }}
      />
      <p className="font-bold text-black">{name}</p>
    </div>
  );
}

export async function News() {
  const posts = getDisplayPosts((await getPosts()).map(mapPostToCard));

  if (posts.length === 0) {
    return null;
  }

  const [featured, side, ...cards] = posts;

  return (
    <section className="bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-start justify-between gap-6">
          <h2 className="text-3xl font-normal leading-tight text-black sm:text-4xl md:text-5xl lg:text-7xl lg:leading-none">
            Nouvelles
          </h2>

          <Link
            href="/news"
            className="hidden items-center gap-3 rounded-full bg-[#ffe8ef] px-5 py-3 text-sm text-[#ff3366] transition hover:bg-[#ffd8e4] sm:inline-flex lg:px-7 lg:py-4 lg:text-base"
          >
            Page d&apos;actualités
            <span className="text-2xl leading-none lg:text-3xl">→</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,2.05fr)_minmax(320px,1fr)]">
          <Link href={`/news/${featured.slug}`} className="group block">
            <article className="overflow-hidden rounded-2xl bg-[#f4f4f4]">
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <div
                  className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url(${featured.image})` }}
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-normal leading-tight text-black sm:text-3xl lg:text-4xl">
                  {featured.title}
                </h3>
                <NewsMeta post={featured} />
                <p className="mt-3 text-sm leading-6 text-[#777] sm:text-base lg:mt-4 lg:text-lg lg:leading-7">
                  {featured.summary}
                </p>
              </div>
            </article>
          </Link>

          {side ? (
            <Link href={`/news/${side.slug}`} className="group block">
              <article className="flex h-full min-h-[430px] flex-col overflow-hidden rounded-2xl bg-[#f4f4f4] lg:min-h-[560px]">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <div
                    className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url(${side.image})` }}
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-2xl font-normal leading-tight text-black lg:text-3xl">
                    {side.title}
                  </h3>
                  <NewsMeta post={side} />
                  <p className="mt-3 text-sm leading-6 text-[#777] sm:text-base lg:mt-4 lg:text-lg lg:leading-7">
                    {side.summary}
                  </p>
                  <AuthorLine />
                </div>
              </article>
            </Link>
          ) : null}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {cards.slice(0, 3).map((post, index) => (
            <Link
              key={`${post.slug}-${index}`}
              href={`/news/${post.slug}`}
              className="group block"
            >
              <article className="flex h-full min-h-[430px] flex-col overflow-hidden rounded-2xl bg-[#f4f4f4] lg:min-h-[560px]">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <div
                    className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-2xl font-normal leading-tight text-black lg:text-3xl">
                    {post.title}
                  </h3>
                  <NewsMeta post={post} />
                  <p className="mt-3 text-sm leading-6 text-[#777] sm:text-base lg:mt-4 lg:text-lg lg:leading-7">
                    {post.summary}
                  </p>
                  <AuthorLine
                    name={
                      index === 0
                        ? "Équipe Cabinet"
                        : index === 1
                          ? "Analyse juridique"
                          : "Cabinet Nyamugabo"
                    }
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>

        <Link
          href="/news"
          className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#ffe8ef] px-6 py-3 text-sm text-[#ff3366] transition hover:bg-[#ffd8e4] sm:hidden"
        >
          Page d&apos;actualités
          <span className="text-2xl leading-none">→</span>
        </Link>
      </div>
    </section>
  );
}
