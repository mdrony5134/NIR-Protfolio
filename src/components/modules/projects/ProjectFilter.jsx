import styles from "./project.module.css";

const FILTER_OPTIONS = [
  { label: "All Projects", value: "all" },
  { label: "HTML & CSS", value: "css" },
  { label: "JavaScript", value: "js" },
  { label: "React", value: "react" },
  { label: "Node & Express", value: "node" },
];

export default function ProjectFilter({ currentActive, onSelectCategory }) {
  return (
    <section className={styles.leftSection}>
      {FILTER_OPTIONS.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onSelectCategory(filter.value)}
          className={`${styles.filterBtn} ${
            currentActive === filter.value ? styles.activeFilter : ""
          }`}
        >
          {filter.label}
        </button>
      ))}
    </section>
  );
}
