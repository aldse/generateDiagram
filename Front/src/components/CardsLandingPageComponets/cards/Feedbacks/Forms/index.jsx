import styles from "./styles.module.scss";

import Button from "../../../elements/Button";
import Input from "../../../elements/Input"
import Select from "../../../elements/Select";

export default function Forms({ header }) {
  const options = [
    { value: "suggestion", label: "Suggestion" },
    { value: "something is not right", label: "Something is not right" },
    { value: "praise", label: "Praise" },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <div className={styles.card__header}>{header}</div>
        {/* <form action="" method="post"> */}
        <Input
          placeholder={
            "Your Feedback Here: Share Your Thoughts and Suggestions"
          }
          width={"95.7414474351%"}
        />
        <div className={styles.card__controls}>
          <Select placeholder="Select feedback type" options={options} />
          <Button
            text={"Submit feedback"}
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
