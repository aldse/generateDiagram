import styles from "./styles.module.scss";
import roberto from "../../assets/Roberto.png";
import logo from "../../assets/label bosch.png";
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { generateDiagram } from "../../api/genereateDiagram";

function LoginComponents() {
  const [isFilled, setIsFilled] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFilled(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef();
  const [edv, setEdv] = useState("");
  const [password, setPassword] = React.useState({
    password: "",
    showPassword: false,
  });
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const notify = () => toast.error("Usuário ou senha incorretos");

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

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
      timer.current = window.setTimeout(() => {
        setLoading(false);
      }, 2000);
    }

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

        {loading ? (
          <div className={styles.container2} onClick={handleButtonClick}>
            <div className="loader-container">
              <div className={styles.loader}>
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="225.000000pt"
                  height="225.000000pt"
                  viewBox="0 0 225.000000 225.000000"
                  preserveAspectRatio="xMidYMid meet"
                  className={styles["svg-fill"]}
                >
                  <g
                    transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path
                      className={isFilled ? styles["path-animation"] : ""}
                      d="M975 2239 c-366 -46 -713 -302 -870 -642 -136 -294 -136 -650 0 -944 103 -224 306 -430 529 -538 557 -270 1232 -36 1501 520 181 372 140 825 -103 1151 -251 337 -643 504 -1057 453z m250 -99 c175 -20 318 -71 456 -161 364 -239 540 -684 434 -1101 -80 -318 -324 -591 -627 -705 -127 -48 -223 -65 -363 -65 -140 0 -236 17 -363 65 -477 179 -755 710 -627 1202 107 411 456 715 876 764 105 12 114 12 214 1z"
                      style={{
                        strokeDasharray: isFilled ? "1000" : "0",
                        strokeDashoffset: isFilled ? "1000" : "0",
                      }}
                    />
                    <path
                      className={isFilled ? styles["path-animation"] : ""}
                      d="M611 1790 c-210 -166 -325 -402 -325 -665 0 -262 116 -500 325 -665 40 -31 59 -40 90 -40 l39 0 0 195 0 195 385 0 385 0 0 -195 0 -195 39 0 c31 0 50 9 90 40 434 343 435 986 2 1328 -42 33 -61 42 -92 42 l-39 0 0 -195 0 -195 -385 0 -385 0 0 195 0 195 -39 0 c-31 0 -50 -9 -90 -40z m19 -667 l0 -547 -31 30 c-83 78 -166 227 -195 352 -21 87 -21 247 0 334 19 81 62 179 107 245 32 45 107 133 115 133 2 0 4 -246 4 -547z m1129 379 c65 -110 93 -208 99 -344 5 -140 -12 -229 -64 -339 -38 -79 -106 -179 -148 -218 l -26 -24 0 549 1 549 49 -53 c28 -29 68 -83 89 -120z m-249 -377 l0 -215 -385 0 -385 0 0 215 0 215 385 0 385 0 0 -215z"
                      style={{
                        strokeDasharray: isFilled ? "1000" : "0",
                        strokeDashoffset: isFilled ? "1000" : "0",
                      }}
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <Button
            variant="contained"
            color="primary"
            className={styles.red}
            onClick={handleSubmit}
          >
            Entrar
          </Button>
        )}
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
