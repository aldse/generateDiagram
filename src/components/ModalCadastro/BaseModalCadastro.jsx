import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import {
  Label,
  P,
  A,
  Div,
  Button,
  Input,
  Link,
  DivTogglePassword,
  ImagePassword,
  ToggleIcon,
} from "./ModalCadastro.styles";
import { generateDiagram, fetchAddressByCep } from "../../api/index";
import Translate from "../TranslateComponents/index";
import olho from "../../assets/olho.png";

const BaseModalCadastro = ({
  onBackdropClick,
  openRegister,
  setOpenRegister,
  setOpenLogin,
}) => {
  const alertRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfPasswordVisibility = () => {
    setShowConfPassword(!showConfPassword);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!name)
      newErrors.name = alertRef.current?.addAlert(
        "Por favor, insira um nome de usuário válido.",
        "Por favor, insira um nome de usuário válido.",
        "Por favor, insira um nome de usuário válido."
      );
    if (!email || !emailPattern.test(email))
      newErrors.email = alertRef.current?.addAlert(
        "Por favor, insira um email válido.",
        "Por favor, insira um email válido.",
        "Por favor, insira um email válido."
      );
    if (!password)
      newErrors.password = alertRef.current?.addAlert(
        "Senha menor que 8 digitos, NÃO!",
        "Senha menor que 8 digitos, NÃO!",
        "Senha menor que 8 digitos, NÃO!"
      );
    if (password !== confPassword)
      newErrors.confPassword = alertRef.current?.addAlert(
        "As senhas não foram inseridas iguais!",
        "As senhas não foram inseridas iguais!",
        "As senhas não foram inseridas iguais!"
      );
    if (!number)
      newErrors.number = alertRef.current?.addAlert(
        "Insira um número válido",
        "Insira um número válido",
        "Insira um número válido"
      );

    if (Object.keys(newErrors).length > 0) {
      alertRef.current?.addAlert(
        "Informações inválidas",
        "Informações inválidas",
        "Informações inválidas"
      );
      console.log("Validation Errors:", newErrors);
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = async (e) => {
    try {
      const data = await fetchAddressByCep(e.target.value);
      if (data) {
        setStreet(data.logradouro);
      }
    } catch (error) {
      alertRef.current?.addAlert(
        "CEP inválido",
        "CEP inválido",
        "CEP inválido."
      );
      console.error("Erro ao buscar o CEP:", error);
    }
  };

  useEffect(() => {
    setStreet("");
  }, [cep]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const response = await generateDiagram.post("/user/register", {
        name,
        email,
        password,
        confirmPassword: confPassword,
        cep,
        street,
        number,
      });
      alertRef.current?.addAlert(
        "Usuário cadastrado com sucesso",
        "Usuário cadastrado com sucesso",
        "Usuário ou senha não coincidem."
      );

      console.log("Usuário registrado com sucesso!", response.data);
      setLoading(false);

      openLoginModal();
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.error("Erro ao chamar a API:", error.response.data);
      } else if (error.request) {
        console.error("Erro na requisição:", error.request);
      } else {
        console.error("Erro inesperado:", error.message);
      }
    }
  };

  const openLoginModal = () => {
    setOpenLogin(true);
    setOpenRegister(false);
  };

  if (!openRegister) {
    return null;
  }

  const translate = localStorage.getItem("translate") || "eng";
  return (
    <>
      <Modal onBackdropClick={onBackdropClick}>
        <form onSubmit={handleSubmit}>
          <Label $language={translate}>
            {Translate.getText("phaseRegister2", translate)}
          </Label>
          <P $language={translate}>
            {Translate.getText("phaseRegister", translate)}
          </P>
          <A $language={translate}>
            {Translate.getText("nameconfig", translate)}
          </A>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          <A $language={translate}>{Translate.getText("email", translate)}</A>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          <A $language={translate}>
            {Translate.getText("password", translate)}
          </A>

          <DivTogglePassword>
            <Input
              id="password"
              type={showPassword ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ToggleIcon onClick={togglePasswordVisibility}>
              <ImagePassword src={olho} alt="Toggle password visibility" />
            </ToggleIcon>
          </DivTogglePassword>

          <A $language={translate}>
            {Translate.getText("confirmPassword", translate)}
          </A>
          <DivTogglePassword>
            <Input
              id="confirmPassword"
              type={showConfPassword ? "text" : "password"}
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
            <ToggleIcon onClick={toggleConfPasswordVisibility}>
              <ImagePassword src={olho} alt="Toggle confirmation password visibility" />
            </ToggleIcon>
          </DivTogglePassword>

          <A $language={translate}>
            {Translate.getText("cepconfig", translate)}
          </A>
          <Input
            id="cep"
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            onBlur={handleBlur}
          />
          <A $language={translate}>
            {Translate.getText("streetconfig", translate)}
          </A>
          <Input
            id="street"
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <A $language={translate}>
            {Translate.getText("numberconfig", translate)}
          </A>
          <Input
            id="number"
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <Div>
            <Button type="submit" disabled={loading}>
              {loading ? "Registering..." : "Sign Up"}
            </Button>
          </Div>
          <A $variant="A2" $language={translate}>
            {Translate.getText("accont", translate)}
            <Link onClick={openLoginModal} $language={translate}>
              {Translate.getText("conectar", translate)}
            </Link>
          </A>
        </form>
      </Modal>
    </>
  );
};

export default BaseModalCadastro;
