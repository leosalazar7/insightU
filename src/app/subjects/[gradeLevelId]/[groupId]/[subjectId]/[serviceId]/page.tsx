import Image from "next/image";
import { variables } from "@/app/variables";
import { notFound } from "next/navigation";
import { GradeLevel } from "@/app/subjects/subjects";
import { getGradeLevel } from "@/app/subjects/subjects";
import styles from "../our-services.module.scss";
import { Services } from "@/app/our-services/[serviceId]/services";
import SubjectGroups from "@/app/our-services/[serviceId]/[gradeLevelId]/subject-groups";
import PaymentOptions from "@/app/our-services/[serviceId]/[gradeLevelId]/payment-options";
import GradeLevelGroups from "@/app/our-services/[serviceId]/grade-level-groups";
import { getSubject } from "@/app/subjects/subjects";
import { MatchTutorForm } from "@/components/match-tutor-form/match-tutor-form";

export default function Page({
  params,
}: {
  params: {
    gradeLevelId: string;
    groupId: string;
    subjectId: string;
    serviceId: string;
  };
}) {
  const { gradeLevelId, groupId, subjectId, serviceId } = params;
  const subject = getSubject(gradeLevelId, groupId, subjectId);
  const gradeLevel = getGradeLevel(gradeLevelId);
  const service = Services.find((service) => service.id === serviceId);
  if (!subject || !gradeLevel || !service) return notFound();
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
            {subject.name}
          </div>
          <div style={{ fontSize: "2rem", fontWeight: "300" }}>
            {service.title}
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
            <PaymentOptions
              serviceId={service.id}
              gradeLevelId={gradeLevel.id}
            />
          </div>
        </div>
        <div className="section">
          <MatchTutorForm
            gradeLevelId={gradeLevelId}
            groupId={groupId}
            subjectId={subjectId}
            serviceId={serviceId}
          />
        </div>
      </div>
    </div>
  );
}
