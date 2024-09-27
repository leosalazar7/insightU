"use client";
import styles from "../app/homepage.module.scss";
import { variables } from "@/app/variables";

export interface ButtonProps {
  id?: string;
  text: string;
  color?: "black" | "white" | "grey";
  style?: React.CSSProperties; // This allows passing inline styles
  onClick?: () => void; // Define onClick prop as an optional function
}

const Button: React.FC<ButtonProps> = ({
  id,
  text,
  color = "black",
  style,
  onClick,
}) => {
  return (
    <button
      className={styles[`button_${color}`]}
      style={style}
      onClick={onClick}
      id={id}
    >
      {text}
    </button>
  );
};

export default Button;
