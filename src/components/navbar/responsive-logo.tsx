import styles from "./navbar.module.scss";
import Image from "next/image";

type ResponsiveLogoProps = {
  isDDHovered: boolean;
};

export default function ResponsiveLogo({ isDDHovered }: ResponsiveLogoProps) {
  return (
    <div>
      <Image
        src="/InsightU_Logo.svg"
        alt="Header Logo 1"
        width={70}
        height={70}
        // style={{ filter: isDDHovered ? "" : "invert(100%)" }}
        priority={true}
        className={styles.mobile_image}
      />
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Image
          src="/InsightU_Logo_Word.svg"
          alt="Header Logo 2"
          width={200}
          height={70}
          style={{ filter: isDDHovered ? "" : "invert(100%)" }}
          priority={true}
          className={styles.desktop_image}
        />
        <Image
          src="/InsightU_Logo.svg"
          alt="Header Logo 1"
          width={70}
          height={70}
          // style={{ filter: isDDHovered ? "" : "invert(100%)" }}
          priority={true}
          className={styles.desktop_image__icon}
        />
      </div>
    </div>
  );
}
