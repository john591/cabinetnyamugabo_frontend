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
  const [errorMessage, setErrorMessage] = useState(
    "Une erreur est survenue pendant l'envoi. Veuillez reessayer.",
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
    setErrorMessage("Une erreur est survenue pendant l'envoi. Veuillez reessayer.");
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

    if (response.data) {
      form.reset();
      setStatus("success");
      router.push("/appointments/verification-sent");
      return;
    }

    if (response.detail) {
      setErrorMessage(response.detail);
    }
    setStatus("error");
  }

  return (
    <section
      id="book-appointments"
      className="bg-white px-3 py-8 sm:px-6 sm:py-12 lg:px-8"
    >
      <div className="mx-auto w-full max-w-5xl border border-[rgba(13,69,149,0.14)] bg-white px-4 py-5 shadow-[0_18px_48px_rgba(15,23,42,0.06)] sm:px-6 sm:py-7 md:px-8 md:py-8">
        <div className="flex flex-col gap-4 border-b border-dashed border-[rgba(13,69,149,0.14)] pb-5 md:flex-row md:items-start md:justify-between md:gap-8 md:pb-6">
          <div className="min-w-0">
            <p className="text-2xl font-semibold leading-tight text-[#24303a] sm:text-4xl md:text-5xl">
              Formulaire de Prise de Rendez-vous
            </p>
            <p className="mt-2 text-base italic leading-7 text-slate-600 sm:mt-3 sm:text-lg md:text-xl">
              Planifiez votre consultation juridique
            </p>
          </div>

          <div className="w-full shrink-0 border border-[rgba(13,69,149,0.14)] bg-[#f5faf2] px-4 py-3 sm:w-fit md:max-w-[260px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#299122] sm:text-xs sm:tracking-[0.26em]">
              Cabinet Nyamugabo
            </p>
            <p className="mt-1 font-serif text-xl leading-tight text-[#0d4595] sm:text-2xl">
              Avocats d&apos;Affaires
            </p>
          </div>
        </div>

        <form className="mt-6 sm:mt-7" onSubmit={handleSubmit}>
          <section>
            <h2 className="text-xl font-semibold leading-tight text-[#24303a] sm:text-2xl md:text-3xl">
              Information Personnelle du Client
            </h2>

            <div className="mt-4 grid gap-4 md:grid-cols-2 md:gap-5">
              <label className="grid gap-2 text-sm font-medium leading-6 text-[#24303a] sm:text-base md:col-span-2">
                Nom et Prenom:
                <input
                  type="text"
                  name="name"
                  required
                  className="h-12 w-full min-w-0 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-base text-slate-950 outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium leading-6 text-[#24303a] sm:text-base md:col-span-2">
                Adresse complete:
                <input
                  type="text"
                  name="address"
                  className="h-12 w-full min-w-0 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-base text-slate-950 outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium leading-6 text-[#24303a] sm:text-base">
                Numero de telephone:
                <input
                  type="tel"
                  name="phone"
                  className="h-12 w-full min-w-0 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-base text-slate-950 outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium leading-6 text-[#24303a] sm:text-base">
                Adresse e-mail:
                <input
                  type="email"
                  name="email"
                  required
                  className="h-12 w-full min-w-0 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-base text-slate-950 outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10"
                />
              </label>
            </div>
          </section>

          <section className="mt-7 sm:mt-8">
            <h2 className="text-xl font-semibold leading-tight text-[#24303a] sm:text-2xl md:text-3xl">
              Details du Rendez-vous
            </h2>

            <div className="mt-4 grid gap-4 md:grid-cols-2 md:gap-5">
              <label className="grid gap-2 text-sm font-medium leading-6 text-[#24303a] sm:text-base md:col-span-2">
                Pays
                <select
                  name="country"
                  required
                  className="h-12 w-full min-w-0 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-base text-slate-950 outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10"
                  defaultValue="CD"
                >
                  {countryOptions.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm font-medium leading-6 text-[#24303a] sm:text-base md:col-span-2">
                Bureau
                <select
                  name="office"
                  required
                  className="h-12 w-full min-w-0 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-base text-slate-950 outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10"
                  defaultValue="kinshasa"
                >
                  <option value="kinshasa">Kinshasa</option>
                  <option value="bukavu">Bukavu</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-medium leading-6 text-[#24303a] sm:text-base">
                Date du Rendez-vous:
                <input
                  type="date"
                  name="date"
                  required
                  className="h-12 w-full min-w-0 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-base text-slate-950 outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium leading-6 text-[#24303a] sm:text-base">
                Heure du Rendez-vous:
                <select
                  name="time"
                  className="h-12 w-full min-w-0 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-base text-slate-950 outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10"
                >
                  <option value="">Choisissez une heure</option>
                  {appointmentTimeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm font-medium leading-6 text-[#24303a] sm:text-base md:col-span-2">
                Type de service
                <select
                  name="service"
                  className="h-12 w-full min-w-0 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-base text-slate-950 outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10"
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

              <label className="grid gap-2 text-sm font-medium leading-6 text-[#24303a] sm:text-base md:col-span-2">
                Breve description du probleme juridique:
                <textarea
                  name="description"
                  className="min-h-[150px] w-full min-w-0 resize-y border border-[rgba(13,69,149,0.18)] bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10 sm:min-h-[180px]"
                />
              </label>

              <div className="md:col-span-2">
                <button
                  disabled={status === "submitting"}
                  className="inline-flex min-h-12 w-full items-center justify-center bg-[#0d4595] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#0a3777] disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit sm:px-6 sm:text-sm sm:tracking-[0.18em]"
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
                    {errorMessage}
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
