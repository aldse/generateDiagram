import video from '../../../../../assets/video/gif.webp'
import styles from "./styles.module.scss";

export default function Video1() {
  return (
    <div >
      <img className={styles.tamanhovideo} src={video} alt="Loading"/>
    </div>
  );
}
