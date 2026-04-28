import { AboutUs } from "@/components/site/about-us";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
}
