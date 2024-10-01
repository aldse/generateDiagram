import Button from "../../../elements/Button";
import styles from "./styles.module.scss";

import { useEffect, useState } from "react";

export default function Gif({ header, subheader, button, background }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const width_button =
    windowWidth < 810 ? "16.8792691358vw" : "7.12094166667vw";
  const height_button = windowWidth < 810 ? "4.30506666667vw" : "1.8162vw";

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
            width={width_button}
            height={height_button}
          />
        )}
        <div className={styles.card__topics}></div>
      </div>
    </div>
  );
}