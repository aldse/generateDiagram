import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './styles.module.scss';
import AlertComponents from '../AlertComponents';

import React, { useState, useRef, useEffect } from "react";
import BaseModalLogin from "../ModalLogin/BaseModalLogin";
import BaseModalCadastro from "../ModalCadastro/BaseModalCadastro"

import Button from "react-bootstrap/Button";


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

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const toggleModal = () => {
    setOpenLogin((wasModalVisible) => !wasModalVisible);
  };

  const toggleModal2 = () => {
    setOpenRegister((wasModalVisible) => !wasModalVisible);
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
            openLogin={openLogin}
            setOpenLogin={setOpenLogin}
            setOpenRegister={setOpenRegister}
            onBackdropClick={toggleModal}
          />

          <BaseModalCadastro
            openRegister={openRegister}
            setOpenRegister={setOpenRegister}
            setOpenLogin={setOpenLogin}
            onBackdropClick={toggleModal2}
          />
        </div>
      </div>
    </>
  );
}

export default LandingPageComponents;
