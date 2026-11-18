"use client";

import { motion } from "framer-motion";
import { FaCheck, FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import styles from "./experience.module.css";

export default function ExperienceCard({ experience, index }) {
  const {
    role,
    company,
    employmentType,
    location,
    period,
    isCurrent,
    tag,
    summary,
    highlights,
    technologies,
  } = experience;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={styles.itemWrapper}
    >
      <div
        className={`${styles.timelineMarker} ${
          isCurrent ? styles.currentMarker : ""
        }`}
      />

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <h3 className={styles.roleTitle}>{role}</h3>
            <div className={styles.companyName}>
              <FaBriefcase size={14} />
              <span>{company}</span>
              <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                ({employmentType})
              </span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
            <span
              className={`${styles.badge} ${
                isCurrent
                  ? styles.badgeCurrent
                  : tag === "Award Winner"
                  ? styles.badgeAward
                  : styles.badgeStandard
              }`}
            >
              {isCurrent ? "🟢 Current Role" : tag}
            </span>

            <div className={styles.metaRow}>
              <span className={styles.metaItem}>
                <FaCalendarAlt size={12} />
                <span>{period}</span>
              </span>
              <span className={styles.metaItem}>
                <FaMapMarkerAlt size={12} />
                <span>{location}</span>
              </span>
            </div>
          </div>
        </div>

        <p className={styles.summaryText}>{summary}</p>

        <div className={styles.highlightsList}>
          {highlights.map((highlight, idx) => (
            <div key={idx} className={styles.highlightItem}>
              <FaCheck className={styles.checkIcon} />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        <div className={styles.techRow}>
          {technologies.map((tech, idx) => (
            <span key={idx} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
