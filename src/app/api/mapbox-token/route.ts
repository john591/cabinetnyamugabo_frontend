import { NextResponse } from "next/server";

export async function GET() {
  const token =
    process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? process.env.MAPBOX_PUBLIC_TOKEN ?? "";

  if (!token) {
    return NextResponse.json({ detail: "Mapbox token is not configured." }, { status: 404 });
  }

  return NextResponse.json({ token });
}
