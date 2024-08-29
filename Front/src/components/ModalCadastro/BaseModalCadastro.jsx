import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { Label, P, A, Div, Botao, Input, Link } from "./ModalCadastro.styles";
import BaseModalLogin from "../ModalLogin/BaseModalLogin";
import { generateDiagram, fetchAddressByCep } from "../../api/index";

const BaseModalCadastro = ({ onBackdropClick, registerModalVisible }) => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
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

  const openLoginModal = () => {
    onBackdropClick();
    setLoginModalVisible(true);
  };
  const closeLoginModal = () => {
    setLoginModalVisible(false);
  };

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

  if (!registerModalVisible & !loginModalVisible) {
    return null;
  }

  return (
    <>
      {registerModalVisible && (
        <Modal onBackdropClick={onBackdropClick}>
          <form onSubmit={handleSubmit}>
            <Label>Sign Up</Label>
            <P>Welcome to the team</P>
            <A>Name</A>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
            <A>Email</A>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            <A>Password</A>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <A>Confirm Password</A>
            <Input
              type="password"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
            <A>CEP</A>
            <Input
              id="cep"
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              onBlur={handleBlur}
            />
            <A>Street</A>
            <Input
              id="street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <A>Number</A>
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
            <A $variant="A2">
              Do you already have an account?
              <Link onClick={openLoginModal}> Log In</Link>
            </A>
          </form>
        </Modal>
      )}
      {loginModalVisible && (
        <BaseModalLogin
        loginModalVisible={loginModalVisible}
        onBackdropClick={closeLoginModal}
        />
      )}
    </>
  );
};

export default BaseModalCadastro;
