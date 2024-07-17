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

  const [values, setPassword] = React.useState({
    password: "",
    showPassword: false,
  });
  
  const [valuesconfirm, setConfirmPassword] = React.useState({
    confirmpassword: "",
    showconfirmPassword: false,
  });

  const handleClickShowPassword = () => {
    setPassword({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setPassword({ ...values, [prop]: event.target.value });
  };

  const handleClickShowconfirmPassword = () => {
    setConfirmPassword({ ...valuesconfirm, showconfirmPassword: !valuesconfirm.showconfirmPassword });
  };
  
  const handleMouseDownconfirmPassword = (event) => {
    event.preventDefault();
  };
  
  const handleconfirmPasswordChange = (prop) => (event) => {
    setConfirmPassword({ ...valuesconfirm, [prop]: event.target.value });
  };

  const navigate = useNavigate();

  const sucesso = () => toast.success("Usuário cadastrado com sucesso");
  const alertsenhadif = () => toast.warn("As senhas não foram inseridas iguais!");
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alertsenhadif();
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
        confirmPassword,
      });
      console.log("Create register!");
      sucesso();
      navigate("/");
    } catch (error) {
      naocadastrado();
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

              <Input
                  className={styles.a}
                  // id="password"
                  type={values.showPassword ? "text" : "password"}
                  onChange={handlePasswordChange("password")}
                  // onChange={(e) => handlePasswordChange(e.target.value)}
                  placeholder="Digite sua senha"
                  value={values.password}
                  endAdornment={
                    <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
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
                  // id="password"
                  type={valuesconfirm.showconfirmPassword ? "text" : "confirmpassword"}
                  onChange={handleconfirmPasswordChange("confirmpassword")}
                  // onChange={(e) => handleconfirmPasswordChange(e.target.value)}
                  placeholder="Digite sua senha"
                  value={valuesconfirm.confirmpassword}
                  endAdornment={
                    <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowconfirmPassword}
                      onMouseDown={handleMouseDownconfirmPassword}
                    >
                      {valuesconfirm.showconfirmPassword ? <Visibility /> : <VisibilityOff />}
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
