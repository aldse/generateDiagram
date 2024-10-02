import styles from "./styles.module.scss";

export default function Input({ placeholder, width, value, onChange }) {
  return (
    <textarea
      style={{ width }}
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  );
}
