import styles from "./styles.module.scss";

export default function Select({ placeholder, options }) {
  return (
    <select className={styles.select} defaultValue="">
      <option value="" disabled hidden className={styles.placeholderOption}>
        {placeholder}
      </option>
      {options.map((item) => (
        <option key={item.value} value={item.value} className={styles.option}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
