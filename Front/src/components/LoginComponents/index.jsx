import styles from "./styles.module.scss";
import roberto from "../../assets/Roberto.png";
import logo from "../../assets/label bosch.png";
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { generateDiagram } from "../../api/genereateDiagram";
import { useNavigate } from "react-router-dom";

function LoginComponents() {
  const [edv, setEdv] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await generateDiagram.post("/user/login", {
        edv,
        password,
      });
      const data = response.data; 
      
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      // login(data.token);
      console.log("Login successful!");
      navigate("/home");
    } catch (error) {
      console.error("Erro ao chamar a API:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.white}>
        <div className={styles.imagecontainer1}>
          <Image src={logo} className={styles.im} alt="Logo" />
        </div>
        <div className={styles.imagecontainer}>
          <Image src={roberto} className={styles.rob} alt="Roberto" />
        </div>
      </div>
      <div className={styles.blue}>
        <div className={styles.bluelabel1}>
          <p className={styles.p}>Login</p>
        </div>
        <div className={styles.bluelabelinput1}>
          <div className={styles.ff}>
            <label className={styles.label} htmlFor="edv">
              EDV
            </label>
            <Form.Floating className="mb-3">
              <Form.Control
                className={styles.a}
                id="edv"
                type="text"
                placeholder="Digite seu edv"
                value={edv}
                onChange={(e) => setEdv(e.target.value)}
              />
            </Form.Floating>
          </div>
        </div>
        <div className={styles.bluelabelinput2}>
          <div className={styles.ff}>
            <label className={styles.label} htmlFor="password">
              Senha
            </label>
            <Form.Floating className="mb-3">
              <Form.Control
                className={styles.a}
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Floating>
          </div>
        </div>
        <Button className={styles.red} onClick={handleSubmit}>
          Entrar
        </Button>
        <Link to="/cadastro" className={styles.linka}>
          <Button className={styles.link}>Cadastre-se aqui</Button>
        </Link>
      </div>
    </div>
  );
}

export default LoginComponents;
