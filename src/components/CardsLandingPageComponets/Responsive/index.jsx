import styles from "./styles.module.scss";

export default function Responsive({ children }) {
  return <div className={styles.box}>{children}</div>;
}
