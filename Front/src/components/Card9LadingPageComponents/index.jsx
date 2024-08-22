import React, { useState } from "react";
import { Image, Button, Form } from "react-bootstrap";
import styles from "./styles.module.scss";
import zero from "../../assets/0.png";
import um from "../../assets/1.png";
import dois from "../../assets/2.png";
import tres from "../../assets/3.png";
import quatro from "../../assets/4.png";
import cinco from "../../assets/5.png";

function Card9LadingPageComponents({ showAlert }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentImage, setCurrentImage] = useState(zero);
  const [feedbackText, setFeedbackText] = useState("");

  const regions = [
    { xMin: 0, xMax: 0.2, yMin: 0, yMax: 1, image: um },
    { xMin: 0.2, xMax: 0.4, yMin: 0, yMax: 1, image: dois },
    { xMin: 0.4, xMax: 0.6, yMin: 0, yMax: 1, image: tres },
    { xMin: 0.6, xMax: 0.8, yMin: 0, yMax: 1, image: quatro },
    { xMin: 0.8, xMax: 1, yMin: 0, yMax: 1, image: cinco }
  ];

  const handleImageClick = (event) => {
    const { offsetX, offsetY, target } = event.nativeEvent;
    const { width, height } = target;

    const xPercent = offsetX / width;
    const yPercent = offsetY / height;

    const clickedRegion = regions.find(
      (region) =>
        xPercent >= region.xMin &&
        xPercent <= region.xMax &&
        yPercent >= region.yMin &&
        yPercent <= region.yMax
    );

    setCurrentImage(clickedRegion ? clickedRegion.image : zero);
  };

  const handleFeedbackChange = (event) => {
    setFeedbackText(event.target.value);
  };

 const handleSubmit = () => {
  if (currentImage === zero) {
    showAlert('Opinião sobre a página não inserida', 'Selecione uma opinião nos emojis.', 'Opinião sobre a página não inserida');
    return;
  }
  if (!selectedCategory) {
    showAlert('Categoria do Feedback não inserida', 'Insira uma categoria para nós sabermos o nicho que o assunto se insere.', 'Categoria do Feedback não inserida');
    return;
  }
  if (!feedbackText.trim()) {
    showAlert('Feedback não inserido', 'Digite o seu feedback no campo abaixo.', 'Feedback não inserido');
    return;
  }
    showAlert('Feedback enviado com sucesso', 'Feedback enviado.', 'Feedback enviado com sucesso');
  setSelectedCategory("");
  setCurrentImage(zero);
  setFeedbackText("");
};


  return (
    <div className={styles.card11} data-aos="zoom-in" data-aos-duration="1500">
      <p className={styles.p}>Feedback</p>
      <hr className={styles.linha} />
      <h1 className={styles.h1}>Qual sua opinião sobre a página?</h1>
      <div className={styles.envoltazero}>
        <Image 
          src={currentImage} 
          className={styles.zero} 
          alt="Feedback"
          onClick={handleImageClick}
          style={{ cursor: 'pointer' }} 
        />
      </div>

      <h1 className={styles.h1}>Selecione a categoria do seu feedback:</h1>
      <div className={styles.selectGroup}>
        <Button
          variant={
            selectedCategory === "Sugestão" ? "primary" : "outline-primary"
          }
          onClick={() => setSelectedCategory("Sugestão")}
          className={`${styles.categoryButton} ${selectedCategory === "Sugestão" && styles.selected}`}
        >
          Sugestão
        </Button>
        <Button
          variant={
            selectedCategory === "Algo não está certo" ? "primary" : "outline-primary"
          }
          onClick={() => setSelectedCategory("Algo não está certo")}
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
          onClick={() => setSelectedCategory("Elogio")}
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
            value={feedbackText}
            onChange={handleFeedbackChange}
          />
          <Button variant="primary" className={styles.submitButton} onClick={handleSubmit}>
            Enviar Feedback
          </Button>
        </Form.Group>
      </div>
    </div>
  );
}

export default Card9LadingPageComponents;
