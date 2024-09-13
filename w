import React, { useState, useRef, useEffect } from "react";
import { Image } from "react-bootstrap";
import generateHereEn from "../../assets/geraraquiingles.png";
import generateHerePt from "../../assets/geraraquiportugues.png";
import generateHereEs from "../../assets/geraraquiespanhol.png";
import inputAdd from "../../assets/inputAdd.webp";
import { Link } from "react-router-dom";
import Translate from "../TranslateComponents/index"; 

function HomeComponents() {
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

  useEffect(() => {
    const container = document.getElementById('scrollContainer');
    if (container) {
      container.classList.add(styles.noScroll);
    }

    return () => {
      if (container) {
        container.classList.remove(styles.noScroll);
      }
    };
  }, []);

  const translate = localStorage.getItem("translate") || "eng";
  console.log("Translate language:", translate);
  return (
    <>
      <div className={styles.secondaryContainer}>
        <div className={styles.alignCenter}>
        <p className={styles.mainTitle}>{Translate.getText("generateTitle1", translate)}</p>
            <p className={styles.subtitle}>{Translate.getText("generateTitle2", translate)}</p>
            <p className={styles.contentText}>
              {Translate.getText("textGenerate", translate)}
            </p>

          <div className={styles.uploadArea}>
            <input
              ref={fileInputRef}
              id="file"
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <img
              src={inputAdd}
              className={styles.uploadButton}
              alt="input arquivos"
              onClick={handleImageClick}
            />
          </div>

          <div className={styles.hoverEffect}>
            <a href="#" onClick={handleUpload}>
              <Image
                src={generateHereEn}
                className={styles.actionButtonImage}
                alt="button generate Here"
              />
            </a>
            </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default HomeComponents;
