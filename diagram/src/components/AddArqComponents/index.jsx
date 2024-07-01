import React, { useCallback, useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { DropdownButton, Dropdown, Image } from "react-bootstrap"; // Importa Dropdown e DropdownButton corretamente
import styles from "./styles.module.scss";
import bosch from "../../assets/bosch.png";
import image from "../../assets/image1.png";
import add from "../../assets/add.png";
import but from "../../assets/but.png";

function AddArqComponents() {
  const [selectedFolder, setSelectedFolder] = useState("images");

  const handleFolderChange = (folder) => {
    setSelectedFolder(folder);
  };

  const handleClick = () => {
    console.log("Botão clicado!");
  };

  const onDrop = useCallback((acceptedFiles) => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    formData.append("folder", selectedFolder);

    axios
      .post("http://localhost:8000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        alert("File uploaded successfully!");
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
        alert("Error uploading file.");
      });
  }, [selectedFolder]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
            <a className={styles.a} href="#" onClick={handleClick}>
              <p className={styles.p}>GERAR DIAGRAMA</p>
              <Image src={but} className={styles.im3} alt="botão" />
            </a>
          </div>
          <div className={styles.ima}>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <Image src={add} alt=" add" className={styles.im4} />
              ) : (
                <Image src={add} alt=" add" className={styles.im4} />
              )}
            </div>
            <Image
              src={image}
              className={styles.im2}
              alt="imagem principal add"
            />
          </div>
        </div>
      </div>
      <DropdownButton
        id="dropdown-basic-button"
        title={`Pasta selecionada: ${selectedFolder}`}
        className={styles.dropdown}
      >
        <Dropdown.Item onClick={() => handleFolderChange("images")}>
          Images
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleFolderChange("pdfs")}>
          PDFs
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleFolderChange("others")}>
          Outros
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
}

export default AddArqComponents;
