import React, { useCallback, useState, useRef } from "react";
import { Image } from "react-bootstrap";
import styles from "./styles.module.scss";
import bosch from "../../assets/bosch.png";
import image from "../../assets/image1.png";
import background from "../../assets/Backgrounde.png";
import perfil from "../../assets/menu.png";
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
      console.log(file);

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
    <div className={styles.roundedpolygon}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="blobClip">
            <path d="
                M 150,50
                C 180,40 250,60 210,150
                C 180,220 100,150 90,120
                C 80,80 150,50 150,50
                Z"/>
          </clipPath>
        </defs>

        <image href={background} x="0" y="0" width="300" height="200" clip-path="url(#blobClip)" />

        <path d="
            M 150,50
            C 180,40 250,60 210,150
            C 180,220 100,150 90,120
            C 80,80 150,50 150,50
            Z"
            fill="none" 
            stroke-width="2"
            />
      </svg>
      </div>

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
                Faça UPLOAD ou arraste e solte os arquivos necessários na área designada ao lado.
              </p>
            </div>
            <div className={styles.hov}>
              <a className={styles.a} href="#" onClick={handleUpload}>
                <p className={styles.p}>GERAR DIAGRAMA</p>
                <Image src={but} className={styles.im3} alt="botão" />
              </a>
            </div>
          </div>
          {/* <div className={styles.ima}>
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
          </div> */}
        </div>
      </div>
    </>
  );
}

export default AddArqComponents;
