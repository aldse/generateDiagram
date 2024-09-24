import styles from "./styles.module.scss";
import Button from "../../elements/Button";
import Translate from "../../../TranslateComponents/index";

export default function Default({ header, subheader, topics, language }) {
  const headerStyle =
    language === "pt"
      ? styles.card__headerPt 
      : language === "es"
      ? styles.card__headerEs 
      : styles.card__headerDefault;
      
  const translate = localStorage.getItem("translate") || "eng";
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <div className={headerStyle}>{header}</div>
        <div className={styles.card__subheader}>{subheader}</div>
        <Button text={Translate.getText("seedetails", translate)} theme={"light"} />
        <div className={styles.card__topics}>
          {topics.map((item, index) => (
            <div key={index} className={styles.card__topic}>
              <img
                src="src/assets/cards/check.png"
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
