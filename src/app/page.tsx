import { Sidebar } from "@/components/Sidebar";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Stack } from "@/components/Stack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="mx-auto min-h-screen max-w-[1200px] px-6 md:px-12 lg:px-16">
      <div className="lg:flex lg:justify-between lg:gap-16">
        <Sidebar />
        <main className="pt-24 lg:w-[640px] lg:py-24">
          <About />
          <Work />
          <Experience />
          <Stack />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
