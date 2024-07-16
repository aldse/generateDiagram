import styles from "./styles.module.scss";
import roberto from "../../assets/Roberto.png";
import logo from "../../assets/label bosch.png";
import { Image } from "react-bootstrap";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { generateDiagram } from "../../api/genereateDiagram";
import { useNavigate } from "react-router-dom";

function CadastroComponents() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [edv, setEdv] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const navigate = useNavigate();

  const fetchAddressByCep = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;

      if (!data.erro) {
        setStreet(data.logradouro);
      } else {
        alert("CEP não encontrado. Verifique o CEP informado.");
      }
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
    }
  };

  useEffect(() => {
    setStreet("");
  }, [cep]);

  const handleBlur = (e) => {
    fetchAddressByCep(e.target.value);
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Senhas não são iguais!");
      return;
    }
    try {
      const response = await generateDiagram.post("/user/register", {
        name,
        email,
        cpf,
        edv,
        cep,
        street,
        number,
        password,
        confirmPassword
      });
      console.log("Create register!");
      navigate("/");
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
          <p className={styles.p}>Cadastro</p>
        </div>

        <div className={styles.bluelabelinput1}>
          <div className={styles.ff}>
            <label className={styles.label} htmlFor="name">
              Nome
            </label>
            <Form.Floating className="mb-3">
              <Form.Control
                className={styles.a}
                id="name"
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Floating>
          </div>
        </div>

        <div className={styles.bluelabelinput2}>
          <div className={styles.ff}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <Form.Floating className="mb-3">
              <Form.Control
                className={styles.a}
                id="email"
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Floating>
          </div>
        </div>

        <div className={styles.bluelabelinput2}>
          <div className={styles.ff}>
            <label className={styles.label} htmlFor="cpf">
              CPF
            </label>
            <Form.Floating className="mb-3">
              <Form.Control
                className={styles.a}
                id="cpf"
                type="text"
                placeholder="Digite seu CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </Form.Floating>
          </div>
        </div>

        <div className={styles.bluelabelinput2}>
          <div className={styles.ff}>
            <label className={styles.label} htmlFor="edv">
              EDV
            </label>
            <Form.Floating className="mb-3">
              <Form.Control
                className={styles.a}
                id="edv"
                type="text"
                placeholder="Digite seu EDV"
                value={edv}
                onChange={(e) => setEdv(e.target.value)}
              />
            </Form.Floating>
          </div>
        </div>

        <div className={styles.inlineInputs}>
          <div className={styles.bluelabelinput3}>
            <div className={styles.ff}>
              <label className={styles.label1} htmlFor="cep">
                CEP
              </label>
              <Form.Floating className="mb-3">
                <Form.Control
                  className={styles.a}
                  id="cep"
                  type="text"
                  placeholder="Digite seu CEP"
                  value={cep}
                  onChange={(e) => {
                    setCep(e.target.value);
                  }}
                  onBlur={handleBlur}
                />
              </Form.Floating>
            </div>
          </div>

          <div className={styles.bluelabelinput3}>
            <div className={styles.ff}>
              <label className={styles.label} htmlFor="numero">
                Numero
              </label>
              <Form.Floating className="mb-3">
                <Form.Control
                  className={styles.a}
                  id="number"
                  type="text"
                  placeholder="Digite seu número"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Form.Floating>
            </div>
          </div>
        </div>

          <div className={styles.bluelabelinput5}>
            <div className={styles.ff}>
              <label className={styles.label} htmlFor="rua">
                Rua
              </label>
              <Form.Floating className="mb-3">
                <Form.Control
                  className={styles.a}
                  id="street"
                  type="text"
                  placeholder="Digite sua rua"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </Form.Floating>
            </div>
          </div>

        <div className={styles.inlineInputs}>
        <div className={styles.bluelabelinput3}>
          <div className={styles.ff}>
            <label className={styles.label} htmlFor="senha">
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

        <div className={styles.bluelabelinput3}>
          <div className={styles.ff}>
            <label className={styles.label} htmlFor="senha">
              Confirme sua senha
            </label>
            <Form.Floating className="mb-3">
              <Form.Control
                className={styles.a}
                id="confirmPassword"
                type="password"
                placeholder="Digite sua senha novamente"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Floating>
          </div>
        </div>
        </div>


        <Button className={styles.red} onClick={handleSubmit}>Entrar</Button>
        <Link to="/" className={styles.linka}>
          <Button className={styles.link}>Login</Button>
        </Link>
      </div>
    </div>
  );
}

export default CadastroComponents;
