import FooterMenu from "../../Common/Components/Navigation/FooterMenu/FooterMenu";
import PageWrapper from "../../Common/Components/Page/PageWrapper";
import styles from "./SkillsPage.module.css";
export default function SkillsPage() {
  return (
    <PageWrapper>
      <div className={styles.temptext}>
        {"Hi, i'm Robert."}
        <br />
        {"Currently creating my portfolio so stay tuned for changes"}
      </div>
      <FooterMenu></FooterMenu>
    </PageWrapper>
  );
}
