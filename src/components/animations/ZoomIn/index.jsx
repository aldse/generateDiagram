import styles from "./styles.module.scss";
import "aos/dist/aos.css";

function ZoomIn({ children, duration }) {
  return (
    <div
      className={styles.flex}
      data-aos="zoom-in"
      data-aos-duration={duration}  
    >
      {children}
    </div>
  );
}

export default ZoomIn;
