"use client";

import { useEffect, useState } from "react";
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
      }}
      className={`${styles.scrollBtn} icon-keyboard_arrow_up`}
      aria-label="Scroll to top"
    />
  );
}
