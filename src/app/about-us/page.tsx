import Image from "next/image";
import { variables } from "@/app/variables";
import styles from "@/app/about-us/about-us.module.scss";

export default function Page({ params }: { params: { service: string } }) {
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
          src="/creative-process.jpg"
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
              fontSize: "4rem",
              fontWeight: "500",
              paddingTop: "3rem",
            }}
          >
            About Us
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: variables.secondaryColor,
          color: variables.primaryColor,
        }}
      >
        <div className="section">
          <div
            style={{
              paddingTop: "3rem",
              display: "flex",
              flexDirection: "row",
              gap: "4rem",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "0 0 20rem",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Juan Oberto
              </div>
              <div style={{ textAlign: "center" }}>Founder/CEO</div>

              <Image
                src="/juan_headshot.png"
                alt="image of ceo"
                width={400}
                height={100}
              ></Image>
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <strong>Credentials:</strong>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li>UCF - Health Sciences Pre-Clinical B.S.</li>
                  <li>UCF - Biomedical Sciences B.S.</li>
                  <li>
                    UF - Medical Sciences - Medical Pharmacology and Physiology
                    M.S. (Current)
                  </li>
                </ul>
              </div>
            </div>
            <div
              style={{
                flex: "1 1 20rem",
                paddingTop: "1rem",
                fontSize: "1.4rem",
              }}
            >
              Early in my academic journey, I relied heavily on memorization.
              While this method helped me pass tests, it didn’t lead to true
              understanding. This approach was profoundly challenged when I
              began preparing for the MCAT, a standardized test requiring deep
              comprehension of undergraduate sciences. <br></br> <br></br>
              Determined to succeed and driven by the realization that, as a
              future doctor, I needed to retain and understand information
              beyond exams, I embarked on a quest to transform my study habits.
              I explored techniques used by the most successful medical students
              and discovered the power of intuitive learning, among other
              strategies. These new methods didn’t just help me; they
              revolutionized my academic life. I excelled in my courses, tackled
              multiple rigorous upper-division college classes, and mastered the
              art of learning efficiently and effectively. <br></br> <br></br>As
              someone who once struggled, I believe those who have faced and
              overcome academic challenges are best equipped to help others in
              similar situations. I understand what it’s like to struggle, but I
              was able to rise above it and achieve 99th percentile scores.
              Inspired by my dramatic academic improvement and a calling for
              leadership, I founded InsightU.
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: variables.secondaryColor,
          color: variables.primaryColor,
        }}
      >
        <div className="section">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4rem",
              paddingTop: "4rem",
              paddingBottom: "4rem",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "500",
                  marginBottom: "1.5rem",
                }}
              >
                Our Vision and Mission
              </div>
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "400",
                  marginBottom: "1.25rem",
                }}
              >
                At InsightU, we are driven by a commitment to redefine the
                educational experience. We believe that with the right tools and
                strategies, all students can achieve their potential, not just
                in their exams but in life. Our tutoring services are designed
                to equip students with lifelong learning skills that go beyond
                traditional rote memorization.
              </div>
              <div>
                <div style={{ fontSize: "2rem" }}>We promise to provide:</div>
                <ul className={styles.bullet_list}>
                  <li>
                    <strong>Personalized Learning Experiences: </strong>
                    Tailored to meet the unique needs and goals of each student.
                  </li>
                  <li>
                    <strong>Evidence-Based Techniques: </strong>Proven methods
                    like spaced repetition and active recall that enhance both
                    understanding and retention.
                  </li>
                  <li>
                    <strong>A Supportive Environment: </strong>
                    Where students can explore their capabilities and achieve
                    their best.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "500",
                  marginBottom: "1.5rem",
                }}
              >
                Join Our Educational Revolution
              </div>
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "400",
                  marginBottom: "1.25rem",
                }}
              >
                I invite you to experience the transformative power of our
                teaching methods at InsightU. Together, we can break the cycle
                of ineffective learning and set you on a path to real and
                lasting academic success.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
