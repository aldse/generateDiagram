import styles from "./styles.module.scss";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card1LadingPageComponents from '../Card1LadingPageComponents';

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
        <div className={styles.line1}>
        <Card1LadingPageComponents />
        <div className={styles.card11}><Card1LadingPageComponents /></div>
        <div className={styles.card22}></div>
        </div>

        <div className={styles.line2}>
        <div className={styles.card111}></div>
        </div>

        <div className={styles.line11}>
        <div className={styles.card11}></div>
        <div className={styles.card22}></div>
        </div>

        <div className={styles.line3}>
        <div className={styles.card1}></div>
        <div className={styles.card2}></div>
        <div className={styles.card3}></div>
        </div>
      </div>
    </>
  );
}

export default LandingPageComponents;
