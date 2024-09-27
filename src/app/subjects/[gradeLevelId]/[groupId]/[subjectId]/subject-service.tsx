import Image from "next/image";
import ButtonLink from "@/components/button-link";
import { ServicePage } from "@/app/our-services/[serviceId]/services";

export interface SubjectServiceProps {
  service: ServicePage;
  gradeLevelId: string;
  groupId: string;
  subjectId: string;
}

const SubjectService: React.FC<SubjectServiceProps> = ({
  gradeLevelId,
  groupId,
  subjectId,
  service,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        justifyContent: "space-between",
        borderBottom: "1.5px solid #e0e0e0",
        paddingBottom: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <Image
          src={service.iconImage}
          alt="marketing image"
          width={1000}
          height={1000}
          style={{ maxHeight: "18.75rem", width: "auto" }}
        ></Image>
        <div style={{ fontSize: "2rem", textAlign: "center" }}>
          {service.title}
        </div>
        <div style={{ fontSize: "1.25rem" }}>{service.homepageDescription}</div>
      </div>
      <ButtonLink
        href={
          service.id === "summer-success"
            ? "/our-services/summer-success"
            : `/subjects/${gradeLevelId}/${groupId}/${subjectId}/${service.id}`
        }
        text="View Plans"
        color="black"
        style={{
          fontWeight: "300",
          width: "70%",
          alignSelf: "center",
        }}
      ></ButtonLink>
    </div>
  );
};

export default SubjectService;
