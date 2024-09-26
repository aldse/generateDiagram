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
    borderRadius: "1.36213333333vw",
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.card__content}>
        <div className={styles.card__header}>{header}</div>
        <div className={styles.card__subheader}>{subheader}</div>
        <Button
          text={button}
          theme={"dark"}
          width={"7.02036666667vw"}
          height={"1.8162vw"}
        />
        <div className={styles.card__topics}></div>
      </div>
    </div>
  );
}
