import styles from "./styles.module.scss";
import "aos/dist/aos.css";

function FadeRight({ children, duration = 1000 }) {
  return (
    <div
      className={styles.flex}
      data-aos="fade-right"
      data-aos-duration={duration}
    >
      {children}
    </div>
  );
}

export default FadeRight;
