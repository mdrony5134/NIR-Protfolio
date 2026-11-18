"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skill", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState("dark");
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("currentMode") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("currentMode", nextTheme);

    if (nextTheme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  };

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={styles.header}>
      <button
        onClick={() => setShowModal(true)}
        className={`${styles.menuBtn} icon-menu`}
        aria-label="Open navigation menu"
      />

      <div />

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.navLink} ${
                  isActive(item.href) ? styles.activeLink : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={toggleTheme}
        className={styles.modeBtn}
        aria-label="Toggle theme mode"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o" />
        ) : (
          <span className={`icon-sun ${styles.sunIcon}`} />
        )}
      </button>

      {showModal && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setShowModal(false)}
        >
          <ul
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <li>
              <button
                className={`icon-close ${styles.closeBtn}`}
                onClick={() => setShowModal(false)}
                aria-label="Close navigation menu"
              />
            </li>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setShowModal(false)}
                  className={`${styles.modalLink} ${
                    isActive(item.href) ? styles.activeLink : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
