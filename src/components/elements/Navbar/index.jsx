import styles from "./styles.module.scss";

import Button from "../Button";

import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import DropdownWithImages from "../Dropdown/index";
import flagEN from "../../../assets/estadosunidosbandeira.png";
import flagPT from "../../../assets/brasilbandeira.png";
import Translate from "../../TranslateComponents/index";

import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const selectedLang = localStorage.getItem("selectedLanguage");
  if (selectedLang) {
    localStorage.setItem("translate", JSON.parse(selectedLang).code);
  }

  const options = [
    { name: "Inglês", image: flagEN, code: "eng" },
    { name: "Português", image: flagPT, code: "pt" },
  ];

  const handleLanguageChange = (option) => {
    localStorage.setItem("selectedLanguage", JSON.stringify(option));
    localStorage.setItem("translate", option.code);
    navigate("/");
  };

  const translate = localStorage.getItem("translate") || "eng";
  const selectedLanguage =
    options.find((option) => option.code === translate) || options[0];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const width = windowWidth < 810 ? "16.8793vw" : "7.12094vw";
  const height = windowWidth < 810 ? "4.30507vw" : "1.8162vw";

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__left_content}>
        <div className={styles.navbar__text}>PYDIAGRAM</div>
      </div>

      <div className={styles.navbar__right_content}>
        <Button
          text={Translate.getText("buttonLogin", translate)}
          width={width}
          height={height}
          theme={"dark"}
        />

        <DropdownWithImages
          options={options}
          selectedOption={selectedLanguage}
          onSelect={handleLanguageChange}
          className={styles.hoverBandeiras}
        />
      </div>
    </div>
  );
};

export default Navbar;
