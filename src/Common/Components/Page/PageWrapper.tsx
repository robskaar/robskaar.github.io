import styles from "./PageWrapper.module.css";
export default function PageWrapper(props: any) {
  return <div className={styles.wrapper}>{props.children}</div>;
}
