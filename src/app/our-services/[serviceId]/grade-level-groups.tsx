import React from "react";
import { GradeLevels } from "@/app/subjects/subjects";
import Link from "next/link";
import ButtonLink from "@/components/button-link";

// Define the component
const GradeLevelGroups = ({ serviceId }: { serviceId: string }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(22rem, 1fr))",
        rowGap: "2rem",
        columnGap: "4rem",
      }}
    >
      {GradeLevels.map((gradeLevel, key) => (
        <div
          key={key}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
            justifyContent: "space-between",
            gap: "2rem",
            borderRadius: "1rem",
            backgroundColor: "rgb(238, 238, 238)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              fontWeight: "600",
            }}
          >
            {gradeLevel.name}
          </div>
          <div>
            {gradeLevel.subjectGroups.map((subjectGroup, key) => (
              <div
                key={key}
                style={{
                  fontSize: "1.5rem",
                  paddingLeft: "2rem",
                }}
              >
                {subjectGroup.name}
              </div>
            ))}
          </div>

          <ButtonLink
            href={`/our-services/${serviceId}/${gradeLevel.id}`}
            text="View Plans"
            color="black"
          />
        </div>
      ))}
    </div>
  );
};

export default GradeLevelGroups;
