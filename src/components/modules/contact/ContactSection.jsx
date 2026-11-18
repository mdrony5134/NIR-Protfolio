"use client";

import { useState } from "react";
import { personalInfo } from "@/data/personalInfo";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "./ContactForm";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import styles from "./contact.module.css";

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  return (
    <section className={styles.contactSection} id="contact">
      <SectionHeader
        eyebrow="Get In Touch"
        title="Let's Build Something Great"
        gradientWord="Build"
        subtitle="Feel free to reach out for software engineering opportunities, enterprise projects, or technical consulting."
      />

      <div className={styles.contactGrid}>
        {/* Left: Contact Info Cards */}
        <div className={styles.cardsCol}>
          {/* Email Card */}
          <div className={styles.contactCard}>
            <div className={styles.cardIconBox}>
              <FaEnvelope />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardLabel}>Direct Email</div>
              <a
                href={`mailto:${personalInfo.email}`}
                className={styles.cardValue}
              >
                {personalInfo.email}
              </a>
            </div>
            <button
              onClick={() => handleCopy(personalInfo.email, "email")}
              className={styles.copyBtn}
              title="Copy Email"
            >
              {copiedKey === "email" ? (
                <>
                  <FaCheck style={{ color: "var(--accent-emerald)" }} />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <FaCopy />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Phone / WhatsApp Card */}
          <div className={styles.contactCard}>
            <div className={styles.cardIconBox}>
              <FaPhoneAlt />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardLabel}>Phone & WhatsApp</div>
              <a href={`tel:${personalInfo.phone}`} className={styles.cardValue}>
                {personalInfo.formattedPhone}
              </a>
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.copyBtn}
                title="Open WhatsApp Chat"
              >
                <FaWhatsapp style={{ color: "#25D366" }} />
                <span>Chat</span>
              </a>
              <button
                onClick={() => handleCopy(personalInfo.phone, "phone")}
                className={styles.copyBtn}
                title="Copy Phone Number"
              >
                {copiedKey === "phone" ? (
                  <>
                    <FaCheck style={{ color: "var(--accent-emerald)" }} />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <FaCopy />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Location Card */}
          <div className={styles.contactCard}>
            <div className={styles.cardIconBox}>
              <FaMapMarkerAlt />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardLabel}>Current Location</div>
              <div className={styles.cardValue}>{personalInfo.location}</div>
            </div>
            <span
              style={{
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                fontWeight: 600,
              }}
            >
              GMT+6
            </span>
          </div>

          {/* LinkedIn Card */}
          <div className={styles.contactCard}>
            <div className={styles.cardIconBox}>
              <FaLinkedin />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardLabel}>LinkedIn Professional</div>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardValue}
              >
                in/nirony51
              </a>
            </div>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.copyBtn}
            >
              <span>Connect</span>
            </a>
          </div>

          {/* Availability Box */}
          <div className={styles.availabilityBox}>
            <div className={styles.availHeader}>
              <span className="pulse-dot" />
              <span>Current Status</span>
            </div>
            <p className={styles.availText}>
              Currently working as a <strong>Software Engineer at Easy Fashion Ltd.</strong> (Rampura, Dhaka). Open to networking, tech consulting, and discussing scalable software architectures.
            </p>
          </div>
        </div>

        {/* Right: Working Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
