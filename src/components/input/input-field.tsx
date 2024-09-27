"use client";
import styles from "./input.module.scss";
import React, { ChangeEvent } from "react";
import { variables } from "@/app/variables";

interface InputFieldProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  label?: string;
  style?: React.CSSProperties; // This allows passing inline styles
}

export const InputField: React.FC<InputFieldProps> = ({
  value = "",
  onChange = () => {},
  type = "text",
  label = "Default",
  style = {},
}) => {
  return (
    <div
      style={{ ...style, height: "4rem" }}
      className={styles.input_container}
    >
      <input
        className={styles.input}
        id={`id-${label}`}
        type={type}
        value={value}
        onChange={onChange}
        color={variables.secondaryColor}
      />
      <label className={value && styles.filled} htmlFor={`id-${label}`}>
        {label}
      </label>
    </div>
  );
};
