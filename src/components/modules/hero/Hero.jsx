"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "@/data/personalInfo";
import LottieAnimation from "@/components/ui/LottieAnimation";
import devAnimation from "@/animation/dev.json";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaCheck,
  FaArrowRight,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.leftSection}>
        {/* Status Pill Badge */}
        <div className={styles.statusWrapper}>
          <div className="badge-status">
            <span className="pulse-dot" />
            <span>Currently Software Engineer @ Easy Fashion Ltd</span>
          </div>
        </div>

        {/* Avatar & Intro */}
        <div className={styles.avatarRow}>
          <div className={styles.avatarContainer}>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={personalInfo.avatar}
              alt={personalInfo.avatarAlt}
              className={styles.avatar}
            />
            <div className={styles.verifiedBadge} title="Verified Software Engineer">
              <FaCheck />
            </div>
          </div>
          <div>
            <div className={styles.greetingTag}>Hello, I am</div>
            <div className={styles.greetingCompany}>
              Full-Stack & Frontend Software Engineer
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className={styles.title}>
          I&apos;m <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        {/* Typing Animation */}
        <div className={styles.typingWrapper}>
          <TypeAnimation
            className={styles.typeText}
            sequence={[
              "Software Engineer @ Easy Fashion Ltd",
              1500,
              "Next.js & React Specialist",
              1500,
              "Full-Stack Web Developer",
              1500,
              "TypeScript & Tailwind Architect",
              1500,
              "Production VPS & Cloud Deployer",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Bio */}
        <p className={styles.subTitle}>
          As a Frontend-Focused Full Stack Developer and current Software Engineer at Easy Fashion Ltd.,
          I specialize in architecting scalable, high-performance web applications, complex payment flows,
          and production-grade user experiences across all devices.
        </p>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Action CTAs */}
        <div className={styles.ctaGroup}>
          <Link href="/projects" className={styles.btnPrimary}>
            <span>View Production Projects</span>
            <FaArrowRight size={13} />
          </Link>
          <Link href="/contact" className={styles.btnSecondary}>
            <FaEnvelope size={14} />
            <span>Contact & Hire Me</span>
          </Link>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
            title="Download PDF Resume"
          >
            <FaDownload size={13} />
            <span>Resume</span>
          </a>
        </div>

        {/* Social Row */}
        <div className={styles.socialRow}>
          <span className={styles.socialLabel}>Connect:</span>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconBtn}
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconBtn}
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconBtn}
            aria-label="Facebook Profile"
          >
            <FaFacebookF />
          </a>
          <a
            href={personalInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconBtn}
            aria-label="Instagram Profile"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right Section Animation */}
      <div className={styles.rightSection}>
        <div className={styles.lottieBox}>
          <LottieAnimation animationData={devAnimation} />
        </div>
      </div>
    </section>
  );
}
