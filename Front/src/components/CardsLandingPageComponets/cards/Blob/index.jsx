import styles from "./styles.module.scss";
import Button from "../../elements/Button";

export default function Blob({
  header,
  subheader,
  button,
  background,
  width,
  height,
}) {
  const cardStyle = {
    background: `url(${background}) no-repeat center center`,
    backgroundSize: "cover",
    width: width,
    height: height,
    borderRadius: "1.63456rem",
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.card__content}>
        <div className={styles.card__header}>{header}</div>
        <div className={styles.card__subheader}>{subheader}</div>
        <Button
          text={button}
          theme={"dark"}
          width={"8.42444rem"}
          height={"2.17944rem"}
        />
        <div className={styles.card__topics}></div>
      </div>
    </div>
  );
}
