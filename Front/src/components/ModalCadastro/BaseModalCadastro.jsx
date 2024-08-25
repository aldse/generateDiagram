import React, { useState } from "react";
import Modal from "./Modal";
import {
  Label,
  P,
  A,
  Div,
  Botao,
  Input,
  Link
} from "./ModalCadastro.styles";
import BaseModalLogin from "../ModalLogin/BaseModalLogin";

const BaseModalCadastro = ({ onBackdropClicke, isModalVisiblee }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const openLoginModal = () => {
    onBackdropClicke(); 
    setIsLoginModalVisible(true); 
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
      <Label>Sign Up</Label>
      <P>welcome to the team</P>
      <A>Name</A>
      <Input />
      <A>Email</A>
      <Input />
      <A>Password</A>
      <Input />
      <A>Confirm Password</A>
      <Input />
      <A>CEP</A>
      <Input />
      <A>Street</A>
      <Input />
      <A>Number</A>
      <Input />
      <Div>
        <Botao>Sign up</Botao>
      </Div>
      <A $variant="A2">
        Do you already have an account? 
        <Link onClick={openLoginModal}> Log In</Link>
      </A>
    </Modal>
  );
};

export default BaseModalCadastro;
