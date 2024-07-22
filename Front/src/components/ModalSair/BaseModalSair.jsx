import React from "react";
import Modal from "./Modal";
import { Label, Botao, Botao1, Dive } from "./ModalSair.styles";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { generateDiagram } from "../../api/genereateDiagram";

const BaseModalSair = ({ onBackdropClicke, isModalVisiblee }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error("Usuário não está logado.");
      return;
    }

    try {
      await generateDiagram.delete(`/user/${userId}`);
      notify();
      
      navigate("/");
    } catch (error) {
      console.error("Erro ao deletar usuário:", error.response ? error.response.data : error.message);
    }
  };

  if (!isModalVisiblee) {
    return null;
  }

  const notify = () => toast.info('Usuário deletado.');

  return (
    <Modal onBackdropClicke={onBackdropClicke}>
      <>
        <Label>Tem certeza que deseja excluir sua conta?</Label>
        <Dive>
          <Botao onClick={handleDelete}>Sim</Botao>
          <Botao1 onClick={onBackdropClicke}>Não</Botao1>
        </Dive>
      </>
    </Modal>
  );
};

export default BaseModalSair;
