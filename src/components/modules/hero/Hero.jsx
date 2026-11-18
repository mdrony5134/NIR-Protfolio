"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import LottieAnimation from "@/components/ui/LottieAnimation";
import devAnimation from "@/animation/dev.json";
import styles from "./hero.module.css";

export default function Hero() {
  const lottieRef = useRef(null);

  return (
    <section className={styles.hero} id="about">
      <div className={styles.leftSection}>
        <div className={styles.parentAvatar}>
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1.1 }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/rony-pro.jpg"
            className={styles.avatar}
            alt="Nazrul Islam Rony"
          />
          <div className={`${styles.iconVerified} icon-verified`} />
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className={styles.title}
        >
          Hi, I&apos;m Nazrul Islam Rony
        </motion.h1>

        <div>
          <TypeAnimation
            className={styles.typeAnimation}
            sequence={[
              "I am Web Designer",
              1000,
              "I am ReactJs Developer",
              1000,
              "I am Web Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className={styles.subTitle}>
          I am a beginner front-end developer and I am skilled in HTML, CSS and
          JavaScript web development, as well as the React framework. I am
          looking to gain valuable experience in an IT environment and expand my
          competence. I am ready for challenges and eager to learn and acquire
          new skills.
        </p>

        <div className={styles.allIcons}>
          <a
            href="https://www.facebook.com/profile.php?id=100015779117184"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} icon-facebook-f`}
            aria-label="Facebook Profile"
          />
          <a
            href="https://www.instagram.com/md_ni_rony/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} icon-instagram`}
            aria-label="Instagram Profile"
          />
          <a
            href="https://github.com/mdrony5134"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} icon-github`}
            aria-label="GitHub Profile"
          />
          <a
            href="https://www.linkedin.com/in/nirony51"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} icon-linkedin`}
            aria-label="LinkedIn Profile"
          />
        </div>

        <div>
          <a
            href="https://drive.google.com/file/d/18CigwM52Zrbh8JU4EAHe5zdJbhhTNNPW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
          >
            Check Resume
          </a>
        </div>
      </div>

      <div className={styles.rightSection}>
        <LottieAnimation
          lottieRef={lottieRef}
          onLoadedImages={() => {
            if (lottieRef.current) {
              lottieRef.current.setSpeed(0.5);
            }
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
}
