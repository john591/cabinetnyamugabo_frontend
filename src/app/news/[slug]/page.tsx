import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { getPostBySlug, getPosts } from "@/lib/django-api";

type NewsDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function NewsDetailPage({
  params,
}: NewsDetailPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const paragraphs = (post.body || "")
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main id="main-content">
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/news"
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#299122] transition hover:text-[#0d4595]"
            >
              Back to News
            </Link>

            <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.34em] text-[#627180]">
              {new Date(post.published_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              | {post.category?.name ?? "Article"}
            </p>

            <h1 className="mt-4 max-w-4xl font-sans text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
              {post.summary}
            </p>

            <div className="mt-10 aspect-[16/8] overflow-hidden bg-slate-100">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${post.featured_image_url})`,
                }}
              />
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <article className="mx-auto max-w-3xl">
            <div className="space-y-8 text-lg leading-9 text-slate-700">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
