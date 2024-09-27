"use client";
import styles from "./input.module.scss";
import React, { ChangeEvent, useState } from "react";
import Button from "../button";
import Image from "next/image";
import { variables } from "@/app/variables";

interface FileInputProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
  style?: React.CSSProperties; // This allows passing inline styles
  allowedFormats?: FileType[];
}

type FileType =
  | ".jpg"
  | ".png"
  | ".gif"
  | ".pdf"
  | ".doc"
  | ".docx"
  | ".xls"
  | ".xlsx"
  | ".ppt"
  | ".pptx"
  | ".txt"
  | ".zip";

function sanitizeId(str: string) {
  // First, remove invalid characters.
  let sanitized = str.replace(/[^a-zA-Z0-9\-_:.]/g, "");
  // Then, ensure it doesn't start with a digit, hyphen, or period.
  if (/^[0-9\-:.]/.test(sanitized)) {
    sanitized = "_" + sanitized;
  }
  return sanitized;
}

function getFileTypes(arr: FileType[]): string {
  return arr.join(", ");
}

export const FileInput: React.FC<FileInputProps> = ({
  value = "",
  onChange = () => {},
  label,
  style,
  allowedFormats = [
    ".jpg",
    ".png",
    ".gif",
    ".pdf",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".ppt",
    ".pptx",
    ".txt",
    ".zip",
  ],
}) => {
  const fileId = `fInput-${sanitizeId(label)}`;
  const buttonId = `b-${sanitizeId(label)}`;

  const [selectedFileName, setSelectedFileName] = useState("");

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFileName(file ? file.name : "");
  };

  const handleClick = () => {
    document.getElementById(fileId)?.click();
  };

  const removeCurrentFile = () => {
    setSelectedFileName("");
  };

  return (
    <div
      style={{
        ...style,
        display: "flex",
        flexDirection: "column",
        gap: "0.625rem",
        maxWidth: "31.25rem",
      }}
    >
      <label
        htmlFor={buttonId}
        style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}
      >
        <span>{label}</span>
        <span>{`Allowed formats are limited to ${getFileTypes(
          allowedFormats,
        ).replaceAll(".", "")}`}</span>
      </label>

      <div id={buttonId}>
        {!selectedFileName ? (
          <Button
            style={{ fontSize: "1rem", padding: "0.625rem 2.5rem" }}
            onClick={handleClick}
            text="Select File"
            color="grey"
          ></Button>
        ) : (
          <div
            style={{
              width: "100%",
              borderWidth: "1px",
              padding: "1rem",
              borderColor: variables.primaryColor,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <Image
                src="/document.svg"
                alt="Doc Icon"
                width={25}
                height={25}
              ></Image>
              <div style={{ marginLeft: "0.625rem" }}>{selectedFileName}</div>
            </div>

            <Image
              src="/medium_close.svg"
              alt="Remove Doc"
              width={25}
              height={25}
              onClick={removeCurrentFile}
            ></Image>
          </div>
        )}
        <input
          type="file"
          accept={getFileTypes(allowedFormats)}
          id={fileId}
          name="fileUpload"
          style={{ display: "none" }}
          onChange={handleFileChange}
        ></input>
      </div>
    </div>
  );
};
