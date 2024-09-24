import styles from "./styles.module.scss";
import React from "react";

export default function Button1({
  action,
  theme,
  text,
  width = "6.16113rem",
  height = "2.17944rem",
}) {
  const buttonClass =
    theme === "dark" ? styles.button__dark : styles.button__light;

  const size = {
    height: height,
    width: width,
  };

  return (
    <button
      className={`${styles.button} ${buttonClass}`}
      style={size}
      onClick={action} 
    >
      {text}
    </button>
  );
}
