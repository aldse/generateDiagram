import styles from "./styles.module.scss";

export default function Select({ placeholder, options, onChange }) {
  return (
    <select className={styles.select} defaultValue="" onChange={onChange}>
      <option value="" disabled hidden className={styles.placeholderOption}>
        {placeholder}
      </option>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}