import Button from "../../../elements/Button";
import styles from "./styles.module.scss";

export default function Gif({
  header,
  subheader,
  button,
  background,
}) {
  const cardStyle = {
    background: `url(${background}) no-repeat center center`,
    backgroundSize: "cover",
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.card__content}>
        <div className={styles.card__header}>{header}</div>
        <div className={styles.card__subheader}>{subheader}</div>
        {button && (
          <Button
            text={button}
            theme={"white"}
            width={"7.02036666667vw"}
            height={"1.8162vw"}
          />
        )}
        <div className={styles.card__topics}></div>
      </div>
    </div>
  );
}
