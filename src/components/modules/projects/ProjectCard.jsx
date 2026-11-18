"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";
import styles from "./project.module.css";

export default function ProjectCard({ project }) {
  const {
    projectTitle,
    clientOrContext,
    rating,
    details,
    features,
    tags,
    imgPath,
    link,
    gLink,
  } = project;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgPath}
          alt={projectTitle}
          className={styles.projectImage}
          loading="lazy"
        />

        <div className={styles.imageOverlay}>
          {clientOrContext && (
            <span className={styles.clientBadge}>{clientOrContext}</span>
          )}
          {rating && (
            <span className={styles.ratingBadge}>
              <FaStar style={{ marginRight: 4 }} size={10} />
              {rating}
            </span>
          )}
        </div>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.projectTitle}>{projectTitle}</h3>
        <p className={styles.projectDetails}>{details}</p>

        {features && features.length > 0 && (
          <div className={styles.featuresList}>
            {features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className={styles.featureItem}>
                <span className={styles.featureBullet} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        )}

        {tags && tags.length > 0 && (
          <div className={styles.tagsRow}>
            {tags.map((tag, idx) => (
              <span key={idx} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className={styles.cardFooter}>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveBtn}
            >
              <span>Live Demo</span>
              <FaExternalLinkAlt size={11} />
            </a>
          ) : (
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Enterprise Production
            </span>
          )}

          {gLink && (
            <a
              href={gLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubBtn}
              title="View Source on GitHub"
            >
              <FaGithub size={13} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
