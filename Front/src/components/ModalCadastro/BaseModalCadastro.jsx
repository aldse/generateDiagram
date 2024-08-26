import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Modal from "./Modal";
import {
  Label,
  P,
  A,
  Div,
  Botao,
  Input,
  Link,
  LabelContainer,
  InputsWrapper,
} from "./ModalCadastro.styles";
import BaseModalLogin from "../ModalLogin/BaseModalLogin";
import { generateDiagram } from "../../api/genereateDiagram";
import AlertComponents from "../AlertComponents";

const BaseModalCadastro = ({ onBackdropClicke, isModalVisiblee }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const alertRef = useRef();

  const validateForm = () => {
    const newErrors = {};

    if (!isValidUsername(name)) {
      if (alertRef.current) {
        alertRef.current.addAlert(
          'Por favor, insira um nome de usuário válido.',
          'Nome de Usuário Inválido',
          'O nome de usuário deve ter pelo menos 2 caracteres.'
        );
      }
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      if (alertRef.current) {
        alertRef.current.addAlert(
          'Por favor, insira um email válido.',
          'Por favor, insira um email válido.',
          'O email fornecido não é válido, seu formato deve ter (@) ou (.com), exemplo (teste@teste.com)'
        );
      }
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      if (alertRef.current) {
        alertRef.current.addAlert(
          'Senha menor que 8 digitos, NÃO!',
          'Senha Inválida',
          'A senha deve ter pelo menos 8 dígitos.'
        );
      }
      setLoading(false);
      return;
    }
  
    if (password !== confPassword) {
      if (alertRef.current) {
        alertRef.current.addAlert(
          'As senhas não foram inseridas iguais!',
          'As senhas não foram inseridas iguais!',
          'As senhas devem ser iguais.'
        );
      }
      setLoading(false);
      return;
    }

    if (!cep || !/^\d{8}$/.test(cep)) {
      if (alertRef.current) {
          alertRef.current.addAlert(
              'CEP inválido',
              'CEP inválido',
              'Insira um CEP válido contendo exatamente 8 dígitos numéricos.'
          );
      }
      return;
    }

     if (number.length < 1) {
      if (alertRef.current) {
          alertRef.current.addAlert('Insira um número válido', 'Insira um número válido', 'O número da casa é necessário.');
      }
      return;
    }

    if (Object.keys(newErrors).length > 0) {
      console.log("Validation Errors:", newErrors);
    }

    return Object.keys(newErrors).length === 0;
  };

  const isValidUsername = (name) => {
    return name.trim().length >= 2;
  };
  
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  
  const openLoginModal = () => {
    setIsLoginModalVisible(true);
    onBackdropClicke();
  };

  const handleBlur = (e) => {
    fetchAddressByCep(e.target.value);
  };

  const fetchAddressByCep = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;

      if (!data.erro) {
        setStreet(data.logradouro);
      } else {
        console.log("Erro: CEP não encontrado.");
        if (alertRef.current) {
          alertRef.current.addAlert(
              'CEP inválido',
              'CEP inválido',
              'Insira um CEP válido contendo exatamente 8 dígitos numéricos.'
          );
        }
      }
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      if (alertRef.current) {
        alertRef.current.addAlert(
            'CEP inválido',
            'CEP inválido',
            'Insira um CEP válido contendo exatamente 8 dígitos numéricos.'
        );
      }
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
      if (alertRef.current) {
        alertRef.current.addAlert('Usuário cadastrado com sucesso', 'Usuário cadastrado com sucesso', 'Você foi cadastrado, seja bem vindo.');
      }
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

  if (isLoginModalVisible) {
    return (
      <BaseModalLogin
        isModalVisible={isLoginModalVisible}
        onBackdropClick={() => setIsLoginModalVisible(false)}
      />
    );
  }

  if (!isModalVisiblee) {
    return null;
  }

  return (
    <Modal onBackdropClicke={onBackdropClicke}>
       <AlertComponents ref={alertRef} />
      <form onSubmit={handleSubmit}>
        <Label>Sign Up</Label>
        <P>Welcome to the team</P>
        <A>Username</A>
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
        <InputsWrapper>
          <LabelContainer>
            <A>CEP</A>
            <Input $variant="Input2"
              id="cep"
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              onBlur={handleBlur}
            />
          </LabelContainer>

          <LabelContainer $variant="LabelContainer2">
            <A>Number</A>
            <Input $variant="Input2"
              id="number"
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </LabelContainer>
        </InputsWrapper>

        <A>Street</A>
        <Input
          id="street"
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
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
  );
};

export default BaseModalCadastro;
