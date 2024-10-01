import styles from "./styles.module.scss";

export default function Video({
  src,
  autoplay = true,
  muted = true,
  loop = true,
}) {

  return (
    <div className={styles.container}>
      <video
        className={styles.container__video}
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
