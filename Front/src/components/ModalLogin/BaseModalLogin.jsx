import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { generateDiagram } from "../../api/index";
import Modal from "./Modal";
import { Label, P, A, Div, Botao, Input, Link } from "./ModalLogin.styles";
import AlertComponents from "../AlertComponents";
import DropdownWithImages from "../DropdownComponents/index";
import flagEN from "../../assets/bandeiradoreinounido.png";
import flagES from "../../assets/bandeiradaespanha.png";
import flagPT from "../../assets/bandeiradobrasil.png";
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
        // Set language in localStorage
        const selectedLang = localStorage.getItem("selectedLanguage");
        if (selectedLang) {
          localStorage.setItem("translate", JSON.parse(selectedLang).code);
        }
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
    setOpenLogin(false);
  };
  
  if (!openLogin) {
    return null;
  }
  const options = [
    { name: "Inglês", image: flagEN, code: "eng" },
    { name: "Espanhol", image: flagES, code: "es" },
    { name: "Português", image: flagPT, code: "pt" },
  ];

  const handleLanguageChange = (option) => {
    localStorage.setItem("selectedLanguage", JSON.stringify(option));
    localStorage.setItem("translate", option.code);
    window.location.reload(); // Recarregar a página para aplicar a mudança
  };

  const translate = localStorage.getItem("translate") || "eng";
  const selectedLanguage =
    options.find((option) => option.code === translate) || options[0];

  return (
    <>
      <Modal onBackdropClick={onBackdropClick}>
        <AlertComponents ref={alertRef} />
        <Div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0",
          }}
        >
          <Label $language={translate}>
            {Translate.getText("login", translate)}
          </Label>
          <DropdownWithImages
            options={options}
            selectedOption={selectedLanguage}
            onSelect={handleLanguageChange}
          />
        </Div>
        <P $language={translate}>
          {Translate.getText("phraselogin", translate)}
        </P>
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
