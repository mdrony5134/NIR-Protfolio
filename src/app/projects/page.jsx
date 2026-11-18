import ProjectSection from "@/components/modules/projects";
import Divider from "@/components/ui/Divider";
import Link from "next/link";
import { FaPaperPlane, FaStar } from "react-icons/fa";

export const metadata = {
  title: "Featured Projects || Md Nazrul Islam Rony - Software Engineer",
  description:
    "Showcase of production web applications, e-commerce platforms, affiliate SaaS systems, and full-stack software built by Md Nazrul Islam Rony.",
};

export default function ProjectsPage() {
  return (
    <div>
      <ProjectSection isPreview={false} />

      <Divider />

      {/* Production Quality Callout */}
      <div
        className="glass-card"
        style={{
          padding: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
          maxWidth: "1000px",
          margin: "0 auto",
          background: "linear-gradient(145deg, rgba(16, 185, 129, 0.05), rgba(0, 229, 255, 0.05))",
          borderColor: "rgba(0, 229, 255, 0.25)",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--accent-emerald)", fontWeight: 700, fontSize: "0.85rem", marginBottom: "6px" }}>
            <FaStar />
            <span>100% Client Satisfaction Guaranteed</span>
          </div>
          <h4 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "4px" }}>
            Have a project in mind or need an experienced Frontend Architect?
          </h4>
          <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
            Let&apos;s discuss your technical requirements, API integrations, and project roadmap.
          </p>
        </div>

        <Link
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "0.85rem 1.6rem",
            borderRadius: "12px",
            background: "var(--gradient-brand)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.95rem",
            boxShadow: "0 4px 15px rgba(0, 229, 255, 0.35)",
          }}
        >
          <span>Get in Touch</span>
          <FaPaperPlane size={12} />
        </Link>
      </div>
    </div>
  );
}
