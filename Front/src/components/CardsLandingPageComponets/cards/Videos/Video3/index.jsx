import video from '../../../../../assets/video/gif2.gif'
import styles from "./styles.module.scss";

export default function Video3() {
  return (
    <div >
      <img className={styles.tamanhovideo} src={video} alt="Loading"/>
    </div>
  );
}
