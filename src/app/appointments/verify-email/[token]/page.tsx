import { redirect } from "next/navigation";

import { getDjangoApiBaseUrl } from "@/lib/api-config";

type AppointmentVerifyPageProps = {
  params: Promise<{
    token: string;
  }>;
};

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
