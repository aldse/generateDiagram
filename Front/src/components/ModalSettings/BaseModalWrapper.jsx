import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../../context/authContext";
import { generateDiagram, fetchAddressByCep } from "../../api/index";
import { useNavigate } from "react-router-dom";
import BaseModalSair from "../ModalExit/BaseModalSair";
import {
  ModalContainer,
  ProfileContainer,
  ProfileHeader,
  Input,
  ModalTitle,
  ModalSubtitle,
  ButtonGroup,
  ProfileLabel,
  ButtonEdit,
  ButtonDelete,
  ButtonSave,
  ModalTitle2,
  Encompass,
  Background,
  BackgroundContainer,
} from "./ModalPopup.styles";
import Translate from "../TranslateComponents/index";

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
      console.log(response.data)
    

    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    }
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "cep") {
      try {
        const data = await fetchAddressByCep(value);
        if (data) {
          setEditData((prevData) => ({
            ...prevData,
            street: data.logradouro,
          }));
        }
      } catch (error) {
        if (alertRef.current) {
          alertRef.current.addAlert(
            'Informações inválidas',
            'Informações inválidas',
            'CEP não encontrado. Verifique o CEP informado.'
          );
        }
      }
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

  if (!isModalVisible) {
    return null;
  }

  const translate = localStorage.getItem("translate") || "eng";
  return (
    <Modal onBackdropClick={onBackdropClick}>
      <ModalContainer onClick={onBackdropClick}>
        <ModalSubtitle onClick={(e) => e.stopPropagation()}>
          <ModalTitle $language={translate}>{Translate.getText("title1", translate)}</ModalTitle>
          <ModalTitle2 $language={translate}>{Translate.getText("title2", translate)}</ModalTitle2>
          {isEditing ? (
            <ProfileContainer>
              <ProfileHeader>
                <ProfileLabel $language={translate}>{Translate.getText("name", translate)}:</ProfileLabel>
                <Encompass>
                  <Input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleInputChange}
                  />
                </Encompass>
              </ProfileHeader>
              <ProfileHeader>
                <ProfileLabel $language={translate}>{Translate.getText("email", translate)}:</ProfileLabel>
                <Encompass>
                  <Input
                    type="email"
                    name="email"
                    value={editData.email}
                    onChange={handleInputChange}
                  />
                </Encompass>
              </ProfileHeader>
              <ProfileHeader>
                <ProfileLabel $language={translate}>{Translate.getText("cep", translate)}:</ProfileLabel>
                <Encompass>
                  <Input
                    type="text"
                    name="cep"
                    value={editData.cep}
                    onChange={handleInputChange}
                  />
                </Encompass>
              </ProfileHeader>
              <ProfileHeader>
                <ProfileLabel $language={translate}>{Translate.getText("street", translate)}:</ProfileLabel>
                <Encompass>
                  <Input
                    type="text"
                    name="street"
                    value={editData.street}
                    onChange={handleInputChange}
                    readOnly
                  />
                </Encompass>
              </ProfileHeader>
              <ProfileHeader>
                <ProfileLabel $language={translate}>{Translate.getText("number", translate)}:</ProfileLabel>
                <Encompass>
                  <Input
                    type="text"
                    name="number"
                    value={editData.number}
                    onChange={handleInputChange}
                  />
                </Encompass>
              </ProfileHeader>
            </ProfileContainer>
          ) : (
            <ProfileContainer>
              <ProfileHeader>
                <ProfileLabel $language={translate}>{Translate.getText("name", translate)}:</ProfileLabel>
                <Encompass>{userData.name}</Encompass>
              </ProfileHeader>
              <ProfileHeader>
                <ProfileLabel $language={translate}>{Translate.getText("email", translate)}:</ProfileLabel>
                <Encompass>{userData.email}</Encompass>
              </ProfileHeader>
              <ProfileHeader>
                <ProfileLabel $language={translate}>{Translate.getText("cep", translate)}:</ProfileLabel>
                <Encompass>{userData.cep}</Encompass>
              </ProfileHeader>
              <ProfileHeader>
                <ProfileLabel $language={translate}>{Translate.getText("street", translate)}:</ProfileLabel>
                <Encompass>{userData.street}</Encompass>
              </ProfileHeader>
              <ProfileHeader>
                <ProfileLabel $language={translate}>{Translate.getText("number", translate)}:</ProfileLabel>
                <Encompass>{userData.number}</Encompass>
              </ProfileHeader>
            </ProfileContainer>
          )}
          {isEditing ? (
            <ButtonGroup>
              <ButtonSave onClick={handleSave} $language={translate}>{Translate.getText("save", translate)}</ButtonSave>
              <ButtonDelete onClick={handleCancel} $language={translate}>{Translate.getText("cancel", translate)}</ButtonDelete>
            </ButtonGroup>
          ) : (
            <ButtonGroup>
              <ButtonEdit onClick={() => setIsEditing(true)} $language={translate}>
              {Translate.getText("edit", translate)}
              </ButtonEdit>
              <ButtonDelete onClick={toggleModale} $language={translate}>{Translate.getText("delete", translate)}</ButtonDelete>
              <BaseModalSair
                userId={userId}
                isModalVisiblee={isModalVisiblee}
                onBackdropClicke={toggleModale}
              />
            </ButtonGroup>
           )}
           <BackgroundContainer>
            <Background />
          </BackgroundContainer>
        </ModalSubtitle>
      </ModalContainer>
    </Modal>
  );
};

export default BaseModalWrapper;
