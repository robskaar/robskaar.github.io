import FooterMenu from "../../Common/Components/Navigation/FooterMenu/FooterMenu";
import HeaderMenu from "../../Common/Components/Navigation/HeaderMenu/HeaderMenu";
import PageWrapper from "../../Common/Components/Page/PageWrapper";
import styles from "./SkillsPage.module.css";
export default function SkillsPage() {
  return (
    <PageWrapper>
      <HeaderMenu></HeaderMenu>
      <div className={styles.temptext}>
        {"Hi, i'm Robert."}
        <br />
        {"Currently creating my portfolio so stay tuned for changes"}
      </div>
      <FooterMenu></FooterMenu>
    </PageWrapper>
  );
}
