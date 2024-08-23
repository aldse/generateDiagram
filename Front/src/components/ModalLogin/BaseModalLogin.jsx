import React, { useState } from "react";
import Modal from "./Modal";
import {
  Label,
  P,
  A,
  Div,
  Botao,
  Image,
  A2,
  Input,
  Link
} from "./ModalLogin.styles";
import BaseModalCadastro from "../ModalCadastro/BaseModalCadastro";

const BaseModalLogin = ({ userId, onBackdropClick, isModalVisible }) => {
  const [isModalVisiblee, setIsModalVisiblee] = useState(false);

  const toggleModale = () => {
    setIsModalVisiblee(prevState => !prevState);
  };

  if (!isModalVisible) {
    return null;
  }

  return (
    <>
      <Modal onBackdropClick={onBackdropClick}>
        <Label>Log in</Label>
        <P>to start diagraming</P>
        <A>Username</A>
        <Input />
        <A>Password</A>
        <Input />
        <Div>
          <Botao>Log in</Botao>
          <Image />
        </Div>
        <A2>
          Don’t have an account? 
          <Link onClick={toggleModale}> Sign Up</Link>
          now!
        </A2>
      </Modal>
      <BaseModalCadastro
        isModalVisiblee={isModalVisiblee}
        onBackdropClicke={toggleModale}
      />
    </>
  );
};

export default BaseModalLogin;
