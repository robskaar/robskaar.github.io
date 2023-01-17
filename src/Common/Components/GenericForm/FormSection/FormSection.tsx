import styles from "./FormSection.module.css";
interface IFormSection {
  sectionTitle: string;
  children: [JSX.Element] | JSX.Element;
  columns?: string;
  isOpen?: boolean;
}

function FormSection(props: IFormSection) {
  return (
    <details className={styles.sectionContainer} open={props.isOpen}>
      <summary className={styles.sectionHeader}>
        <h1 className={styles.formDivider}>{props.sectionTitle}</h1>
        <i className={"fas fa-chevron-down " + styles.sectionHeaderIcon} />
      </summary>
      <div className={styles.sectionContent} style={{gridTemplateColumns: props.columns? props.columns: "max-content auto"}}>{props.children}</div>
    </details>
  );
}
export default FormSection;
