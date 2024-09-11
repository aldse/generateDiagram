import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";
import AlertComponents from "../AlertComponents";
import React, { useState, useRef, useEffect } from "react";
import BaseModalLogin from "../ModalLogin/BaseModalLogin";
import BaseModalCadastro from "../ModalCadastro/BaseModalCadastro";
import Button from "react-bootstrap/Button";
import DropdownWithImages from "../DropdownComponents/index";
import flagEN from "../../assets/bandeiradoreinounido.png";
import flagES from "../../assets/bandeiradaespanha.png";
import flagPT from "../../assets/bandeiradobrasil.png";
import Translate from "../TranslateComponents/index";

function LandingPageComponents() {
  const alertRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const toggleModal = () => {
    setOpenLogin((wasModalVisible) => !wasModalVisible);
  };

  const toggleModal2 = () => {
    setOpenRegister((wasModalVisible) => !wasModalVisible);
  };

  const selectedLang = localStorage.getItem("selectedLanguage");
  if (selectedLang) {
    localStorage.setItem("translate", JSON.parse(selectedLang).code);
  }

  const options = [
    { name: "Inglês", image: flagEN, code: "eng" },
    { name: "Espanhol", image: flagES, code: "es" },
    { name: "Português", image: flagPT, code: "pt" },
  ];

  const handleLanguageChange = (option) => {
    localStorage.setItem("selectedLanguage", JSON.stringify(option));
    localStorage.setItem("translate", option.code);
    window.location.reload();
  };

  const translate = localStorage.getItem("translate") || "eng";
  const selectedLanguage =
    options.find((option) => option.code === translate) || options[0];

  return (
    <>
      <AlertComponents ref={alertRef} />
      <div className={styles.div}>
        <div className={styles.nav}>
          <h1 className={styles.titlenav}>PYDIAGRAM</h1>
          <div className={styles.alingRow}>
          <DropdownWithImages
            options={options}
            selectedOption={selectedLanguage}
            onSelect={handleLanguageChange}
          />
          <Button className={styles.button} onClick={toggleModal}>
            <p className={styles.p}>Open an Account</p>
          </Button>
          </div>
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
