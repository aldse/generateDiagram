import styles from "./styles.module.scss";
import roberto from "../../assets/Roberto.png";
import logo from "../../assets/label bosch.png";
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import clsx from 'clsx';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/authContext";
import { generateDiagram } from "../../api/genereateDiagram";
// import { red } from '@material-ui/core/colors';  
// import CircularProgress from '@material-ui/core/CircularProgress';
// import { makeStyles } from '@material-ui/core/styles';
// import IconButton from "@material-ui/core/IconButton";
// import Visibility from "@material-ui/icons/Visibility";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import Input from "@material-ui/core/Input";

// const useStyles = makeStyles((theme) => ({
//   buttonError: {
//     backgroundColor: red[500], 
//     '&:hover': {
//       backgroundColor: red[700],  
//     },
//   },
//   buttonSuccess: {
//     backgroundColor: red[500],  
//     '&:hover': {
//       backgroundColor: red[700],
//     },
//   },
// }));

function LoginComponents() {
  // const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  const [edv, setEdv] = useState("");
  const [password, setPassword] = React.useState({
    password: "",
    showPassword: false,
  });
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const notify = () => toast.error('Usuário ou senha incorretos');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }

    try {
      console.log("Iniciou")
      const response = await generateDiagram.post("/user/login", {
        edv,
        password: password.password,
      });
      const data = response.data;
      console.log("DATA:", data)

      if (data && data.token) {
        login(data.token);
      } else {
        console.error("Token não encontrado na resposta da API.");
        notify();
      }
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
            {/* <Input
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
            /> */}
            
          </div>
        </div>
        <Button
          variant="contained"
          color="primary"
          // className={clsx(styles.red, {
          //   [classes.buttonSuccess]: success,
          //   [classes.buttonError]: !success && !loading,
          // })}
          disabled={loading}
          onClick={handleSubmit}
        >
          {/* {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            'Entrar'
          )} */}
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
          transition="Bounce"
        />
        <Link to="/cadastro" className={styles.linka}>
          <Button className={styles.link}>Cadastre-se aqui</Button>
        </Link>
      </div>
    </div>
  );
}

export default LoginComponents;
