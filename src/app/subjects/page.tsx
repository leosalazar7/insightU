"use client";
import Image from "next/image";
import { variables } from "@/app/variables";
import SubjectMenu from "@/components/navbar/subject-menu";
import { Select } from "@mantine/core";
import { GradeLevels } from "@/app/subjects/subjects";
import { useState } from "react";
import Link from "next/link";

export default function Page({ params }: { params: { service: string } }) {
  const [gradeLevel, setGradeLevel] = useState(GradeLevels[1].name);
  const [subjectGroup, setSubjectGroup] = useState(
    GradeLevels[1].subjectGroups[0].name,
  );

  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "20rem",
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
              paddingTop: "3rem",
            }}
          >
            Subjects
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
            paddingTop: "4rem",
            paddingBottom: "4rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <Select
            label="Select Grade Level"
            placeholder="Pick value"
            data={GradeLevels.map((gradeLevel) => gradeLevel.name)}
            value={gradeLevel ? gradeLevel : null}
            onChange={(_value, option) => {
              setGradeLevel(option.value);
              setSubjectGroup("");
            }}
            styles={{
              option: { color: "black" },
            }}
          />
          <Select
            label="Select Subject Group"
            placeholder="Pick value"
            data={GradeLevels.find(
              (level) => level.name === gradeLevel,
            )?.subjectGroups.map((group) => group.name)}
            value={subjectGroup ? subjectGroup : null}
            onChange={(_value, option) => {
              setSubjectGroup(option.value);
            }}
            styles={{
              option: { color: "black" },
            }}
          />
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
              gap: "1rem",
            }}
          >
            {subjectGroup &&
              GradeLevels.find((level) => level.name === gradeLevel)!
                .subjectGroups!.find((group) => group.name === subjectGroup)!
                .subjects.map((subject, idx) => (
                  <li key={idx} style={{ textAlign: "center" }}>
                    <Link
                      href={`/subjects/${
                        GradeLevels.find((level) => level.name === gradeLevel)!
                          .id
                      }/${
                        GradeLevels.find(
                          (level) => level.name === gradeLevel,
                        )!.subjectGroups!.find(
                          (group) => group.name === subjectGroup,
                        )!.id
                      }/${subject.id}`}
                      style={{ fontSize: "1rem" }}
                    >
                      {subject.name}
                    </Link>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
