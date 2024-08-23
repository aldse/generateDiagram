import React from "react";
import Modal from "./Modal";
import { Label, P, A, Div, Botao, Image, A2, Input, Link } from "./ModalCadastro.styles";
import { useNavigate } from "react-router-dom";

const BaseModalCadastro = ({ userId, onBackdropClick, isModalVisiblee }) => {
  const navigate = useNavigate();

  if (!isModalVisiblee) {
    return null;
  }

  const handleBackdropClick = () => {
    onBackdropClick(); 
    navigate("/"); 
  };

  return (
    <Modal onBackdropClick={onBackdropClick}>
      <>
        <Label>CADASTRO</Label>
        <P>to start diagraming</P>
        <A>Username</A>
        <Input></Input>
        <A>Password</A>
        <Input></Input>
        <Div>
        <Botao>Log in</Botao>
        <Image></Image>
        </Div>
        <A2>
          Don’t have an account? <Link href="/signup"> Sign Up </Link>  now!
        </A2>
      </>
    </Modal>
  );
};

export default BaseModalCadastro;
