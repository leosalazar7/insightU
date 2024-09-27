import Image from "next/image";
import { variables } from "@/app/variables";
import { notFound } from "next/navigation";
import GradeLevelGroups from "../grade-level-groups";
import { Services } from "../services";
import { GradeLevel } from "@/app/subjects/subjects";
import { getGradeLevel } from "@/app/subjects/subjects";
import styles from "../our-services.module.scss";
import SubjectGroups from "./subject-groups";
import PaymentOptions from "./payment-options";
import { MatchTutorForm } from "@/components/match-tutor-form/match-tutor-form";

export default function Page({
  params,
}: {
  params: { serviceId: string; gradeLevelId: string };
}) {
  const { gradeLevelId, serviceId } = params;
  const service = Services.find((currService) => currService.id === serviceId);
  const gradeLevel = getGradeLevel(gradeLevelId);
  if (!service || !gradeLevel) return notFound();
  const subjectGroups = gradeLevel.subjectGroups;
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
            }}
          >
            {service.title}
          </div>
          <div style={{ fontSize: "2rem", fontWeight: "300" }}>
            {gradeLevel.name}
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: variables.secondaryColor,
          color: variables.primaryColor,
        }}
      >
        <div className="section">
          <div style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
            <SubjectGroups subjectGroups={subjectGroups} />
          </div>
          <div style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
            <PaymentOptions serviceId={serviceId} gradeLevelId={gradeLevelId} />
          </div>
        </div>
        <div className="section">
          <MatchTutorForm serviceId={serviceId} gradeLevelId={gradeLevelId} />
        </div>
      </div>
    </div>
  );
}
