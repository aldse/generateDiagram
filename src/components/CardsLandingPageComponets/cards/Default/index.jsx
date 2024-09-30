import styles from "./styles.module.scss";
import Button from "../../elements/Button";
import check from "../../../../assets/check.png";

import { useEffect, useState } from "react";

export default function Default({ header, subheader, topics }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const width = windowWidth < 810 ? "13.1701333333vw" : "5.134275vw";
  const height = windowWidth < 810 ? "5.30506666667vw" : "1.8162vw";

  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <div className={styles.card__header}>{header}</div>
        <div className={styles.card__subheader}>{subheader}</div>
        <Button
          text={"See details"}
          theme={"light"}
          width={width}
          height={height}
        />
        <div className={styles.card__topics}>
          {topics.map((item, index) => (
            <div key={index} className={styles.card__topic}>
              <img
                src={check}
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
