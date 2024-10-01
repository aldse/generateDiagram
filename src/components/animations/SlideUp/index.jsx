import styles from "./styles.module.scss";
import "aos/dist/aos.css";

function SlideUp({ children, duration }) {
  return (
    <div
      className={styles.flex}
      data-aos="slide-up"
      data-aos-duration={duration}
    >
      {children}
    </div>
  );
}

export default SlideUp;
