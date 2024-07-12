import React, { useState, useEffect  } from "react";
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
import { generateDiagram } from "../../api/genereateDiagram2";
import { useNavigate } from "react-router-dom";


interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({
  onBackdropClick,
  isModalVisible,
}) => {
  const [userData, setUserData] =useState<any>({
    name: "",
    email: "",
    cpf: "",
    edv: "",
    cep: "",
    street: "",
    number: "",
    password: "",
  });
  
  const navigate = useNavigate();

   useEffect(() => {
    if (isModalVisible) {
      fetchData(); 
    }
  }, [isModalVisible]); 

  const fetchData = async () => {
    try {
      const response = await generateDiagram.get("/user/");
      setUserData(response.data); 
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    }
  };

  if (!isModalVisible) {
    return null;
  }

  const { name, email, cpf, edv, cep, street, number, password } = userData;

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
          <Botao onClick={() => navigate("/logout")}>Sair</Botao>
        </VAMBORA>
      </DekstopModalContainer>
    </Modal>
  );
};

export default BaseModalWrapper;
