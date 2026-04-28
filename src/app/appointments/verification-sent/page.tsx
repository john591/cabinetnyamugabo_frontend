import { AppointmentStatus } from "@/components/site/appointment-status";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";

export default function AppointmentVerificationSentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content">
        <AppointmentStatus
          eyebrow="Verification"
          title="Verifiez votre adresse email"
          message="Nous vous avons envoye un lien de verification. Ouvrez ce lien pour finaliser votre demande de rendez-vous. La demande ne sera enregistree qu'apres cette verification."
          tone="notice"
        />
      </main>
      <Footer />
    </div>
  );
}
