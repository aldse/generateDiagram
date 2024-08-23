import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

// Contêiner do modal
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Mais escuro para maior contraste */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: auto; /* Permite rolar o fundo se necessário */
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 35px; 
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 414.43px; 
  height: 808.51px; 
  overflow: auto; 
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none; 
  }
`;

const Modal = ({ onBackdropClicke, children }) => {
  const handleModalClick = (e) => {
    e.stopPropagation(); // Impede que o clique no conteúdo feche o modal
  };

  return ReactDOM.createPortal(
    <ModalContainer onClick={onBackdropClicke}>
      <ModalContent onClick={handleModalClick}>
        {children}
      </ModalContent>
    </ModalContainer>,
    document.getElementById("modal-root")
  );
};

export default Modal;
