"use client";
import styles from "./input.module.scss";
import React, { ChangeEvent } from "react";

interface InputBlockProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  style?: React.CSSProperties; // This allows passing inline styles
}

export const InputBlock: React.FC<InputBlockProps> = ({
  value = "",
  onChange = () => {},
  label = "Default",
  style,
}) => {
  return (
    <div style={{ ...style }} className={styles.input_container}>
      <textarea
        className={styles.input}
        rows={3}
        id={`id-${label}`}
        value={value}
        onChange={onChange}
      />
      <label className={value && styles.filled} htmlFor={`id-${label}`}>
        {label}
      </label>
    </div>
  );
};
