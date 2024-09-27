import Image from "next/image";
import { variables } from "@/app/variables";
import { Services } from "./services";
import { notFound } from "next/navigation";
import GradeLevelGroups from "./grade-level-groups";

export default function Page({ params }: { params: { serviceId: string } }) {
  const { serviceId } = params;
  const service = Services.find((currService) => currService.id === serviceId);
  if (!service) return notFound();
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
          src={service.homepageImage}
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
            <GradeLevelGroups serviceId={serviceId} />
          </div>
        </div>
      </div>
    </div>
  );
}
