import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import backgroundModal from "../../assets/red.png";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; 
`;

const ModalContent = styled.div`
  background-image: url(${backgroundModal});
  background-size: fill;
  background-repeat: no-repeat;
  background-position: center;
  width: 40%;
  height: 25%;
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: auto; 
  scrollbar-width: none;
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
