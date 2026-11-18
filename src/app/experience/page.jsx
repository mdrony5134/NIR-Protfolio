import Link from "next/link";
import ExperienceSection from "@/components/modules/experience";
import Divider from "@/components/ui/Divider";
import { FaDownload, FaArrowRight, FaAward } from "react-icons/fa";
import { personalInfo } from "@/data/personalInfo";

export const metadata = {
  title: "Work Experience || Md Nazrul Islam Rony - Software Engineer",
  description:
    "Professional work experience and career trajectory of Md Nazrul Islam Rony: Software Engineer @ Easy Fashion Ltd, SM Technology, and Radisson Digital Technology LTD.",
};

export default function ExperiencePage() {
  return (
    <div>
      <ExperienceSection isPreview={false} />

      <Divider />

      {/* Career Recognition Callout */}
      <div
        className="glass-card"
        style={{
          padding: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "rgba(168, 85, 247, 0.12)",
              border: "1px solid rgba(168, 85, 247, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent-purple)",
              fontSize: "1.5rem",
            }}
          >
            <FaAward />
          </div>
          <div>
            <h4 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "4px" }}>
              Interested in Working Together?
            </h4>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
              Check out my production project deliverables or download my verified resume.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <Link
            href="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "0.8rem 1.4rem",
              borderRadius: "10px",
              background: "var(--gradient-brand)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            <span>View Projects</span>
            <FaArrowRight size={12} />
          </Link>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "0.8rem 1.4rem",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-primary)",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            <FaDownload size={12} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}
