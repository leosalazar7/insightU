import Image from "next/image";
import { variables } from "@/app/variables";
import { FAQCategories } from "./faq-data";
import {
  AccordionItem,
  AccordionControl,
  AccordionPanel,
  Accordion,
  Text,
  Group,
  Avatar,
} from "@mantine/core";

export default function Page({ params }: { params: { service: string } }) {
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
              fontSize: "3rem",
              fontWeight: "500",
              paddingTop: "3rem",
            }}
          >
            Frequently Asked Questions
          </div>
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
          style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
        >
          <div>
            <Accordion chevronPosition="right" variant="contained">
              {FAQCategories.map((category, key) => (
                <AccordionItem value={category.name} key={key}>
                  <AccordionControl>
                    <Text size="xl" fw={700}>
                      {category.name}
                    </Text>
                    <Text c="dimmed" fw={400}>
                      {category.description}
                    </Text>
                  </AccordionControl>
                  <AccordionPanel>
                    {category.faqs.map((faq, key) => (
                      <div key={key} style={{ paddingBottom: "1rem" }}>
                        <Text fw={700} size="md">
                          {faq.question}
                        </Text>
                        <Text size="sm">{faq.answer}</Text>
                      </div>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
