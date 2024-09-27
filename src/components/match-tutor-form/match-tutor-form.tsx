"use client";
import { useState } from "react";
import { InputField } from "../input/input-field";
import { InputBlock } from "../input/input-block";
import Button from "@/components/button";
import { variables } from "../../app/variables";
import { MultiSelect } from "@mantine/core";
import { SubjectGroup } from "../../app/subjects/subjects";
import { getGradeLevel } from "../../app/subjects/subjects";
import { getSubject } from "../../app/subjects/subjects";

interface ContactFormProps {
  style?: React.CSSProperties;
  gradeLevelId: string;
  groupId?: string;
  subjectId?: string;
  serviceId: string;
}

function mapSubjectGroupsToData(
  subjectGroups: SubjectGroup[],
): { group: string; items: string[] }[] {
  return subjectGroups.map((subjectGroup) => ({
    group: subjectGroup.name,
    items: subjectGroup.subjects.map((subject) => subject.name),
  }));
}

export const MatchTutorForm: React.FC<ContactFormProps> = ({
  style,
  gradeLevelId,
  groupId,
  subjectId,
  serviceId,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [phone, setPhone] = useState("");
  const [communicationMethod, setCommunicationMethod] = useState("");
  const [status, setStatus] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  let subjectGroups = getGradeLevel(gradeLevelId)!.subjectGroups;
  const subjectData = mapSubjectGroupsToData(subjectGroups);
  let defaultValue;

  if (subjectId && groupId) {
    defaultValue = getSubject(gradeLevelId, groupId, subjectId)?.name;
    // if (defaultValue) setSelectedSubjects([defaultValue]);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/match-tutor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          comments,
          phone,
          communicationMethod,
          gradeLevelId,
          groupId,
          selectedSubjects,
          serviceId,
        }),
      });

      if (res.status === 200) {
        setStatus("Email sent successfully");
        setName("");
        setEmail("");
        setComments("");
        setPhone("");
        setCommunicationMethod("");
      } else {
        setStatus("Failed to send email");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send email");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: variables.secondaryColor,
        color: variables.primaryColor,
        borderRadius: "2.25rem",
        padding: "2.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        ...style,
      }}
    >
      <h2
        style={{
          fontSize: "2.25rem",
          fontWeight: "300",
        }}
      >
        Match with Your Tutor!
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(12.5rem, 1fr))",
        }}
      >
        <InputField
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          label="Name"
        />
        <InputField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          label="Email"
        />
        <InputField
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          label="Phone"
        />
      </div>

      <div>
        <fieldset>
          <legend>Plan</legend>
          <input
            type="radio"
            id="standard"
            name="communication"
            value="standard"
            onChange={(e) => setCommunicationMethod(e.target.value)}
            checked={communicationMethod === "standard"}
            style={{
              marginTop: "1.25rem",
              marginRight: "0.625rem",
              transform: "scale(1.25)",
              accentColor: variables.primaryColor,
            }}
          />
          <label htmlFor="standard" style={{ marginRight: "1.25rem" }}>
            Standard
          </label>
          <input
            type="radio"
            id="eight-sessions"
            name="communication"
            value="eight-sessions"
            onChange={(e) => setCommunicationMethod(e.target.value)}
            checked={communicationMethod === "eight-sessions"}
            style={{
              marginRight: "0.625rem",
              transform: "scale(1.25)",
              accentColor: variables.primaryColor,
            }}
          />
          <label htmlFor="eight-sessions" style={{ marginRight: "1.25rem" }}>
            8 Sessions
          </label>
          <input
            type="radio"
            id="four-sessions"
            name="communication"
            value="four-sessions"
            onChange={(e) => setCommunicationMethod(e.target.value)}
            checked={communicationMethod === "four-sessions"}
            style={{
              marginRight: "0.625rem",
              transform: "scale(1.25)",
              accentColor: variables.primaryColor,
            }}
          />
          <label htmlFor="four-sessions">4 Sessions</label>
        </fieldset>
      </div>

      <MultiSelect
        label="Pick your Subjects"
        placeholder="Search"
        data={subjectData}
        searchable
        styles={{
          option: { color: "black" },
        }}
        defaultValue={defaultValue ? [defaultValue] : []}
        onChange={setSelectedSubjects}
      />

      <InputBlock
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        label="Comments"
      />
      <Button text="Submit" color="grey" />
      <p>{status}</p>
    </form>
  );
};
