import styles from "./IndexPage.module.css";
export default function IndexPage() {
  return (
    <div className={styles.indexPageWrapper}>
      <h1 className={styles.h1}>Hi there 
          <span className="wave">👋</span> </h1>
      <h2>I'm a web developer combining</h2>
      <div>
        <div>UX</div>
        <div>Accesibility</div>
        <div>Responsive Design</div>
      </div>
      <h3>To realize your dreams</h3>
    </div>
  );
}
