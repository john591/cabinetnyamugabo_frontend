import { AppointmentStatus } from "@/components/site/appointment-status";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";

export default function AppointmentVerificationSentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content">
        <AppointmentStatus
          eyebrow="Vérification"
          title="Vérifiez votre adresse email"
          message="Nous vous avons envoyé un lien de vérification. Ouvrez ce lien pour finaliser votre demande de rendez-vous. La demande ne sera enregistrée qu'après cette vérification."
          tone="notice"
        />
      </main>
      <Footer />
    </div>
  );
}
