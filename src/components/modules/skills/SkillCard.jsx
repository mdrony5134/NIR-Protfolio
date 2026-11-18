import styles from "./skill.module.css";

export default function SkillCard({ title, skillItems }) {
  return (
    <div className={styles.skillCard}>
      <h3 className={styles.skillTitle}>{title}</h3>
      <div className={styles.skillList}>
        {skillItems.map((item, index) => (
          <div className={styles.skillItem} key={item.name || index}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.skillImg}
              src={item.image}
              alt={item.name}
              loading="lazy"
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
