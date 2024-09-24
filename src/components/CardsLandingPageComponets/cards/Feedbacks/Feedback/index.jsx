import styles from "./styles.module.scss";

import lamp from "../../../../../assets/lamp.png";
import gray_bosch_icon from "../../../../../assets/gray_bosch_icon.svg";
import profile_icon from "../../../../../assets/profile_icon.png";

export default function Feedback({ owner, type, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <div className={styles.card__header}>
          <div className={styles.card__header__left}>
            <img src={profile_icon} alt="" />
            <div className={styles.card__header__text}>
              <span className={styles.card__header__username}>{owner}</span>
              <span className={styles.card__header__type}>{type}</span>
            </div>
          </div>
          <img
            src={gray_bosch_icon}
            alt=""
            className={styles.card__header__icon}
          />
        </div>
        <div className={`${styles.separator} ${styles.separator__start}`}></div>
        <div className={styles.card__text}>{text}</div>
        <div className={`${styles.separator} ${styles.separator__end}`}></div>
        <div className={styles.card__footer}>
          <img src={lamp} alt="" className={styles.card__footer__icon} />{" "}
          Feedbacks
        </div>
      </div>
    </div>
  );
}
