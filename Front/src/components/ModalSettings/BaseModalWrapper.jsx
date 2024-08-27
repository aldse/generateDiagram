import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../../context/authContext";
import { generateDiagram } from "../../api/genereateDiagram";
import { useNavigate } from "react-router-dom";
import BaseModalSair from "../ModalExit/BaseModalSair";
import {
  Botao,
  DekstopModalContainer,
  BaseContainer,
  BaseHeader,
  Input,
  Titulo,
  VAMBORA,
  Divi,
  BaseLabel,
  BotaoOrange,
  BotaoRed,
  BotaoGreen,
  Titulo2,
  BaseContent,
  DiminuirTam,
  Imagem,
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
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [isModalVisiblee, setIsModalVisiblee] = useState(false);
  const alertRef = useRef(null);

  useEffect(() => {
    console.log("Buscando ID do usuário para carregar dados...");
    const id = getUserIdFromToken();
    setUserId(id);
    if (id) {
      fetchData(id);
    }
  }, []);

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("Token não encontrado.");
      return null;
    }

    try {
      const decoded = jwtDecode(token);
      return decoded.id;
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      return null;
    }
  };

  const fetchData = async (id) => {
    if (!id) {
      console.error("Usuário não está logado.");
      return;
    }

    try {
      const response = await generateDiagram.get(`/user/${id}`);
      setUserData(response.data);
      setEditData(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    }
  };

  const fetchAddressByCep = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;

      if (!data.erro) {
        setEditData((prevData) => ({
          ...prevData,
          street: data.logradouro,
        }));
      } else {
        if (alertRef.current) {
          alertRef.current.addAlert('Informações inválidas', 'Informações inválidas', 'CEP não encontrado. Verifique o CEP informado.');
        }
      }
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEditData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "cep") {
      fetchAddressByCep(value);
    }
  };

  const handleSave = async () => {
    if (!userId) {
      console.error("Usuário não está logado.");
      return;
    }

    try {
      await generateDiagram.put(`/user/${userId}`, editData);
      setUserData(editData);
      setIsEditing(false);
    } catch (error) {
      console.error("Erro ao atualizar dados do usuário:", error);
    }
  };

  const handleCancel = () => {
    setEditData(userData);
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleModale = () => {
    setIsModalVisiblee((wasModalVisiblee) => !wasModalVisiblee);
  };

  const handleImageClick = () => {
    onBackdropClick();
  };

  if (!isModalVisible) {
    return null;
  }

  return (
    <Modal onBackdropClick={onBackdropClick}>
      <DekstopModalContainer onClick={onBackdropClick}>
        <VAMBORA onClick={(e) => e.stopPropagation()}>
          <Imagem onClick={handleImageClick}></Imagem>
          <Titulo>DADOS</Titulo>
          <Titulo2> PESSOAIS</Titulo2>
          {isEditing ? (
            <BaseContainer>
              <BaseHeader>
                <BaseLabel>Nome:</BaseLabel>{" "}
                <BaseContent>
                <Input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleInputChange}
                  />
                  </BaseContent>
              </BaseHeader>
              <BaseHeader>
                <BaseLabel>Email:</BaseLabel>{" "}
                <BaseContent>
                <Input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleInputChange}
                />
                </BaseContent>
              </BaseHeader>
              <BaseHeader>
                <BaseLabel>Cep:</BaseLabel>{" "}
                <BaseContent>
                <Input
                  type="text"
                  name="cep"
                  value={editData.cep}
                  onChange={handleInputChange}
                />
                </BaseContent>
              </BaseHeader>
              <BaseHeader>
                <BaseLabel>Rua:</BaseLabel>
                <BaseContent>
                <Input
                  type="text"
                  name="street"
                  value={editData.street}
                  onChange={handleInputChange}
                  readOnly
                />
                </BaseContent>
              </BaseHeader>
              <BaseHeader>
                <BaseLabel>Número:</BaseLabel>
                <BaseContent>
                <Input
                  type="text"
                  name="number"
                  value={editData.number}
                  onChange={handleInputChange}
                />
                </BaseContent>
              </BaseHeader>
            </BaseContainer>
          ) : (
            <BaseContainer>
              <BaseHeader><BaseLabel>Nome:</BaseLabel><BaseContent>{userData.name} </BaseContent></BaseHeader>
              <BaseHeader><BaseLabel>Email:</BaseLabel><BaseContent>{userData.email}</BaseContent></BaseHeader>
              <BaseHeader><BaseLabel>Cep:</BaseLabel><BaseContent>{userData.cep}</BaseContent></BaseHeader>
              <BaseHeader><BaseLabel>Rua:</BaseLabel><BaseContent>{userData.street}</BaseContent></BaseHeader>
              <BaseHeader><BaseLabel>Número:</BaseLabel><BaseContent>{userData.number}</BaseContent></BaseHeader>
            </BaseContainer>
          )}
          {isEditing ? (
            <Divi>
            <BotaoGreen onClick={handleSave}>Salvar</BotaoGreen>
            <BotaoRed onClick={handleCancel}>Cancelar</BotaoRed>
            <DiminuirTam>
            <Botao onClick={handleLogout}>Sair</Botao>
            </DiminuirTam>
          </Divi>
           ) : (
             <Divi>
              <BotaoOrange onClick={() => setIsEditing(true)}>Editar Perfil</BotaoOrange>
              <BotaoRed onClick={toggleModale}>Excluir Perfil</BotaoRed>
              <BaseModalSair
                userId={userId}
                isModalVisiblee={isModalVisiblee}
                onBackdropClicke={toggleModale}
              />
              <DiminuirTam>
             <Botao onClick={handleLogout}>Sair</Botao>
              </DiminuirTam>
            </Divi>
           )}
        </VAMBORA>
      </DekstopModalContainer>
    </Modal>
  );
};

export default BaseModalWrapper;
