"use client";
import { useState } from "react";
import { InputField } from "../../components/input/input-field";
import { InputBlock } from "../../components/input/input-block";
import Button from "@/components/button";
import { variables } from "../variables";

interface ContactFormProps {
  style?: React.CSSProperties;
}

export const ContactForm: React.FC<ContactFormProps> = ({ style }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [communicationMethod, setCommunicationMethod] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
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
        }),
      });

      if (res.status === 200) {
        setStatus("Email sent successfully");
        setName("");
        setEmail("");
        setMessage("");
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
        Contact Us
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
