import { redirect } from "next/navigation";

type AppointmentVerifyPageProps = {
  params: Promise<{
    token: string;
  }>;
};

function getDjangoApiBaseUrl() {
  const configuredBaseUrl =
    process.env.NEXT_PUBLIC_DJANGO_API_BASE_URL ??
    process.env.DJANGO_API_BASE_URL;

  if (configuredBaseUrl) {
    return configuredBaseUrl.replace(/\/$/, "");
  }

  if (process.env.NODE_ENV !== "production") {
    return "http://127.0.0.1:8000/api";
  }

  return "";
}

export default async function AppointmentVerifyPage({
  params,
}: AppointmentVerifyPageProps) {
  const { token } = await params;

  if (!token) {
    redirect("/appointments/verification-invalid");
  }

  const normalizedToken = decodeURIComponent(token);
  const apiBaseUrl = getDjangoApiBaseUrl();

  if (!apiBaseUrl) {
    redirect("/appointments/verification-invalid");
  }

  const response = await fetch(
    `${apiBaseUrl}/appointments/verify-email/${normalizedToken}/`,
    {
      cache: "no-store",
      redirect: "manual",
    },
  );

  const location = response.headers.get("location") ?? "";

  if (response.ok || location.includes("/appointments/success")) {
    redirect("/appointments/success");
  }

  redirect("/appointments/verification-invalid");
}
