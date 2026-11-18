"use client";

import { motion } from "framer-motion";
import DynamicIcon from "@/components/ui/DynamicIcon";
import styles from "./skill.module.css";

export default function SkillCard({ category, index }) {
  const { title, description, skills } = category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className={styles.card}
    >
      <div className={styles.cardHeader}>
        <h3 className={styles.categoryTitle}>{title}</h3>
        <p className={styles.categoryDesc}>{description}</p>
      </div>

      <div className={styles.skillList}>
        {skills.map((skill, idx) => (
          <div key={idx} className={styles.skillPill} title={`${skill.name} (${skill.level})`}>
            <DynamicIcon name={skill.icon} className={styles.skillIcon} />
            <span>{skill.name}</span>
            <span className={styles.skillLevel}>{skill.level}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
