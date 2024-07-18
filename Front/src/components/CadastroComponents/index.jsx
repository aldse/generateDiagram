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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

function CadastroComponents() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [edv, setEdv] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");

  const [password, setPassword] = React.useState({
    password: "",
    showPassword: false,
  });
  
  const [confirmPassword, setConfirmPassword] = React.useState({
    confirmPassword: "",
    showconfirmPassword: false,
  });

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handleClickShowconfirmPassword = () => {
    setConfirmPassword({ ...confirmPassword, showconfirmPassword: !confirmPassword.showconfirmPassword });
  };
  
  const handleMouseDownconfirmPassword = (event) => {
    event.preventDefault();
  };
  

  const navigate = useNavigate();

  const sucesso = () => toast.success("Usuário cadastrado com sucesso");
  const nomecompleto = () => toast.warn("Por favor, insira um nome completo válido (nome e sobrenome).");
  const emailcompleto = () => toast.warn("Por favor, insira um email válido.");
  const numerocasa = () => toast.warn("Insira um número válido");
  const alertsenhadif = () => toast.warn("As senhas não foram inseridas iguais!");
  const alertsenhapequena = () => toast.warn("Senha menor que 8 digitos, NÃO!");
  const alertcepnencont = () => toast.warn("CEP não encontrado. Verifique o CEP informado.");
  const naocadastrado = () => toast.error("Informações inválidas");
  const fetchAddressByCep = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;

      if (!data.erro) {
        setStreet(data.logradouro);
      } else {
        alertcepnencont();
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

  const isValidFullName = (Name) => {
    if (Name.trim() === "") {
      return false; 
    }
  
    const parts = Name.trim().split(" ");
    return parts.length >= 2; 
  };

  function validateEmail(Email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValidFullName(name)) {
      nomecompleto();
      return;
    }

    if (!validateEmail(email)) {
      emailcompleto();
      return;
    }

    if (password.password.length < 8) {
      alertsenhapequena();
      return;
    }

    if (password.password !== confirmPassword.confirmPassword) {
      alertsenhadif();
      return;
    }

    if (number.length < 1) {
      numerocasa();
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
        password: password.password,
        confirmPassword: confirmPassword.confirmPassword 
      });

      console.log("Usuário registrado com sucesso!");
      sucesso();
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.error("Erro ao chamar a API:", error.response.data);
        naocadastrado(); 
      } else if (error.request) {
        console.error("Erro na requisição:", error.request);
      } else {
        console.error("Erro inesperado:", error.message);
      }
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
              Nome Completo
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

              <Input
                  className={styles.a}
                  type={password.showPassword ? "text" : "password"}
                  onChange={(e) => setPassword({ ...password, password: e.target.value })}
                  placeholder="Digite sua senha"
                  value={password.password}
                  endAdornment={
                    <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {password.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                />

            </div>
          </div>

          <div className={styles.bluelabelinput3}>
            <div className={styles.ff}>
              <label className={styles.label} htmlFor="senha">
                Confirme sua senha
              </label>
              <Input
                  className={styles.a}
                  type={confirmPassword.showconfirmPassword ? "text" : "password"}
                  onChange={(e) => setConfirmPassword({ ...confirmPassword, confirmPassword: e.target.value })}
                  placeholder="Digite sua senha"
                  value={confirmPassword.confirmPassword}
                  endAdornment={
                    <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowconfirmPassword}
                      onMouseDown={handleMouseDownconfirmPassword}
                    >
                      {confirmPassword.showconfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                />
            </div>
          </div>
        </div>

        <Button className={styles.red} onClick={handleSubmit}>
          Entrar
        </Button>
        <Link to="/" className={styles.linka}>
          <Button className={styles.link}>Login</Button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition:Bounce
          />
        </Link>
      </div>
    </div>
  );
}

export default CadastroComponents;
