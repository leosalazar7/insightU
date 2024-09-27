import React from "react";
import Link from "next/link";
import ButtonLink from "@/components/button-link";
import { SubjectGroup } from "@/app/subjects/subjects";
import styles from "../our-services.module.scss";
import Image from "next/image";

// Define the component
const SubjectGroups = ({
  subjectGroups,
}: {
  subjectGroups: SubjectGroup[];
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
        rowGap: "2rem",
        columnGap: "2rem",
      }}
    >
      {subjectGroups.map((subjectGroup, key) => (
        <div
          key={key}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Image
            src={subjectGroup.iconUrl}
            alt="image"
            width={60}
            height={60}
          />
          <div
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "600",
            }}
          >
            {subjectGroup.name}
          </div>
          <div>
            {subjectGroup.subjects.map((subject, key) => (
              <div
                key={key}
                style={{
                  fontSize: "1.25rem",
                }}
              >
                {subject.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubjectGroups;
