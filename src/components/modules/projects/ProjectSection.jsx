"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { myProjects } from "@/data/projectsData";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import styles from "./project.module.css";

export default function ProjectSection() {
  const [currentActive, setCurrentActive] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(myProjects);

  const handleFilterChange = (category) => {
    setCurrentActive(category);

    if (category === "all") {
      setFilteredProjects(myProjects);
    } else {
      const filtered = myProjects.filter((item) =>
        item.category.includes(category)
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.projectHeader}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.description}>
          Below you can see my projects, check out the live demo and code on
          GitHub.
        </p>
      </div>

      <div className={styles.mainFlex}>
        <ProjectFilter
          currentActive={currentActive}
          onSelectCategory={handleFilterChange}
        />

        <section className={styles.rightSection}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id || project.imgPath} project={project} />
            ))}
          </AnimatePresence>
        </section>
      </div>
    </section>
  );
}
