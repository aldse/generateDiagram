import React from "react";
import Modal from "./Modal";
import { Label, Dive } from "./ModalLogin.styles";
import { useNavigate } from "react-router-dom";

const BaseModalLogin = ({ userId, onBackdropClick, isModalVisible }) => {
  const navigate = useNavigate();

  if (!isModalVisible) {
    return null;
  }

  return (
    <Modal onBackdropClick={onBackdropClick}>
      <>
        <Label>Login</Label>
        <Dive>
        </Dive>
      </>
    </Modal>
  );
};

export default BaseModalLogin;
