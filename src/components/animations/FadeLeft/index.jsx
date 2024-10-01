import styles from "./styles.module.scss";
import "aos/dist/aos.css";

function FadeLeft({ children, duration = 1000 }) {
  return (
    <div
      className={styles.flex}
      data-aos="fade-left"
      data-aos-duration={duration}
    >
      {children}
    </div>
  );
}

export default FadeLeft;
