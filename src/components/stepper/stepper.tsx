"use client";
import styles from "./stepper.module.scss";
import StepCard from "./step-card";
import { useEffect, useState } from "react";
import throttle from "lodash/throttle";

interface StepperProps {}
const Stepper: React.FC<StepperProps> = ({}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleScroll = () => {
    // Get all text blocks
    const textBlocks = document.querySelectorAll(`.${styles.text_block}`);
    // Determine which text block is in the viewport
    textBlocks.forEach((block, index) => {
      const blockTop = block.getBoundingClientRect().top;
      const blockHeight = block.getBoundingClientRect().height;
      const triggerPoint = window.innerHeight / 2; // Middle of the screen

      // Change this line to adjust when the text block becomes active
      // Now it checks if the block is within the middle half of the screen
      if (
        blockTop + blockHeight / 2 < triggerPoint &&
        blockTop + blockHeight / 2 > 0
      ) {
        setActiveIndex(index);
      }
    });
  };

  useEffect(() => {
    const throttleddHandleScroll = throttle(handleScroll, 100); // Adjust the timing as needed
    window.addEventListener("scroll", throttleddHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttleddHandleScroll);
      throttleddHandleScroll.cancel();
    };
  }, []);

  return (
    <div className={styles.stepper}>
      {Steps.map((step, index) => (
        <div
          key={`step-${step.title}`}
          className={`${styles.text_block} ${
            activeIndex === index ? styles.active : ""
          }`}
        >
          <StepCard
            index={index}
            title={step.title}
            description={step.description}
            image={step.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Stepper;

interface Step {
  title: string;
  description: string;
  image: string;
}

export const Steps: Step[] = [
  {
    title: "Discover & Select",
    description:
      "Start by exploring our tutoring services. Choose between in-person, online, or group tutoring. Select the option that best fits your educational needs.",
    image: "/Discover_and_Select.svg",
  },
  {
    title: "Personalize Your Experience",
    description:
      "Tell us about your academic goals and preferred schedule through a simple form. This helps us tailor a learning experience just for you.",
    image: "/Personalize_Experience.svg",
  },
  {
    title: "Match with Your Tutor",
    description:
      "We pair you with the perfect tutor from our team of experienced educators, ensuring a match that’s right for your learning style and subject requirements.",
    image: "/Tutor_Match.svg",
  },
  {
    title: "Engage and Achieve",
    description:
      "Dive into your personalized tutoring sessions, equipped with innovative tools and resources. Track your progress and achieve your academic goals!",
    image: "/Engage_and_Achieve.svg",
  },
];
