"use client";
import Link from "next/link";
import styles from "../app/homepage.module.scss";
import { ButtonProps } from "./button";
import { variables } from "@/app/variables";

interface ButtonLinkProps extends ButtonProps {
  href: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  id,
  text,
  href,
  color = variables.primaryColor,
  style,
  onClick,
}) => {
  return (
    <Link
      className={styles[`button_${color}`]}
      style={style}
      onClick={onClick}
      id={id}
      href={href}
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
