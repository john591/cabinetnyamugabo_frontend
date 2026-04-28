import Link from "next/link";

type AppointmentStatusProps = {
  eyebrow: string;
  title: string;
  message: string;
  tone: "success" | "notice" | "error";
};

const toneStyles = {
  success: "border-green-200 bg-green-50 text-green-800",
  notice: "border-[rgba(13,69,149,0.16)] bg-[#f6faf4] text-[#0d4595]",
  error: "border-red-200 bg-red-50 text-red-800",
};

export function AppointmentStatus({
  eyebrow,
  title,
  message,
  tone,
}: AppointmentStatusProps) {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl border border-[rgba(13,69,149,0.16)] bg-white px-5 py-8 shadow-[0_18px_48px_rgba(15,23,42,0.06)] sm:px-10 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#299122]">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-[#24303a] sm:text-5xl">
          {title}
        </h1>
        <div
          className={`mt-6 border px-4 py-4 text-base leading-7 ${toneStyles[tone]}`}
        >
          {message}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/book-appointment"
            className="inline-flex items-center justify-center bg-[#0d4595] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#0a3777]"
          >
            Prendre rendez-vous
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-[rgba(13,69,149,0.16)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#24303a] transition hover:bg-[#f6faf4]"
          >
            Retour a l&apos;accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
