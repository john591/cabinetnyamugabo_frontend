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

const phoneCountryOptions = [
  { value: "+243", label: "🇨🇩 +243 RDC" },
  { value: "+257", label: "🇧🇮 +257 Burundi" },
  { value: "+256", label: "🇺🇬 +256 Ouganda" },
  { value: "+254", label: "🇰🇪 +254 Kenya" },
  { value: "+255", label: "🇹🇿 +255 Tanzanie" },
  { value: "+242", label: "🇨🇬 +242 Congo" },
  { value: "+27", label: "🇿🇦 +27 Afrique du Sud" },
  { value: "+33", label: "🇫🇷 +33 France" },
  { value: "+32", label: "🇧🇪 +32 Belgique" },
  { value: "+44", label: "🇬🇧 +44 Royaume-Uni" },
  { value: "+1", label: "🇺🇸 +1 Etats-Unis" },
  { value: "+86", label: "🇨🇳 +86 Chine" },
];

const appointmentTimeOptions = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
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
    const phoneCountryCode = String(formData.get("phoneCountryCode") || "");
    const phoneNumber = String(formData.get("phone") || "");

    const response = await submitAppointmentRequest({
      name: String(formData.get("name") || ""),
      address: String(formData.get("address") || ""),
      phone: `${phoneCountryCode} ${phoneNumber}`.trim(),
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
                <span>
                  Nom et Prenom: <span className="text-red-600">*</span>
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  className="h-12 w-full min-w-0 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-base text-slate-950 outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium leading-6 text-[#24303a] sm:text-base md:col-span-2">
                <span>
                  Adresse complete: <span className="text-red-600">*</span>
                </span>
                <input
                  type="text"
                  name="address"
                  required
                  className="h-12 w-full min-w-0 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-base text-slate-950 outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium leading-6 text-[#24303a] sm:text-base">
                <span>
                  Numero de telephone: <span className="text-red-600">*</span>
                </span>
                <div className="grid gap-2 sm:grid-cols-[minmax(0,190px)_1fr]">
                  <select
                    name="phoneCountryCode"
                    required
                    defaultValue="+243"
                    className="h-12 w-full min-w-0 border border-[rgba(13,69,149,0.18)] bg-white px-3 text-base text-slate-950 outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10"
                  >
                    {phoneCountryOptions.map((country) => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="h-12 w-full min-w-0 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-base text-slate-950 outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10"
                  />
                </div>
              </label>

              <label className="grid gap-2 text-sm font-medium leading-6 text-[#24303a] sm:text-base">
                <span>
                  Adresse e-mail: <span className="text-red-600">*</span>
                </span>
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
                <span>
                  Pays <span className="text-red-600">*</span>
                </span>
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
                <span>
                  Bureau <span className="text-red-600">*</span>
                </span>
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
                <span>
                  Date du Rendez-vous: <span className="text-red-600">*</span>
                </span>
                <input
                  type="date"
                  name="date"
                  required
                  className="h-12 w-full min-w-0 border border-[rgba(13,69,149,0.18)] bg-white px-4 text-base text-slate-950 outline-none transition focus:border-[#0d4595] focus:ring-2 focus:ring-[#0d4595]/10"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium leading-6 text-[#24303a] sm:text-base">
                <span>
                  Heure du Rendez-vous: <span className="text-red-600">*</span>
                </span>
                <select
                  name="time"
                  required
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
                <span>
                  Type de service <span className="text-red-600">*</span>
                </span>
                <select
                  name="service"
                  required
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
                <span>
                  Breve description du probleme juridique:{" "}
                  <span className="text-red-600">*</span>
                </span>
                <textarea
                  name="description"
                  required
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
