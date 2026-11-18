import Hero from "@/components/modules/hero";
import SkillSection from "@/components/modules/skills";
import ProjectSection from "@/components/modules/projects";
import ContactSection from "@/components/modules/contact";
import Divider from "@/components/ui/Divider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Divider />
      <SkillSection />
      <Divider />
      <ProjectSection />
      <Divider />
      <ContactSection />
      <Divider />
    </>
  );
}
