import { NextResponse } from "next/server";

import { getMapboxPublicToken } from "@/lib/mapbox";

export async function GET() {
  const token = getMapboxPublicToken();

  if (!token) {
    return NextResponse.json({ detail: "Mapbox token is not configured." }, { status: 404 });
  }

  return NextResponse.json({ token });
}
