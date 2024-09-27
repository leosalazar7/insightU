"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";
import { variables } from "@/app/variables";
import { Services } from "@/app/our-services/[serviceId]/services";
import ResponsiveLogo from "../navbar/responsive-logo";

const Footer: React.FC = () => {
  return (
    <div
      style={{
        paddingTop: "4rem",
        paddingBottom: "1rem",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <div
        className="section"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
            // flexDirection: "row",
            // justifyContent: "space-between",
            // flexWrap: "wrap",

            gap: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              // gridColumn: "span 1.5",
            }}
          >
            <ResponsiveLogo isDDHovered={false}></ResponsiveLogo>

            <div
              style={{
                fontSize: "1rem",
                paddingRight: "2rem",
              }}
            >
              At{" "}
              <span style={{ color: variables.tertiaryColor }}> InsightU </span>{" "}
              we believe in empowering your educational journey. We don’t just
              teach, we discover the potential{" "}
              <span style={{ color: variables.tertiaryColor }}>
                Inside You.
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "flex-start",
            }}
          >
            <div className={styles.column_heading}>Browse</div>
            <Link className={styles.footer_link} href="/subjects">
              Subjects
            </Link>
            <Link className={styles.footer_link} href="/faq">
              FAQ
            </Link>
            <Link className={styles.footer_link} href="/about-us">
              About Us
            </Link>
            <Link className={styles.footer_link} href="/contact-us">
              Contact Us
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "flex-start",
            }}
          >
            <div className={styles.column_heading}>Services</div>
            {Services.map((service, key) => (
              <Link
                key={key}
                className={styles.footer_link}
                href={`/our-services/${service.id}`}
              >
                {service.title}
              </Link>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "flex-start",
            }}
          >
            <div className={styles.column_heading}>Contact</div>
            <div
              style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
            >
              <Image
                src="/email.svg"
                alt="Email Icon"
                width={25}
                height={25}
                style={{ filter: "invert(100%)" }}
              ></Image>
              <a
                className={styles.footer_link}
                href="mailto:contact@theinsightu.com"
              >
                contact@theinsightu.com
              </a>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
            >
              <Image
                src="/telephone.svg"
                alt="Phone Icon"
                width={25}
                height={25}
                style={{ filter: "invert(100%)" }}
              ></Image>
              <a className={styles.footer_link} href="tel:+14077800851">
                407-780-0851
              </a>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "0.5rem",
              }}
            >
              <Image
                src="/location.svg"
                alt="Location Icon"
                width={25}
                height={25}
                style={{ filter: "invert(100%)" }}
              ></Image>
              <div>
                255 S Orange Avenue<br></br>Suite 104 #2119<br></br>Orlando, FL
                32801
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "0.5px solid white",
          paddingTop: "1rem",
          marginTop: "4rem",
        }}
      >
        © 2024 InsightU LLC. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;

// Something on the left with the logo and a message, maybe a mission statement and then on the right
// columns, one of them can be "Our Services"
// Put some copyright bullshit all the way at the bottom
