"use client";
import { variables } from "@/app/variables";
import styles from "./navbar.module.scss";
import { GradeLevels } from "@/app/subjects/subjects";
import { useState } from "react";
import Link from "next/link";

interface SubjectMenuProps {
  closeMenu?: () => void;
}

const SubjectMenu: React.FC<SubjectMenuProps> = ({ closeMenu }) => {
  const [selectedGrade, setSelectedGrade] = useState(1);
  const [selectedGroup, setSelectedGroup] = useState(0);

  const activeStyle = {
    borderRadius: "1rem",
    backgroundColor: "rgb(238, 238, 238)",
    color: "black",
    opacity: "100%",
  };

  return (
    <div
      style={{
        color: variables.primaryColor,
        cursor: "default",
      }}
      className="section"
    >
      <div
        className="subject-menu"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          marginTop: "1rem",
        }}
      >
        <div
          className="grade-levels"
          style={{ display: "flex", flexDirection: "row", gap: "2rem" }}
        >
          <p
            style={{
              paddingBottom: "0.5rem",
              fontSize: "2rem",
              fontWeight: "500",
              color: "black",
              borderColor: "black",
              paddingTop: "1rem",
              paddingRight: "2rem",
            }}
          >
            Grade Level
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {GradeLevels.map((grade, index) => (
              <button
                key={index}
                className={`grade-level ${
                  selectedGrade === index ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedGrade(index);
                  setSelectedGroup(0);
                }}
                style={{
                  fontSize: "2rem",
                  padding: "1rem",
                  opacity: "70%",
                  ...(selectedGrade === index ? activeStyle : {}),
                }}
              >
                {grade.name}
              </button>
            ))}
          </div>
        </div>
        <div
          className="subjects"
          style={{ display: "flex", flexDirection: "row", gap: "2rem" }}
        >
          <div
            style={{
              paddingBottom: "0.5rem",
              fontSize: "2rem",
              fontWeight: "500",
              color: "black",
              borderColor: "black",
              paddingTop: "1rem",
              paddingRight: "2rem",
            }}
          >
            Subjects
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            {selectedGrade !== null &&
              GradeLevels[selectedGrade].subjectGroups.map((group, index) => (
                <button
                  key={index}
                  className={`subject-group ${
                    selectedGroup === index ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedGroup(index);
                  }}
                  style={{
                    fontWeight: "500",
                    fontSize: "1.5rem",
                    marginBottom: "0.5rem",
                    padding: "1rem",
                    opacity: "70%",
                    ...(selectedGroup === index ? activeStyle : {}),
                  }}
                >
                  {group.name}
                </button>
              ))}
          </div>
        </div>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(23rem, 1fr))",
            gap: "1rem",
          }}
        >
          {GradeLevels[selectedGrade].subjectGroups[selectedGroup].subjects.map(
            (subject, idx) => (
              <li key={idx} style={{ textAlign: "center" }}>
                <Link
                  href={`/subjects/${GradeLevels[selectedGrade].id}/${GradeLevels[selectedGrade].subjectGroups[selectedGroup].id}/${subject.id}`}
                  onClick={closeMenu ? closeMenu : () => {}}
                  style={{ fontSize: "1rem" }}
                >
                  {subject.name}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

export default SubjectMenu;
