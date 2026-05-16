import { NextResponse } from "next/server";

import { getTeamMembers, mapTeamMemberToCard } from "@/lib/django-api";

export async function GET() {
  const team = (await getTeamMembers()).map(mapTeamMemberToCard);

  return NextResponse.json(team);
}
