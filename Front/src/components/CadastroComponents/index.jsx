import styles from "./styles.module.scss";
import roberto from "../../assets/Roberto.png";
import logo from "../../assets/label bosch 3.png";
import { Image } from "react-bootstrap";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { generateDiagram } from "../../api/genereateDiagram";
import { useNavigate } from "react-router-dom";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import AlertComponents from "../AlertComponents";
import LogoComponents from "../LogoComponents";

function CadastroComponents() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [edv, setEdv] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const alertRef = useRef();

  const [password, setPassword] = useState({
    password: "",
    showPassword: false,
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [confpassword, setConfPassword] = useState({
    confpassword: "",
    showConfPassword: false,
  });
  const [isConfPasswordVisible, setIsConfPasswordVisible] = useState(false);

  const toggleConfPasswordVisibility = () => {
    setIsConfPasswordVisible(!isConfPasswordVisible);
  };

  const navigate = useNavigate();

  const fetchAddressByCep = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;

      if (!data.erro) {
        setStreet(data.logradouro);
      } else {
        if (alertRef.current) {
          alertRef.current.addAlert('Informações inválidas', 'Informações inválidas', 'CEP não encontrado. Verifique o CEP informado.');
        }
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

  const isValidFullName = (name) => {
    if (name.trim() === "") {
      return false;
    }

    const parts = name.trim().split(" ");
    return parts.length >= 2;
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };


  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!loading) {
      setLoading(true);
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (!isValidFullName(name)) {
      if (alertRef.current) {
        alertRef.current.addAlert( 'Por favor, insira um nome completo válido (nome e sobrenome).', 'Nome Completo Inválido', 'Por favor, insira um nome completo válido (nome e sobrenome).');
      }
      return;
    }

    if (!cpf || !/^\d{11}$/.test(cpf)) {
      if (alertRef.current) {
          alertRef.current.addAlert('Insira o CPF', 'Insira o CPF', 'Insira um CPF válido, contendo exatamente 11 dígitos sem contar pontuações e traços.');
      }
      return;
  }
    if (edv == "") {
      if (alertRef.current) {
        alertRef.current.addAlert('Insira o EDV', 'Insira o EDV', 'Insira um EDV válido');
      }
      return;
    }

    if (!cep || !/^\d{8}$/.test(cep)) {
      if (alertRef.current) {
          alertRef.current.addAlert(
              'CEP inválido',
              'CEP inválido',
              'Insira um CEP válido contendo exatamente 8 dígitos numéricos.'
          );
      }
      return;
  }

    if (!validateEmail(email)) {
      if (alertRef.current) {
        alertRef.current.addAlert( 'Por favor, insira um email válido.', 'Por favor, insira um email válido.', 'O email fornecido não é válido, seu formato deve ter (@) ou (.com), exemplo (teste@teste.com)');
      }
      return;
    }

    if (number.length < 1) {
      if (alertRef.current) {
        alertRef.current.addAlert('Insira um número válido', 'Insira um número válido', 'O número da casa é necessário.');
      }
      return;
    }

    if (password.password.length < 8) {
      if (alertRef.current) {
        alertRef.current.addAlert('Senha menor que 8 digitos, NÃO!', 'Senha menor que 8 dígitos, NÃO!', 'A senha deve ter pelo menos 8 dígitos.');
      }
      return;
    }

    if (password.password !== confpassword.confpassword) {
      if (alertRef.current) {
        alertRef.current.addAlert('As senhas não foram inseridas iguais!', 'As senhas não foram inseridas iguais!', 'As senhas devem ser iguais.');
      }
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
        confirmPassword: confpassword.confpassword,
      });

      if (alertRef.current) {
        alertRef.current.addAlert('Usuário cadastrado com sucesso', 'Usuário cadastrado com sucesso', 'Você foi cadastrado, seja bem vindo.');
      }
      console.log("Usuário registrado com sucesso!");

      setTimeout(() => {
        navigate("/");
    }, 2000);

    } catch (error) {
      if (error.response) {
        console.error("Erro ao chamar a API:", error.response.data);
        if (alertRef.current) {
          alertRef.current.addAlert('Informações inválidas', 'Informações inválidas', 'Não foi possível realizar o cadastro. Tente novamente.');
        }
      } else if (error.request) {
        console.error("Erro na requisição:", error.request);
      } else {
        console.error("Erro inesperado:", error.message);
      }
    }
  };

  return (
    <div className={styles.container}>
      <AlertComponents ref={alertRef} />
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
                Número
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
            <label className={styles.label2} htmlFor="rua">
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
              <div className={styles.rowneles}>
                <Form.Floating>
                  <Form.Control
                    className={styles.a}
                    id="password"
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Senha"
                    value={password.password}
                    onChange={(e) =>
                      setPassword({ ...password, password: e.target.value })
                    }
                  />
                </Form.Floating>
                <button
                  type="button"
                  className={styles.btn2}
                  onClick={togglePasswordVisibility}
                  style={{ background: "none", border: "none" }}
                >
                  {isPasswordVisible ? (
                    <EyeSlash size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className={styles.bluelabelinput3}>
            <div className={styles.ff}>
              <label className={styles.label} htmlFor="senha">
                Confirme sua senha
              </label>
              <div className={styles.rowneles}>
                <Form.Floating>
                  <Form.Control
                    className={styles.a}
                    id="confpassword"
                    type={isConfPasswordVisible ? "text" : "password"}
                    placeholder="Confirme senha"
                    value={confpassword.confpassword}
                    onChange={(e) =>
                      setConfPassword({ ...confpassword, confpassword: e.target.value })
                    }
                  />
                </Form.Floating>
                <button
                  type="button"
                  className={styles.btn2}
                  onClick={toggleConfPasswordVisibility}
                  style={{ background: "none", border: "none" }}
                >
                  {isConfPasswordVisible ? (
                    <EyeSlash size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className={styles.container2} onClick={handleSubmit}>
            <LogoComponents />
          </div>
        ) : (
        <Button className={styles.red} onClick={loading ? handleButtonClick : handleSubmit}>
          Entrar
        </Button>
         )}
        <Link to="/" className={styles.linka}>
          <Button className={styles.link}>Login</Button>
        </Link>
      </div>
    </div>
  );
}

export default CadastroComponents;
