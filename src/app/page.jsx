import Hero from "@/components/modules/hero";
import ExperienceSection from "@/components/modules/experience";
import ProjectSection from "@/components/modules/projects";
import SkillSection from "@/components/modules/skills";
import EducationSection from "@/components/modules/education";
import ContactSection from "@/components/modules/contact";
import Divider from "@/components/ui/Divider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Divider />
      <ExperienceSection isPreview={true} />
      <Divider />
      <ProjectSection isPreview={true} />
      <Divider />
      <SkillSection isPreview={true} />
      <Divider />
      <EducationSection />
      <Divider />
      <ContactSection />
    </>
  );
}
