import React, { useState } from "react";
import Modal from "./Modal";
import {
  Botao,
  Botao1,
  Botao2,
  Centralizar,
  DekstopModalContainer,
  Header,
  Titulo,
  VAMBORA,
} from "./ModalPopup.styles";
import { generateDiagram } from "../../api/genereateDiagram";
import { useNavigate } from "react-router-dom";


interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const navigate = useNavigate();
const response = await generateDiagram.get("/user/", {
  name,
  email,
  cpf, 
  edv,
  cep,
  street, 
  number,
  password
});

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({
  onBackdropClick,
  isModalVisible,
}) => {
  if (!isModalVisible) {
    return null;
  }

  return (
    <Modal onBackdropClick={onBackdropClick}>
      <DekstopModalContainer>
        <VAMBORA>
          <Titulo>PERFIL</Titulo>
          <Header>Nome: {name}</Header>
          <Header>Email: {email}</Header>
          <Header>Cpf: {cpf}</Header>
          <Header>EDV: {edv}</Header>
          <Header>Cep: {cep}</Header>
          <Header>Rua: {street}</Header>
          <Header>Número: {number}</Header>
          <Header>Senha: {password}</Header>
          <Centralizar>
            <Botao1>Editar Perfil</Botao1>
            <Botao2>Excluir Perfil</Botao2>
          </Centralizar>
          <Botao>Sair</Botao>
        </VAMBORA>
      </DekstopModalContainer>
    </Modal>
  );
};

export default BaseModalWrapper;
