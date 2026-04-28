import { AppointmentStatus } from "@/components/site/appointment-status";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";

export default function AppointmentVerificationInvalidPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content">
        <AppointmentStatus
          eyebrow="Verification"
          title="Lien de verification invalide"
          message="Ce lien de verification est invalide ou a expire. Veuillez soumettre a nouveau le formulaire de rendez-vous pour recevoir un nouveau lien."
          tone="error"
        />
      </main>
      <Footer />
    </div>
  );
}
