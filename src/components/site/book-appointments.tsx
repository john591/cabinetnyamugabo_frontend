"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  DjangoService,
  getServices,
  submitAppointmentRequest,
} from "@/lib/django-api";

const countryOptions = [
  { value: "CD", label: "Republique Democratique du Congo" },
  { value: "RW", label: "Rwanda" },
  { value: "BI", label: "Burundi" },
  { value: "UG", label: "Ouganda" },
  { value: "KE", label: "Kenya" },
  { value: "TZ", label: "Tanzanie" },
  { value: "CG", label: "Republique du Congo" },
  { value: "ZA", label: "Afrique du Sud" },
  { value: "FR", label: "France" },
  { value: "BE", label: "Belgique" },
  { value: "GB", label: "Royaume-Uni" },
  { value: "US", label: "Etats-Unis" },
  { value: "CN", label: "Chine" },
  { value: "ZZ", label: "Autre / non repertorie" },
];

const appointmentTimeOptions = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export function BookAppointments() {
  const router = useRouter();
  const [services, setServices] = useState<DjangoService[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  useEffect(() => {
    let isMounted = true;

    getServices().then((data) => {
      if (isMounted) {
        setServices(data);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = event.currentTarget;

    const formData = new FormData(form);

    const response = await submitAppointmentRequest({
      name: String(formData.get("name") || ""),
      address: String(formData.get("address") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      country: String(formData.get("country") || ""),
      office: String(formData.get("office") || ""),
      serviceId: formData.get("service")
        ? Number(formData.get("service"))
        : undefined,
      preferredDate: String(formData.get("date") || ""),
      preferredTime: String(formData.get("time") || ""),
      message: String(formData.get("description") || ""),
    });

    if (response) {
      form.reset();
      setStatus("success");
      router.push("/appointments/verification-sent");
      return;
    }

    setStatus("error");
  }

  return (
    <section
      id="book-appointments"
      className="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="mx-auto max-w-5xl border border-[rgba(13,69,149,0.14)] bg-white px-5 py-6 shadow-[0_18px_48px_rgba(15,23,42,0.06)] sm:px-8 sm:py-8">
        <div className="flex flex-col gap-6 border-b border-dashed border-[rgba(13,69,149,0.14)] pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-3xl font-semibold leading-tight text-[#24303a] sm:text-5xl">
              Formulaire de Prise de Rendez-vous
            </p>
            <p className="mt-3 text-lg italic text-slate-600 sm:text-xl">
              Planifiez votre consultation juridique
            </p>
          </div>

          <div className="shrink-0 border border-[rgba(13,69,149,0.14)] bg-[#f5faf2] px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#299122]">
              Cabinet Nyamugabo
            </p>
            <p className="mt-1 font-serif text-2xl text-[#0d4595]">
              Avocats d&apos;Affaires
            </p>
          </div>
        </div>

        <form className="mt-6" onSubmit={handleSubmit}>
          <section>
            <h2 className="text-2xl font-semibold text-[#24303a] sm:text-3xl">
              Information Personnelle du Client
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-base font-medium text-[#24303a] sm:col-span-2">
                Nom et Prenom:
                <input
                  type="text"
                  name="name"
                  required
                  className="h-12 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-slate-950 outline-none"
                />
              </label>

              <label className="grid gap-2 text-base font-medium text-[#24303a] sm:col-span-2">
                Adresse complete:
                <input
                  type="text"
                  name="address"
                  className="h-12 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-slate-950 outline-none"
                />
              </label>

              <label className="grid gap-2 text-base font-medium text-[#24303a]">
                Numero de telephone:
                <input
                  type="tel"
                  name="phone"
                  className="h-12 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-slate-950 outline-none"
                />
              </label>

              <label className="grid gap-2 text-base font-medium text-[#24303a]">
                Adresse e-mail:
                <input
                  type="email"
                  name="email"
                  required
                  className="h-12 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-slate-950 outline-none"
                />
              </label>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-[#24303a] sm:text-3xl">
              Details du Rendez-vous
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-base font-medium text-[#24303a] sm:col-span-2">
                Pays
                <select
                  name="country"
                  required
                  className="h-12 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-slate-950 outline-none"
                  defaultValue="CD"
                >
                  {countryOptions.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-base font-medium text-[#24303a] sm:col-span-2">
                Bureau
                <select
                  name="office"
                  required
                  className="h-12 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-slate-950 outline-none"
                  defaultValue="kinshasa"
                >
                  <option value="kinshasa">Kinshasa</option>
                  <option value="bukavu">Bukavu</option>
                </select>
              </label>

              <label className="grid gap-2 text-base font-medium text-[#24303a]">
                Date du Rendez-vous:
                <input
                  type="date"
                  name="date"
                  required
                  className="h-12 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-slate-950 outline-none"
                />
              </label>

              <label className="grid gap-2 text-base font-medium text-[#24303a]">
                Heure du Rendez-vous:
                <select
                  name="time"
                  className="h-12 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-slate-950 outline-none"
                >
                  <option value="">Choisissez une heure</option>
                  {appointmentTimeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-base font-medium text-[#24303a] sm:col-span-2">
                Type de service
                <select
                  name="service"
                  className="h-12 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-slate-950 outline-none"
                >
                  <option value="">Selectionnez un service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>
                {services.length === 0 ? (
                  <p className="text-sm font-normal text-slate-500">
                    Aucun service n&apos;a encore ete charge depuis le backend.
                  </p>
                ) : null}
              </label>

              <label className="grid gap-2 text-base font-medium text-[#24303a] sm:col-span-2">
                Breve description du probleme juridique:
                <textarea
                  name="description"
                  className="min-h-[180px] border border-[rgba(13,69,149,0.18)] bg-white px-4 py-3 text-slate-950 outline-none"
                />
              </label>

              <div className="sm:col-span-2">
                <button
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center bg-[#0d4595] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#0a3777] disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit"
                >
                  {status === "submitting"
                    ? "Envoi en cours..."
                    : "Je soumets ma demande"}
                </button>
                {status === "success" ? (
                  <p className="mt-4 text-sm text-green-700">
                    Un email de verification vient de vous etre envoye.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="mt-4 text-sm text-red-700">
                    Une erreur est survenue pendant l&apos;envoi. Veuillez
                    reessayer.
                  </p>
                ) : null}
              </div>
            </div>
          </section>
        </form>
      </div>
    </section>
  );
}
