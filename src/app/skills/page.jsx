import SkillSection from "@/components/modules/skills";
import Divider from "@/components/ui/Divider";
import Link from "next/link";
import { FaLaptopCode, FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "Skills & Technical Stack || Md Nazrul Islam Rony",
  description:
    "Comprehensive skills matrix of Md Nazrul Islam Rony: Next.js, React.js, TypeScript, Node.js, Tailwind CSS, Stripe, Hostinger VPS, and modern web architectures.",
};

export default function SkillsPage() {
  return (
    <div>
      <SkillSection isPreview={false} />

      <Divider />

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
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "rgba(0, 229, 255, 0.12)",
              border: "1px solid rgba(0, 229, 255, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent-cyan)",
              fontSize: "1.5rem",
            }}
          >
            <FaLaptopCode />
          </div>
          <div>
            <h4 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "4px" }}>
              See These Technologies In Action
            </h4>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
              Explore production applications powered by Next.js, TypeScript, Tailwind, and Stripe.
            </p>
          </div>
        </div>

        <Link
          href="/projects"
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
          <span>Explore Projects</span>
          <FaArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
