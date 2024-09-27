import styles from "./stepper.module.scss";
import Image from "next/image";

interface StepCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}
const StepCard: React.FC<StepCardProps> = ({
  title,
  description,
  image,
  index,
}) => {
  return (
    <div
      className={`${index % 2 === 0 ? styles.alternate_container : ""} ${
        styles.container
      }`}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className={styles.step_title}>{title}</div>
        <div className={styles.step_description}>{description}</div>
      </div>
      <div className={styles.step_image}>
        <Image src={image} alt="Stepper Image" width={100} height={100}></Image>
      </div>
    </div>
  );
};

export default StepCard;
