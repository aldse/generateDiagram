import styles from "./styles.module.scss";

import Button from "../Button";

import "aos/dist/aos.css";

import React from "react";


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__left_content}>
        <div className={styles.navbar__text}>PYDIAGRAM</div>
      </div>

      <div className={styles.navbar__right_content}>
        <Button
          text={"Open an Account"}
          width={"8.54513rem"}
          height={"2.17944rem"}
          theme={"dark"}
        />
      </div>
    </div>
  );
};

export default Navbar;
