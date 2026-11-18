import { skills } from "@/data/skillsData";
import SkillCard from "./SkillCard";
import styles from "./skill.module.css";

export default function SkillSection() {
  return (
    <section className={styles.containers} id="skills">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Skills</h2>
        <p className={styles.description}>
          Here are some of my skills on which I have been learning and working.
        </p>

        <div className={styles.skillContainer}>
          {skills.map((skillGroup, index) => (
            <SkillCard
              key={skillGroup.title || index}
              title={skillGroup.title}
              skillItems={skillGroup.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
