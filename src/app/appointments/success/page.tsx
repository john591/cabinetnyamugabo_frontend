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
          title="Demande de rendez-vous recue"
          message="Merci. Votre adresse email a ete verifiee et votre demande a ete enregistree. Notre equipe va examiner votre date preferee et vous recontacter pour confirmer la consultation."
          tone="success"
        />
      </main>
      <Footer />
    </div>
  );
}
