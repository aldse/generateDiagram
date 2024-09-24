import video from '../../../../../assets/video/gif2.gif';
import styles from "./styles.module.scss";
import Translate from "../../../../TranslateComponents/index";

export default function Video1() {
  const translate = localStorage.getItem("translate") || "eng";
  return (
    <div className={styles.videoContainer}>
      <img className={styles.tamanhovideo} src={video} alt="Loading" />
      <div className={styles.overlayText1}>{Translate.getText("titleCard", translate)}</div>
      <div className={styles.overlayText2}>{Translate.getText("textCard", translate)}</div>
      <button className={styles.actionButton}>{Translate.getText("buttonCard", translate)}</button>
    </div>
  );
}
