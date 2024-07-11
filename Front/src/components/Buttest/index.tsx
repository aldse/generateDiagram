import { useState } from "react";
import BaseModalWrapper from "../ModalPopUp/BaseModalWrapper";
import Button from "react-bootstrap/Button";


function Buttest() {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const toggleModal = () => {
    console.log("to aqui");
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }
    
  return (
    <>
        <Button onClick={toggleModal}>SHOW MODAL</Button>
        <BaseModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal}/>
    </>
  );
}

export default Buttest;
