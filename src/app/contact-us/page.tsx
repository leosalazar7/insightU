import styles from "./contact-us.module.scss";
import { MatchTutorForm } from "../../components/match-tutor-form/match-tutor-form";
import { ContactForm } from "./contact-form";

export default function Page() {
  return (
    <div className="section">
      <div className={styles.page_layout}>
        <div style={{ fontWeight: "400", fontSize: "4rem", flex: "1" }}>
          Reach
          <br></br>
          Out!
        </div>
        <ContactForm style={{ flex: "1" }}></ContactForm>
      </div>
    </div>
  );
}
