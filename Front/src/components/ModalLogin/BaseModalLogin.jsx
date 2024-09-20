import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { generateDiagram } from "../../api/index";
import Modal from "./Modal";
import { Label, P, A, Div, Button, Input, Link } from "./ModalLogin.styles";
import AlertComponents from "../AlertComponents";
import Translate from "../TranslateComponents/index";

const BaseModalLogin = ({
  onBackdropClick,
  openLogin,
  setOpenLogin,
  setOpenRegister,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const alertRef = useRef();
  const modalRef = useRef();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (openLogin === null) {
      const storedOpenLogin = localStorage.getItem("openLogin");
      if (storedOpenLogin !== null) {
        setOpenLogin(JSON.parse(storedOpenLogin));
      }
    } else {
      localStorage.setItem("openLogin", JSON.stringify(openLogin));
    }
  }, [openLogin, setOpenLogin]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onBackdropClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onBackdropClick]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const response = await generateDiagram.post("/user/login", {
        email,
        password,
      });
      const data = response.data;

      if (data?.token) {
        login(data.token);
      } else {
        alertRef.current?.addAlert(
          "Informações inválidas",
          "Informações inválidas",
          "Usuário ou senha não coincidem."
        );
      }
    } catch (error) {
      alertRef.current?.addAlert(
        "Informações inválidas",
        "Informações inválidas",
        "Usuário ou senha não coincidem."
      );
    } finally {
      setLoading(false);
    }
  };

  const openCadastroModal = () => {
    setOpenRegister(true);
    setOpenLogin(false);
  };

  if (!openLogin) {
    return null;
  }

  const translate = localStorage.getItem("translate") || "eng";

  return (
    <Modal onBackdropClick={onBackdropClick} ref={modalRef}>
      <AlertComponents ref={alertRef} />
      <Label $language={translate}>
        {Translate.getText("login", translate)}
      </Label>
      <P $language={translate}>{Translate.getText("phraselogin", translate)}</P>
      <A $language={translate}>{Translate.getText("email", translate)}</A>
      <Input
        id="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <A $variant="A2" $language={translate}>{Translate.getText("password", translate)}</A>
      <Input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Div>
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Loading..." : "Log in"}
        </Button>
      </Div>
      <A $variant="A2" $language={translate}>
        {Translate.getText("phaseRegister1", translate)}{" "}
        <Link onClick={openCadastroModal} $language={translate}>
          {Translate.getText("phaseRegister2", translate)}
        </Link>{" "}
        {Translate.getText("phaseRegister3", translate)}
      </A>
    </Modal>
  );
};

export default BaseModalLogin;
