"use client";

import { motion } from "framer-motion";
import styles from "./project.module.css";

export default function ProjectCard({ project }) {
  const { projectTitle, details, tags, imgPath, link, gLink } = project;

  return (
    <motion.article
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", damping: 15, stiffness: 100 }}
      className={styles.card}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgPath}
        alt={projectTitle}
        className={styles.cardImg}
        loading="lazy"
      />

      <div className={styles.box}>
        <h3 className={styles.cardTitle}>{projectTitle}</h3>
        <p className={styles.cardSubtitle}>{details}</p>

        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag, idx) => (
              <span key={idx} className={styles.tag}>
                {tag.trim()}
              </span>
            ))}
          </div>
        )}

        <div className={styles.icons}>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.iconLink} icon-external-link`}
              title="Live Demo"
              aria-label={`Live demo of ${projectTitle}`}
            />
          )}
          {gLink && (
            <a
              href={gLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.iconLink} icon-github`}
              title="GitHub Repository"
              aria-label={`GitHub repo of ${projectTitle}`}
            />
          )}
        </div>
      </div>
    </motion.article>
  );
}
