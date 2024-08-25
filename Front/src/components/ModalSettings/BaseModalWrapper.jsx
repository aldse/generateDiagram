import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../../context/authContext";
import { generateDiagram } from "../../api/genereateDiagram";
import { useNavigate } from "react-router-dom";
import BaseModalSair from "../ExitComponents/BaseModalSair";
import {
  Botao,
  Botao1,
  Botao2,
  DekstopModalContainer,
  Diva,
  Dive,
  Header,
  Input,
  Titulo,
  VAMBORA,
  Divi,
  Letras,
  Header2,
  Botao3,
  Botao4,
  Negr,
  Titulo2,
  Content,
  DiminuirTam,
  Imagem,
  Content2,
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
            <Diva>
              <Header2>
                <Letras>Nome:</Letras>{" "}
                <Content2>
                <Input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleInputChange}
                  />
                  </Content2>
              </Header2>
              <Header2>
                <Letras>Email:</Letras>{" "}
                <Content2>
                <Input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleInputChange}
                />
                </Content2>
              </Header2>
              <Header2>
                <Letras>Cpf:</Letras>{" "}
                <Content2>
                <Input
                  type="text"
                  name="cpf"
                  value={editData.cpf}
                  onChange={handleInputChange}
                />
                 </Content2>
              </Header2>
              <Header2>
                <Letras>Cep:</Letras>{" "}
                <Content2>
                <Input
                  type="text"
                  name="cep"
                  value={editData.cep}
                  onChange={handleInputChange}
                />
                </Content2>
              </Header2>
              <Header2>
                <Letras>Rua:</Letras>
                <Content2>
                <Input
                  type="text"
                  name="street"
                  value={editData.street}
                  onChange={handleInputChange}
                  readOnly
                />
                </Content2>
              </Header2>
              <Header2>
                <Letras>Número:</Letras>
                <Content2>
                <Input
                  type="text"
                  name="number"
                  value={editData.number}
                  onChange={handleInputChange}
                />
                </Content2>
              </Header2>
            </Diva>
          ) : (
            <Dive>
              <Header><Negr>Nome:</Negr><Content>{userData.name} </Content></Header>
              <Header><Negr>Email:</Negr><Content>{userData.email}</Content></Header>
              <Header><Negr>Cpf:</Negr><Content>{userData.cpf}</Content></Header>
              <Header><Negr>Cep:</Negr><Content>{userData.cep}</Content></Header>
              <Header><Negr>Rua:</Negr><Content>{userData.street}</Content></Header>
              <Header><Negr>Número:</Negr><Content>{userData.number}</Content></Header>
            </Dive>
          )}
          {isEditing ? (
            <Divi>
            <Botao1 onClick={handleSave}>Salvar</Botao1>
            <Botao2 onClick={handleCancel}>Cancelar</Botao2>
            <DiminuirTam>
            <Botao onClick={handleLogout}>Sair</Botao>
            </DiminuirTam>
          </Divi>
           ) : (
             <Divi>
              <Botao3 onClick={() => setIsEditing(true)}>Editar Perfil</Botao3>
              <Botao4 onClick={toggleModale}>Excluir Perfil</Botao4>
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
