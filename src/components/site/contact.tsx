import AdressMap from "@/components/site/adressmap";

const office = {
  address: "Gombe, Kinshasa, Democratic Republic of the Congo",
  phone: "+243 000 000 000",
  email: "contact@cabinetnyamugabo.com",
  mapQuery: "Gombe, Kinshasa, Democratic Republic of the Congo",
};

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[rgba(13,69,149,0.14)] bg-[linear-gradient(180deg,#ffffff_0%,#f6faf4_100%)] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#299122] uppercase">
              Contact
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">
              Speak with a team that values clarity, urgency, and
              confidentiality.
            </h2>

            <div className="grid gap-5 border border-[rgba(13,69,149,0.14)] bg-[#f6faf4] p-6">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] text-[#627180] uppercase">
                  Physical Address
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {office.address}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
                  Phone Number
                </p>
                <a
                  href={`tel:${office.phone.replace(/\s+/g, "")}`}
                  className="mt-3 block text-sm leading-7 text-slate-700 transition hover:text-[#0d4595]"
                >
                  {office.phone}
                </a>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
                  Email Address
                </p>
                <a
                  href={`mailto:${office.email}`}
                  className="mt-3 block text-sm leading-7 text-slate-700 transition hover:text-[#0d4595]"
                >
                  {office.email}
                </a>
              </div>

              <a
                href="#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit border border-[#0d4595] px-5 py-3 text-[11px] font-semibold tracking-[0.22em] text-[#0d4595] uppercase transition hover:bg-[#0d4595] hover:text-white"
              >
                Open Map
              </a>
            </div>
          </div>

          <div className="overflow-hidden border border-[rgba(13,69,149,0.14)]">
            <AdressMap />
          </div>
        </div>

        <div className="border border-[rgba(13,69,149,0.14)] bg-[#f6faf4] p-6 sm:p-8">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#299122] uppercase">
            Send an Inquiry
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-600">
              Full name
              <input
                type="text"
                className="border border-[rgba(13,69,149,0.18)] bg-white px-4 py-3 text-slate-950 outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-600">
              Email
              <input
                type="email"
                className="border border-[rgba(13,69,149,0.18)] bg-white px-4 py-3 text-slate-950 outline-none"
              />
            </label>
          </div>

          <label className="mt-6 grid gap-2 text-sm text-slate-600">
            Subject
            <input
              type="text"
              className="border border-[rgba(13,69,149,0.18)] bg-white px-4 py-3 text-slate-950 outline-none"
            />
          </label>

          <label className="mt-6 grid gap-2 text-sm text-slate-600">
            Message
            <textarea
              rows={6}
              className="border border-[rgba(13,69,149,0.18)] bg-white px-4 py-3 text-slate-950 outline-none"
            />
          </label>

          <button className="mt-6 inline-flex border border-[#0d4595] px-6 py-3 text-[11px] font-semibold tracking-[0.22em] text-[#0d4595] uppercase transition hover:bg-[#0d4595] hover:text-white">
            Send inquiry
          </button>
        </div>
      </div>
    </section>
  );
}
