import styles from "./styles.module.scss";

export default function Input({ placeholder, width }) {
  return (
    <textarea
      style={{width}}
      className={styles.input}
      placeholder={placeholder}
    ></textarea>
  );
}
