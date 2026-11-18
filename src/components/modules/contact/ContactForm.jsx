"use client";

import { useForm, ValidationError } from "@formspree/react";
import LottieAnimation from "@/components/ui/LottieAnimation";
import doneAnimation from "@/animation/done.json";
import styles from "./contact.module.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mrgwwepz");

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email Address:
        </label>
        <input
          autoComplete="off"
          required
          type="email"
          name="email"
          id="email"
          className={styles.input}
          placeholder="your.email@example.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className={styles.formGroup} style={{ marginTop: "24px" }}>
        <label htmlFor="message" className={styles.label}>
          Your message:
        </label>
        <textarea
          required
          name="message"
          id="message"
          className={styles.textarea}
          placeholder="Type your message here..."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className={styles.submitBtn}
      >
        {state.submitting ? "Submitting..." : "Submit"}
      </button>

      {state.succeeded && (
        <div className={styles.successMessage}>
          <LottieAnimation
            loop={false}
            style={{ height: 37, width: 37 }}
            animationData={doneAnimation}
          />
          <span>Your message has been sent successfully 👌</span>
        </div>
      )}
    </form>
  );
}
