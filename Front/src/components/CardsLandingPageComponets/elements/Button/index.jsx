import styles from "./styles.module.scss";
import React, { useState } from "react";
import BaseModalLogin from "../../../ModalLogin/BaseModalLogin";
import BaseModalCadastro from "../../../ModalCadastro/BaseModalCadastro";

export default function Button({
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
    <button
      className={`${styles.button} ${buttonClass}`}
      style={size}
      // onClick={action}
      onClick={toggleModal}
    >
      {text}
    </button>
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
</>
  );
}


