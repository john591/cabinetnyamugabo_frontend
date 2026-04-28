import { BookAppointments } from "@/components/site/book-appointments";
import { CaseResults } from "@/components/site/case-results";
import { Contact } from "@/components/site/contact";
import { CTA } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { News } from "@/components/site/news";
import { OurTeam } from "@/components/site/our-team";
import { Services } from "@/components/site/services";
import { WhyChooseUs } from "@/components/site/why-choose-us";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <WhyChooseUs />
        <OurTeam />
        <News />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
