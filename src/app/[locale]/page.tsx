import Educations from "@/components/_education/_Educations";
import Header from "@/components/_header/Header";
import Hero from "@/components/_hero/Hero";
import Services from "@/components/_services/Services";
import Projects from "@/components/_projects/Projects";
import Skills from "@/components/_skills/Skills";
import Experiences from "@/components/_work_experience/Experiences";
import Testimonials from "@/components/_testimonials/Testimonials";
import CtaBanner from "@/components/_cta/CtaBanner";
import ContactSection from "@/components/ContactSection";
import WakatimeGitStats from "@/components/WakatimeGitStats";
import ChatbotFAB from "@/components/ChatbotFAB";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto w-screen flex flex-col">
        <main className="flex-1 relative">
          <div className="flex flex-col px-4 sm:px-6">
            <Hero />

            <Separator className="my-2 opacity-50" />
            <Services />

            <Separator className="my-2 opacity-50" />
            <Experiences />

            <Separator className="my-2 opacity-50" />
            <Educations />

            <Separator className="my-2 opacity-50" />
            <Skills />

            <Separator className="my-2 opacity-50" />
            <Projects />

            {/* <Separator className="my-2 opacity-50" />
          <Testimonials /> */}

            <Separator className="my-2 opacity-50" />
            <WakatimeGitStats />

            <Separator className="my-2 opacity-50" />
            <CtaBanner />

            <Separator className="my-2 opacity-50" />
            <ContactSection />
          </div>
        </main>
      </div>

      <ChatbotFAB />
    </div>
  );
}
