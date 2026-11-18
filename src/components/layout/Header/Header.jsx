"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalInfo } from "@/data/personalInfo";
import { FaSun, FaMoon, FaBars, FaTimes, FaDownload, FaChevronRight } from "react-icons/fa";
import styles from "./header.module.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [theme, setTheme] = useState("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("nirTheme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("nirTheme", nextTheme);
    if (nextTheme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  };

  const isLinkActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navbar}>
        {/* Brand */}
        <Link href="/" className={styles.brand}>
          <div className={styles.brandLogo}>NIR</div>
          <div className={styles.brandInfo}>
            <span className={styles.brandName}>Nazrul Islam Rony</span>
            <span className={styles.brandRole}>
              <span className={styles.roleDot} />
              Software Engineer @ Easy Fashion
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className={styles.navMenu}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                isLinkActive(link.href) ? styles.activeLink : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className={styles.navActions}>
          <button
            onClick={toggleTheme}
            className={styles.themeBtn}
            aria-label="Toggle Theme Mode"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
          >
            <FaDownload />
            <span>Resume</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className={styles.menuToggle}
            aria-label="Open Mobile Menu"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={styles.mobileDrawer}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className={styles.drawerContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className={styles.drawerHeader}>
                <div className={styles.brand}>
                  <div className={styles.brandLogo}>NIR</div>
                  <div className={styles.brandInfo}>
                    <span className={styles.brandName}>Nazrul Islam Rony</span>
                    <span className={styles.brandRole}>
                      <span className={styles.roleDot} />
                      Software Engineer
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={styles.themeBtn}
                  aria-label="Close Menu"
                >
                  <FaTimes />
                </button>
              </div>

              <div className={styles.drawerLinks}>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${styles.drawerLink} ${
                      isLinkActive(link.href) ? styles.drawerActiveLink : ""
                    }`}
                  >
                    <span>{link.label}</span>
                    <FaChevronRight size={12} />
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.drawerFooter}>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resumeBtn}
                style={{ width: "100%", justifyContent: "center", padding: "0.8rem" }}
              >
                <FaDownload />
                <span>View Full Resume</span>
              </a>
              <p style={{ fontSize: "0.8rem", textAlign: "center", color: "var(--text-muted)" }}>
                © {new Date().getFullYear()} Md Nazrul Islam Rony
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
