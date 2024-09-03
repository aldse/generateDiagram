import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { generateDiagram } from "../../api/index";
import Modal from "./Modal";
import {
  Label,
  P,
  A,
  Div,
  Botao,
  Input,
  Link
} from "./ModalLogin.styles";
import AlertComponents from "../AlertComponents";

const BaseModalLogin = ({ onBackdropClick, openLogin, setOpenLogin, setOpenRegister }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const alertRef = useRef();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!loading) {
      setLoading(true);
    }

    try {
      const response = await generateDiagram.post("/user/login", {
        email,
        password,
      });
      const data = response.data;

      if (data && data.token) {
        login(data.token);
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
    } finally {
      setLoading(false);
    }
  };

  const openCadastroModal = () => {
    setOpenRegister(true);
    setOpenLogin(false)
  };


  if (!openLogin) {
    return null;
  }

  return (
    <>
      <Modal onBackdropClick={onBackdropClick}>
        <AlertComponents ref={alertRef} />
        <Label>Log in</Label>
        <P>to start diagraming</P>
        <A>Email</A>
        <Input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <A $variant="A2">Password</A>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Div>
          <Botao onClick={handleSubmit} disabled={loading}>
            {loading ? "Loading..." : "Log in"}
          </Botao>
        </Div>
        <A $variant="A2">
          Don’t have an account?
          <Link onClick={openCadastroModal}> Sign Up</Link>
          now!
        </A>
      </Modal>
    </>
  );
};

export default BaseModalLogin;
