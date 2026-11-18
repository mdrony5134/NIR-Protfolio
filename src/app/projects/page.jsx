import ProjectSection from "@/components/modules/projects";
import Divider from "@/components/ui/Divider";

export const metadata = {
  title: "My Projects || NIR Portfolio",
  description: "Showcase of web applications and projects built by Nazrul Islam Rony",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectSection />
      <Divider />
    </>
  );
}
