import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { generateDiagram } from "../../api/genereateDiagram";
import { useNavigate } from "react-router-dom";
import BaseModalSair from "../ModalSair/BaseModalSair";
import {
  Botao,
  Botao1,
  Botao2,
  Centralizar,
  DekstopModalContainer,
  Diva,
  Dive,
  Header,
  Input,
  Titulo,
  VAMBORA,
  Divi
} from "./ModalPopup.styles";

const BaseModalWrapper = ({ onBackdropClick, isModalVisible }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    cpf: "",
    edv: "",
    cep: "",
    street: "",
    number: "",
    password: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...userData });

  const navigate = useNavigate();

  useEffect(() => {
    if (isModalVisible) {
      fetchData();
    }
  }, [isModalVisible]);

  const fetchData = async () => {
    const userId = localStorage.getItem('userId');
    console.log("ID do usuário:", userId);
    if (!userId) {
      console.error("Usuário não está logado.");
      return;
    }
  
    try {
      const response = await generateDiagram.get(`/user/${userId}`);
      setUserData(response.data);
      setEditData(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error("Usuário não está logado.");
      return;
    }
  
    try {
      await generateDiagram.put(`/user/${userId}`, editData);
      setUserData(editData);
      setIsEditing(false);
    } catch (error) {
      console.error("Erro ao atualizar dados do usuário:", error.response ? error.response.data : error.message);
    }
  };
  
  const handleCancel = () => {
    setEditData(userData);
    setIsEditing(false);
  };

  const { name, email, cpf, edv, cep, street, number } = userData;

  const [isModalVisiblee, setIsModalVisiblee] = useState(false);
  const toggleModale = () => {
    setIsModalVisiblee((wasModalVisiblee) => !wasModalVisiblee);
  };

  if (!isModalVisible) {
    return null;
  }

  return (
    <Modal onBackdropClick={onBackdropClick}>
      <DekstopModalContainer onClick={onBackdropClick}>
        <VAMBORA onClick={(e) => e.stopPropagation()}>
          <Titulo>PERFIL</Titulo>
          {isEditing ? (
            <Diva>
              <Header>
                Nome: <Input type="text" name="name" value={editData.name} onChange={handleInputChange} />
              </Header>
              <Header>
                Email: <Input type="email" name="email" value={editData.email} onChange={handleInputChange} />
              </Header>
              <Header>
                Cpf: <Input type="text" name="cpf" value={editData.cpf} onChange={handleInputChange} />
              </Header>
              <Header>
                EDV: <Input type="text" name="edv" value={editData.edv} onChange={handleInputChange} />
              </Header>
              <Header>
                Cep: <Input type="text" name="cep" value={editData.cep} onChange={handleInputChange} />
              </Header>
              <Header>
                Rua: <Input type="text" name="street" value={editData.street} onChange={handleInputChange} />
              </Header>
              <Header>
                Número: <Input type="text" name="number" value={editData.number} onChange={handleInputChange} />
              </Header>
            </Diva>
          ) : (
            <Dive>
              <Header>Nome: {name}</Header>
              <Header>Email: {email}</Header>
              <Header>Cpf: {cpf}</Header>
              <Header>EDV: {edv}</Header>
              <Header>Cep: {cep}</Header>
              <Header>Rua: {street}</Header>
              <Header>Número: {number}</Header>
            </Dive>
          )}
          <Centralizar>
            {isEditing ? (
              <>
                <Botao1 onClick={handleSave}>Salvar</Botao1>
                <Botao2 onClick={handleCancel}>Cancelar</Botao2>
              </>
            ) : (
              <>
                <Botao1 onClick={() => setIsEditing(true)}>Editar Perfil</Botao1>
                <Botao2 onClick={toggleModale}>Excluir Perfil</Botao2>
                <BaseModalSair isModalVisiblee={isModalVisiblee} onBackdropClicke={toggleModale} />
              </>
            )}
          </Centralizar>
          <Divi>
            <Botao onClick={() => navigate("/logout")}>Sair</Botao>
  
          </Divi>
        </VAMBORA>
      </DekstopModalContainer>
    </Modal>
  );
};

export default BaseModalWrapper;
