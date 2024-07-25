import styles from "./styles.module.css";

const Input = ({ label, value, onChange, placeholder }) => {
  const handleChange = (event) => {
    onChange(event.target.value); // Call the parent component's onChange handler
  };

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
