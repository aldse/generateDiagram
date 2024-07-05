import React, { useCallback, useState, useRef } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { Image } from "react-bootstrap";
import styles from "./styles.module.scss";
import bosch from "../../assets/bosch.png";
import image from "../../assets/image1.png";
import add from "../../assets/add.png";
import but from "../../assets/but.png";
import JSZip from "jszip";

function AddArqComponents() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "initial" | "uploading" | "success" | "fail"
  >("initial");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setStatus("initial");
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      setStatus("uploading");

      const formData = new FormData();
      formData.append("file", file);

      try {
        const result = await fetch("https://httpbin.org/post", {
          method: "POST",
          body: formData,
        });

        const data = await result.json();

        console.log(data);
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("fail");
      }
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.centerimg}>
          <Image src={bosch} className={styles.im} alt="Logo cima" />
        </div>
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
              <Image src={add} alt=" botao" className={styles.im4} onClick={handleImageClick}/>
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
