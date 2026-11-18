import Link from "next/link";
import { personalInfo } from "@/data/personalInfo";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.brandLogo}>
              <div className={styles.logoBadge}>NIR</div>
              <span className={styles.brandName}>{personalInfo.name}</span>
            </div>
            <p className={styles.brandBio}>{personalInfo.summary}</p>
            <div className={styles.roleTag}>
              <span className="pulse-dot" />
              <span>{personalInfo.status}</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className={styles.colTitle}>Navigation</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/" className={styles.footerLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/experience" className={styles.footerLink}>
                  Work Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className={styles.footerLink}>
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className={styles.footerLink}>
                  Skills Matrix
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Contact & Hire
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Info */}
          <div>
            <h3 className={styles.colTitle}>Expertise</h3>
            <ul className={styles.linkList}>
              <li className={styles.footerLink}>Next.js & React Systems</li>
              <li className={styles.footerLink}>TypeScript & ES6+</li>
              <li className={styles.footerLink}>Tailwind CSS UI Systems</li>
              <li className={styles.footerLink}>Stripe & Payment Gateways</li>
              <li className={styles.footerLink}>Hostinger VPS & NGINX</li>
              <li className={styles.footerLink}>REST & WebSocket APIs</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className={styles.colTitle}>Direct Contact</h3>
            <div className={styles.contactInfo}>
              <a
                href={`mailto:${personalInfo.email}`}
                className={styles.contactItem}
              >
                <FaEnvelope className={styles.contactIcon} />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className={styles.contactItem}
              >
                <FaPhoneAlt className={styles.contactIcon} />
                <span>{personalInfo.formattedPhone}</span>
              </a>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className={styles.socialRow}>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p>
            Architected with Next.js App Router, React, and Modular Patterns.
          </p>
        </div>
      </div>
    </footer>
  );
}
