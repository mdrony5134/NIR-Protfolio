import Link from "next/link";
import { personalInfo } from "@/data/personalInfo";
import SectionHeader from "@/components/ui/SectionHeader";
import EducationSection from "@/components/modules/education";
import Divider from "@/components/ui/Divider";
import { FaCheck, FaDownload, FaArrowRight, FaBriefcase } from "react-icons/fa";
import styles from "./about.module.css";

export const metadata = {
  title: "About Me || Md Nazrul Islam Rony - Software Engineer",
  description:
    "Learn about Md Nazrul Islam Rony, Software Engineer at Easy Fashion Ltd. Background, professional growth, engineering principles, and academic achievements.",
};

export default function AboutPage() {
  return (
    <div className={styles.aboutSection}>
      <SectionHeader
        eyebrow="My Story & Background"
        title="Engineering With Passion, Scaling With Precision"
        gradientWord="Precision"
        subtitle="A dedicated Software Engineer focused on crafting production-ready, performant, and accessible digital experiences."
      />

      <div className={styles.introGrid}>
        {/* Profile Card */}
        <div className={styles.imageCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className={styles.profileImage}
          />
          <div className={styles.imageTag}>
            <div>
              <div className={styles.tagRole}>{personalInfo.currentRole}</div>
              <div className={styles.tagCompany}>{personalInfo.currentCompany}</div>
            </div>
            <div className="badge-status">
              <span className="pulse-dot" />
              <span>Active</span>
            </div>
          </div>
        </div>

        {/* Narrative */}
        <div className={styles.contentCol}>
          <h3 className={styles.headline}>
            Crafting Scalable Web Applications & Intuitive User Interfaces
          </h3>

          <p className={styles.paragraph}>
            I am <strong>Md Nazrul Islam Rony</strong>, currently working as a <strong>Software Engineer at Easy Fashion Ltd.</strong> (Rampura, Dhaka). I bring deep expertise in frontend architecture, full-stack JavaScript/TypeScript systems, and production VPS deployment.
          </p>

          <p className={styles.paragraph}>
            Prior to joining Easy Fashion Ltd., I worked as an Executive Frontend Developer at <strong>SM Technology</strong>, where I was recognized as the <em>Top Revenue Generator in the team for December</em>. During my tenure, I designed and delivered mission-critical web applications across e-learning, review platforms, and affiliate portals using Next.js, Tailwind CSS, Stripe, and Hostinger VPS.
          </p>

          <div className={styles.highlightList}>
            <div className={styles.highlightItem}>
              <FaCheck className={styles.checkIcon} />
              <span>
                <strong>Production Software Engineer:</strong> Spearheading UI engineering and software design for enterprise retail at Easy Fashion Ltd.
              </span>
            </div>
            <div className={styles.highlightItem}>
              <FaCheck className={styles.checkIcon} />
              <span>
                <strong>Full-Stack Versatility:</strong> Proficient in Next.js, React.js, TypeScript, Node.js, Express, MongoDB, and Tailwind CSS.
              </span>
            </div>
            <div className={styles.highlightItem}>
              <FaCheck className={styles.checkIcon} />
              <span>
                <strong>DevOps & Payments:</strong> Production Hostinger VPS deployment, NGINX reverse proxies, Stripe payment checkouts, and real-time Socket.IO.
              </span>
            </div>
            <div className={styles.highlightItem}>
              <FaCheck className={styles.checkIcon} />
              <span>
                <strong>Academic Excellence:</strong> Graduated with CGPA 3.71 from Kurigram Polytechnic Institute, continuing BSc in CSE at Uttara University.
              </span>
            </div>
          </div>

          <div className={styles.statsRow}>
            {personalInfo.stats.map((s, idx) => (
              <div key={idx} className={styles.statItem}>
                <span className={styles.statVal}>{s.value}</span>
                <span className={styles.statLbl}>{s.label}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "1rem" }}>
            <Link
              href="/experience"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.85rem 1.6rem",
                borderRadius: "12px",
                background: "var(--gradient-brand)",
                color: "#fff",
                fontWeight: 600,
                boxShadow: "0 4px 15px rgba(0, 229, 255, 0.3)",
              }}
            >
              <FaBriefcase size={13} />
              <span>View Career Experience</span>
            </Link>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.85rem 1.6rem",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-primary)",
                fontWeight: 600,
              }}
            >
              <FaDownload size={13} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>

      <Divider />

      {/* Education & Achievements Section */}
      <EducationSection />
    </div>
  );
}
