import styles from "./styles.module.scss";
import Button from "../../../elements/Button";
import Input from "../../../elements/Input";
import Select from "../../../elements/Select";
import Translate from "../../../TranslateComponents/index";
import { useEffect, useState } from "react";

export default function Forms({ header }) {
  const translate = localStorage.getItem("translate") || "eng";
  const options = [
    { value: "1", label: Translate.getText("suggestion", translate) },
    { value: "2", label: Translate.getText("somethingRight", translate) },
    { value: "3", label: Translate.getText("praise", translate) },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const width = windowWidth < 810 ? "16.8792691358vw" : "7.12094166667vw";
  const height = windowWidth < 810 ? "4.30506666667vw" : "1.8162vw";

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
            placeholder={Translate.getText("placeholdercard4", translate)}
            width={"95.7414474351%"}
            onChange={(e) => setMessage(e.target.value)}
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
            <Button
              text={Translate.getText("submitFeedback", translate)}
              theme={"dark"}
              width={width}
              height={height}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
