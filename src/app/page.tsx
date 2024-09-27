import styles from "./homepage.module.scss";
import Image from "next/image";
import { variables } from "./variables";
import Stepper from "@/components/stepper/stepper";
import ButtonLink from "@/components/button-link";
import { Services } from "./our-services/[serviceId]/services";
import ServiceContent from "./service-content";
import { MatchTutorForm } from "../components/match-tutor-form/match-tutor-form";

export default function Page() {
  return (
    <>
      <div
        style={{
          position: "relative",
          height: "80vh",
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
          priority={true}
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
              marginBottom: "2rem",
            }}
          >
            Empowering the Next Generation of Learners
          </div>
          <div style={{ fontSize: "2rem", fontWeight: "300" }}>
            Experience personalized tutoring that goes beyond the classroom
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: variables.secondaryColor,
          color: variables.primaryColor,
        }}
      >
        <div
          className="section"
          style={{
            paddingTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
            paddingBottom: "6rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "400",
                alignSelf: "center",
              }}
            >
              Why Choose Us?
            </div>
            <div
              style={{
                fontSize: "1.5rem",
                alignSelf: "center",
                paddingBottom: "2rem",
              }}
            >
              At InsightU, we don{"'"}t just tutor; we teach, mentor, and
              inspire
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div style={{ fontSize: "2.5rem" }}>Personalized Approach</div>
            <div
              style={{
                textAlign: "center",
                fontSize: "1.75rem",
                fontWeight: "300",
              }}
            >
              We understand that
              <span style={{ color: variables.tertiaryColor }}>
                {" "}
                education is not one-size-fits-all.
              </span>{" "}
              Our personalized learning plans are tailored to each student{"'"}s
              unique needs and goals. Whether tackling complex calculus or
              exploring historical events, our approach makes learning effective
              and enjoyable.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {" "}
            <div style={{ fontSize: "2.5rem" }}>Expert Educators</div>
            <div
              style={{
                textAlign: "center",
                fontSize: "1.75rem",
                fontWeight: "300",
              }}
            >
              Our educators are{" "}
              <span style={{ color: variables.tertiaryColor }}>
                {" "}
                more than just subject experts;
              </span>{" "}
              they are{" "}
              <span style={{ color: variables.tertiaryColor }}>
                mentors
              </span>{" "}
              and{" "}
              <span style={{ color: variables.tertiaryColor }}>coaches</span>{" "}
              dedicated to your academic success. With rigorous selection and
              ongoing professional development, they are committed to nurturing
              a love of learning and improving academic performance.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {" "}
            <div style={{ fontSize: "2.5rem" }}>
              Innovative Teaching Methods
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "1.75rem",
                fontWeight: "300",
              }}
            >
              We revolutionize learning with{" "}
              <span style={{ color: variables.tertiaryColor }}>
                {" "}
                cutting-edge Spatial Computing and AR/VR technology.
              </span>{" "}
              Our immersive lessons enhance understanding and retention,
              preparing students not just for exams but for lifelong success. We
              truly facilitate a transformative educational experience where
              advanced technology meets effective learning.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {" "}
            <div style={{ fontSize: "2.5rem" }}>
              Evidence-Based Learning Techniques
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "1.75rem",
                fontWeight: "300",
              }}
            >
              Our teaching methods are grounded in evidence-based techniques
              that have been{" "}
              <span style={{ color: variables.tertiaryColor }}>
                {" "}
                scientifically proven to enhance learning and retention.{" "}
              </span>{" "}
              Choose our expertise for a learning experience that
              {"'"}s designed to achieve lasting understanding and academic
              excellence.
            </div>
          </div>
        </div>
      </div>

      <div
        className="section"
        style={{
          paddingTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <div
          style={{ fontSize: "3rem", fontWeight: "400", alignSelf: "center" }}
        >
          How it Works
        </div>
        <div style={{ fontSize: "1.5rem", alignSelf: "center" }}>
          Your Journey with InsightU in 4 Easy Steps
        </div>
        <Stepper></Stepper>
      </div>
      <div
        style={{
          backgroundColor: variables.secondaryColor,
          color: variables.primaryColor,
        }}
      >
        <div
          className="section"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            paddingBottom: "2rem",
            paddingTop: "2rem",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "400",
              textAlign: "center",
              borderBottom: "1.5px solid #e0e0e0",
              paddingBottom: "2rem",
            }}
          >
            Transforming the way students learn with tailored resources and
            expert guidance
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(23rem, 1fr))",
              rowGap: "4rem",
              columnGap: "2rem",
            }}
          >
            {Services.map((service, key) => (
              <ServiceContent key={key} service={service}></ServiceContent>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.dim_overlay}></div>
    </>
  );
}
