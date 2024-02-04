import Header from "@/components/_header/Header";
import Hero from "@/components/_hero/Hero";
import Skills from "@/components/_skills/Skills"
import Image from "next/image";

export default function Home() {
  return (
    <div className="scroll-smooth min-h-screen h-screen w-screen flex flex-col container relative mx-auto">
      <Header />
      <main className="flex-1 h-full w-full fixed">
        <Hero/>
        <Skills/>
      </main>
    </div>
  );
}
