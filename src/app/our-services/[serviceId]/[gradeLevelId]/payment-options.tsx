import React from "react";
import Link from "next/link";
import ButtonLink from "@/components/button-link";
import { SubjectGroup } from "@/app/subjects/subjects";
import styles from "../our-services.module.scss";
import { PaymentOption } from "@/app/subjects/subjects";
import { getServiceById } from "../services";
import { Bundles } from "../services";
import { ServicePage } from "../services";
import { Benefits } from "../services";
// Define the component
const PaymentOptions = ({
  serviceId,
  gradeLevelId,
}: {
  serviceId: string;
  gradeLevelId: string;
}) => {
  const service = getServiceById(serviceId) as ServicePage;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
        rowGap: "2rem",
        columnGap: "2rem",
      }}
    >
      {Bundles.map((bundle, key) => (
        <div
          key={key}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
            borderRadius: "1rem",
            backgroundColor: "rgb(238, 238, 238)",
            padding: "1rem",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "600",
            }}
          >
            {bundle.name}
          </div>
          <div style={{ fontSize: "1.5rem" }}>{`$${
            service.paymentOptions.find(
              (option) => option.gradeLevel === gradeLevelId,
            )!.price *
              bundle.numSessions -
            bundle.discount -
            1
          }`}</div>
          <ul>
            {Benefits.map((benefit, key) => (
              <li key={key}>{benefit}</li>
            ))}
            {bundle.id !== "standard" && (
              <>
                <li>Study Schedule Builder</li>
                <li>Progress Checks</li>
              </>
            )}
            {serviceId === "in-person-tutoring" && (
              <li>Spatial Computing (AR/VR)</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PaymentOptions;
