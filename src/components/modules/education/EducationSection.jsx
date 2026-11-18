import { educationData, achievementsData } from "@/data/educationData";
import SectionHeader from "@/components/ui/SectionHeader";
import { FaGraduationCap, FaAward, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./education.module.css";

export default function EducationSection() {
  return (
    <section className={styles.educationSection} id="education">
      <SectionHeader
        eyebrow="Academic & Honors"
        title="Education & Achievements"
        gradientWord="Achievements"
        subtitle="Formal computer science engineering foundations, academic achievements, and industry honors."
      />

      <div className={styles.grid}>
        {/* Education Column */}
        <div>
          <h3 className={styles.subSectionTitle}>
            <FaGraduationCap style={{ color: "var(--accent-cyan)" }} />
            <span>Formal Education</span>
          </h3>

          <div className={styles.cardList}>
            {educationData.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <div>
                    <h4 className={styles.degreeTitle}>{item.degree}</h4>
                    <span className={styles.institution}>{item.institution}</span>
                  </div>
                  <span className={styles.periodBadge}>
                    <FaCalendarAlt size={10} style={{ marginRight: 4 }} />
                    {item.period}
                  </span>
                </div>

                {item.grade && (
                  <div>
                    <span className={styles.gradeBadge}>{item.grade}</span>
                  </div>
                )}

                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
                  <FaMapMarkerAlt size={11} style={{ marginRight: 4 }} />
                  {item.location} · {item.status}
                </div>

                <p className={styles.desc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Column */}
        <div>
          <h3 className={styles.subSectionTitle}>
            <FaAward style={{ color: "var(--accent-purple)" }} />
            <span>Honors & Competitions</span>
          </h3>

          <div className={styles.cardList}>
            {achievementsData.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <div>
                    <h4 className={styles.degreeTitle}>{item.title}</h4>
                    <span className={styles.institution}>{item.organization}</span>
                  </div>
                  <span className={styles.periodBadge}>
                    <FaCalendarAlt size={10} style={{ marginRight: 4 }} />
                    {item.period}
                  </span>
                </div>

                <div>
                  <span className={styles.awardBadge}>{item.badge}</span>
                </div>

                {item.role && (
                  <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                    {item.role}
                  </div>
                )}

                <p className={styles.desc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
