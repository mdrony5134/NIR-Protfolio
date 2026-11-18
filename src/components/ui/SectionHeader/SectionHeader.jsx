import styles from "./sectionHeader.module.css";

export default function SectionHeader({
  eyebrow,
  title,
  gradientWord = "",
  subtitle,
  align = "center",
  className = "",
}) {
  const isCentered = align === "center";

  // If gradientWord is provided, split the title and color the gradient word
  let titleContent = title;
  if (gradientWord && typeof title === "string" && title.includes(gradientWord)) {
    const parts = title.split(gradientWord);
    titleContent = (
      <>
        {parts[0]}
        <span className="gradient-text">{gradientWord}</span>
        {parts.slice(1).join(gradientWord)}
      </>
    );
  }

  return (
    <div
      className={`${styles.wrapper} ${
        isCentered ? styles.centered : styles.left
      } ${className}`}
    >
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{titleContent}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
