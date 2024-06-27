import React from "react";
import bosch from "../../assets/bosch.png";
import image from "../../assets/image2.png";
import but from "../../assets/but.png";
import { Image } from "react-bootstrap";
import styles from "./styles.module.scss";

function AddArqComponents() {
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
              <p className={styles.p1}>GERE SEU DIAGRAMA</p>
              <p className={styles.p2}>
                Faça UPLOAD ou arraste e solte os arquivos necessários na área
                designada ao lado.
              </p>
            </div>
            <Image src={but} className={styles.im3} alt="botão"/>
          </div>
          <div className={styles.ima}>
            <Image src={image} className={styles.im2} alt="imagem principal add"/>
          </div>
        </div>
          
      </div>
    </>
  );
}

export default AddArqComponents;
