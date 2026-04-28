import Link from "next/link";

import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { getServices } from "@/lib/django-api";

export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content" className="bg-white">
        <section className="border-b border-[rgba(13,69,149,0.14)] bg-[linear-gradient(180deg,#ffffff_0%,#f6faf4_100%)] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#299122] uppercase">
              Services
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight text-slate-950 sm:text-6xl">
              Legal services tailored for business, private clients, and
              disputes.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              This route now has an API behind it at <code>/api/services</code>,
              ready for future integrations or dynamic frontend fetching.
            </p>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.id}
                  className="flex min-h-[280px] flex-col justify-between border border-[rgba(13,69,149,0.14)] bg-[#f6faf4] p-6"
                >
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.22em] text-[#627180] uppercase">
                      Practice Area
                    </p>
                    <h2 className="mt-4 font-serif text-3xl leading-tight text-slate-950">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {service.short_description || service.description}
                    </p>
                  </div>

                  <Link
                    href="/book-appointment"
                    className="mt-8 text-[11px] font-semibold tracking-[0.22em] text-[#0d4595] uppercase"
                  >
                    Book consultation
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
