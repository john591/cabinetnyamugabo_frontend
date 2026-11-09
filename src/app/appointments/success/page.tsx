import { AppointmentStatus } from "@/components/site/appointment-status";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";

export default function AppointmentSuccessPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content">
        <AppointmentStatus
          eyebrow="Rendez-vous"
          title="Demande de rendez-vous reçue"
          message="Merci. Votre adresse email a été vérifiée et votre demande a été enregistrée. Notre équipe va examiner votre date préférée et vous recontacter pour confirmer la consultation."
          tone="success"
        />
      </main>
      <Footer />
    </div>
  );
}
