import Link from "next/link";
import { skillCategories } from "@/data/skillsData";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillCard from "./SkillCard";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import styles from "./skill.module.css";

export default function SkillSection({ isPreview = false }) {
  const displayedCategories = isPreview
    ? skillCategories.slice(0, 3)
    : skillCategories;

  return (
    <section className={styles.skillsSection} id="skills">
      <SectionHeader
        eyebrow="Technical Stack"
        title="Skills & Technologies"
        gradientWord="Skills"
        subtitle="Specialized in modern JavaScript/TypeScript architectures, full-stack frameworks, and production deployment."
      />

      <div className={styles.categoryGrid}>
        {displayedCategories.map((category, index) => (
          <SkillCard key={category.id} category={category} index={index} />
        ))}
      </div>

      {!isPreview && (
        <div className={styles.architectureBox}>
          <h3 className={styles.architectureTitle}>
            Engineering Philosophy & Production Best Practices
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
            Clean code principles and production reliability standards I bring to every software engineering project.
          </p>

          <div className={styles.archGrid}>
            <div className={styles.archItem}>
              <span className={styles.archItemTitle}>
                <FaCheck /> Reusable Component Architecture
              </span>
              <p className={styles.archItemDesc}>
                Modular, DRY, and well-encapsulated React/Next.js component design systems with CSS modules.
              </p>
            </div>

            <div className={styles.archItem}>
              <span className={styles.archItemTitle}>
                <FaCheck /> End-to-End TypeScript Typing
              </span>
              <p className={styles.archItemDesc}>
                Type-safe API contracts, props validation, and Zod runtime schema validations preventing runtime errors.
              </p>
            </div>

            <div className={styles.archItem}>
              <span className={styles.archItemTitle}>
                <FaCheck /> Payment Integration
              </span>
              <p className={styles.archItemDesc}>
                Flawless Stripe checkout, subscriptions, PayPal, and Paystack workflows with webhooks.
              </p>
            </div>

            <div className={styles.archItem}>
              <span className={styles.archItemTitle}>
                <FaCheck /> VPS Deployment & NGINX
              </span>
              <p className={styles.archItemDesc}>
                Full lifecycle deployment on Hostinger VPS, reverse proxies, DNS configurations, and SSL setup.
              </p>
            </div>
          </div>
        </div>
      )}

      {isPreview && (
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link
            href="/skills"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "0.85rem 1.8rem",
              borderRadius: "12px",
              background: "var(--gradient-brand)",
              color: "#fff",
              fontWeight: 600,
              boxShadow: "0 4px 20px rgba(0, 229, 255, 0.3)",
            }}
          >
            <span>View Full Technical Skill Matrix</span>
            <FaArrowRight size={13} />
          </Link>
        </div>
      )}
    </section>
  );
}
