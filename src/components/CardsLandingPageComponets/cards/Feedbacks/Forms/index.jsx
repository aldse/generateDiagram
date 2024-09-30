import styles from "./styles.module.scss";
import Button from "../../../elements/Button";
import Input from "../../../elements/Input";
import Select from "../../../elements/Select";
import Translate from "../../../../TranslateComponents/index";
import { useEffect, useState } from "react";

export default function Forms({ header }) {
  const translate = localStorage.getItem("translate") || "eng";
  const options = [
    { value: "suggestion", label: Translate.getText("suggestion", translate) },
    {
      value: "something is not right",
      label: Translate.getText("somethingRight", translate),
    },
    { value: "praise", label: Translate.getText("praise", translate) },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const width  = windowWidth < 800 ? "16.8792691358vw" : "7.12094166667vw"

  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <div className={styles.card__header}>{header}</div>
        <Input
          placeholder={Translate.getText("placeholdercard4", translate)}
          width={"95.7414474351%"}
        />
        <div className={styles.card__controls}>
          <Select
            placeholder={Translate.getText("titleSelect", translate)}
            options={options}
          />
          <Button
            text={Translate.getText("submitFeedback", translate)}
            theme={"dark"}
            width={width}
          />
        </div>
      </div>
    </div>
  );
}
