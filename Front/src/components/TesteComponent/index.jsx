import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import JSZip from "jszip";
import axios from "axios";

const TesteComponent = () => {
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      console.log("Rejected files:", rejectedFiles);
      alert("Alguns arquivos foram rejeitados porque não são arquivos .zip.");
      return;
    }
  
    const formData = new FormData();
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
            if (error.response) {
              // O servidor retornou um status de erro
              console.error("Error response from server:", error.response.data);
              console.error("Status code:", error.response.status);
              alert("Erro ao enviar arquivos. Status: " + error.response.status);
            } else if (error.request) {
              // A requisição foi feita, mas não houve resposta
              console.error("No response from server:", error.request);
              alert("Erro ao enviar arquivos. Sem resposta do servidor.");
            } else {
              // Ocorreu um erro durante a configuração da requisição
              console.error("Error setting up request:", error.message);
              alert("Erro ao enviar arquivos. Erro na configuração da requisição.");
            }
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
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Arraste e solte arquivos ZIP aqui, ou clique para selecionar.</p>
    </div>
  );
};

export default TesteComponent;
