"use client";

import LottieAnimation from "@/components/ui/LottieAnimation";
import contactAnimation from "@/animation/contact.json";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

export default function ContactSection() {
  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.title}>
        <span className={`${styles.iconEnvelope} icon-envelope-o`} />
        Contact Me
      </h2>
      <p className={styles.subTitle}>
        Feel free to reach out to me for any questions or opportunities!
      </p>

      <div className={styles.flexRow}>
        <ContactForm />
        <div className={styles.animationWrapper}>
          <div className={styles.contactAnimation}>
            <LottieAnimation
              style={{ height: 355 }}
              animationData={contactAnimation}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
