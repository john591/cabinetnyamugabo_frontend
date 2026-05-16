import { NextRequest, NextResponse } from "next/server";

import { getDjangoApiBaseUrl } from "@/lib/api-config";

export async function POST(request: NextRequest) {
  const apiBaseUrl = getDjangoApiBaseUrl();

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
