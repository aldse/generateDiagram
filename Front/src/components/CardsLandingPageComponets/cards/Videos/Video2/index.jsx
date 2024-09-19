import video from '../../../../../assets/video/unnamed.gif'
import styles from "./styles.module.scss";

export default function Video2() {
  return (
    <div >
      <img className={styles.tamanhovideo} src={video} alt="Loading"/>
    </div>
  );
}
