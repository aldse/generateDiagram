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

  const toggleModale = () => {
    setIsModalVisiblee(prevState => !prevState);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      console.log("Iniciou");
      const response = await generateDiagram.post("/user/login", {
        edv,
        password: password.password,
      });
      const data = response.data;
      console.log("DATA:", data);

      if (data && data.token) {
        login(data.token);
        navigate("/login");
      } else {
        console.error("Token não encontrado na resposta da API.");
        if (alertRef.current) {
          alertRef.current.addAlert(
            "Informações inválidas",
            "Informações inválidas",
            "Usuário ou senha não coincidem."
          );
        }
      }
    } catch (error) {
      console.error("Erro ao chamar a API:", error);
      if (alertRef.current) {
        alertRef.current.addAlert(
          "Informações inválidas",
          "Informações inválidas",
          "Usuário ou senha não coincidem."
        );
      }
    }
  };

  if (!isModalVisible) {
    return null;
  }

  return (
    <>
      <Modal onBackdropClick={onBackdropClick}>
        <Label>Log in</Label>
        <P>to start diagraming</P>
        <A>Email</A>
        <Input
          type="email"
          value={edv}
          onChange={(e) => setEdv(e.target.value)}
        />
        <A>Password</A>
        <Input
          type={isPasswordVisible ? "text" : "password"}
          value={password.password}
          onChange={(e) => setPassword({ ...password, password: e.target.value })}
        />
        <Div>
          <Botao onClick={handleLogin}>Log in</Botao>
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
