import { experienceData } from "@/data/experienceData";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceCard from "./ExperienceCard";
import styles from "./experience.module.css";

export default function ExperienceSection({ isPreview = false }) {
  const experiences = isPreview ? experienceData.slice(0, 2) : experienceData;

  return (
    <section className={styles.experienceSection} id="experience">
      <SectionHeader
        eyebrow="Career Timeline"
        title="Work Experience"
        gradientWord="Experience"
        subtitle="Track record of building scalable production applications at leading tech companies."
      />

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </section>
  );
}
