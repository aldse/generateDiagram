import React, { useCallback } from "react";
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
  const handleClick = () => {
    console.log("Botão clicado!");
  };

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      console.log("Rejected files:", rejectedFiles);
      alert("Alguns arquivos foram rejeitados porque não são arquivos .zip.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    const zip = new JSZip();

    zip.loadAsync(acceptedFiles[0]).then((zipFile) => {
      const promises = [];

      zipFile.forEach((relativePath, zipEntry) => {
        if (!zipEntry.dir) {
          const promise = zipEntry.async("blob").then((fileData) => {
            formData.append("file", fileData, zipEntry.name);
          });
          promises.push(promise);
        }
      });

      Promise.all(promises).then(() => {
  
        if (formData.has("file")) {
          axios
            .post("http://localhost:8080/upload", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              timeout: 60000,
              withCredentials: true,
            })
            .then((response) => {
              console.log("Upload response:", response);
              alert("Arquivos enviados com sucesso!");
            })
            .catch((error) => {
              console.error("Error uploading files:", error);
              alert("Erro ao enviar arquivos. Consulte o console para mais detalhes.");
            });
        } else {
          alert("Nenhum arquivo encontrado no ZIP.");
        }
      });
    }).catch((zipError) => {
      console.error("Error loading ZIP file:", zipError);
      alert("Erro ao carregar arquivo ZIP. Certifique-se de que é um arquivo ZIP válido.");
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".zip",
  });

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
                Faça UPLOAD ou arraste e solte os arquivos necessários na área designada ao lado.
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
              <Image src={add} alt=" botao" className={styles.im4} />
            </div>
            <Image src={image} className={styles.im2} alt="imagem principal botao" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddArqComponents;
