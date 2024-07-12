import React from "react";
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

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

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
          <Titulo>PERFIL </Titulo>
          <Header>Nome: </Header>
          <Header>Email:</Header>
          <Header>Cpf: </Header>
          <Header>EDV:</Header>
          <Header>Cep:</Header>
          <Header>Rua:</Header>
          <Header>Número:</Header>
          <Header>Senha:</Header>
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
