import styles from "./styles.module.scss";
import Button from "../../../elements/Button";
import Button1 from "../../../elements/Button/button1";
import Input from "../../../elements/Input";
import Select from "../../../elements/Select";
import Translate from "../../../../TranslateComponents/index";
import { useState } from "react";
import { generateDiagram } from "../../../../../api";

export default function Forms({ header }) {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const userID = localStorage.getItem("token");

  const translate = localStorage.getItem("translate") || "eng";
  const options = [
    { value: "1", label: Translate.getText("suggestion", translate) },
    { value: "2", label: Translate.getText("somethingRight", translate) },
    { value: "3", label: Translate.getText("praise", translate) },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Antes de enviar:");
    console.log("userID:", userID);
    console.log("type:", type);
    console.log("message:", message);

    if (!userID) {
      console.error("USERIDDDDDDDD");
      return;
    }
    if (!type) {
      console.error("TYPEEEE");
      return;
    }
    if (!message) {
      console.error("MESSAGEEEE");
      return;
    }

    try {
      const response = await generateDiagram.post("/feedback/createFeedback", {
        userID,
        type,
        message,
      });
      console.log("Feedback concluido comm sucesso:", response.data);
    } catch (error) {
      console.error(
        "Erro ao enviar feedback:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <div className={styles.card__header}>{header}</div>
        <form onSubmit={handleSubmit}>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={Translate.getText("placeholdercard4", translate)}
            width={"95.7414474351%"}
          />
          <div className={styles.card__controls}>
            <Select
              placeholder={Translate.getText("titleSelect", translate)}
              options={options}
              onChange={(e) => {
                const selectedOption = options.find(
                  (option) => option.value === e.target.value
                );
                if (selectedOption) {
                  setType(selectedOption.value);
                }
              }}
            />
            <Button1
              text={Translate.getText("submitFeedback", translate)}
              theme={"dark"}
              width={"8.54513rem"}
              height={"2.17944rem"}
              type="submit"
            />
            {/* <Button
              text={Translate.getText("submitFeedback", translate)}
              theme={"dark"}
              width={"8.54513rem"}
              height={"2.17944rem"}
              type="submit"
            /> */}
          </div>
        </form>
      </div>
    </div>
  );
}
