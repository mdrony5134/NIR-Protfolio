import styles from "./divider.module.css";

export default function Divider({ className = "" }) {
  return <div className={`${styles.divider} ${className}`} />;
}
