import styles from "./styles.module.scss";
import roberto from "../../assets/Roberto.png";
import logo from "../../assets/label bosch.png";
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import { Link } from 'react-router-dom';

function CadastroComponents() {
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
          <p className={styles.p}>Cadastro</p>
        </div>

        <div className={styles.bluelabelinput1}>
          <div className={styles.ff}>
            <label className={styles.label} htmlFor="user">
              Nome
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
              Email
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

        <div className={styles.bluelabelinput2}>
          <div className={styles.ff}>
            <label className={styles.label} htmlFor="senha">
              Cpf
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

        <div className={styles.bluelabelinput2}>
          <div className={styles.ff}>
            <label className={styles.label} htmlFor="senha">
              EDV
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

        <div className={styles.bluelabelinput3}>
          <div className={styles.ff}>
            <label className={styles.label} htmlFor="senha">
              CEP
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

        <div className={styles.bluelabelinput3}>
          <div className={styles.ff}>
            <label className={styles.label} htmlFor="senha">
              Rua
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

        <div className={styles.bluelabelinput3}>
          <div className={styles.ff}>
            <label className={styles.label} htmlFor="senha">
              Numero
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

        <div className={styles.bluelabelinput3}>
          <div className={styles.ff}>
            <label className={styles.label} htmlFor="senha">
              Complemento
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

        <div className={styles.bluelabelinput2}>
          <div className={styles.ff}>
            <label className={styles.label} htmlFor="senha">
              Confirme sua senha
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
        <Link to="/page2" className={styles.linka}>
        <Button className={styles.link}>Cadastre-se aqui</Button>
        </Link>
      </div>
    </div>
  );
}

export default CadastroComponents;
