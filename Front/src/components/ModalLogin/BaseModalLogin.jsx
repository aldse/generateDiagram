import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { generateDiagram } from "../../api/genereateDiagram";
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
  // const [email, setEmail] = useState("");
  const [edv, setEdv] = useState("");
  const [password, setPassword] = useState({
    password: "",
    showPassword: false,
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const alertRef = useRef(null);
  // const togglePasswordVisibility = () => {
  //   setIsPasswordVisible(!isPasswordVisible);
  // };

  const openCadastroModal = () => {
    onBackdropClick(); 
    setIsModalVisiblee(true);
  };

  const closeCadastroModal = () => {
    setIsModalVisiblee(false);
  };

  if (!isModalVisible && !isModalVisiblee) {
    return null;
  }

  return (
    <>
      {isModalVisible && (
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
            <Link onClick={openCadastroModal}> Sign Up</Link>
            now!
          </A2>
        </Modal>
      )}
      {isModalVisiblee && (
        <BaseModalCadastro
          isModalVisiblee={isModalVisiblee}
          onBackdropClicke={closeCadastroModal}
        />
      )}
    </>
  );
};

export default BaseModalLogin;
