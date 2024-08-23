import React, { useCallback, useState, useRef, useEffect } from "react";
import { Image } from "react-bootstrap";
import styles from "./styles.module.scss";
import bosch from "../../assets/bosch.png";
import ajuda from "../../assets/help.png";
import perfil from "../../assets/menu.png";
import butaogeraraqui from "../../assets/geraraqui.png";
import adicionar from "../../assets/adicionar.png";
import BaseModalWrapper from "../SettingsComponents/BaseModalWrapper";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

function AddArqComponents() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      console.log(file);

      try {
        const result = await fetch("https://httpbin.org/post", {
          method: "POST",
          body: formData,
        });

        const data = await result.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  useEffect(() => {
    const container = document.getElementById('scrollContainer');
    if (container) {
      container.classList.add(styles.noScroll);
    }

    return () => {
      if (container) {
        container.classList.remove(styles.noScroll);
      }
    };
  }, []);

  return (
    <>
    <div id="scrollContainer" className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.roundedpolygon}>
          <div className={styles.svgTopLeft}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="260%"
              height="auto"
              viewBox="0 0 794 614"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <radialGradient
                  id="grad1"
                  cx="50%"
                  cy="50%"
                  r="50%"
                  fx="50%"
                  fy="50%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "rgba(61,124,236,1)", stopOpacity: 1 }}
                  />
                  <stop
                    offset="60%"
                    style={{ stopColor: "rgba(38,72,235,1)", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgba(75,95,236,1)", stopOpacity: 1 }}
                  />
                </radialGradient>
                <clipPath id="blobClip">
                  <path d="M 150,50 C 180,40 250,60 210,150 C 180,220 100,150 90,120 C 80,80 150,50 150,50 Z" />
                </clipPath>
              </defs>

              <g
                transform="translate(0, 614) scale(0.1, -0.1)"
                fill="url(#grad1)"
                stroke="none"
              >
                <path
                  d="M0 4515 c0 -1433 2 -1626 15 -1631 8 -4 12 -10 9 -15 -3 -5 -1 -9 4
            -9 6 0 23 -20 39 -45 15 -25 31 -45 34 -45 4 0 19 -19 34 -42 26 -39 48 -66
            97 -118 9 -10 14 -21 11 -24 -4 -3 -1 -6 5 -6 14 0 73 -56 66 -63 -3 -3 4 -8
            15 -12 12 -3 21 -11 21 -16 0 -12 49 -59 61 -59 5 0 9 -7 9 -15 0 -8 4 -15 10
            -15 5 0 31 -20 57 -45 75 -69 82 -75 108 -87 14 -6 25 -15 25 -20 0 -4 16 -16
            35 -25 19 -9 32 -19 30 -23 -2 -4 16 -16 40 -28 25 -12 45 -26 45 -30 0 -5 19
            -17 42 -27 24 -10 52 -27 64 -37 28 -25 399 -178 430 -178 14 0 34 -5 45 -11
            23 -12 126 -32 224 -44 47 -5 113 -13 170 -20 22 -3 47 -6 55 -6 8 -1 42 -5
            75 -10 83 -14 104 -17 152 -23 24 -3 59 -12 78 -20 20 -9 41 -13 48 -10 8 3
            36 -5 63 -17 27 -11 60 -21 74 -21 40 0 585 -224 599 -247 3 -4 35 -23 71 -41
            36 -18 67 -36 70 -40 3 -4 29 -19 57 -34 29 -14 53 -30 53 -35 0 -5 15 -14 34
            -21 18 -6 41 -19 50 -29 9 -10 34 -26 56 -36 22 -10 40 -22 40 -27 0 -4 20
            -18 45 -30 24 -12 42 -25 40 -29 -3 -3 18 -16 45 -28 28 -12 50 -25 50 -30 0
            -4 23 -18 50 -31 27 -13 50 -27 50 -31 0 -5 40 -27 90 -50 50 -23 90 -45 90
            -49 0 -11 129 -61 165 -65 17 -1 48 -10 70 -19 36 -16 57 -20 155 -31 96 -11
            268 -4 329 14 19 6 37 8 41 6 4 -3 27 2 49 10 23 8 52 16 64 17 12 2 28 7 35
            11 6 5 12 6 12 3 0 -13 320 111 332 128 4 6 8 7 8 3 0 -4 17 4 37 18 21 14
            43 25 50 25 7 0 13 5 13 11 0 5 5 7 10 4 6 -3 10 -1 10 5 0 6 16 18 35 26
            19 8 35 19 35 26 0 6 3 9 6 5 5 -5 35 16 76 55 10 10 18 16 18 13 0 -3 13
            8 30 25 16 16 32 30 35 30 9 0 65 63 65 73 0 4 5 5 10 2 6 -3 10 -2 10 4 0
            9 14 27 70 91 62 72 102 131 145 220 20 41 40 77 44 80 13 9 92 201 86 210
            -3 5 4 33 15 62 12 29 23 71 26 92 3 22 10 48 15 58 5 10 7 23 4 28 -4 6
            -2 25 4 43 10 32 20 111 27 222 2 33 4 65 5 70 0 6 0 26 0 45 -1 19 0 42
            0 50 1 19 -10 154 -16 195 -3 17 -7 52 -10 78 -3 27 -7 52 -9 55 -2 4 -7
            25 -10 47 -4 22 -13 60 -21 85 -8 25 -16 58 -19 73 -10 59 -93 268 -109 275
            -4 2 -5 8 -1 13 3 5 0 9 -5 9 -6 0 -11 6 -11 13 0 7 -11 29 -25 48 -13 20
            -21 39 -18 43 4 3 1 6 -5 6 -7 0 -12 6 -12 13 0 7 -9 23 -20 35 -12 12 -18
            22 -15 22 3 0 -3 10 -15 22 -11 12 -20 28 -20 35 0 7 -5 13 -10 13 -6 0
            -16 12 -23 28 -6 15 -24 39 -39 54 -15 14 -24 29 -21 32 4 3 1 6 -5 6 -7
            0 -12 6 -12 14 0 8 -7 17 -16 20 -9 4 -14 9 -11 12 3 3 -9 20 -26 39 -18
            18 -57 61 -87 95 -30 34 -78 86 -107 115 -28 30 -49 56 -45 59 3 3 1 6 -5
            6 -6 0 -72 61 -148 135 -75 74 -141 135 -147 135 -5 0 -7 4 -4 8 3 5 -6
            15 -19 22 -13 7 -22 17 -20 21 3 4 -4 10 -15 14 -11 3 -20 9 -20 13 0 4
            -30 39 -67 78 -78 82 -113 122 -113 129 0 3 -8 13 -18 23 -32 35 -52 62
            -52 72 0 6 -4 10 -10 10 -5 0 -10 7 -10 15 0 8 -4 15 -10 15 -5 0 -10 5
            -10 12 0 6 -13 32 -29 57 -54 85 -109 256 -126 386 -24 194 -24 656 1
            696 2 4 7 37 10 73 l5 66 -2186 0 -2185 0 0 -1625z"
                />
              </g>
            </svg>
          </div>

          <div className={styles.svgTopRight}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
               width="200%"
              height="auto"
              viewBox="0 0 398.000000 333.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,333.000000) scale(0.100000,-0.100000)"
                fill="url(#grad1)"
                stroke="none"
              >
                <path
                  d="M912 4163 c-251 -249 -506 -548 -636 -747 -124 -188 -213 -403 -251
              -606 -29 -149 -25 -371 8 -531 57 -272 175 -523 395 -839 507 -726 1267 -1241
              2048 -1385 443 -82 903 -45 1371 111 502 166 851 431 1079 816 l54 92 0 1628
              0 1628 -1950 0 -1950 0 -168 -167z"
                />
              </g>
            </svg>
          </div>

          <div className={styles.svgBottomCenter}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="300%"
              height="auto"
              viewBox="0 0 815.000000 406.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,466.000000) scale(0.100000,-0.100000)"
                fill="url(#grad1)"
                stroke="none"
              >
                <path
                  d="M3581 4058 c-383 -40 -705 -307 -944 -784 -304 -606 -497 -1683 -514
-2871 l-6 -403 2796 0 2797 0 -6 33 c-52 304 -132 544 -280 838 -277 553 -769
1182 -1436 1834 -887 868 -1594 1307 -2182 1354 -66 6 -128 9 -136 8 -8 -1
-48 -5 -89 -9z"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className={styles.centerimg}>
          <Image src={bosch} className={styles.im} alt="Logo cima" />
        </div>
        <Link to="/landingpage">
          <Image src={ajuda} className={styles.ajuda} alt="ajuda" />
        </Link>
      </div>
      <div className={styles.butao}>
        <Button className={styles.vem} onClick={toggleModal}>
          <Image src={perfil} className={styles.perfil} alt="Perfil" />
        </Button>
        <BaseModalWrapper
          isModalVisible={isModalVisible}
          onBackdropClick={toggleModal}
        />
      </div>
      <div className={styles.container2}>
        <div className={styles.alinharpracima}>
          <p className={styles.gereseu}>GERE SEU</p>
          <p className={styles.diagrama}>DIAGRAMA</p>
          <p className={styles.conteudo}>
            Faça UPLOAD ou arraste e solte os arquivos necessários na área
            designada abaixo.
          </p>

          <div className={styles.adicionararea}>
            <input
              ref={fileInputRef}
              id="file"
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <Image
              src={adicionar}
              className={styles.adicionar}
              alt="adicionar"
              onClick={handleImageClick}
            />
          </div>

          <div className={styles.hov}>
            <a href="#" onClick={handleUpload}>
              <Image
                src={butaogeraraqui}
                className={styles.image}
                alt="botão"
              />
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default AddArqComponents;
