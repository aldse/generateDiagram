import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Image, Button, Form } from "react-bootstrap";
import zero from "../../assets/0.png";
import um from "../../assets/1.png";
import dois from "../../assets/2.png";
import tres from "../../assets/3.png";
import quatro from "../../assets/4.png";
import cinco from "../../assets/5.png";

function Card9LadingPageComponents() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.card11} data-aos="zoom-in" data-aos-duration="1500">
      <p className={styles.p}>Feedback</p>
      <hr className={styles.linha} />
      <h1 className={styles.h1}>Qual sua opinião sobre a página?</h1>
      <div className={styles.envoltazero}>
        <Image src={zero} className={styles.zero} alt="Zero" />
      </div>

      <h1 className={styles.h1}>Selecione a categoria do seu feedback:</h1>
      <div className={styles.selectGroup}>
        <Button
          variant={
            selectedCategory === "Sugestão" ? "primary" : "outline-primary"
          }
          onClick={() => handleCategoryClick("Sugestão")}
          className={`${styles.categoryButton} ${selectedCategory === "Sugestão" && styles.selected}`}
        >
          Sugestão
        </Button>
        <Button
          variant={
            selectedCategory === "Algo não está certo" ? "primary" : "outline-primary"
          }
          onClick={() => handleCategoryClick("Algo não está certo")}
          className={`${styles.categoryButton} ${selectedCategory === "Algo não está certo" && styles.selected}`}
        >
          Algo não está certo
        </Button>
        <Button
          variant={
            selectedCategory === "Elogio"
              ? "primary"
              : "outline-primary"
          }
          onClick={() => handleCategoryClick("Elogio")}
          className={`${styles.categoryButton} ${selectedCategory === "Elogio" && styles.selected}`}
        >
          Elogio
        </Button>
      </div>

      <h1 className={styles.h1}>Por favor, deixe seu feedback abaixo:</h1>
      <div className={styles.centralizar}>
        <Form.Group className={styles.feedbackGroup}>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Digite seu feedback aqui..."
            className={styles.textarea}
          />
          <Button variant="primary" className={styles.submitButton}>
            Enviar Feedback
          </Button>
        </Form.Group>
      </div>
    </div>
  );
}

export default Card9LadingPageComponents;
