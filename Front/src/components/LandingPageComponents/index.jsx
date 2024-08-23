import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './styles.module.scss';
import Card1LadingPageComponents from '../Card1LadingPageComponents';
import Card2LadingPageComponents from '../Card2LadingPageComponents';
import Card3LadingPageComponents from '../Card3LadingPageComponents';
import Card4LadingPageComponents from '../Card4LadingPageComponents';
import Card5LadingPageComponents from '../Card5LadingPageComponents';
import Card6LadingPageComponents from '../Card6LadingPageComponents';
import Card7LadingPageComponents from '../Card7LadingPageComponents';
import Card8LadingPageComponents from '../Card8LadingPageComponents';
import Card9LadingPageComponents from '../Card9LadingPageComponents';
import Card10LadingPageComponents from '../Card10LadingPageComponents';
import AlertComponents from '../AlertComponents';

import React, { useCallback, useState, useRef, useEffect } from "react";
import BaseModalLogin from "../ModalLogin/BaseModalLogin";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";


function LandingPageComponents() {
  const alertRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const showAlertMessage = (type, title, description) => {
    if (alertRef.current) {
      alertRef.current.addAlert(type, title, description);
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };
  return (
    <>
      <AlertComponents ref={alertRef} />
      <div className={styles.div}>
        <div className={styles.nav}>
          <h1 className={styles.titlenav}>PYDIAGRAM</h1>
          <Button className={styles.button} onClick={toggleModal}>
          <p className={styles.p}>Open an Account</p>
        </Button>
        <BaseModalLogin
          isModalVisible={isModalVisible}
          onBackdropClick={toggleModal}
        />
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
            <Card8LadingPageComponents />
          </div>
          <div className={styles.card2}>
            <Card9LadingPageComponents showAlert={showAlertMessage} />
          </div>
          <div className={styles.card3}>
            <Card10LadingPageComponents />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPageComponents;
