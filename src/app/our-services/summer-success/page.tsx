import Image from "next/image";
import { variables } from "@/app/variables";
import { GradeLevel } from "@/app/subjects/subjects";
import { getGradeLevel } from "@/app/subjects/subjects";
import styles from "./summer-success.module.scss";

import { MatchTutorForm } from "@/components/match-tutor-form/match-tutor-form";
import { ContactForm } from "@/app/contact-us/contact-form";
import { SummerSuccessForm } from "./summer-success-form";

export default function Page() {
  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "20rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Image
          src="/summer_success.jpg"
          alt="Mobile App Development Process Picture"
          fill
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            opacity: 0.2,
            zIndex: -1,
            objectFit: "cover",
          }}
        ></Image>
        <div className="section">
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "500",
            }}
          >
            Summer Success Program
          </div>
          <div style={{ fontSize: "1.5rem", fontWeight: "300" }}>
            Excel Academically with Proven Methods
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: variables.secondaryColor,
          color: variables.primaryColor,
          padding: "2rem",
        }}
      >
        <div className="section">
          <div className={styles.container}>
            <header className={styles.header}>
              <h1 style={{ fontSize: "2.5rem" }}>
                Welcome to the Summer Success Program
              </h1>
              <p style={{ fontSize: "1.25rem" }}>
                Transform traditional studying into an efficient and enjoyable
                experience. By utilizing evidence-based strategies proven
                effective among top medical students, our program equips you
                with the tools to excel academically and reclaim time for your
                passions and relaxation. Get ready to witness a remarkable
                transformation in your academic life and beyond!
              </p>
            </header>
            <div className={styles.programDetails}>
              <div className={styles.column}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "500" }}>
                  Two-Month Extended Program
                </h2>
                <p>
                  <strong>Sessions:</strong> 16 private one-on-one sessions
                </p>
                <p>
                  <strong>Frequency:</strong> Twice a week
                </p>
                <p>
                  <strong>Focus:</strong> Thorough and paced learning for deep
                  understanding
                </p>
                <p>
                  <strong>Price:</strong> In-Person: $849
                </p>
              </div>
              <div className={styles.column}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "500" }}>
                  One-Month Accelerated Program
                </h2>
                <p>
                  <strong>Sessions:</strong> 8 private one-on-one sessions
                </p>
                <p>
                  <strong>Frequency:</strong> Twice a week
                </p>
                <p>
                  <strong>Focus:</strong> Intensive learning to quickly master
                  essential skills
                </p>
                <p>
                  <strong>Price:</strong> In-Person: $449
                </p>
              </div>
            </div>
          </div>
          <SummerSuccessForm />
        </div>
      </div>
    </div>
  );
}
