"use client";
import { useState } from "react";
import Button from "@/components/button";
import { InputField } from "@/components/input/input-field";
import { InputBlock } from "@/components/input/input-block";
import { variables } from "@/app/variables";

interface SummerSuccessFormProps {
  style?: React.CSSProperties;
}

export const SummerSuccessForm: React.FC<SummerSuccessFormProps> = ({
  style,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [communicationMethod, setCommunicationMethod] = useState("");
  const [program, setProgram] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/summer-success", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          phone,
          communicationMethod,
          program,
        }),
      });

      if (res.status === 200) {
        setStatus("Email sent successfully");
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
        setCommunicationMethod("");
        setProgram("");
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
        Sign Up Now!
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
          <legend>Program</legend>
          <input
            type="radio"
            id="two-month"
            name="program"
            value="two-month"
            onChange={(e) => setProgram(e.target.value)}
            checked={program === "two-month"}
            style={{
              marginTop: "1.25rem",
              marginRight: "0.625rem",
              transform: "scale(1.25)",
              accentColor: variables.primaryColor,
            }}
          />
          <label htmlFor="two-month" style={{ marginRight: "1.25rem" }}>
            2 Month
          </label>
          <input
            type="radio"
            id="one-month"
            name="program"
            value="one-month"
            onChange={(e) => setProgram(e.target.value)}
            checked={program === "one-month"}
            style={{
              marginRight: "0.625rem",
              transform: "scale(1.25)",
              accentColor: variables.primaryColor,
            }}
          />
          <label htmlFor="one-month" style={{ marginRight: "1.25rem" }}>
            1 Month
          </label>
        </fieldset>
      </div>

      <div>
        <fieldset>
          <legend>Preferred Communication</legend>
          <input
            type="radio"
            id="email"
            name="communication"
            value="email"
            onChange={(e) => setCommunicationMethod(e.target.value)}
            checked={communicationMethod === "email"}
            style={{
              marginTop: "1.25rem",
              marginRight: "0.625rem",
              transform: "scale(1.25)",
              accentColor: variables.primaryColor,
            }}
          />
          <label htmlFor="email" style={{ marginRight: "1.25rem" }}>
            Email
          </label>
          <input
            type="radio"
            id="by-phone"
            name="communication"
            value="phone"
            onChange={(e) => setCommunicationMethod(e.target.value)}
            checked={communicationMethod === "phone"}
            style={{
              marginRight: "0.625rem",
              transform: "scale(1.25)",
              accentColor: variables.primaryColor,
            }}
          />
          <label htmlFor="by-phone">By Phone</label>
        </fieldset>
      </div>

      <InputBlock
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        label="Message"
      />
      <Button text="Submit" color="grey" />
      <p>{status}</p>
    </form>
  );
};
