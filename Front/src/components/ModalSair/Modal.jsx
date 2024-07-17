import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 50px; /* Aumenta o padding interno para aumentar o espaço branco */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: calc(100% - 40px); 
  max-height: calc(100% - 40px); 
  overflow: auto;
`;

const Modal = ({ onBackdropClicke, children }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
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
