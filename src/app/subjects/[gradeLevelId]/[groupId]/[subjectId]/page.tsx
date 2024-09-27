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
import SubjectService from "./subject-service";
import { getSubjectGroup } from "@/app/subjects/subjects";

export default function Page({
  params,
}: {
  params: { gradeLevelId: string; groupId: string; subjectId: string };
}) {
  const { gradeLevelId, groupId, subjectId } = params;
  const subject = getSubject(gradeLevelId, groupId, subjectId);
  const gradeLevel = getGradeLevel(gradeLevelId);
  const subjectGroup = getSubjectGroup(gradeLevelId, groupId);

  if (!subject || !gradeLevel) return notFound();
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
          src={subjectGroup?.imageUrl!}
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
          {/* <div style={{ fontSize: "2rem", fontWeight: "300" }}>
            {gradeLevel.name}
          </div> */}
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
          style={{ paddingTop: "4rem", paddingBottom: "2rem" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(23rem, 1fr))",
              rowGap: "4rem",
              columnGap: "2rem",
            }}
          >
            {Services.map((service, key) => (
              <SubjectService
                key={key}
                gradeLevelId={gradeLevelId}
                groupId={groupId}
                subjectId={subjectId}
                service={service}
              ></SubjectService>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
