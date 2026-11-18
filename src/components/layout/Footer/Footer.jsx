import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} NIR. All rights reserved.
      </p>
    </footer>
  );
}
