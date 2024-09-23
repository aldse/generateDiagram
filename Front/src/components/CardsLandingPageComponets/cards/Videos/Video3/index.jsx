import video from '../../../../../assets/video/DiagramaEn.mov'
import styles from "./styles.module.scss";

export default function Video3() {
  return (
    <div >
      <video className={styles.tamanhovideo} autoplay="true" muted loop> 
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  );
}
