"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./scrollToTop.module.css";

export default function ScrollToTop() {
  const [showScrollBTN, setShowScrollBTN] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollBTN(true);
      } else {
        setShowScrollBTN(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        opacity: showScrollBTN ? 1 : 0,
        pointerEvents: showScrollBTN ? "auto" : "none",
        transform: showScrollBTN ? "translateY(0)" : "translateY(20px)",
      }}
      className={styles.scrollBtn}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <FaArrowUp />
    </button>
  );
}
