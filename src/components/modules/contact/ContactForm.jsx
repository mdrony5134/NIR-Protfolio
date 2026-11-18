"use client";

import { useForm, ValidationError } from "@formspree/react";
import LottieAnimation from "@/components/ui/LottieAnimation";
import doneAnimation from "@/animation/done.json";
import { FaPaperPlane, FaCheck } from "react-icons/fa";
import styles from "./contact.module.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mrgwwepz");

  return (
    <div className={styles.formCard}>
      <h3 className={styles.formTitle}>Send a Direct Message</h3>
      <p className={styles.formSubtitle}>
        Have a project inquiry, software engineering role, or collaboration idea? Leave a message below.
      </p>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.formLabel}>
            Your Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="e.g. John Doe"
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="your.email@company.com"
            className={styles.formInput}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject" className={styles.formLabel}>
            Subject / Project Type
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="e.g. Next.js Web App / Job Opportunity"
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.formLabel}>
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Tell me about the project goals, timeline, and requirements..."
            className={styles.formTextarea}
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
          {state.submitting ? (
            <span>Sending Message...</span>
          ) : (
            <>
              <span>Send Message</span>
              <FaPaperPlane size={13} />
            </>
          )}
        </button>

        {state.succeeded && (
          <div className={styles.successBox}>
            <LottieAnimation
              loop={false}
              style={{ width: 34, height: 34 }}
              animationData={doneAnimation}
            />
            <span>
              Thank you! Your message has been sent successfully. I will get back to you shortly.
            </span>
          </div>
        )}
      </form>
    </div>
  );
}
