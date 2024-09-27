"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { variables } from "@/app/variables";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  link: string;
  style?: React.CSSProperties;
  onClick: () => void;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  link,
  style,
  onClick,
}) => {
  return (
    <Link href={link} style={style} onClick={onClick}>
      <div className={styles.service_card}>
        <p
          style={{
            borderBottom: "0.25rem",
            borderColor: variables.primaryColor,
            paddingBottom: "0.5rem",
            fontSize: "1.25rem",
            fontWeight: "500",
          }}
        >
          {title}
        </p>
        <p
          style={{
            whiteSpace: "break-spaces",
            fontSize: "1rem",
            fontWeight: "300",
          }}
        >
          {subtitle}
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;
