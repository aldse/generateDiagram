import styles from "./styles.module.scss";

import Button from "../Button";

import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import DropdownWithImages from "../../../DropdownComponents/index";
import flagEN from "../../../../assets/estadosunidosbandeira.png";
import flagES from "../../../../assets/espanhabandeira.png";
import flagPT from "../../../../assets/brasilbandeira.png";
import Translate from "../../../TranslateComponents/index";

const Navbar = () => {
  const navigate = useNavigate();
  const selectedLang = localStorage.getItem("selectedLanguage");
  if (selectedLang) {
    localStorage.setItem("translate", JSON.parse(selectedLang).code);
  }

  const options = [
    { name: "Inglês", image: flagEN, code: "eng" },
    { name: "Espanhol", image: flagES, code: "es" },
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
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__left_content}>
        <div className={styles.navbar__text}>PYDIAGRAM</div>
      </div>

      <div className={styles.navbar__right_content}>
        <Button
          text={Translate.getText("buttonLogin", translate)}
          width={"8.54513rem"}
          height={"2.17944rem"}
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
