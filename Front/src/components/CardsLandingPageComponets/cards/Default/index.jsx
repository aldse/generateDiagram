import styles from "./styles.module.scss";

import Button from "../../elements/Button";

export default function Default({ header, subheader, topics }) {
  return (
    <div className={[styles.card]}>
      <div className={styles.card__content}>
        <div className={styles.card__header}>{header}</div>
        <div className={styles.card__subheader}>{subheader}</div>
        <Button text={"See details"} theme={"light"} />
        <div className={styles.card__topics}>
          {topics.map((item, index) => (
            <div key={index} className={styles.card__topic}>
              <img
                src="src\assets\cards\check.png"
                alt="check icon"
                className={styles.card__topic__icon}
              />
              <span className={styles.card__topic__text}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
