import styles from "./styles.module.scss";
import roberto from "../../assets/Roberto.png";
import logo from "../../assets/label bosch.png";
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { generateDiagram } from "../../api/genereateDiagram";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
  
function LoginComponents() {
  const [edv, setEdv] = useState("");
  // const [password, setPassword] = useState("");
  const [password, setPassword] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const notify = () => toast.error('Usuário ou senha incorretos');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await generateDiagram.post("/user/login", {
        edv,
        password:password.password,
      });
      const data = response.data;
      
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      // login(data.token);
      console.log("Login successful!");
      navigate("/home");
    } catch (error) {
      console.error("Erro ao chamar a API:", error);
      notify();
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
            <Input
                  className={styles.a}
                  // id="password"
                  type={password.showPassword ? "text" : "password"}
                  onChange={(e) => setPassword({ ...password, password: e.target.value })}
                  // onChange={(e) => handlePasswordChange(e.target.value)}
                  // onChange={handlePasswordChange("password")}
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
        <Button className={styles.red} onClick={handleSubmit}>
          Entrar
        </Button>
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
        <Link to="/cadastro" className={styles.linka}>
          <Button className={styles.link}>Cadastre-se aqui</Button>
        </Link>
      </div>
    </div>
  );
}

export default LoginComponents;
