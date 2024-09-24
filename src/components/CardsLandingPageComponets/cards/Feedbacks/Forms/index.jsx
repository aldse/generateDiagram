import styles from "./styles.module.scss";
import Button from "../../../elements/Button";
import Input from "../../../elements/Input"
import Select from "../../../elements/Select";
import Translate from "../../../../TranslateComponents/index";

export default function Forms({ header }) {
  const translate = localStorage.getItem("translate") || "eng";
  const options = [
    { value: "suggestion", label: Translate.getText("suggestion", translate)},
    { value: "something is not right", label: Translate.getText("somethingRight", translate)},
    { value: "praise", label: Translate.getText("praise", translate)},
  ];

  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <div className={styles.card__header}>{header}</div>
        {/* <form action="" method="post"> */}
        <Input
          placeholder=
            {Translate.getText("placeholdercard4", translate)}
          
          width={"95.7414474351%"}
        />
        <div className={styles.card__controls}>
          <Select placeholder={Translate.getText("titleSelect", translate)} options={options} />
          <Button
            text={Translate.getText("submitFeedback", translate)}
            theme={"dark"}
            width={"8.54513rem"}
            height={"2.17944rem"}
          />
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}
