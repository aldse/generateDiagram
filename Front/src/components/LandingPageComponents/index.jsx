import styles from "./styles.module.scss";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card1LadingPageComponents from "../Card1LadingPageComponents";
import Card2LadingPageComponents from "../Card2LadingPageComponents";
import Card3LadingPageComponents from "../Card3LadingPageComponents";
import Card4LadingPageComponents from "../Card4LadingPageComponents";
import Card5LadingPageComponents from "../Card5LadingPageComponents";
import Card6LadingPageComponents from "../Card6LadingPageComponents";
import Card7LadingPageComponents from "../Card7LadingPageComponents";

function LandingPageComponents() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className={styles.div}>
        <div className={styles.nav}>
          <h1 className={styles.titlenav}>PYDIAGRAM</h1>
          <button className={styles.button}>
            <p className={styles.p}>Open an Account</p>
          </button>
        </div>

        <div className={styles.line3}>
          <div className={styles.card1}>
            <Card4LadingPageComponents />
          </div>
          <div className={styles.card2}>
            <Card5LadingPageComponents />
          </div>
          <div className={styles.card3}>
            <Card6LadingPageComponents />
          </div>
        </div>

        <div className={styles.line1}>
          <div className={styles.card10}>
            <Card7LadingPageComponents />
          </div>
          <div className={styles.card11}>
            <Card1LadingPageComponents />
          </div>
          <div className={styles.card22}>
            <Card2LadingPageComponents />
          </div>
        </div>

        <div className={styles.line2}>
          <div className={styles.card111}>
            <Card3LadingPageComponents />
          </div>
          <div className={styles.card111}>
            <Card3LadingPageComponents />
          </div>
        </div>

        <div className={styles.line3}>
          <div className={styles.card1}>
            <Card4LadingPageComponents />
          </div>
          <div className={styles.card2}>
            <Card5LadingPageComponents />
          </div>
          <div className={styles.card3}>
            <Card6LadingPageComponents />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPageComponents;
