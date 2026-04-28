import { BookAppointments } from "@/components/site/book-appointments";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content">
        <BookAppointments />
      </main>
      <Footer />
    </div>
  );
}
