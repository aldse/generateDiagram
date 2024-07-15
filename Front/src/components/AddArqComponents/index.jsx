import React, { useCallback, useState, useRef } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { Image } from "react-bootstrap";
import styles from "./styles.module.scss";
import bosch from "../../assets/bosch.png";
import image from "../../assets/image1.png";
import perfil from "../../assets/icone.png";
import add from "../../assets/add.png";
import but from "../../assets/but.png";
import BaseModalWrapper from "../ModalPopUp/BaseModalWrapper";
import Button from "react-bootstrap/Button";

function AddArqComponents() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        const result = await fetch("https://httpbin.org/post", {
          method: "POST",
          body: formData,
        });

        const data = await result.json();

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.centerimg}>
          <Image src={bosch} className={styles.im} alt="Logo cima" />
        </div>
        <div></div>
      </div>
      <div className={styles.butao}>
        <Button className={styles.vem} onClick={toggleModal}>
        <Image src={perfil} className={styles.perfil} alt="Perfil" />
        </Button>
        <BaseModalWrapper
          isModalVisible={isModalVisible}
          onBackdropClick={toggleModal}
        />
      </div>
      <div className={styles.container2}>
        <div className={styles.aling}>
          <div className={styles.alinhadnh}>
            <div className={styles.label}>
              <p className={styles.p1}>GERE SEU</p>
              <p className={styles.p11}>DIAGRAMA</p>
              <p className={styles.p2}>
                Faça UPLOAD ou arraste e solte os arquivos necessários na área
                designada ao lado.
              </p>
            </div>
            <a className={styles.a} href="#" onClick={handleUpload}>
              <p className={styles.p}>GERAR DIAGRAMA</p>
              <Image src={but} className={styles.im3} alt="botão" />
            </a>
          </div>
          <div className={styles.ima}>
            <div>
              <input
                ref={fileInputRef}
                className={styles.input}
                id="file"
                type="file"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <Image
                src={add}
                alt=" botao"
                className={styles.im4}
                onClick={handleImageClick}
              />
            </div>
            <Image
              src={image}
              className={styles.im2}
              alt="imagem principal botao"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddArqComponents;
