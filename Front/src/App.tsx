import "./App.css";
import { useState } from "react";
import BaseModalWrapper from "./components/ModalPopUp/BaseModalWrapper";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }

  return (
    <>
     <div className="App">
        <button>SHOW MODAL</button>
        <BaseModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal}/>
     </div>
    </>
  );
}

export default App;
