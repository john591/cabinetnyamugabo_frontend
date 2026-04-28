import { NextRequest, NextResponse } from "next/server";

function getApiBaseUrl() {
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

export async function POST(request: NextRequest) {
  const apiBaseUrl = getApiBaseUrl();

  if (!apiBaseUrl) {
    return NextResponse.json(
      { detail: "Django API base URL is not configured." },
      { status: 500 },
    );
  }

  const body = await request.json();

  try {
    const response = await fetch(`${apiBaseUrl}/appointments/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await response.json().catch(() => ({
      detail: "Unexpected backend response.",
    }));

    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json(
      { detail: "Unable to reach the appointment backend." },
      { status: 502 },
    );
  }
}
