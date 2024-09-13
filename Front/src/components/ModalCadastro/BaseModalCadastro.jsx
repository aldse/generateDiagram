import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { Label, P, A, Div, Botao, Input, Link } from "./ModalCadastro.styles";
import { generateDiagram, fetchAddressByCep } from "../../api/index";
import Translate from "../TranslateComponents/index";

const BaseModalCadastro = ({ onBackdropClick, openRegister, setOpenRegister, setOpenLogin }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = "Name is required.";
    if (!email || !emailPattern.test(email))
      newErrors.email = "A valid email is required.";
    if (!password) newErrors.password = "Password is required.";
    if (password !== confPassword)
      newErrors.confPassword = "Passwords must match.";
    if (!number) newErrors.number = "Number is required.";

    if (Object.keys(newErrors).length > 0) {
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
    setOpenRegister(false)
  };


  if (!openRegister) {
    return null;
  }

  const translate = localStorage.getItem("translate") || "eng";
  return (
    <>
      <Modal onBackdropClick={onBackdropClick}>
        <form onSubmit={handleSubmit}>
          <Label $language={translate}>{Translate.getText("phaseRegister2", translate)}</Label>
          <P $language={translate}>{Translate.getText("phaseRegister", translate)}</P>
          <A $language={translate}>{Translate.getText("name", translate)}</A>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          <A $language={translate}>{Translate.getText("email", translate)}</A>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          <A $language={translate}>{Translate.getText("password", translate)}</A>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <A $language={translate}>{Translate.getText("confirmPassword", translate)}</A>
          <Input
            type="password"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
          <A $language={translate}>{Translate.getText("cep", translate)}</A>
          <Input
            id="cep"
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            onBlur={handleBlur}
          />
          <A $language={translate}>{Translate.getText("street", translate)}</A>
          <Input
            id="street"
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <A $language={translate}>{Translate.getText("number", translate)}</A>
          <Input
            id="number"
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <Div>
            <Botao type="submit" disabled={loading}>
              {loading ? "Registering..." : "Sign Up"}
            </Botao>
          </Div>
          <A $variant="A2" $language={translate}>
          {Translate.getText("accont", translate)}
            <Link onClick={openLoginModal} $language={translate}>{Translate.getText("conectar", translate)}</Link>
          </A>
        </form>
      </Modal>
    </>
  );
};

export default BaseModalCadastro;
