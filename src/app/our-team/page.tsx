import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { OurTeamDirectory } from "@/components/site/our-team-directory";
import { getTeamMembers, mapTeamMemberToCard } from "@/lib/django-api";

export const dynamic = "force-dynamic";

export default async function OurTeamPage() {
  const team = (await getTeamMembers()).map(mapTeamMemberToCard);

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main id="main-content">
        <OurTeamDirectory team={team} />
      </main>
      <Footer />
    </div>
  );
}
