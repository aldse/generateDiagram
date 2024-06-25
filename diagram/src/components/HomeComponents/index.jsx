import styles from "./styles.module.scss";
import roberto from "../../assets/Roberto.png";
import logo from "../../assets/label bosch.png";
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";

function HomeComponents() {
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
            <label className={styles.label} htmlFor="user">
              Usuário
            </label>
            <Form.Floating className="mb-3">
              <Form.Control
                className={styles.a}
                id="user"
                type="username"
                placeholder="Digite seu usuário"
              />
            </Form.Floating>
          </div>
        </div>
        <div className={styles.bluelabelinput2}>
          <div className={styles.ff}>
            <label className={styles.label} htmlFor="senha">
              Senha
            </label>
            <Form.Floating className="mb-3">
              <Form.Control
                className={styles.a}
                id="senha"
                type="password"
                placeholder="Digite sua senha"
              />
            </Form.Floating>
          </div>
        </div>
        <Button className={styles.red}>Entrar</Button>
        <Button className={styles.link}>Cadastre-se aqui</Button>
      </div>
    </div>
  );
}

export default HomeComponents;
