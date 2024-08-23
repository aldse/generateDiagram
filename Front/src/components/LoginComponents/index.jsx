import styles from "./styles.module.scss";
import roberto from "../../assets/Roberto.png";
import logo from "../../assets/label bosch 3.png";
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { generateDiagram } from "../../api/genereateDiagram";
import AlertComponents from "../AlertComponents";
import LogoComponents from "../LogoComponents";
import { Eye, EyeSlash } from "react-bootstrap-icons";

function LoginComponents() {
  const [loading, setLoading] = useState(false);
  const [edv, setEdv] = useState("");
  const [password, setPassword] = useState({
    password: "",
    showPassword: false,
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const alertRef = useRef();

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
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

    try {
        console.log("Iniciou");
        const response = await generateDiagram.post("/user/login", {
            edv,
            password: password.password,
        });
        const data = response.data;
        console.log("DATA:", data);

        if (data && data.token) {
            login(data.token);
        } else {
            console.error("Token não encontrado na resposta da API.");
            if (alertRef.current) {
                alertRef.current.addAlert(
                    "Informações inválidas",
                    "Informações inválidas",
                    "Usuário ou senha não coincidem."
                );
            }
        }
    } catch (error) {
        console.error("Erro ao chamar a API:", error);
        if (alertRef.current) {
            alertRef.current.addAlert(
                "Informações inválidas",
                "Informações inválidas",
                "Usuário ou senha não coincidem."
            );
        }
    } finally {
       
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
            <div className={styles.rowneles}>
              <Form.Floating>
                <Form.Control
                  className={styles.a2}
                  id="password"
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Digite sua senha"
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
                {isPasswordVisible ? <EyeSlash size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className={styles.container2} onClick={handleSubmit}>
            <LogoComponents />
          </div>
        ) : (
          <Button
            variant="contained"
            color="primary"
            className={styles.red}
            onClick={loading ? handleButtonClick : handleSubmit}
          >
            Entrar
          </Button>
        )}
        <Link to="/cadastro" className={styles.linka}>
          <Button className={styles.link}>Cadastre-se aqui</Button>
        </Link>
      </div>
    </div>
  );
}

export default LoginComponents;
