import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../../context/authContext";
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
  Divi,
  Letras,
  Header2,
  Botao3,
  Botao4,
  Negr,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
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
              <Header2>
                <Letras>Nome:</Letras>{" "}
                <Input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleInputChange}
                />
              </Header2>
              <Header2>
                <Letras>Email:</Letras>{" "}
                <Input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleInputChange}
                />
              </Header2>
              <Header2>
                <Letras>Cpf:</Letras>{" "}
                <Input
                  type="text"
                  name="cpf"
                  value={editData.cpf}
                  onChange={handleInputChange}
                />
              </Header2>
              <Header2>
                <Letras>EDV:</Letras>{" "}
                <Input
                  type="text"
                  name="edv"
                  value={editData.edv}
                  onChange={handleInputChange}
                />
              </Header2>
              <Header2>
                <Letras>Cep:</Letras>{" "}
                <Input
                  type="text"
                  name="cep"
                  value={editData.cep}
                  onChange={handleInputChange}
                />
              </Header2>
              <Header2>
                <Letras>Rua:</Letras>
                <Input
                  type="text"
                  name="street"
                  value={editData.street}
                  onChange={handleInputChange}
                />
              </Header2>
              <Header2>
                <Letras>Número:</Letras>
                <Input
                  type="text"
                  name="number"
                  value={editData.number}
                  onChange={handleInputChange}
                />
              </Header2>
            </Diva>
          ) : (
            <Dive>
              <Header><Negr>Nome:</Negr> {userData.name}</Header>
              <Header><Negr>Email:</Negr>{userData.email}</Header>
              <Header><Negr>Cpf:</Negr>{userData.cpf}</Header>
              <Header><Negr>EDV:</Negr>{userData.edv}</Header>
              <Header><Negr>Cep:</Negr>{userData.cep}</Header>
              <Header><Negr>Rua:</Negr>{userData.street}</Header>
              <Header><Negr>Número:</Negr>{userData.number}</Header>
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
                <Botao3 onClick={() => setIsEditing(true)}>
                  Editar Perfil
                </Botao3>
                <Botao4 onClick={toggleModale}>Excluir Perfil</Botao4>
                <BaseModalSair
                  userId={userId}
                  isModalVisiblee={isModalVisiblee}
                  onBackdropClicke={toggleModale}
                />
              </>
            )}
          </Centralizar>
          <Divi>
            <Botao onClick={handleLogout}>Sair</Botao>
          </Divi>
        </VAMBORA>
      </DekstopModalContainer>
    </Modal>
  );
};

export default BaseModalWrapper;
