"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { myProjects } from "@/data/projectsData";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "./ProjectCard";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import styles from "./project.module.css";

const CATEGORIES = [
  { label: "All Projects", value: "all" },
  { label: "Production & Client Work", value: "production" },
  { label: "Next.js & TypeScript", value: "nextjs" },
  { label: "E-Commerce", value: "ecommerce" },
  { label: "SaaS & Dashboards", value: "saas" },
  { label: "Full-Stack & React", value: "fullstack" },
];

export default function ProjectSection({ isPreview = false }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    let result = myProjects;

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category.includes(activeCategory));
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.projectTitle.toLowerCase().includes(q) ||
          p.details.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (isPreview) {
      return result.slice(0, 4);
    }

    return result;
  }, [activeCategory, searchQuery, isPreview]);

  return (
    <section className={styles.projectsSection} id="projects">
      <SectionHeader
        eyebrow="Portfolio Showcase"
        title="Featured Projects"
        gradientWord="Projects"
        subtitle="Production web applications, client solutions, and high-impact digital experiences."
      />

      {/* Controls: Search and Category Tabs */}
      <div className={styles.controlsWrapper}>
        {!isPreview && (
          <div className={styles.searchContainer}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search by technology (e.g. Next.js, Stripe, TypeScript)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        )}

        <div className={styles.filterTabs}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`${styles.filterTab} ${
                activeCategory === cat.value ? styles.activeTab : ""
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <div className={styles.emptyState}>
          <p>No projects found matching your search criteria.</p>
        </div>
      )}

      {/* Preview Link */}
      {isPreview && (
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link
            href="/projects"
            className="btn-primary"
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
            <span>Explore All {myProjects.length} Projects</span>
            <FaArrowRight size={13} />
          </Link>
        </div>
      )}
    </section>
  );
}
