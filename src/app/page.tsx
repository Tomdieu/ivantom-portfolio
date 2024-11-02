import Educations from "@/components/_education/_Educations";
import Header from "@/components/_header/Header";
import Hero from "@/components/_hero/Hero";
import Projects from "@/components/_projects/Projects";
import Skills from "@/components/_skills/Skills"
import Experiences from "@/components/_work_experience/Experiences";

export default function Home() {
    return (
        <div className="scroll-smooth min-h-screen h-screen w-screen flex flex-col relative bg-[#102A46e]">
            <main className="flex-1 w-full container mx-auto relative space-y-4">
            <Header className="bg-white dark:bg-background" />
                <Hero/>
                <Experiences/>
                <Educations/>
                <Skills/>
                <Projects/>
            </main>
        </div>
    );
}
